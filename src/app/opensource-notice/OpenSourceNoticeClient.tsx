'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useI18n } from '@/i18n/I18nProvider';
import { OSS_GROUPS } from './ossData';

export default function OpenSourceNoticeClient() {
  const { dict } = useI18n();
  const o = dict.openSourceNotice;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#000D2B] pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A6CFF]/15 border border-[#0A6CFF]/30 text-[#19B7FF] text-xs font-semibold tracking-wider uppercase mb-6">
              {o.badge}
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 leading-tight">
              {o.pageTitle}
            </h1>
            <p className="text-xs uppercase tracking-wider text-white/45 mb-1">
              {o.intro}
            </p>
            <p className="text-xs text-white/35 font-mono">{o.versionNote}</p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-linear-to-r from-[#0A6CFF]/50 via-[#19B7FF]/30 to-transparent mb-10" aria-hidden="true" />

          {/* Groups */}
          <div className="space-y-10">
            {OSS_GROUPS.map((group) => (
              <section key={group.id}>
                <h2 className="text-lg sm:text-xl font-bold text-white mb-4 tracking-tight">
                  {o.groups[group.id]}
                </h2>
                <ul className="rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden divide-y divide-white/8" role="list">
                  {group.items.map((item) => (
                    <li
                      key={`${group.id}-${item.name}`}
                      className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3 px-4 sm:px-5 py-3.5 hover:bg-white/[0.025] transition-colors"
                    >
                      <div className="flex-1 min-w-0 text-sm">
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#E6EEFA] hover:text-[#19B7FF] border-b border-white/15 hover:border-[#19B7FF] pb-0.5 break-all transition-colors"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <span className="text-[#E6EEFA] break-all">{item.name}</span>
                        )}
                        <span className="ml-2 text-xs text-white/40 font-mono">{item.version}</span>
                      </div>
                      <span className="text-xs text-white/50 sm:whitespace-nowrap flex-shrink-0">
                        {item.license}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-12 pt-6 border-t border-white/10">
            <p className="text-xs text-white/45 leading-relaxed">{o.footerNote}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
