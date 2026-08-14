"use client";

/* The brand mark preserves the same markup used by the approved landing page. */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { type ReactNode } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { localeNames, locales } from "@/i18n/config";

type LegalShellProps = {
  children: ReactNode;
  title: string;
  updated?: string;
  badge?: string;
  copyright?: string;
  wide?: boolean;
};

function LegalShellContent({ children, title, updated, badge = "GoldHouse", copyright, wide }: LegalShellProps) {
  const { locale, setLocale } = useI18n();

  return (
    <div className="legal-page">
      <header className="legal-nav">
        <Link className="legal-brand" href="/" aria-label="GoldHouse home">
          <img src="/assets/figma/goldhouse-logo.svg" alt="" />
          <span>GoldHouse</span>
        </Link>
        <select value={locale} onChange={(event) => setLocale(event.target.value as typeof locale)} aria-label="Language">
          {locales.map((item) => <option value={item} key={item}>{localeNames[item]}</option>)}
        </select>
      </header>
      <main className={wide ? "legal-main legal-main-wide" : "legal-main"}>
        <div className="legal-badge">{badge}</div>
        <h1>{title}</h1>
        {updated ? <p className="legal-updated">{updated}</p> : null}
        <div className="legal-divider" aria-hidden="true" />
        {children}
        {copyright ? <p className="legal-copyright">{copyright}</p> : null}
      </main>
    </div>
  );
}

export default LegalShellContent;
