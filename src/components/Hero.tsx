'use client';

import ScrollReveal from './ScrollReveal';
import Parallax from './Parallax';
import { useI18n } from '@/i18n/I18nProvider';

export default function Hero() {
  const { dict } = useI18n();
  const h = dict.hero;
  const pm = h.phoneMockup;

  const chatDotColors = ['#19B7FF', '#FFC247', '#7B4FFF', '#0A6CFF'];
  const chatUnread = [3, 1, 0, 0];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient"
      aria-label="GoldHouse 首屏介绍"
    >
      {/* Grid overlay (subtle parallax) */}
      <Parallax speed={0.12} className="absolute inset-0" ariaHidden>
        <div className="absolute inset-0 bg-grid-overlay opacity-60" />
      </Parallax>

      {/* Glow orbs (deeper parallax layer) */}
      <Parallax speed={0.28} className="absolute inset-0" ariaHidden>
        <div className="glow-orb-blue w-[600px] h-[600px] -top-32 -left-32 opacity-70" />
        <div className="glow-orb-blue w-[400px] h-[400px] bottom-0 right-1/4 opacity-50" />
        <div className="glow-orb-gold w-[300px] h-[300px] top-1/4 right-16 opacity-60" />
      </Parallax>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#19B7FF]/30 bg-[#19B7FF]/10 text-[#19B7FF] text-xs font-semibold tracking-wider uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#19B7FF] pulse-ring" aria-hidden="true" />
                {h.badge}
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal delay={1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-6">
                {h.headlinePart1}{' '}
                <span className="gradient-text-gold">{h.headlineGold}</span>
                <br />
                {h.headlinePart2}
                <br />
                <span className="gradient-text-brand">{h.headlineBrand}</span>
              </h1>
            </ScrollReveal>

            {/* Subheadline */}
            <ScrollReveal delay={2}>
              <p className="text-base sm:text-lg text-white/65 leading-relaxed mb-9 max-w-xl mx-auto lg:mx-0">
                {h.subheadlinePart1}
                <strong className="text-white/85 font-semibold">{h.subheadlineStrong}</strong>
                {h.subheadlinePart2}
                {' '}
                {h.subheadlinePart3}
              </p>
            </ScrollReveal>

            {/* Download Buttons */}
            <ScrollReveal delay={3}>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {/* App Store */}
                <a
                  href="#cta"
                  className="store-btn group inline-flex items-center gap-3 px-5 py-3 rounded-xl"
                  aria-label={h.downloads.iosAriaLabel}
                >
                  <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.05 12.04c-.03-2.9 2.37-4.29 2.48-4.36-1.35-1.98-3.46-2.25-4.21-2.28-1.79-.18-3.5 1.06-4.41 1.06-.91 0-2.31-1.04-3.8-1.01-1.95.03-3.76 1.14-4.76 2.89-2.03 3.52-.52 8.73 1.45 11.59.96 1.4 2.11 2.97 3.61 2.91 1.45-.06 2-.94 3.75-.94 1.75 0 2.24.94 3.77.91 1.56-.03 2.54-1.42 3.49-2.83 1.1-1.62 1.55-3.19 1.58-3.27-.03-.02-3.03-1.16-3.06-4.61zM14.13 3.66c.8-.97 1.34-2.32 1.19-3.66-1.15.05-2.54.77-3.37 1.74-.74.86-1.39 2.23-1.22 3.55 1.28.1 2.59-.65 3.4-1.63z" />
                  </svg>
                  <span className="flex flex-col items-start leading-none">
                    <span className="text-[10px] text-white/60 mb-0.5">{h.downloads.iosSmall}</span>
                    <span className="text-sm font-semibold text-white">App Store</span>
                  </span>
                </a>
                {/* Google Play */}
                <a
                  href="#cta"
                  className="store-btn group inline-flex items-center gap-3 px-5 py-3 rounded-xl"
                  aria-label={h.downloads.androidAriaLabel}
                >
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3.6 1.5a1.5 1.5 0 00-.6 1.2v18.6c0 .5.24.94.6 1.2l10.4-10.5L3.6 1.5z" fill="#19B7FF" />
                    <path d="M17.9 8.4l-3.9 3.9 3.9 3.9 4.4-2.5c.86-.5.86-1.78 0-2.28L17.9 8.4z" fill="#FFC247" />
                    <path d="M3.6 1.5L14 11.7l3.9-3.3L5.4.44C5.04.25 4.66.2 4.3.3 4.04.37 3.8.4 3.6 1.5z" fill="#34D399" />
                    <path d="M3.6 22.5c.2.07.42.04.7-.12l13.6-7.66L14 11.7 3.6 22.5z" fill="#F87171" />
                  </svg>
                  <span className="flex flex-col items-start leading-none">
                    <span className="text-[10px] text-white/60 mb-0.5">{h.downloads.androidSmall}</span>
                    <span className="text-sm font-semibold text-white">Google Play</span>
                  </span>
                </a>
                {/* Android APK */}
                <a
                  href="#cta"
                  className="store-btn group inline-flex items-center gap-3 px-5 py-3 rounded-xl"
                  aria-label={h.downloads.apkAriaLabel}
                >
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#34D399" aria-hidden="true">
                    <path d="M17.6 9.48l1.84-3.18a.4.4 0 00-.69-.4l-1.86 3.23a11.5 11.5 0 00-9.78 0L5.25 5.9a.4.4 0 10-.69.4L6.4 9.48A10.8 10.8 0 001 18.13h22a10.8 10.8 0 00-5.4-8.65zM7 15.25a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                  <span className="flex flex-col items-start leading-none">
                    <span className="text-[10px] text-white/60 mb-0.5">{h.downloads.apkSmall}</span>
                    <span className="text-sm font-semibold text-white">Android APK</span>
                  </span>
                </a>
              </div>
            </ScrollReveal>

            {/* Stats Row */}
            <ScrollReveal delay={4}>
              <div className="mt-10 flex flex-wrap gap-8 justify-center lg:justify-start">
                {h.stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <p className="text-2xl font-black gradient-text-gold">{stat.value}</p>
                    <p className="text-xs text-white/50 mt-0.5 tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Phone Mockup */}
          <ScrollReveal delay={2} className="flex justify-center lg:justify-end">
            <Parallax speed={-0.06} className="relative flex items-center justify-center">
              {/* Halo ring */}
              <div
                className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-[#0A6CFF]/25 to-[#19B7FF]/25 blur-3xl"
                aria-hidden="true"
              />

              {/* Main Phone */}
              <div className="phone-mockup float-anim relative z-10" aria-label={pm.appLabel}>
                {/* Status bar */}
                <div className="absolute top-7 left-4 right-4 flex items-center justify-between z-20">
                  <span className="text-white/60 text-[9px] font-medium">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-2 border border-white/50 rounded-sm relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-1.5 bg-white/50 rounded-r-sm -mr-[3px]" />
                      <div className="absolute left-[2px] top-[2px] bottom-[2px] w-2/3 bg-white/70 rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* App Header */}
                <div className="absolute top-8 left-0 right-0 px-4 pt-10 z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-white font-bold text-sm">GoldHouse</p>
                      <p className="text-white/40 text-[10px]">{pm.activeGroups}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFC247] to-[#FF8C00] flex items-center justify-center text-white text-xs font-bold">
                      G
                    </div>
                  </div>

                  {/* Chat list */}
                  <div className="space-y-2">
                    {pm.chats.map((chat, i) => (
                      <div
                        key={chat.name}
                        className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-white/05 transition-colors"
                        aria-label={`${chat.name}: ${chat.msg}`}
                      >
                        <div
                          className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold"
                          style={{
                            background: `${chatDotColors[i]}33`,
                            border: `1.5px solid ${chatDotColors[i]}66`,
                          }}
                          aria-hidden="true"
                        >
                          {chat.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-white text-[10px] font-semibold truncate">{chat.name}</p>
                            <p className="text-white/35 text-[8px] flex-shrink-0 ml-1">{chat.time}</p>
                          </div>
                          <p className="text-white/50 text-[9px] truncate">{chat.msg}</p>
                        </div>
                        {(chatUnread[i] ?? 0) > 0 && (
                          <div
                            className="w-4 h-4 rounded-full bg-[#0A6CFF] flex items-center justify-center text-white text-[7px] font-bold flex-shrink-0"
                            aria-label={`${chatUnread[i]} 条未读消息`}
                          >
                            {chatUnread[i]}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Pay widget */}
                  <div className="mt-4 mx-1 p-3 rounded-xl bg-gradient-to-r from-[#FFC247]/15 to-[#FF8C00]/10 border border-[#FFC247]/25">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[#FFC247] text-[9px] font-semibold">{pm.payLabel}</p>
                        <p className="text-white text-xs font-bold mt-0.5">≈ $4,821.50</p>
                      </div>
                      <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#FFC247] to-[#FF8C00] text-white text-[9px] font-bold">
                        {pm.transfer}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Nav */}
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-3 border-t border-white/10 bg-gradient-to-t from-[#000D2B] to-transparent">
                  <div className="flex items-center justify-around">
                    {pm.tabs.map((tab, i) => (
                      <button
                        key={tab}
                        className={`flex flex-col items-center gap-0.5 ${i === 0 ? 'text-[#19B7FF]' : 'text-white/35'}`}
                      >
                        <div className="w-4 h-4 rounded-sm bg-current opacity-80" aria-hidden="true" />
                        <span className="text-[7px]">{tab}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Parallax>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F2F6FF] to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
