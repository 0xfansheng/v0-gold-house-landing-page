'use client';

import ScrollReveal from './ScrollReveal';
import Parallax from './Parallax';
import { useI18n } from '@/i18n/I18nProvider';

// Non-translatable partner metadata, index-aligned with `dict.alliance.partners`.
// `announce` is the official co-announcement link; `null` means it is not public yet.
const alliancePartners: { x: string; announce: string | null; color: string }[] = [
  { x: 'https://x.com/AveaiGlobal', announce: 'https://x.com/goldhousedotcc/status/2069756532544389206', color: '#19B7FF' },
  { x: 'https://x.com/GoPlusSecurity', announce: 'https://x.com/GoPlusSecurity/status/2066354226620768437', color: '#0A6CFF' },
  { x: 'https://x.com/U9_Finance', announce: 'https://x.com/U9_Finance/status/2071808894771569073', color: '#7B4FFF' },
  { x: 'https://x.com/GXChainGlobal', announce: 'https://x.com/goldhousedotcc/status/2068929881589821763', color: '#FFC247' },
  { x: 'https://x.com/XAgent_official', announce: 'https://x.com/goldhousedotcc/status/2073271442939289604', color: '#19B7FF' },
  { x: 'https://x.com/FistFloor_sol', announce: 'https://x.com/goldhousedotcc/status/2072568337494900826', color: '#0A6CFF' },
  { x: 'https://x.com/AlphioAI', announce: null, color: '#7B4FFF' },
  { x: 'https://x.com/AstarterDefiHub', announce: null, color: '#FFC247' },
  { x: 'https://x.com/GANA_Insight', announce: null, color: '#19B7FF' },
];

const XIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Alliance() {
  const { dict } = useI18n();
  const a = dict.alliance;

  return (
    <section
      id="alliance"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #001440 0%, #000D2B 100%)' }}
      aria-labelledby="alliance-heading"
    >
      {/* Background orbs (parallax depth) */}
      <Parallax speed={0.2} className="absolute inset-0" ariaHidden>
        <div className="glow-orb-blue w-96 h-96 top-10 -left-24 opacity-35" />
        <div className="glow-orb-gold w-72 h-72 -bottom-16 right-0 opacity-25" />
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/70 text-xs font-semibold tracking-wider uppercase mb-6">
              {a.badge}
            </div>
            <h2
              id="alliance-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight"
            >
              {a.headingPart1}{' '}
              <span className="gradient-text-brand">{a.headingBrand}</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
              {a.subtext}
            </p>
          </div>
        </ScrollReveal>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {a.partners.map((partner, i) => {
            const meta = alliancePartners[i];
            if (!meta) return null;
            const initial = partner.name.charAt(0).toUpperCase();
            return (
              <ScrollReveal key={partner.name} delay={((i % 3) + 1) as 1 | 2 | 3} className="h-full">
                <article
                  className="group relative flex flex-col glass-card rounded-2xl p-6 h-full min-h-[200px] transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
                  aria-label={`${a.partnerAriaPrefix}：${partner.name}`}
                >
                  {/* Header: monogram + name + X link */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-lg font-black flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `${meta.color}20`,
                        color: meta.color,
                        border: `1px solid ${meta.color}30`,
                      }}
                      aria-hidden="true"
                    >
                      {initial}
                    </div>
                    <h3 className="text-lg font-bold text-white flex-1 leading-tight">{partner.name}</h3>
                    <a
                      href={meta.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-white bg-white/5 hover:bg-white/12 border border-white/10 hover:border-white/25 transition-all duration-200 flex-shrink-0"
                      aria-label={`${a.visitXPrefix} ${partner.name}`}
                    >
                      <XIcon />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/55 leading-relaxed flex-1">{partner.desc}</p>

                  {/* Footer: announcement link or coming-soon badge */}
                  <div className="mt-5 pt-4 border-t border-white/8">
                    {meta.announce ? (
                      <a
                        href={meta.announce}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#19B7FF] hover:text-white transition-colors duration-200"
                      >
                        {a.announceLabel}
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M7 17L17 7M17 7H8M17 7v9" />
                        </svg>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFC247] animate-pulse" aria-hidden="true" />
                        {a.comingSoonLabel}
                      </span>
                    )}
                  </div>

                  {/* Hover accent line */}
                  <div
                    className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${meta.color}, transparent)` }}
                    aria-hidden="true"
                  />
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
