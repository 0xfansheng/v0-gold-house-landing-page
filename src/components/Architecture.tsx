'use client';

import ScrollReveal from './ScrollReveal';
import Parallax from './Parallax';
import { useI18n } from '@/i18n/I18nProvider';

const layerStyles = [
  { gradient: 'from-[#19B7FF] to-[#0A6CFF]', borderColor: '#19B7FF', textColor: '#19B7FF' },
  { gradient: 'from-[#0A6CFF] to-[#002C8C]', borderColor: '#0A6CFF', textColor: '#0A6CFF' },
  { gradient: 'from-[#7B4FFF] to-[#0A6CFF]', borderColor: '#7B4FFF', textColor: '#7B4FFF' },
  { gradient: 'from-[#002C8C] to-[#001A5C]', borderColor: '#002C8C', textColor: '#4A7AFF' },
];

function CardIcon0() {
  return (
    <svg className="w-5 h-5 text-[#FFC247]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}
function CardIcon1() {
  return (
    <svg className="w-5 h-5 text-[#19B7FF]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
    </svg>
  );
}
function CardIcon2() {
  return (
    <svg className="w-5 h-5 text-[#7B4FFF]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
    </svg>
  );
}
const cardIconComponents = [CardIcon0, CardIcon1, CardIcon2];

const cardIconBgs = [
  'bg-linear-to-br from-[#FFC247]/20 to-[#FF8C00]/10 border-[#FFC247]/30',
  'bg-linear-to-br from-[#19B7FF]/20 to-[#0A6CFF]/10 border-[#19B7FF]/30',
  'bg-linear-to-br from-[#7B4FFF]/20 to-[#0A6CFF]/10 border-[#7B4FFF]/30',
];

export default function Architecture() {
  const { dict } = useI18n();
  const a = dict.architecture;

  return (
    <section
      id="architecture"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #001440 0%, #000D2B 100%)' }}
      aria-labelledby="architecture-heading"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-overlay opacity-30" aria-hidden="true" />

      {/* Glow effects */}
      <Parallax speed={0.24} className="absolute inset-0" ariaHidden>
        <div className="glow-orb-blue w-80 h-80 top-1/2 -translate-y-1/2 -left-20 opacity-30" />
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/70 text-xs font-semibold tracking-wider uppercase mb-6">
              {a.badge}
            </div>
            <h2
              id="architecture-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight"
            >
              {a.headingPart1}{' '}
              <span className="gradient-text-gold">{a.headingDot}</span>{' '}
              <span className="gradient-text-brand">{a.headingBrand}</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
              {a.subtext}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left: Layer stack visual */}
          <div className="lg:col-span-3 space-y-3">
            {a.layers.map((layer, i) => {
              const style = layerStyles[i];
              if (!style) return null;
              return (
                <ScrollReveal key={layer.level} delay={((i + 1) as 1 | 2 | 3 | 4)}>
                  <div
                    className="arch-layer relative p-5 rounded-2xl border"
                    style={{
                      background: `linear-gradient(135deg, rgba(10,108,255,0.1) 0%, rgba(0,28,100,0.15) 100%)`,
                      borderColor: `${style.borderColor}35`,
                    }}
                  >
                    {/* Layer number indicator */}
                    <div
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl font-black opacity-08 select-none"
                      style={{ color: style.textColor }}
                      aria-hidden="true"
                    >
                      L{4 - i}
                    </div>

                    <div className="flex items-start gap-4">
                      {/* Level indicator */}
                      <div className="flex-shrink-0 w-24 text-center">
                        <div
                          className="inline-flex px-3 py-1.5 rounded-lg text-xs font-bold mb-1"
                          style={{
                            background: `${style.borderColor}20`,
                            color: style.textColor,
                            border: `1px solid ${style.borderColor}40`,
                          }}
                        >
                          {layer.level}
                        </div>
                        <p className="text-[9px] text-white/30 leading-tight">{layer.levelEn}</p>
                      </div>

                      {/* Items */}
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-2">
                          {layer.items.map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium text-white/80 border border-white/10 bg-white/05"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-white/35 mt-2 leading-relaxed">{layer.description}</p>
                      </div>
                    </div>

                    {/* Left accent bar */}
                    <div
                      className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full"
                      style={{ background: `linear-gradient(180deg, ${style.borderColor}, ${style.borderColor}40)` }}
                      aria-hidden="true"
                    />
                  </div>
                </ScrollReveal>
              );
            })}

            {/* Arrow indicating layering */}
            <ScrollReveal delay={5}>
              <div className="flex items-center justify-center gap-3 pt-2">
                <div className="h-0.5 flex-1 bg-linear-to-r from-[#19B7FF]/40 to-transparent" aria-hidden="true" />
                <p className="text-xs text-white/30 text-center">{a.fromToLabel}</p>
                <div className="h-0.5 flex-1 bg-linear-to-l from-[#19B7FF]/40 to-transparent" aria-hidden="true" />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Key points */}
          <div className="lg:col-span-2 space-y-5">
            {a.cards.map((card, i) => {
              const IconComp = cardIconComponents[i];
              return (
                <ScrollReveal key={card.title} delay={((i + 2) as 2 | 3 | 4)}>
                  <div className="glass-card rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl border flex items-center justify-center ${cardIconBgs[i]}`}
                        aria-hidden="true"
                      >
                        {IconComp && <IconComp />}
                      </div>
                      <h3 className="text-base font-bold text-white">{card.title}</h3>
                    </div>
                    <p className="text-sm text-white/55 leading-relaxed">{card.text}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
