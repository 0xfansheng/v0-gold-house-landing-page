'use client';

import { Fragment, type ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useI18n } from '@/i18n/I18nProvider';

// Split a string into text and clickable links (URLs and email addresses).
// Keeps the policy content inside the i18n dictionary while rendering the
// child-safety contact and published-standards URL as real, working links.
const TOKEN_RE = /(https?:\/\/[^\s]+|[^\s@]+@[^\s@]+\.[^\s@]+)/g;

function linkify(text: string): ReactNode {
  const parts = text.split(TOKEN_RE);
  return parts.map((part, i) => {
    if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;
    const isEmail = part.includes('@') && !part.startsWith('http');
    const href = isEmail ? `mailto:${part}` : part;
    return (
      <a
        key={i}
        href={href}
        className="text-[#19B7FF] underline underline-offset-2 hover:text-white transition-colors duration-200 break-words"
        {...(isEmail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {part}
      </a>
    );
  });
}

export default function ChildSafetyClient() {
  const { dict } = useI18n();
  const c = dict.childSafety;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#000D2B] pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A6CFF]/15 border border-[#0A6CFF]/30 text-[#19B7FF] text-xs font-semibold tracking-wider uppercase mb-6">
              GoldHouse
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              {c.pageTitle}
            </h1>
            <p className="text-sm text-white/45 border-l-2 border-[#0A6CFF]/50 pl-4">
              {c.lastUpdated}
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-linear-to-r from-[#0A6CFF]/50 via-[#19B7FF]/30 to-transparent mb-12" aria-hidden="true" />

          {/* Sections */}
          <div className="space-y-10">
            {c.sections.map((section) => (
              <section key={section.title} className="group">
                <h2 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
                  {section.title}
                </h2>
                {section.intro && (
                  <p className="text-[#B8CAE8] leading-relaxed mb-3 text-sm sm:text-base">
                    {linkify(section.intro)}
                  </p>
                )}
                {section.bullets.length > 0 && (
                  <ul className="space-y-2 mt-2" role="list">
                    {section.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-sm sm:text-base text-[#B8CAE8] leading-relaxed">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0A6CFF] flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span>{linkify(bullet)}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-6 w-full h-px bg-white/6" aria-hidden="true" />
              </section>
            ))}
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-xs text-white/30">{c.copyright}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
