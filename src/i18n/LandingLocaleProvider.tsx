"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { defaultLocale, localeLangAttr, locales, type Locale } from "./config";

const STORAGE_KEY = "goldhouse-locale";

type LandingLocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LandingLocaleContext = createContext<LandingLocaleContextValue | null>(null);

export function LandingLocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    let storedLocale: Locale | null = null;

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && locales.includes(stored as Locale)) {
        storedLocale = stored as Locale;
      }
    } catch {
      // localStorage may be unavailable in restricted browsing contexts.
    }

    if (!storedLocale) {
      document.documentElement.lang = localeLangAttr[defaultLocale];
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => {
      setLocaleState(storedLocale);
      document.documentElement.lang = localeLangAttr[storedLocale];
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    document.documentElement.lang = localeLangAttr[nextLocale];

    try {
      window.localStorage.setItem(STORAGE_KEY, nextLocale);
    } catch {
      // Keep the in-memory selection if persistence is unavailable.
    }
  }, []);

  return (
    <LandingLocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LandingLocaleContext.Provider>
  );
}

export function useLandingLocale(): LandingLocaleContextValue {
  const context = useContext(LandingLocaleContext);

  if (!context) {
    throw new Error("useLandingLocale must be used inside LandingLocaleProvider");
  }

  return context;
}
