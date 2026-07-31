'use client';

import ScrollReveal from './ScrollReveal';
import Parallax from './Parallax';
import { useI18n } from '@/i18n/I18nProvider';

const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.goldhouse.android&pcampaignid=web_share';
const WEB_APP_URL = 'https://imweb.goldhouse.cc'; // GoldHouse 网页版（免安装）
const DOWNLOAD_VERSION = 'v1.0.10'; // Android APK direct download
const TESTFLIGHT_VERSION = 'v1.0.11'; // iOS TestFlight beta
const GOOGLE_PLAY_VERSION = 'v1.0.10'; // Android Google Play
// App Store 入口暂时下线，保留常量以便将来恢复
// const APP_STORE_VERSION = 'v1.0.4'; // iOS App Store official release

export default function Hero() {
  const { dict } = useI18n();
  const h = dict.hero;
  const s = dict.splash;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
      aria-label="GoldHouse 首屏介绍"
    >
      {/* Subtle grid (gentle parallax) */}
      <Parallax speed={0.1} className="absolute inset-0" ariaHidden>
        <div className="absolute inset-0 bg-grid-overlay opacity-50" />
      </Parallax>

      {/* Ambient glow orbs — restrained, for depth */}
      <Parallax speed={0.24} className="absolute inset-0" ariaHidden>
        <div className="glow-orb-blue drift-slow w-[720px] h-[720px] -top-48 left-1/2 -translate-x-1/2 opacity-60" />
        <div className="glow-orb-gold w-[360px] h-[360px] bottom-8 right-[12%] opacity-40" />
        <div className="glow-orb-blue w-[420px] h-[420px] bottom-0 left-[8%] opacity-30" />
      </Parallax>

      {/* Top + bottom vignette to focus the center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(80% 60% at 50% 42%, transparent 40%, rgba(0,8,28,0.55) 100%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 text-center">
        {/* Badge */}
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#19B7FF]/30 bg-[#19B7FF]/10 text-[#19B7FF] text-xs font-semibold tracking-wider uppercase mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#19B7FF] pulse-ring" aria-hidden="true" />
            {h.badge}
          </div>
        </ScrollReveal>

        {/* Slogan — the centerpiece */}
        <ScrollReveal delay={1}>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[1.04] tracking-tight mb-6">
            <span className="gradient-text-brand">{s.slogan}</span>
          </h1>
        </ScrollReveal>

        {/* English signature */}
        <ScrollReveal delay={2}>
          <p className="text-sm sm:text-lg font-semibold tracking-[0.34em] uppercase gradient-text-gold mb-9">
            {s.sloganSub}
          </p>
        </ScrollReveal>

        {/* Concise positioning */}
        <ScrollReveal delay={2}>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-11 max-w-2xl mx-auto">
            {h.subheadlinePart1}
            <strong className="text-white/85 font-semibold">{h.subheadlineStrong}</strong>
            {h.subheadlinePart2} {h.subheadlinePart3}
          </p>
        </ScrollReveal>

        {/* Download Buttons */}
        <ScrollReveal delay={3}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto lg:flex lg:max-w-none lg:flex-wrap lg:justify-center">
            {/* iOS — App Store（暂时下线，保留以便将来恢复）
            <a
              href="https://apps.apple.com/app/goldhouse-social/id6772489278"
              target="_blank"
              rel="noopener noreferrer"
              className="store-btn group inline-flex w-full lg:w-auto items-center justify-center gap-2.5 px-3.5 py-3 sm:gap-3 sm:px-5 rounded-xl"
              aria-label={h.downloads.appStoreAriaLabel}
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.05 12.04c-.03-2.9 2.37-4.29 2.48-4.36-1.35-1.98-3.46-2.25-4.21-2.28-1.79-.18-3.5 1.06-4.41 1.06-.91 0-2.31-1.04-3.8-1.01-1.95.03-3.76 1.14-4.76 2.89-2.03 3.52-.52 8.73 1.45 11.59.96 1.4 2.11 2.97 3.61 2.91 1.45-.06 2-.94 3.75-.94 1.75 0 2.24.94 3.77.91 1.56-.03 2.54-1.42 3.49-2.83 1.1-1.62 1.55-3.19 1.58-3.27-.03-.02-3.03-1.16-3.06-4.61zM14.13 3.66c.8-.97 1.34-2.32 1.19-3.66-1.15.05-2.54.77-3.37 1.74-.74.86-1.39 2.23-1.22 3.55 1.28.1 2.59-.65 3.4-1.63z" />
              </svg>
              <span className="flex flex-col items-start leading-none whitespace-nowrap">
                <span className="text-[10px] text-white/60 mb-0.5">{h.downloads.appStoreSmall} · {APP_STORE_VERSION}</span>
                <span className="text-sm font-semibold text-white">iPhone / iPad</span>
              </span>
            </a>
            */}
            {/* iOS — TestFlight beta (live) */}
            <a
              href="https://testflight.apple.com/join/qvXguqA2"
              target="_blank"
              rel="noopener noreferrer"
              className="store-btn group inline-flex w-full lg:w-auto items-center justify-center gap-2.5 px-3.5 py-3 sm:gap-3 sm:px-5 rounded-xl"
              aria-label={h.downloads.iosAriaLabel}
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.05 12.04c-.03-2.9 2.37-4.29 2.48-4.36-1.35-1.98-3.46-2.25-4.21-2.28-1.79-.18-3.5 1.06-4.41 1.06-.91 0-2.31-1.04-3.8-1.01-1.95.03-3.76 1.14-4.76 2.89-2.03 3.52-.52 8.73 1.45 11.59.96 1.4 2.11 2.97 3.61 2.91 1.45-.06 2-.94 3.75-.94 1.75 0 2.24.94 3.77.91 1.56-.03 2.54-1.42 3.49-2.83 1.1-1.62 1.55-3.19 1.58-3.27-.03-.02-3.03-1.16-3.06-4.61zM14.13 3.66c.8-.97 1.34-2.32 1.19-3.66-1.15.05-2.54.77-3.37 1.74-.74.86-1.39 2.23-1.22 3.55 1.28.1 2.59-.65 3.4-1.63z" />
              </svg>
              <span className="flex flex-col items-start leading-none whitespace-nowrap">
                <span className="text-[10px] text-white/60 mb-0.5">{h.downloads.iosSmall} · {TESTFLIGHT_VERSION}</span>
                <span className="text-sm font-semibold text-white">iPhone / iPad</span>
              </span>
            </a>
            {/* Google Play */}
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="store-btn group inline-flex w-full lg:w-auto items-center justify-center gap-2.5 px-3.5 py-3 sm:gap-3 sm:px-5 rounded-xl"
              aria-label={h.downloads.androidAriaLabel}
            >
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3.6 1.5a1.5 1.5 0 00-.6 1.2v18.6c0 .5.24.94.6 1.2l10.4-10.5L3.6 1.5z" fill="#19B7FF" />
                <path d="M17.9 8.4l-3.9 3.9 3.9 3.9 4.4-2.5c.86-.5.86-1.78 0-2.28L17.9 8.4z" fill="#FFC247" />
                <path d="M3.6 1.5L14 11.7l3.9-3.3L5.4.44C5.04.25 4.66.2 4.3.3 4.04.37 3.8.4 3.6 1.5z" fill="#34D399" />
                <path d="M3.6 22.5c.2.07.42.04.7-.12l13.6-7.66L14 11.7 3.6 22.5z" fill="#F87171" />
              </svg>
              <span className="flex flex-col items-start leading-none whitespace-nowrap">
                <span className="text-[10px] text-white/60 mb-0.5">{h.downloads.androidSmall} · {GOOGLE_PLAY_VERSION}</span>
                <span className="text-sm font-semibold text-white">Android</span>
              </span>
            </a>
            {/* Android APK — live download */}
            <a
              href="https://bridgeweb.goldhouse.cc/apk/releases/goldhouse.apk"
              className="store-btn group inline-flex w-full lg:w-auto items-center justify-center gap-2.5 px-3.5 py-3 sm:gap-3 sm:px-5 rounded-xl"
              aria-label={h.downloads.apkAriaLabel}
            >
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#34D399" aria-hidden="true">
                <path d="M17.6 9.48l1.84-3.18a.4.4 0 00-.69-.4l-1.86 3.23a11.5 11.5 0 00-9.78 0L5.25 5.9a.4.4 0 10-.69.4L6.4 9.48A10.8 10.8 0 001 18.13h22a10.8 10.8 0 00-5.4-8.65zM7 15.25a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
              <span className="flex flex-col items-start leading-none whitespace-nowrap">
                <span className="text-[10px] text-white/60 mb-0.5">{h.downloads.apkSmall} · {DOWNLOAD_VERSION}</span>
                <span className="text-sm font-semibold text-white">Android</span>
              </span>
            </a>
            {/* Web App — live, zero-install entry (highlighted as the lowest-friction option) */}
            <a
              href={WEB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="store-btn group inline-flex w-full lg:w-auto items-center justify-center gap-2.5 px-3.5 py-3 sm:gap-3 sm:px-5 rounded-xl !border-[#19B7FF]/50 !bg-[#19B7FF]/10"
              aria-label={h.downloads.webAriaLabel}
            >
              <svg className="w-6 h-6 flex-shrink-0 text-[#19B7FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c2.5 2.5 3.5 5.7 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.7-3.5-9s1-6.5 3.5-9z" />
              </svg>
              <span className="flex flex-col items-start leading-none whitespace-nowrap">
                <span className="text-[10px] text-white/60 mb-0.5">{h.downloads.webName}</span>
                <span className="text-sm font-semibold text-white">{h.downloads.webSmall}</span>
              </span>
            </a>
          </div>
        </ScrollReveal>

        {/* Stats Row */}
        <ScrollReveal delay={4}>
          <div className="mt-14 flex flex-wrap gap-x-12 gap-y-6 justify-center">
            {h.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-black gradient-text-gold">{stat.value}</p>
                <p className="text-xs text-white/50 mt-1 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" aria-hidden="true">
        <span className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center p-1.5">
          <span className="hero-scroll-dot w-1 h-1.5 rounded-full bg-white/70" />
        </span>
      </div>

      {/* Bottom gradient fade into the next (light) section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#F2F6FF] to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
