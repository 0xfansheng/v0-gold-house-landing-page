'use client';

import ScrollReveal from './ScrollReveal';
import { useI18n } from '@/i18n/I18nProvider';

const featureVisuals = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: '#7B4FFF',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    color: '#19B7FF',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: '#FFC247',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <polyline points="10 9 9 9 8 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    color: '#0A6CFF',
  },
];

const flowColors = ['#7B4FFF', '#19B7FF', '#FFC247', '#0A6CFF'];

export default function RevenueModel() {
  const { dict } = useI18n();
  const r = dict.revenue;

  return (
    <section
      id="revenue"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      aria-labelledby="revenue-heading"
    >
      {/* Background */}
      <div
        className="absolute top-0 left-0 right-0 h-1/2 opacity-30"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #EBF4FF 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC247]/15 border border-[#FFC247]/30 text-[#CC9000] text-xs font-semibold tracking-wider uppercase mb-6">
              {r.badge}
            </div>
            <h2
              id="revenue-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1A33] mb-4 leading-tight"
            >
              {r.headingPart1}
              <br />
              <span className="gradient-text-gold">{r.headingGold}</span>
            </h2>
            <p className="text-base sm:text-lg text-[#3A5080] max-w-2xl mx-auto leading-relaxed">
              {r.subtext}
            </p>
          </div>
        </ScrollReveal>

        {/* Flow steps */}
        <ScrollReveal delay={1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 mb-16">
            {r.flowSteps.map((step, i) => {
              const color = flowColors[i] ?? '#19B7FF';
              const nextColor = flowColors[i + 1] ?? '#19B7FF';
              return (
                <div key={step.label} className="flex items-center">
                  <div className="flex flex-col items-center text-center px-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white text-base font-black mb-2"
                      style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
                      aria-label={`${r.stepLabel} ${i + 1}`}
                    >
                      {i + 1}
                    </div>
                    <p className="text-sm font-bold text-[#0B1A33] whitespace-nowrap">{step.label}</p>
                    <p className="text-xs text-[#7A94C1] mt-0.5 whitespace-nowrap">{step.sublabel}</p>
                  </div>
                  {i < r.flowSteps.length - 1 && (
                    <div
                      className="hidden sm:block w-12 h-0.5 mx-1 rounded-full"
                      style={{ background: `linear-gradient(90deg, ${color}60, ${nextColor}60)` }}
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {r.features.map((feat, i) => {
            const visual = featureVisuals[i];
            if (!visual) return null;
            return (
              <ScrollReveal key={feat.title} delay={((i + 1) as 1 | 2 | 3 | 4)}>
                <article
                  className="group glass-card-light rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full"
                  style={{ borderTop: `3px solid ${visual.color}` }}
                  aria-label={feat.title}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${visual.color}15`, color: visual.color }}
                    aria-hidden="true"
                  >
                    {visual.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#0B1A33] mb-2">{feat.title}</h3>
                  <p className="text-sm text-[#7A94C1] leading-relaxed">{feat.desc}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Core tagline banner */}
        <ScrollReveal delay={3}>
          <div
            className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-center"
            style={{ background: 'linear-gradient(135deg, #001A5C 0%, #002C8C 50%, #0A3AAA 100%)' }}
          >
            <div className="absolute inset-0 bg-grid-overlay opacity-40" aria-hidden="true" />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 rounded-full opacity-30"
              style={{ background: 'radial-gradient(ellipse, #FFC247 0%, transparent 70%)' }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC247]/20 border border-[#FFC247]/30 text-[#FFC247] text-xs font-semibold tracking-wider uppercase mb-6">
                {r.coreBadge}
              </div>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
                {r.coreQuote1}
                <span className="gradient-text-gold">，</span>
                <br />
                {r.coreQuote2}{' '}
                <span className="gradient-text-gold">{r.coreQuoteGold}</span>
                {r.coreQuote3}
              </blockquote>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
                {r.coreDesc}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
