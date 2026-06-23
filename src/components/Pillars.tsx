'use client';

import ScrollReveal from './ScrollReveal';
import { useI18n } from '@/i18n/I18nProvider';

const pillarVisuals = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="14" cy="10" r="2" fill="currentColor" />
      </svg>
    ),
    gradient: 'from-[#0A6CFF] to-[#19B7FF]',
    glowColor: 'rgba(10, 108, 255, 0.3)',
    accentColor: '#19B7FF',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 14c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S4 19.523 4 14z" stroke="currentColor" strokeWidth="2" />
        <path d="M14 9v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 14h2M17 14h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    gradient: 'from-[#FFC247] to-[#FF8C00]',
    glowColor: 'rgba(255, 194, 71, 0.3)',
    accentColor: '#FFC247',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4l8 4v8l-8 8-8-8V8l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 4v16M6 8l8 4 8-4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    gradient: 'from-[#7B4FFF] to-[#0A6CFF]',
    glowColor: 'rgba(123, 79, 255, 0.3)',
    accentColor: '#7B4FFF',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="15" y="4" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="4" y="15" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M15 19.5h9M19.5 15v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    gradient: 'from-[#19B7FF] to-[#7B4FFF]',
    glowColor: 'rgba(25, 183, 255, 0.3)',
    accentColor: '#19B7FF',
  },
];

export default function Pillars() {
  const { dict } = useI18n();
  const p = dict.pillars;

  return (
    <section
      id="pillars"
      className="relative py-24 lg:py-32 bg-[#F2F6FF] overflow-hidden"
      aria-labelledby="pillars-heading"
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #0A6CFF 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A6CFF]/10 border border-[#0A6CFF]/20 text-[#0A6CFF] text-xs font-semibold tracking-wider uppercase mb-6">
              {p.badge}
            </div>
            <h2
              id="pillars-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1A33] mb-4 leading-tight"
            >
              {p.headingPart1}{' '}
              <span className="gradient-text-brand">{p.headingBrand}</span>
            </h2>
            <p className="text-base sm:text-lg text-[#3A5080] max-w-2xl mx-auto leading-relaxed">
              {p.subtext.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br className="hidden sm:block" />}
                </span>
              ))}
            </p>
          </div>
        </ScrollReveal>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {p.items.map((pillar, i) => {
            const visual = pillarVisuals[i];
            if (!visual) return null;
            return (
              <ScrollReveal key={pillar.title} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <article
                  className="group relative glass-card-light rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                  style={{ boxShadow: `0 4px 30px ${visual.glowColor}20` }}
                  aria-label={`${pillar.title}: ${pillar.subtitle}`}
                >
                  {/* Number */}
                  <div
                    className="absolute -top-3 -right-2 text-5xl font-black opacity-08 select-none leading-none"
                    style={{ color: visual.accentColor }}
                    aria-hidden="true"
                  >
                    {pillar.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${visual.gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    {visual.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#0B1A33] mb-1">{pillar.title}</h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: visual.accentColor }}>
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-[#3A5080] leading-relaxed flex-1">{pillar.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold"
                        style={{
                          background: `${visual.accentColor}15`,
                          color: visual.accentColor,
                          border: `1px solid ${visual.accentColor}30`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom border accent */}
                  <div
                    className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${visual.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
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
