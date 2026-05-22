'use client';

import { useState, useRef, useEffect } from 'react';
import { useI18n } from '@/i18n/I18nProvider';
import { locales, localeNames, type Locale } from '@/i18n/config';

interface LanguageSwitcherProps {
  /** Render as a full-width stacked button (for mobile drawer) */
  variant?: 'default' | 'mobile';
}

export default function LanguageSwitcher({ variant = 'default' }: LanguageSwitcherProps) {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const handleSelect = (l: Locale) => {
    setLocale(l);
    setOpen(false);
  };

  if (variant === 'mobile') {
    return (
      <div ref={containerRef} className="relative w-full">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-haspopup="listbox"
          className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm text-white/70 rounded-xl border border-white/15 hover:bg-white/8 transition-all duration-200"
        >
          <GlobeIcon />
          {localeNames[locale]}
          <svg
            className={`w-4 h-4 ml-auto transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            viewBox="0 0 12 12"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6 8L1 3h10z" />
          </svg>
        </button>

        {open && (
          <div
            role="listbox"
            aria-label="Select language"
            className="absolute bottom-full mb-2 left-0 right-0 bg-[#001440]/98 backdrop-blur-2xl border border-white/15 rounded-xl shadow-2xl overflow-hidden z-50"
          >
            {locales.map((l) => (
              <button
                key={l}
                role="option"
                aria-selected={l === locale}
                onClick={() => handleSelect(l)}
                className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 flex items-center gap-2 ${
                  l === locale
                    ? 'text-[#19B7FF] bg-[#19B7FF]/10'
                    : 'text-white/70 hover:text-white hover:bg-white/8'
                }`}
              >
                {l === locale && (
                  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                    <path d="M2 7l4 4 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                <span className={l !== locale ? 'ml-5' : ''}>{localeNames[l]}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop default variant
  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Switch language"
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/60 hover:text-white/90 rounded-lg hover:bg-white/10 transition-all duration-200"
      >
        <GlobeIcon />
        <span>{localeNames[locale]}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 12 12"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6 8L1 3h10z" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Select language"
          className="absolute top-full right-0 mt-2 w-40 bg-[#001440]/98 backdrop-blur-2xl border border-white/15 rounded-xl shadow-2xl overflow-hidden z-50"
        >
          {locales.map((l) => (
            <button
              key={l}
              role="option"
              aria-selected={l === locale}
              onClick={() => handleSelect(l)}
              className={`w-full text-left px-4 py-2.5 text-xs transition-all duration-200 flex items-center gap-2 ${
                l === locale
                  ? 'text-[#19B7FF] bg-[#19B7FF]/10'
                  : 'text-white/70 hover:text-white hover:bg-white/8'
              }`}
            >
              {l === locale && (
                <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              <span className={l !== locale ? 'ml-4' : ''}>{localeNames[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" />
      <ellipse cx="8" cy="8" rx="2.6" ry="6.5" />
      <line x1="1.5" y1="8" x2="14.5" y2="8" />
      <line x1="2.5" y1="5" x2="13.5" y2="5" />
      <line x1="2.5" y1="11" x2="13.5" y2="11" />
    </svg>
  );
}
