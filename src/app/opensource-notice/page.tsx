import type { Metadata } from 'next';
import OpenSourceNoticeClient from './OpenSourceNoticeClient';

export const metadata: Metadata = {
  title: 'GoldHouse — 开源软件声明（Android）',
  description: 'GoldHouse Android 客户端使用的第三方开源软件清单。',
  robots: { index: false, follow: false },
};

export default function OpenSourceNoticePage() {
  return <OpenSourceNoticeClient />;
}
