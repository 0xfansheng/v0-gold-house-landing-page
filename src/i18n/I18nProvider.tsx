'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  ReactNode,
} from 'react';
import { Locale, defaultLocale, localeLangAttr, locales } from './config';
import type { Dictionary } from './dictionaries/zh-CN';
import zhCN from './dictionaries/zh-CN';

const STORAGE_KEY = 'gh-locale';

const dictionaryCache: Partial<Record<Locale, Dictionary>> = {
  'zh-CN': zhCN,
};

const dictionaryLoaders: Record<Exclude<Locale, 'zh-CN'>, () => Promise<Dictionary>> = {
  'zh-TW': () => import('./dictionaries/zh-TW').then((module) => module.default),
  ko: () => import('./dictionaries/ko').then((module) => module.default),
  en: () => import('./dictionaries/en').then((module) => module.default),
};

async function loadDictionary(locale: Locale): Promise<Dictionary> {
  if (locale === 'zh-CN') return zhCN;

  const cached = dictionaryCache[locale];
  if (cached) return cached;

  const loaded = await dictionaryLoaders[locale]();
  dictionaryCache[locale] = loaded;
  return loaded;
}

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
  const [dict, setDict] = useState<Dictionary>(zhCN);
  const requestedLocale = useRef<Locale>(defaultLocale);

  const applyLocale = useCallback((next: Locale, persist: boolean) => {
    requestedLocale.current = next;

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
    }

    void loadDictionary(next)
      .then((loaded) => {
        // Ignore a slower import when the user has already selected another locale.
        if (requestedLocale.current !== next) return;

        setDict(loaded);
        setLocaleState(next);
        document.documentElement.lang = localeLangAttr[next];
      })
      .catch(() => {
        // Keep the currently rendered locale if an on-demand language chunk fails.
      });
  }, []);

  // After mount, apply saved preference from localStorage
  // Defer the locale update while still reading localStorage only after hydration.
  useEffect(() => {
    let saved: Locale | null = null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw && locales.includes(raw as Locale)) {
        saved = raw as Locale;
      }
    } catch {
      // localStorage unavailable (private browsing, etc.)
    }
    if (saved) {
      // Use a timeout of 0 to defer the state update out of the synchronous effect body
      const id = setTimeout(() => {
        applyLocale(saved!, false);
      }, 0);
      return () => clearTimeout(id);
    }
    return undefined;
  }, [applyLocale]);

  const setLocale = useCallback((next: Locale) => {
    applyLocale(next, true);
  }, [applyLocale]);

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
