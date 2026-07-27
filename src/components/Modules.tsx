'use client';

import ScrollReveal from './ScrollReveal';
import Parallax from './Parallax';
import { useI18n } from '@/i18n/I18nProvider';

const moduleVisuals = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="10 17 15 12 10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="15" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: '#19B7FF',
    span: 'col-span-1 sm:col-span-2 lg:col-span-2',
    highlight: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="2" />
        <path d="M12 7v4M12 11l-7 6M12 11l7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    color: '#7B4FFF',
    span: 'col-span-1',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
    color: '#0A6CFF',
    span: 'col-span-1',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
        <path d="M14 17.5h7M17.5 14v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    color: '#19B7FF',
    span: 'col-span-1 sm:col-span-2 lg:col-span-2',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2" />
        <path d="M12 6v12M9 9h4.5a2.5 2.5 0 010 5H9v-5zM9 14h5a2.5 2.5 0 010 5H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: '#FFC247',
    span: 'col-span-1',
    highlight: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 12l2 2-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: '#0A6CFF',
    span: 'col-span-1',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2l3 6.5 7 1-5 4.9 1.2 7L12 18l-6.2 3.4L7 14.4 2 9.5l7-1L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    color: '#FFC247',
    span: 'col-span-1 sm:col-span-2 lg:col-span-2',
    highlight: false,
  },
];

export default function Modules() {
  const { dict } = useI18n();
  const mod = dict.modules;

  return (
    <section
      id="modules"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #000D2B 0%, #001440 100%)' }}
      aria-labelledby="modules-heading"
    >
      {/* Background orbs (parallax depth) */}
      <Parallax speed={0.22} className="absolute inset-0" ariaHidden>
        <div className="glow-orb-blue w-96 h-96 -top-20 -right-20 opacity-40" />
        <div className="glow-orb-gold w-64 h-64 bottom-20 left-10 opacity-30" />
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/70 text-xs font-semibold tracking-wider uppercase mb-6">
              {mod.badge}
            </div>
            <h2
              id="modules-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight"
            >
              {mod.headingPart1}{' '}
              <span className="gradient-text-brand">{mod.headingBrand}</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
              {mod.subtext}
            </p>
          </div>
        </ScrollReveal>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {mod.items.map((item, i) => {
            const visual = moduleVisuals[i];
            if (!visual) return null;
            return (
              <ScrollReveal key={item.id} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className={visual.span}>
                <article
                  className={`group relative glass-card rounded-2xl p-6 h-full min-h-[160px] transition-all duration-300 hover:-translate-y-1 hover:border-white/25 ${
                    visual.highlight ? 'border-opacity-30' : ''
                  }`}
                  style={visual.highlight ? { borderColor: `${visual.color}40` } : {}}
                  aria-label={`${mod.moduleAriaPrefix} ${item.id}: ${item.title}`}
                >
                  {/* Module number */}
                  <div
                    className="absolute top-4 right-4 text-3xl font-black opacity-10 leading-none select-none"
                    style={{ color: visual.color }}
                    aria-hidden="true"
                  >
                    {item.id}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${visual.color}20`,
                      color: visual.color,
                      border: `1px solid ${visual.color}30`,
                    }}
                    aria-hidden="true"
                  >
                    {visual.icon}
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>

                  {/* Hover accent line */}
                  <div
                    className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${visual.color}, transparent)` }}
                    aria-hidden="true"
                  />
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Center visual indicator */}
        <ScrollReveal delay={3}>
          <div className="mt-16 flex justify-center">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-2 border-[#0A6CFF]/30 animate-spin" style={{ animationDuration: '8s' }} aria-hidden="true" />
              <div className="absolute inset-2 rounded-full border border-[#19B7FF]/20 animate-spin" style={{ animationDuration: '5s', animationDirection: 'reverse' }} aria-hidden="true" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-linear-to-br from-[#19B7FF] to-[#0A6CFF]" aria-hidden="true" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
