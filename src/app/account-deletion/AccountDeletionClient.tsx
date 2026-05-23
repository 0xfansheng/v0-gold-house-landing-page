'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useI18n } from '@/i18n/I18nProvider';

export default function AccountDeletionClient() {
  const { dict } = useI18n();
  const a = dict.accountDeletion;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#000D2B] pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wider uppercase mb-6">
              {a.badge}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              {a.pageTitle}
            </h1>
            <p className="text-sm text-white/45 border-l-2 border-emerald-400/50 pl-4">
              {a.lastUpdated}
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-emerald-400/50 via-[#19B7FF]/30 to-transparent mb-12" aria-hidden="true" />

          {/* How to delete */}
          <section className="mb-12">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
              {a.howToTitle}
            </h2>
            <p className="text-[#B8CAE8] leading-relaxed mb-5 text-sm sm:text-base">
              {a.howToIntro}
            </p>

            {/* Option 1 — In-App */}
            <div className="rounded-2xl border border-white/8 bg-gradient-to-br from-emerald-500/[0.05] to-[#0A6CFF]/[0.03] p-6 sm:p-7 mb-5 transition-colors hover:border-white/16">
              <span className="block text-[#19B7FF] text-xs font-bold uppercase tracking-wider mb-2">
                {a.inAppLabel}
              </span>
              <div className="text-[#E6EEFA] text-sm sm:text-base leading-relaxed font-medium">
                {a.inAppDesc}
              </div>
            </div>

            {/* Option 2 — Email */}
            <div className="rounded-2xl border border-white/8 bg-gradient-to-br from-emerald-500/[0.05] to-[#0A6CFF]/[0.03] p-6 sm:p-7 transition-colors hover:border-white/16">
              <span className="block text-[#19B7FF] text-xs font-bold uppercase tracking-wider mb-2">
                {a.emailLabel}
              </span>
              <div className="text-[#E6EEFA] text-sm sm:text-base leading-relaxed">
                {a.emailDescPart1}
                <a
                  href={`mailto:${a.emailAddress}`}
                  className="text-white border-b border-emerald-400/60 hover:text-emerald-300 hover:border-emerald-300 transition-colors"
                >
                  {a.emailAddress}
                </a>
                {a.emailDescPart2}
                <code className="px-2 py-0.5 mx-0.5 rounded-md bg-[#19B7FF]/12 border border-[#19B7FF]/25 text-[#19B7FF] font-mono text-[0.9em]">
                  {a.emailSubject}
                </code>
                {a.emailDescPart3}
                <strong className="text-white font-semibold">{a.emailDays}</strong>
                {a.emailDescPart4}
              </div>
            </div>
          </section>

          {/* Data deleted */}
          <section className="mb-12">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
              {a.deletedTitle}
            </h2>
            <p className="text-[#B8CAE8] leading-relaxed mb-3 text-sm sm:text-base">
              {a.deletedIntro}
            </p>
            <ul className="space-y-2 mt-2" role="list">
              {a.deletedBullets.map((bullet, bi) => (
                <li key={bi} className="flex items-start gap-3 text-sm sm:text-base text-[#B8CAE8] leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 w-full h-px bg-white/6" aria-hidden="true" />
          </section>

          {/* Data retained */}
          <section className="mb-12">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
              {a.retainedTitle}
            </h2>
            <p className="text-[#B8CAE8] leading-relaxed mb-3 text-sm sm:text-base">
              {a.retainedIntroPart1}
              <strong className="text-white font-semibold">{a.retainedDays}</strong>
              {a.retainedIntroPart2}
            </p>
            <ul className="space-y-2 mt-2" role="list">
              {a.retainedBullets.map((bullet, bi) => (
                <li key={bi} className="flex items-start gap-3 text-sm sm:text-base text-[#B8CAE8] leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FFC247] flex-shrink-0" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Highlight */}
            <div className="mt-6 rounded-xl border-l-2 border-[#FFC247] bg-gradient-to-r from-[#FFC247]/[0.08] to-transparent px-5 py-4">
              <p className="text-sm sm:text-base text-white/90 leading-relaxed m-0">
                {a.retentionNote}
              </p>
            </div>
          </section>

          {/* Chain notice */}
          <section className="mb-12">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
              {a.chainNoticeTitle}
            </h2>
            <p className="text-[#B8CAE8] leading-relaxed text-sm sm:text-base">
              {a.chainNoticeIntro}
            </p>
            <div className="mt-6 w-full h-px bg-white/6" aria-hidden="true" />
          </section>

          {/* Contact */}
          <section className="mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
              {a.contactTitle}
            </h2>
            <p className="text-[#B8CAE8] leading-relaxed text-sm sm:text-base">
              {a.contactIntroPart1}
              <a
                href={`mailto:${a.contactEmail}`}
                className="text-white border-b border-emerald-400/60 hover:text-emerald-300 hover:border-emerald-300 transition-colors"
              >
                {a.contactEmail}
              </a>
              {a.contactIntroPart2}
            </p>
          </section>

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
