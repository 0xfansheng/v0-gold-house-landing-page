'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useI18n } from '@/i18n/I18nProvider';

export default function TermsClient() {
  const { dict } = useI18n();
  const t = dict.terms;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#000D2B] pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC247]/15 border border-[#FFC247]/30 text-[#FFC247] text-xs font-semibold tracking-wider uppercase mb-6">
              GoldHouse
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              {t.pageTitle}
            </h1>
            <p className="text-sm text-white/45 border-l-2 border-[#FFC247]/50 pl-4">
              {t.lastUpdated}
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-[#FFC247]/50 via-[#FF8C00]/30 to-transparent mb-12" aria-hidden="true" />

          {/* Sections */}
          <div className="space-y-10">
            {t.sections.map((section) => (
              <section key={section.title} className="group">
                <h2 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
                  {section.title}
                </h2>
                {section.intro && (
                  <p className="text-[#B8CAE8] leading-relaxed mb-3 text-sm sm:text-base">
                    {section.intro}
                  </p>
                )}
                {section.bullets.length > 0 && (
                  <ul className="space-y-2 mt-2" role="list">
                    {section.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-sm sm:text-base text-[#B8CAE8] leading-relaxed">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FFC247] flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
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
            <p className="text-xs text-white/30">{t.copyright}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
