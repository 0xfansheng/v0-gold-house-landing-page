'use client';

import ScrollReveal from './ScrollReveal';
import { useI18n } from '@/i18n/I18nProvider';

// Small inline icons for the four highlight cards, indexed to dict.ucard.intro.highlights
function HiGlobe() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" />
      <path d="M2.5 10h15M10 2.5c2.2 2.2 2.2 12.8 0 15M10 2.5c-2.2 2.2-2.2 12.8 0 15" />
    </svg>
  );
}
function HiBolt() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M11 1L4 11h4l-1 8 8-11h-5l1-7z" />
    </svg>
  );
}
function HiShield() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M10 2l6 2.5v5C16 14 13.3 16.7 10 18 6.7 16.7 4 14 4 9.5v-5L10 2z" />
      <path d="M7.5 10l1.8 1.8L13 8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function HiReceipt() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M5 2.5h10v15l-2-1.3-2 1.3-1-1.3-1 1.3-2-1.3-2 1.3v-15z" strokeLinejoin="round" />
      <path d="M7.5 7h5M7.5 10h5" strokeLinecap="round" />
    </svg>
  );
}
const highlightIcons = [HiGlobe, HiBolt, HiShield, HiReceipt];

export default function UCardIntro() {
  const { dict } = useI18n();
  const u = dict.ucard.intro;
  const c = u.card;

  return (
    <section
      id="ucard"
      className="relative py-24 lg:py-32 overflow-hidden bg-linear-to-b from-[#000D2B] via-[#001440] to-[#001A52]"
      aria-labelledby="ucard-intro-heading"
    >
      {/* Ambient glow accents */}
      <div
        className="absolute top-0 right-0 w-[36rem] h-[36rem] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0A6CFF 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-[32rem] h-[32rem] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #19B7FF 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC247]/15 border border-[#FFC247]/30 text-[#FFC247] text-xs font-semibold tracking-wider uppercase mb-6">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="5" width="20" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
                <path d="M2 10h20" stroke="currentColor" strokeWidth="2" />
              </svg>
              {u.badge}
            </div>
            <h2
              id="ucard-intro-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight"
            >
              {u.headingPart1}
              <br className="hidden sm:block" />
              <span className="gradient-text-brand">{u.headingBrand}</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">{u.subtext}</p>
          </div>
        </ScrollReveal>

        {/* Card visual + highlights */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: the physical card */}
          <ScrollReveal>
            <div className="relative flex justify-center lg:justify-start">
              {/* Glow under card */}
              <div
                className="absolute inset-x-6 bottom-2 h-24 blur-2xl opacity-50"
                style={{ background: 'radial-gradient(ellipse, #0A6CFF 0%, transparent 70%)' }}
                aria-hidden="true"
              />
              <div
                className="relative w-full max-w-md aspect-[1.585/1] rounded-3xl p-6 sm:p-7 shadow-2xl overflow-hidden"
                style={{
                  background:
                    'linear-gradient(135deg, #0A6CFF 0%, #0A3AAA 45%, #001440 100%)',
                }}
                role="img"
                aria-label={`${c.brand} ${c.network}`}
              >
                {/* Sheen */}
                <div
                  className="absolute -top-1/2 -right-1/4 w-[140%] h-[140%] opacity-20"
                  style={{ background: 'radial-gradient(circle, #19B7FF 0%, transparent 55%)' }}
                  aria-hidden="true"
                />
                <div className="relative flex flex-col h-full justify-between">
                  {/* Top row: brand + contactless */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/logo.svg" alt="" width={28} height={28} className="w-7 h-7 rounded-lg" aria-hidden="true" />
                      <span className="text-white font-bold tracking-[0.2em] text-sm">{c.brand}</span>
                    </div>
                    <svg className="w-6 h-6 text-white/70" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M8.5 8.5a5 5 0 010 7M12 6a9 9 0 010 12M15.5 3.5a13 13 0 010 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* Chip */}
                  <div className="mt-1">
                    <div
                      className="w-12 h-9 rounded-md"
                      style={{ background: 'linear-gradient(135deg, #FFE08A 0%, #FFC247 50%, #D99A1C 100%)' }}
                      aria-hidden="true"
                    >
                      <div className="w-full h-full rounded-md border border-[#B97C00]/30 grid grid-cols-3 grid-rows-3 gap-px p-1 opacity-60">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <span key={i} className="bg-[#B97C00]/40 rounded-[1px]" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card number */}
                  <div className="flex items-center gap-3 text-white font-mono tracking-widest text-base sm:text-lg">
                    <span>5282</span>
                    <span className="opacity-70">••••</span>
                    <span className="opacity-70">••••</span>
                    <span>0030</span>
                  </div>

                  {/* Bottom row: holder / valid / network */}
                  <div className="flex items-end justify-between">
                    <div className="space-y-1.5">
                      <div>
                        <p className="text-[9px] text-white/50 tracking-wider">{c.validLabel}</p>
                        <p className="text-xs text-white/90 font-medium tracking-wider">{c.validDate}</p>
                      </div>
                      <p className="text-sm text-white/95 font-semibold tracking-wider">{c.holder}</p>
                    </div>
                    <span className="text-white font-black italic text-2xl tracking-tight">{c.network}</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: highlights 2x2 + capabilities */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {u.highlights.map((h, i) => {
                const Icon = highlightIcons[i] ?? HiGlobe;
                return (
                  <ScrollReveal key={h.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                    <div className="group h-full p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/8 hover:border-[#19B7FF]/40 hover:-translate-y-1">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-[#19B7FF] transition-transform duration-300 group-hover:scale-110"
                        style={{ background: 'rgba(25,183,255,0.12)' }}
                        aria-hidden="true"
                      >
                        <Icon />
                      </div>
                      <h3 className="text-sm font-bold text-white mb-1.5">{h.title}</h3>
                      <p className="text-xs text-white/55 leading-relaxed">{h.desc}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Capabilities */}
            <ScrollReveal delay={2}>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <p className="text-xs font-semibold text-[#19B7FF] uppercase tracking-widest mb-3">
                  {u.capabilitiesTitle}
                </p>
                <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
                  {u.capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-2 text-sm text-white/80">
                      <svg className="w-4 h-4 text-[#FFC247] flex-shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        <path d="M6.5 11.5L3 8l1-1 2.5 2.5L12 4l1 1z" />
                      </svg>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Flow */}
        <ScrollReveal>
          <p className="text-center text-xs font-semibold text-[#19B7FF] uppercase tracking-widest mb-8">
            {u.flowTitle}
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {u.flow.map((f, i) => (
            <ScrollReveal key={f.step} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="relative h-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                {/* Connector arrow (between steps on lg) */}
                {i < u.flow.length - 1 && (
                  <span
                    className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 rounded-full items-center justify-center bg-[#0A6CFF] text-white shadow-lg"
                    aria-hidden="true"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
                <span className="text-2xl font-black gradient-text-brand">{f.step}</span>
                <h3 className="mt-3 text-base font-bold text-white">{f.title}</h3>
                <p className="mt-1.5 text-sm text-white/55 leading-relaxed">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Assets + scenes */}
        <div className="grid lg:grid-cols-2 gap-6">
          <ScrollReveal delay={1}>
            <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-6">
              <p className="text-xs font-semibold text-[#19B7FF] uppercase tracking-widest mb-4">
                {u.assetsTitle}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {u.assets.map((a) => (
                  <span
                    key={a}
                    className="px-4 py-2 rounded-xl bg-white/8 border border-white/10 text-sm font-bold text-white tracking-wide"
                  >
                    {a}
                  </span>
                ))}
                <span className="px-4 py-2 rounded-xl text-sm text-white/55 self-center">
                  {u.assetsMore}
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-6">
              <p className="text-xs font-semibold text-[#19B7FF] uppercase tracking-widest mb-4">
                {u.scenesTitle}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {u.scenes.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 rounded-xl bg-[#0A6CFF]/15 border border-[#0A6CFF]/30 text-sm font-medium text-white/90"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
