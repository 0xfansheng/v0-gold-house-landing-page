'use client';

import { useEffect, useState } from 'react';
import { useI18n } from '@/i18n/I18nProvider';

const SESSION_KEY = 'gh-splash-seen';
const HOLD_MS = 1700; // time fully visible before the exit animation
const FADE_MS = 700; // must match .splash-out duration in globals.css

type Phase = 'enter' | 'leaving' | 'done';

export default function SplashScreen() {
  const { dict } = useI18n();
  const s = dict.splash;
  const [phase, setPhase] = useState<Phase>('enter');

  useEffect(() => {
    // Show only once per browser session to avoid nagging returning visitors.
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(SESSION_KEY) === '1';
    } catch {
      // sessionStorage unavailable (private mode) — just play it.
    }
    if (alreadySeen) {
      // Defer out of the synchronous effect body (lint: no setState-in-effect).
      const id = setTimeout(() => setPhase('done'), 0);
      return () => clearTimeout(id);
    }

    // Lock background scroll while the overlay is up.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const leaveTimer = setTimeout(() => setPhase('leaving'), HOLD_MS);
    const doneTimer = setTimeout(() => {
      setPhase('done');
      // Restore scrolling now: the component renders null when done but stays
      // mounted, so the cleanup below (unmount-only) would never run and would
      // leave the body scroll-locked on first visit.
      document.body.style.overflow = prevOverflow;
      try {
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        // ignore
      }
    }, HOLD_MS + FADE_MS);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={`splash-overlay${phase === 'leaving' ? ' is-leaving' : ''}`}
      role="presentation"
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <div className="absolute w-[640px] h-[640px] rounded-full bg-[#0A6CFF]/20 blur-[120px] pointer-events-none" />
      <div className="absolute w-[320px] h-[320px] rounded-full bg-[#FFC247]/10 blur-[100px] translate-y-32 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-overlay opacity-30 pointer-events-none" />

      <div className="relative flex flex-col items-center px-6 text-center">
        {/* Logo lockup */}
        <div className="splash-logo flex items-center gap-3 mb-9">
          <span className="relative flex items-center justify-center">
            <span className="absolute inset-0 rounded-2xl bg-[#0A6CFF]/40 blur-xl" aria-hidden="true" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="" className="relative w-14 h-14 rounded-2xl" width={56} height={56} />
          </span>
          <span className="text-white font-bold text-2xl tracking-tight">
            Gold<span className="text-[#FFC247]">House</span>
          </span>
        </div>

        {/* Slogan — current locale */}
        <h1 className="splash-line-1 text-4xl sm:text-6xl font-black leading-[1.1] gradient-text-brand mb-4">
          {s.slogan}
        </h1>

        {/* Signature — paired language */}
        <p className="splash-line-2 text-sm sm:text-base font-semibold tracking-[0.32em] uppercase gradient-text-gold mb-10">
          {s.sloganSub}
        </p>

        {/* Loading bar */}
        <div className="splash-line-3 w-44 sm:w-56">
          <div className="h-px w-full bg-white/10 overflow-hidden rounded-full">
            <div className="splash-bar h-full w-full bg-gradient-to-r from-[#19B7FF] to-[#0A6CFF]" />
          </div>
          <p className="mt-4 text-[11px] tracking-[0.2em] uppercase text-white/35">{s.loadingLabel}</p>
        </div>
      </div>
    </div>
  );
}
