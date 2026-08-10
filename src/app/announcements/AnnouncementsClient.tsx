'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useI18n } from '@/i18n/I18nProvider';

// Intrinsic size of the announcement posters shipped in /public/announcements.
const DEFAULT_POSTER_WIDTH = 941;
const DEFAULT_POSTER_HEIGHT = 1672;

function formatUtc8Timestamp(value: string) {
  return value.slice(0, 19).replace('T', ' ');
}

const categoryStyles: Record<string, { color: string; gradient: string }> = {
  feature: { color: '#FFC247', gradient: 'from-[#FFC247] to-[#FF8C00]' },
  improvement: { color: '#19B7FF', gradient: 'from-[#0A6CFF] to-[#19B7FF]' },
  fix: { color: '#7B4FFF', gradient: 'from-[#7B4FFF] to-[#0A6CFF]' },
};

export default function AnnouncementsClient() {
  const { dict } = useI18n();
  const a = dict.announcements;
  const [viewCounts, setViewCounts] = useState<Record<string, number>>({});
  const recordedNoticeIds = useRef(new Set<string>());

  useEffect(() => {
    let cancelled = false;

    fetch('/api/announcement-views', { cache: 'no-store' })
      .then(async (response) => {
        if (!response.ok) throw new Error('Unable to load announcement view counts.');
        return (await response.json()) as { counts?: unknown };
      })
      .then((payload) => {
        if (cancelled) return;
        if (payload.counts && typeof payload.counts === 'object') {
          setViewCounts(payload.counts as Record<string, number>);
        }
      })
      .catch(() => {
        // Keep the count placeholder when the service is temporarily unavailable.
      });

    return () => {
      cancelled = true;
    };
  }, [a.notices]);

  const recordNoticeView = useCallback(async (noticeId: string) => {
    if (recordedNoticeIds.current.has(noticeId)) return;
    recordedNoticeIds.current.add(noticeId);

    try {
      const response = await fetch('/api/announcement-views', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: noticeId }),
      });
      if (!response.ok) throw new Error('Unable to record announcement view.');
      const payload = (await response.json()) as { count?: unknown };
      if (typeof payload.count === 'number') {
        setViewCounts((current) => ({ ...current, [noticeId]: payload.count as number }));
      }
    } catch {
      recordedNoticeIds.current.delete(noticeId);
    }
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const noticeId = (entry.target as HTMLElement).dataset.noticeObserverId;
          if (noticeId) {
            observer.unobserve(entry.target);
            void recordNoticeView(noticeId);
          }
        });
      },
      { threshold: 0.7 },
    );

    const markers = document.querySelectorAll<HTMLElement>('[data-notice-observer-id]');
    markers.forEach((marker) => observer.observe(marker));
    return () => observer.disconnect();
  }, [a.notices, recordNoticeView]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#000D2B] pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A6CFF]/15 border border-[#0A6CFF]/30 text-[#19B7FF] text-xs font-semibold tracking-wider uppercase mb-6">
              {a.badge}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              {a.headingPart1} <span className="gradient-text-gold">{a.headingGold}</span>
            </h1>
            <p className="text-sm sm:text-base text-white/45 max-w-2xl leading-relaxed border-l-2 border-[#0A6CFF]/50 pl-4">
              {a.subtext}
            </p>
          </div>

          {/* Operational notices */}
          {a.notices.length > 0 && (
            <section id="notices" aria-label={a.noticesLabel} className="mb-12 scroll-mt-28 space-y-6">
              {a.notices.map((n) => (
                <article
                  key={n.id}
                  className="relative rounded-3xl p-6 sm:p-8 border border-[#FFC247]/30 bg-linear-to-br from-[#FFC247]/[0.10] via-[#FFC247]/[0.04] to-transparent backdrop-blur-xl shadow-[0_8px_40px_rgba(255,194,71,0.08)]"
                >
                  <div
                    data-notice-observer-id={n.id}
                    className="flex flex-wrap items-center gap-2.5 mb-4"
                  >
                    <span className="px-2.5 py-1 rounded-lg bg-linear-to-r from-[#FFC247] to-[#FF8C00] text-[#001A5C] text-xs font-bold tracking-wide">
                      {a.noticesLabel}
                    </span>
                    <time
                      dateTime={n.publishedAt}
                      className="text-xs text-white/45 font-medium tracking-wide tabular-nums"
                    >
                      {a.noticeStatus.publishedAt}：{formatUtc8Timestamp(n.publishedAt)} · {a.noticeStatus.utc8}
                    </time>
                    <span
                      className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-[#19B7FF]/35 bg-[#0A6CFF]/15 px-2.5 py-1 text-xs font-semibold text-[#7DD8FF]"
                    >
                      <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M10 3.5c-4.2 0-7.26 3.45-8.28 5.06a2.7 2.7 0 0 0 0 2.88C2.74 13.05 5.8 16.5 10 16.5s7.26-3.45 8.28-5.06a2.7 2.7 0 0 0 0-2.88C17.26 6.95 14.2 3.5 10 3.5Zm0 10.25A3.75 3.75 0 1 1 10 6.25a3.75 3.75 0 0 1 0 7.5Zm0-1.75a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                      </svg>
                      {a.noticeStatus.views}{' '}
                      {viewCounts[n.id] === undefined ? '—' : viewCounts[n.id].toLocaleString()}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-white mb-4">{n.title}</h2>

                  {n.poster && (
                    <figure className="mb-6">
                      <Image
                        src={n.poster}
                        alt={n.posterAlt}
                        width={n.posterWidth ?? DEFAULT_POSTER_WIDTH}
                        height={n.posterHeight ?? DEFAULT_POSTER_HEIGHT}
                        sizes="(min-width: 640px) 640px, 100vw"
                        className="w-full h-auto rounded-2xl border border-white/10 shadow-[0_12px_48px_-16px_rgba(0,8,28,0.9)]"
                        priority
                      />
                      {n.posterTags.length > 0 && (
                        <figcaption className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-1.5 text-xs text-white/45">
                          {n.posterTags.map((tag, ti) => (
                            <span key={tag} className="inline-flex items-center gap-3">
                              {ti > 0 && <span className="text-white/20" aria-hidden="true">·</span>}
                              {tag}
                            </span>
                          ))}
                        </figcaption>
                      )}
                    </figure>
                  )}

                  <p className="text-sm text-white/70 leading-relaxed mb-3">{n.greeting}</p>
                  {n.paragraphs.map((p) => (
                    <p key={p} className="text-sm text-white/70 leading-relaxed mb-3">{p}</p>
                  ))}
                  {'attachments' in n && Array.isArray(n.attachments) && n.attachments.length > 0 && (
                    <div className="my-5 flex flex-wrap gap-3">
                      {n.attachments.map((attachment) => (
                        <a
                          key={attachment.href}
                          href={attachment.href}
                          download
                          className="inline-flex items-center gap-2 rounded-full border border-[#FFC247]/40 bg-[#FFC247]/10 px-4 py-2 text-sm font-semibold text-[#FFD66B] transition-colors duration-200 hover:border-[#FFC247]/75 hover:bg-[#FFC247]/15 hover:text-white"
                        >
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.69L6.03 8.22a.75.75 0 0 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l4.5-4.5a.75.75 0 1 0-1.06-1.06l-3.22 3.22V2.75Z" />
                            <path d="M3.5 13.75a.75.75 0 0 1 .75.75v1.25h11.5V14.5a.75.75 0 0 1 1.5 0v2A.75.75 0 0 1 16.5 17H3.5a.75.75 0 0 1-.75-.75v-1.75a.75.75 0 0 1 .75-.75Z" />
                          </svg>
                          <span>{attachment.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                  <p className="text-sm text-white/70 leading-relaxed mb-2">{n.listIntro}</p>
                  <ol className="list-decimal list-inside space-y-1.5 mb-4 text-sm text-[#FFD66B]/90 leading-relaxed marker:text-[#FFC247]">
                    {n.listItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                  {n.closingParagraphs.map((p) => (
                    <p key={p} className="text-sm text-white/70 leading-relaxed mb-3">{p}</p>
                  ))}

                  <div className="mt-6 text-right">
                    <p className="text-sm font-semibold text-white/85">{n.signature}</p>
                    <p className="text-xs text-white/45 mt-1 tabular-nums">{n.signatureDate}</p>
                  </div>
                </article>
              ))}
            </section>
          )}

          {/* Divider */}
          <div className="w-full h-px bg-linear-to-r from-[#0A6CFF]/50 via-[#19B7FF]/30 to-transparent mb-12" aria-hidden="true" />

          {/* Release timeline */}
          <ol className="relative space-y-6" role="list">
            {a.releases.map((rel, i) => (
              <li key={`${rel.date}-${rel.title}`}>
                <article
                  className="group relative glass-card rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1"
                  aria-label={`${rel.date} · ${rel.title}`}
                >
                  {/* Header: version + date */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="px-2 py-0.5 rounded-md bg-[#0A6CFF]/15 border border-[#0A6CFF]/30 text-[#19B7FF] text-xs font-bold tracking-wide tabular-nums">
                      {rel.version}
                    </span>
                    <time className="text-xs text-white/40 font-medium tracking-wide tabular-nums">
                      {rel.date}
                    </time>
                    {i === 0 && (
                      <span className="px-2.5 py-1 rounded-lg bg-linear-to-r from-[#FFC247] to-[#FF8C00] text-[#001A5C] text-xs font-bold tracking-wide">
                        {a.latestLabel}
                      </span>
                    )}
                  </div>

                  {/* Title + summary */}
                  <h2 className="text-xl sm:text-2xl font-black text-white mb-2">{rel.title}</h2>
                  <p className="text-sm text-white/55 leading-relaxed mb-6">{rel.summary}</p>

                  {/* Change groups */}
                  <div className="space-y-5">
                    {rel.groups.map((group) => {
                      const style = categoryStyles[group.type] ?? categoryStyles.feature;
                      const label = a.categories[group.type as keyof typeof a.categories];
                      return (
                        <div key={group.type}>
                          <div
                            className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider mb-3"
                            style={{
                              background: `${style.color}1A`,
                              color: style.color,
                              border: `1px solid ${style.color}40`,
                            }}
                          >
                            {label}
                          </div>
                          <ul className="space-y-2" role="list">
                            {group.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5 text-sm text-white/70 leading-relaxed"
                              >
                                <span
                                  className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-linear-to-br ${style.gradient}`}
                                  aria-hidden="true"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </article>
              </li>
            ))}
          </ol>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-xs text-white/30">{a.copyright}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
