'use client';

import Link from 'next/link';
import { useI18n } from '@/i18n/I18nProvider';
import { useSectionNav } from '@/lib/useSectionNav';

const communityLinksData = [
  {
    key: 'twitter',
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    key: 'telegram',
    label: 'Telegram',
    href: '#',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { dict } = useI18n();
  const f = dict.footer;
  const navigate = useSectionNav();

  return (
    <footer className="relative bg-[#000D2B] border-t border-white/8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 py-14">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 mb-5 group"
              aria-label={f.logoAriaLabel}
              onClick={(e) => { e.preventDefault(); navigate('/'); }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="GoldHouse" className="w-9 h-9 rounded-lg" width={36} height={36} />
              <span className="text-white font-bold text-lg tracking-tight">
                Gold<span className="text-[#FFC247]">House</span>
              </span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-xs">
              {f.brandDesc}
            </p>

            {/* Community links */}
            <div className="flex items-center gap-3">
              {communityLinksData.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="w-9 h-9 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#0A6CFF]/30 hover:border-[#0A6CFF]/50 transition-all duration-200"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-5">{f.productHeading}</h3>
            <ul className="space-y-3" role="list">
              {f.productLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-sm text-white/45 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Community & About */}
          <div>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-5">{f.communityHeading}</h3>
            <ul className="space-y-3 mb-6" role="list">
              {communityLinksData.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-white/45 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-white/30">{link.icon}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-white/8">
              <button
                onClick={() => navigate('#mission')}
                className="text-sm text-white/45 hover:text-white transition-colors duration-200 block mb-2 text-left"
              >
                {f.aboutUs}
              </button>
              <Link href="/privacy" className="text-sm text-white/45 hover:text-white transition-colors duration-200 block mb-2">
                {f.privacy}
              </Link>
              <Link href="/terms" className="text-sm text-white/45 hover:text-white transition-colors duration-200 block mb-2">
                {f.terms}
              </Link>
              <Link href="/account-deletion" className="text-sm text-white/45 hover:text-white transition-colors duration-200 block">
                {f.accountDeletion}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">{f.copyright}</p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#19B7FF] pulse-ring" aria-hidden="true" />
            <p className="text-xs text-white/25">{f.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
