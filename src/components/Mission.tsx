'use client';

import ScrollReveal from './ScrollReveal';
import Parallax from './Parallax';
import { useI18n } from '@/i18n/I18nProvider';

const cardVisuals = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4l2 5h5l-4 3 1.5 5L14 14l-4.5 3 1.5-5-4-3h5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M7 22l7-4 7 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    gradient: 'from-[#FFC247] to-[#FF8C00]',
    bgGlow: 'rgba(255, 194, 71, 0.15)',
    borderColor: '#FFC247',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3l9 3.5V14c0 5.5-4 9.5-9 11-5-1.5-9-5.5-9-11V6.5L14 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M10 14l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    gradient: 'from-[#0A6CFF] to-[#19B7FF]',
    bgGlow: 'rgba(10, 108, 255, 0.15)',
    borderColor: '#0A6CFF',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path d="M14 4c-3 4-3 12 0 20M14 4c3 4 3 12 0 20M4 14h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
    gradient: 'from-[#7B4FFF] to-[#0A6CFF]',
    bgGlow: 'rgba(123, 79, 255, 0.15)',
    borderColor: '#7B4FFF',
  },
];

export default function Mission() {
  const { dict } = useI18n();
  const m = dict.mission;

  return (
    <section
      id="mission"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #000D2B 0%, #001440 100%)' }}
      aria-labelledby="mission-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-overlay opacity-25" aria-hidden="true" />
      <Parallax speed={0.2} className="absolute inset-0" ariaHidden>
        <div className="glow-orb-gold w-96 h-96 top-0 right-0 opacity-20" />
        <div className="glow-orb-blue w-64 h-64 bottom-0 left-20 opacity-25" />
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/70 text-xs font-semibold tracking-wider uppercase mb-6">
              {m.badge}
            </div>
            <h2
              id="mission-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight"
            >
              {m.headingPart1}{' '}
              <span className="gradient-text-gold">{m.headingGold}</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
              {m.subtext}
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {m.cards.map((card, i) => {
            const visual = cardVisuals[i];
            if (!visual) return null;
            return (
              <ScrollReveal key={card.type} delay={((i + 1) as 1 | 2 | 3)}>
                <article
                  className="group relative glass-card rounded-3xl p-8 h-full transition-all duration-300 hover:-translate-y-2"
                  style={{ borderColor: `${visual.borderColor}30` }}
                  aria-label={`${card.type}: ${card.title} ${card.subtitle}`}
                >
                  {/* Glow bg */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${visual.bgGlow} 0%, transparent 60%)` }}
                    aria-hidden="true"
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Type badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider"
                        style={{
                          background: `${visual.borderColor}20`,
                          color: visual.borderColor,
                          border: `1px solid ${visual.borderColor}40`,
                        }}
                      >
                        {card.type}
                      </div>
                      <span className="text-xs text-white/25 font-light tracking-widest">{card.typeEn}</span>
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-linear-to-br ${visual.gradient} flex items-center justify-center text-white mb-6 transition-transform duration-300 group-hover:scale-110`}
                      aria-hidden="true"
                    >
                      {visual.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-white mb-1">{card.title}</h3>
                    <p className="text-base font-semibold mb-4" style={{ color: visual.borderColor }}>
                      {card.subtitle}
                    </p>
                    <p className="text-sm text-white/55 leading-relaxed">{card.desc}</p>
                  </div>

                  {/* Bottom gradient line */}
                  <div
                    className={`absolute bottom-0 left-6 right-6 h-0.5 bg-linear-to-r ${visual.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    aria-hidden="true"
                  />
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Tagline */}
        <ScrollReveal delay={4}>
          <div className="text-center">
            <p className="text-white/30 text-sm tracking-widest uppercase mb-4">{m.tagline1}</p>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              {m.tagline2Part1}
              <span className="gradient-text-brand">{m.tagline2Brand}</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
