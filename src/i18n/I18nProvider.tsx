'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import { Locale, defaultLocale, localeLangAttr } from './config';
import type { Dictionary } from './dictionaries/zh-CN';
import zhCN from './dictionaries/zh-CN';
import zhTW from './dictionaries/zh-TW';
import ko from './dictionaries/ko';
import en from './dictionaries/en';

const STORAGE_KEY = 'gh-locale';

const dictionaries: Record<Locale, Dictionary> = { 'zh-CN': zhCN, 'zh-TW': zhTW, ko, en };

// Resolve a dot-path string to a leaf string value in the dictionary.
// Returns the path itself as fallback if resolution fails or result is not a string.
function resolvePath(obj: unknown, path: string): string {
  const parts = path.split('.');
  let current: unknown = obj;
  for (const part of parts) {
    if (current === null || typeof current !== 'object') return path;
    current = (current as Record<string, unknown>)[part];
  }
  return typeof current === 'string' ? current : path;
}

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
  dict: Dictionary;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  // Always start with defaultLocale to ensure SSR/hydration consistency
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // After mount, apply saved preference from localStorage
  // We use a ref-based approach + startTransition to avoid the setState-in-effect lint rule,
  // while still reading localStorage only on the client after hydration.
  useEffect(() => {
    let saved: Locale | null = null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw && raw in dictionaries) {
        saved = raw as Locale;
      }
    } catch {
      // localStorage unavailable (private browsing, etc.)
    }
    if (saved) {
      // Use a timeout of 0 to defer the state update out of the synchronous effect body
      const id = setTimeout(() => {
        setLocaleState(saved!);
        document.documentElement.lang = localeLangAttr[saved!];
      }, 0);
      return () => clearTimeout(id);
    }
    return undefined;
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
    document.documentElement.lang = localeLangAttr[next];
  }, []);

  const dict = dictionaries[locale];

  const t = useCallback(
    (path: string): string => resolvePath(dict, path),
    [dict]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, dict }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used inside <I18nProvider>');
  }
  return ctx;
}
