'use client';

import ScrollReveal from './ScrollReveal';
import { useI18n } from '@/i18n/I18nProvider';

const featureColors = ['#7B4FFF', '#FFC247', '#0A6CFF', '#19B7FF'];
function FeatIcon0() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
    </svg>
  );
}
function FeatIcon1() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
}
function FeatIcon2() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}
function FeatIcon3() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}
const featureIconComponents = [FeatIcon0, FeatIcon1, FeatIcon2, FeatIcon3];

export default function IMGateway() {
  const { dict } = useI18n();
  const im = dict.imGateway;
  const m = im.mockup;

  return (
    <section
      id="im-gateway"
      className="relative py-24 lg:py-32 bg-[#F2F6FF] overflow-hidden"
      aria-labelledby="im-gateway-heading"
    >
      {/* Decorative shape */}
      <div
        className="absolute bottom-0 left-0 w-72 h-72 opacity-15"
        style={{ background: 'radial-gradient(circle, #7B4FFF 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Visual Chat mock */}
          <ScrollReveal>
            <div className="relative">
              <div className="glass-card-light rounded-3xl overflow-hidden shadow-2xl" aria-label={m.ariaLabel}>
                {/* Chat header */}
                <div className="px-5 py-4 border-b border-[#0A6CFF]/10 flex items-center gap-3 bg-white">
                  <div className="w-9 h-9 rounded-full bg-linear-to-br from-[#0A6CFF] to-[#19B7FF] flex items-center justify-center text-white text-xs font-bold" aria-hidden="true">
                    DeFi
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0B1A33]">{m.groupName}</p>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7B4FFF]" aria-hidden="true" />
                      <p className="text-xs text-[#7B4FFF] font-medium">{m.memberCount}</p>
                    </div>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="px-2 py-1 rounded-md bg-[#0A6CFF]/10 text-[#0A6CFF] text-[9px] font-semibold">{m.multiSig}</div>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-5 space-y-4 bg-linear-to-b from-[#F8FBFF] to-white">
                  {/* Incoming message */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-linear-to-br from-[#7B4FFF] to-[#0A6CFF] flex-shrink-0 flex items-center justify-center text-white text-[9px] font-bold" aria-hidden="true">A</div>
                    <div className="max-w-[80%]">
                      <p className="text-[10px] text-[#7A94C1] mb-1 font-medium">{m.aliceAddr}</p>
                      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-[#0A6CFF]/08">
                        <p className="text-xs text-[#0B1A33] leading-relaxed">{m.proposal}</p>
                      </div>
                    </div>
                  </div>

                  {/* DApp card in chat */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-linear-to-br from-[#0A6CFF] to-[#19B7FF] flex-shrink-0 flex items-center justify-center text-white text-[9px] font-bold" aria-hidden="true">G</div>
                    <div className="max-w-[85%]">
                      <p className="text-[10px] text-[#7A94C1] mb-1 font-medium">GoldHouse Bot</p>
                      <div className="bg-linear-to-br from-[#0A3AAA]/08 to-[#19B7FF]/05 rounded-2xl rounded-tl-sm p-4 border border-[#0A6CFF]/20">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-6 h-6 rounded-lg bg-linear-to-br from-[#0A6CFF] to-[#19B7FF] flex items-center justify-center" aria-hidden="true">
                            <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                              <path d="M7 1L9 5h4L9.5 8l1.5 4L7 10l-4 2 1.5-4L1 5h4z"/>
                            </svg>
                          </div>
                          <span className="text-xs font-semibold text-[#0B1A33]">{m.governance}</span>
                        </div>
                        <p className="text-[10px] text-[#3A5080] mb-3 leading-relaxed">{m.adjustFee}</p>
                        <div className="flex gap-2">
                          <button className="flex-1 py-1.5 rounded-lg bg-linear-to-r from-[#0A6CFF] to-[#19B7FF] text-white text-[9px] font-semibold">
                            {m.vote}
                          </button>
                          <button className="flex-1 py-1.5 rounded-lg border border-[#0A6CFF]/30 text-[#0A6CFF] text-[9px] font-medium">
                            {m.against}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment message */}
                  <div className="flex justify-end">
                    <div className="max-w-[75%]">
                      <div className="bg-linear-to-r from-[#FFC247]/15 to-[#FF8C00]/10 rounded-2xl rounded-tr-sm px-4 py-3 border border-[#FFC247]/25">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-3.5 h-3.5 text-[#FFC247]" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                            <path d="M7 1a6 6 0 100 12A6 6 0 007 1zm0 1.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zM6.5 4v1H5a.5.5 0 000 1h1.5v1H5a.5.5 0 000 1h1.5v1a.5.5 0 001 0V8H9a.5.5 0 000-1H7.5V6H9a.5.5 0 000-1H7.5V4a.5.5 0 00-1 0z"/>
                          </svg>
                          <span className="text-[10px] font-semibold text-[#CC9000]">{m.payLabel}</span>
                        </div>
                        <p className="text-xs text-[#0B1A33] font-bold">{m.transfer}</p>
                        <p className="text-[9px] text-[#7A94C1] mt-0.5">{m.transferConfirmed}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input bar */}
                <div className="px-4 py-3 border-t border-[#0A6CFF]/10 bg-white flex items-center gap-2">
                  <div className="flex-1 bg-[#F2F6FF] rounded-xl px-4 py-2.5 text-xs text-[#7A94C1]">
                    {m.inputPlaceholder}
                  </div>
                  <button
                    className="w-9 h-9 rounded-xl bg-linear-to-br from-[#FFC247] to-[#FF8C00] flex items-center justify-center"
                    aria-label={m.sendPayAriaLabel}
                  >
                    <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h8a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    className="w-9 h-9 rounded-xl bg-linear-to-br from-[#0A6CFF] to-[#19B7FF] flex items-center justify-center"
                    aria-label={m.sendMsgAriaLabel}
                  >
                    <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path d="M15.854.146a.5.5 0 01.11.54l-5.819 14.547a.75.75 0 01-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 01.124-1.33L15.314.037a.5.5 0 01.54.11z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <div className="space-y-8">
            <ScrollReveal delay={1}>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A6CFF]/10 border border-[#0A6CFF]/20 text-[#0A6CFF] text-xs font-semibold tracking-wider uppercase mb-6">
                  {im.badge}
                </div>
                <h2
                  id="im-gateway-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1A33] mb-5 leading-tight"
                >
                  {im.headingPart1}
                  <br />
                  <span className="gradient-text-brand">{im.headingBrand}</span>
                </h2>
                <p className="text-base text-[#3A5080] leading-relaxed">
                  {im.subtext}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {im.features.map((feat, i) => {
                const color = featureColors[i] ?? '#19B7FF';
                return (
                  <ScrollReveal key={feat.title} delay={((i % 3) + 2) as 2 | 3 | 4}>
                    <div
                      className="group p-5 rounded-2xl border bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      style={{ borderColor: `${color}20` }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `${color}15`, color }}
                        aria-hidden="true"
                      >
                        {(() => { const IC = featureIconComponents[i]; return IC ? <IC /> : null; })()}
                      </div>
                      <h3 className="text-sm font-bold text-[#0B1A33] mb-1.5">{feat.title}</h3>
                      <p className="text-xs text-[#7A94C1] leading-relaxed">{feat.desc}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
