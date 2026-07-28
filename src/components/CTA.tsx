'use client';

import ScrollReveal from './ScrollReveal';
import { useI18n } from '@/i18n/I18nProvider';

const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.goldhouse.android&pcampaignid=web_share';
const WEB_APP_URL = 'https://imweb.goldhouse.cc'; // GoldHouse 网页版（免安装）
const DOWNLOAD_VERSION = 'v1.0.10'; // Android APK direct download
const TESTFLIGHT_VERSION = 'v1.0.10'; // iOS TestFlight beta
const GOOGLE_PLAY_VERSION = 'v1.0.10'; // Android Google Play
// App Store 入口暂时下线，保留常量以便将来恢复
// const APP_STORE_VERSION = 'v1.0.4'; // iOS App Store official release

export default function CTA() {
  const { dict } = useI18n();
  const c = dict.cta;

  return (
    <section
      id="cta"
      className="relative py-24 lg:py-32 overflow-hidden bg-[#F2F6FF]"
      aria-labelledby="cta-heading"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, #EBF4FF 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="relative overflow-hidden rounded-3xl p-6 sm:p-16 text-center"
          style={{ background: 'linear-gradient(135deg, #001A5C 0%, #002C8C 40%, #0A3AAA 70%, #0A6CFF 100%)' }}
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-grid-overlay opacity-40" aria-hidden="true" />

          {/* Glow effects */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 rounded-full opacity-35 blur-3xl"
            style={{ background: 'radial-gradient(ellipse, #19B7FF 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-20 blur-2xl"
            style={{ background: 'radial-gradient(circle, #FFC247 0%, transparent 70%)' }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/70 text-xs font-semibold tracking-wider uppercase mb-8">
                {c.badge}
              </div>
              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-5 leading-tight"
              >
                {c.headingPart1}{' '}
                <span className="gradient-text-gold">{c.headingGold}</span>
                {' '}{c.headingPart2}
              </h2>
              <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
                {c.subtext}
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-12 lg:flex lg:max-w-none lg:flex-wrap lg:justify-center">
                {/* iOS — App Store（暂时下线，保留以便将来恢复）
                <a
                  href="https://apps.apple.com/app/goldhouse-social/id6772489278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full lg:w-auto items-center justify-center gap-2.5 px-4 py-3.5 sm:gap-3 sm:px-7 sm:py-4 btn-gradient rounded-2xl text-white"
                  aria-label={c.appStoreLabel}
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" viewBox="0 0 28 28" fill="currentColor" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.37 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left whitespace-nowrap">
                    <p className="text-[10px] text-white/60 leading-none mb-0.5">{c.appStoreSmall} · {APP_STORE_VERSION}</p>
                    <p className="text-sm font-semibold leading-none">{c.appStoreName}</p>
                  </div>
                </a>
                */}

                {/* iOS — TestFlight beta, live */}
                <a
                  href="https://testflight.apple.com/join/6pVzHRZf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full lg:w-auto items-center justify-center gap-2.5 px-4 py-3.5 sm:gap-3 sm:px-7 sm:py-4 btn-gradient rounded-2xl text-white"
                  aria-label={c.testflightLabel}
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" viewBox="0 0 28 28" fill="currentColor" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.37 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left whitespace-nowrap">
                    <p className="text-[10px] text-white/60 leading-none mb-0.5">{c.testflightSmall} · {TESTFLIGHT_VERSION}</p>
                    <p className="text-sm font-semibold leading-none">{c.testflightName}</p>
                  </div>
                </a>

                {/* Google Play */}
                <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full lg:w-auto items-center justify-center gap-2.5 px-4 py-3.5 sm:gap-3 sm:px-7 sm:py-4 btn-gradient rounded-2xl text-white"
                  aria-label={c.googlePlayLabel}
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" viewBox="0 0 28 28" fill="currentColor" aria-hidden="true">
                    <path d="M3.18 1.16L15.3 13.29 3.2 25.39a2 2 0 01-.02-24.23zM16.5 14.5l3.19 3.19-12.43 7.18L16.5 14.5zM22.75 12.15a2 2 0 010 3.46l-2.56 1.48-3.44-3.44 3.44-3.44 2.56 1.44zM7.26 3.13l12.43 7.18-3.19 3.19L7.26 3.13z" />
                  </svg>
                  <div className="text-left whitespace-nowrap">
                    <p className="text-[10px] text-white/60 leading-none mb-0.5">{c.googlePlaySmall} · {GOOGLE_PLAY_VERSION}</p>
                    <p className="text-sm font-semibold leading-none">{c.googlePlayName}</p>
                  </div>
                </a>

                {/* Android APK — live download */}
                <a
                  href="https://bridgeweb.goldhouse.cc/apk/releases/goldhouse.apk"
                  className="group inline-flex w-full lg:w-auto items-center justify-center gap-2.5 px-4 py-3.5 sm:gap-3 sm:px-7 sm:py-4 btn-gradient rounded-2xl text-white"
                  aria-label={c.apkLabel}
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.6 9.48l1.84-3.18a.4.4 0 00-.69-.4l-1.86 3.23a11.5 11.5 0 00-9.78 0L5.25 5.9a.4.4 0 10-.69.4L6.4 9.48A10.8 10.8 0 001 18.13h22a10.8 10.8 0 00-5.4-8.65zM7 15.25a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                  <div className="text-left whitespace-nowrap">
                    <p className="text-[10px] text-white/70 leading-none mb-0.5">{c.apkSmall} · {DOWNLOAD_VERSION}</p>
                    <p className="text-sm font-semibold leading-none">{c.apkName}</p>
                  </div>
                </a>

                {/* Web App — live, zero-install entry (last) */}
                <a
                  href={WEB_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full lg:w-auto items-center justify-center gap-2.5 px-4 py-3.5 sm:gap-3 sm:px-7 sm:py-4 bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1"
                  aria-label={c.webAppLabel}
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3c2.5 2.5 3.5 5.7 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.7-3.5-9s1-6.5 3.5-9z" />
                  </svg>
                  <div className="text-left whitespace-nowrap">
                    <p className="text-[10px] text-white/70 leading-none mb-0.5">{c.webAppSmall}</p>
                    <p className="text-sm font-semibold leading-none">{c.webAppText}</p>
                  </div>
                </a>
              </div>
            </ScrollReveal>

            {/* Trust indicators */}
            <ScrollReveal delay={2}>
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/40 text-xs">
                {c.trust.map((item) => (
                  <div key={item.text} className="flex items-center gap-1.5">
                    <span aria-hidden="true">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
