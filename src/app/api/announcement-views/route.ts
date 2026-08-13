import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const READER_COOKIE = 'gh-reader-id';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const NOTICE_IDS = [
  'goldhouse-investment-warning-20260813',
  'ucard-first-week-invite-reward-20260810',
  'gold-house-2-release-20260802',
  'ios-version-update-20260731',
  'ucard-refund-completion-20260730',
  'ios-testflight-migration-20260729',
  'ucard-fee-subsidy-202607',
  'ucard-upgrade-202607',
] as const;
const NOTICE_ID_SET = new Set<string>(NOTICE_IDS);
const RECORD_VIEW_SCRIPT = `
local added = redis.call('SADD', KEYS[1], ARGV[1])
if added == 1 then
  return redis.call('INCR', KEYS[2])
end
local count = redis.call('GET', KEYS[2])
if count then
  return tonumber(count)
end
local actual = redis.call('SCARD', KEYS[1])
redis.call('SET', KEYS[2], actual)
return actual
`;

type RedisResult<T> = {
  result?: T;
  error?: string;
};

function getRedisConfig() {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    throw new Error('Announcement view storage is not configured.');
  }

  return { url, token };
}

async function redisCommand<T>(command: Array<string | number>) {
  const { url, token } = getRedisConfig();
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command),
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Announcement view storage returned ${response.status}.`);
  }

  const payload = (await response.json()) as RedisResult<T>;
  if (payload.error || payload.result === undefined) {
    throw new Error(payload.error ?? 'Announcement view storage returned no result.');
  }

  return payload.result;
}

function viewKey(noticeId: string) {
  return `goldhouse:announcement:views:${noticeId}`;
}

function readerKey(noticeId: string) {
  return `goldhouse:announcement:readers:${noticeId}`;
}

function isNoticeId(value: unknown): value is string {
  return typeof value === 'string' && NOTICE_ID_SET.has(value);
}

function isReaderId(value: string | undefined) {
  return Boolean(value && /^[a-zA-Z0-9_-]{16,128}$/.test(value));
}

function noStoreJson(body: unknown, init?: { status?: number }) {
  return NextResponse.json(body, {
    ...init,
    headers: {
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}

export async function GET() {
  try {
    const values = await redisCommand<Array<string | number | null>>([
      'MGET',
      ...NOTICE_IDS.map(viewKey),
    ]);
    const counts = Object.fromEntries(
      NOTICE_IDS.map((noticeId, index) => [noticeId, Number(values[index] ?? 0)]),
    );
    return noStoreJson({ counts });
  } catch (error) {
    console.error('Unable to read announcement view count.', error);
    return noStoreJson({ error: 'View count is temporarily unavailable.' }, { status: 503 });
  }
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return noStoreJson({ error: 'Invalid request body.' }, { status: 400 });
  }

  const noticeId = (body as { id?: unknown })?.id;
  if (!isNoticeId(noticeId)) {
    return noStoreJson({ error: 'Invalid announcement id.' }, { status: 400 });
  }

  const cookieStore = await cookies();
  const savedReaderId = cookieStore.get(READER_COOKIE)?.value;
  const readerId = isReaderId(savedReaderId) ? savedReaderId! : crypto.randomUUID();

  try {
    const count = await redisCommand<number>([
      'EVAL',
      RECORD_VIEW_SCRIPT,
      2,
      readerKey(noticeId),
      viewKey(noticeId),
      readerId,
    ]);
    const response = noStoreJson({ count });

    if (!isReaderId(savedReaderId)) {
      response.cookies.set(READER_COOKIE, readerId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: COOKIE_MAX_AGE,
      });
    }

    return response;
  } catch (error) {
    console.error('Unable to record announcement view.', error);
    return noStoreJson({ error: 'View count is temporarily unavailable.' }, { status: 503 });
  }
}
