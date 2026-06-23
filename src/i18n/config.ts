export const locales = ['zh-CN', 'zh-TW', 'ko', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'zh-CN';

export const localeNames: Record<Locale, string> = {
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  'ko': '한국어',
  'en': 'English',
};

export const localeLangAttr: Record<Locale, string> = {
  'zh-CN': 'zh-CN',
  'zh-TW': 'zh-Hant',
  'ko': 'ko',
  'en': 'en',
};
