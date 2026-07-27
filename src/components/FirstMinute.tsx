'use client';

import ScrollReveal from './ScrollReveal';
import { useI18n } from '@/i18n/I18nProvider';
import { useSectionNav } from '@/lib/useSectionNav';

function StepIcon0() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function StepIcon1() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function StepIcon2() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 12l2 2-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function StepIcon3() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
const stepIconComponents = [StepIcon0, StepIcon1, StepIcon2, StepIcon3];

const stepAccents = [
  { accentColor: '#19B7FF', gradient: 'from-[#19B7FF]/20 to-[#0A6CFF]/10' },
  { accentColor: '#7B4FFF', gradient: 'from-[#7B4FFF]/20 to-[#0A6CFF]/10' },
  { accentColor: '#0A6CFF', gradient: 'from-[#0A6CFF]/20 to-[#19B7FF]/10' },
  { accentColor: '#FFC247', gradient: 'from-[#FFC247]/20 to-[#FF8C00]/10' },
];

export default function FirstMinute() {
  const { dict } = useI18n();
  const f = dict.firstMinute;
  const navigate = useSectionNav();

  return (
    <section
      id="first-minute"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      aria-labelledby="first-minute-heading"
    >
      {/* Background mesh */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #EBF4FF 0%, transparent 50%), radial-gradient(circle at 80% 20%, #F0EBFF 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual timeline */}
          <ScrollReveal>
            <div className="relative">
              {/* Vertical connector line (centered behind the icon column) */}
              <div
                className="absolute left-[39px] top-10 bottom-10 w-0.5 z-0 bg-linear-to-b from-[#19B7FF] via-[#0A6CFF] to-[#FFC247] rounded-full"
                aria-hidden="true"
              />

              <div className="space-y-6">
                {f.steps.map((exp, i) => {
                  const accent = stepAccents[i];
                  if (!accent) return null;
                  return (
                    <div
                      key={exp.step}
                      className="group flex items-start gap-5 p-4 rounded-2xl transition-all duration-300 hover:bg-[#F2F6FF]"
                    >
                      {/* Icon circle */}
                      <div
                        className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-white bg-linear-to-br ${accent.gradient} border flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                        style={{ color: accent.accentColor, borderColor: `${accent.accentColor}30` }}
                        aria-hidden="true"
                      >
                        {(() => { const IC = stepIconComponents[i]; return IC ? <IC /> : null; })()}
                        <div
                          className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white border-2 flex items-center justify-center text-[8px] font-black"
                          style={{ color: accent.accentColor, borderColor: accent.accentColor }}
                          aria-label={`${f.stepLabel} ${i + 1}`}
                        >
                          {i + 1}
                        </div>
                      </div>

                      <div className="flex-1 min-w-0 pt-1">
                        <h3 className="text-base font-bold mb-1.5" style={{ color: '#0B1A33' }}>
                          {exp.title}
                        </h3>
                        <p className="text-sm text-[#3A5080] leading-relaxed">{exp.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Text content */}
          <ScrollReveal delay={2}>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A6CFF]/10 border border-[#0A6CFF]/20 text-[#0A6CFF] text-xs font-semibold tracking-wider uppercase mb-6">
                {f.badge}
              </div>
              <h2
                id="first-minute-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1A33] mb-6 leading-tight"
              >
                {f.headingPart1}
                <br />
                <span className="gradient-text-brand">{f.headingBrand}</span>
              </h2>
              <p className="text-lg text-[#3A5080] leading-relaxed mb-8">
                {f.subtext}
              </p>

              {/* Key points */}
              <div className="space-y-4">
                {f.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-linear-to-br from-[#19B7FF] to-[#0A6CFF] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 mt-0.5" aria-hidden="true">
                      ✓
                    </div>
                    <p className="text-sm text-[#3A5080] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <button
                  onClick={() => navigate('#cta')}
                  className="btn-gradient inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl"
                >
                  {f.cta}
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8 1a.5.5 0 01.5.5v11.793l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L7.5 13.293V1.5A.5.5 0 018 1z" clipRule="evenodd" transform="rotate(-90 8 8)" />
                  </svg>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
