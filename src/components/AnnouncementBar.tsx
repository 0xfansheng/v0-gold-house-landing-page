'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useI18n } from '@/i18n/I18nProvider';

const STORAGE_KEY = 'gh-notice-dismissed';

export default function AnnouncementBar() {
  const { dict } = useI18n();
  const a = dict.announcements;
  const notice = a.notices.length > 0 ? a.notices[0] : undefined;
  const noticeId = notice?.id;

  // Hidden on server render and first client paint; revealed after mount so
  // the localStorage read never affects hydration (same pattern as I18nProvider).
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!noticeId) return undefined;
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(STORAGE_KEY) === noticeId;
    } catch {
      // localStorage unavailable (private browsing, etc.)
    }
    if (dismissed) return undefined;
    // Defer the state update out of the synchronous effect body (lint rule)
    const id = setTimeout(() => setVisible(true), 0);
    return () => clearTimeout(id);
  }, [noticeId]);

  if (!notice || !visible) return null;

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, notice.id);
    } catch {
      // ignore
    }
  };

  return (
    <div
      className="notice-bar-in fixed top-16 lg:top-18 left-0 right-0 z-40 bg-[#001440]/85 backdrop-blur-xl border-b border-[#FFC247]/25 shadow-[0_12px_32px_-12px_rgba(0,8,28,0.85)]"
      role="region"
      aria-label={a.noticesLabel}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 py-2.5">
        <svg
          className="w-4 h-4 flex-shrink-0 text-[#FFC247]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M3 11v2a1 1 0 001 1h2l5 4V6L6 10H4a1 1 0 00-1 1zM14 8.5a4 4 0 010 7M17 6a8 8 0 010 12" />
        </svg>
        <p className="flex-1 min-w-0 truncate text-xs sm:text-sm text-white/85">
          {notice.bannerText}
        </p>
        <Link
          href="/announcements#notices"
          className="flex-shrink-0 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold text-[#FFC247] border border-[#FFC247]/35 hover:text-[#FFD66B] hover:border-[#FFC247]/70 hover:bg-[#FFC247]/10 transition-colors duration-200 whitespace-nowrap"
        >
          {a.noticeBanner.viewDetails}
        </Link>
        <button
          onClick={dismiss}
          aria-label={a.noticeBanner.dismissAriaLabel}
          className="flex-shrink-0 p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors duration-200"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
