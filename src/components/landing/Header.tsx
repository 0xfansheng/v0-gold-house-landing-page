"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Link from "next/link";
import { links } from "@/config/links";
import { localeNames, translations, type Locale } from "@/i18n/landing";

function Brand({ locale }: { locale: Locale }) {
  return (
    <Link className="brand" href="/#top" aria-label={translations[locale].footer.home}>
      <img src="/assets/figma/goldhouse-logo.svg?v=2" alt="" />
      <span>GoldHouse</span>
    </Link>
  );
}

export default function Header({ locale, setLocale, openDownload, page = "home" }: { locale: Locale; setLocale: (locale: Locale) => void; openDownload: () => void; page?: "home" | "announcements" | "policy" }) {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const copy = translations[locale].nav;

  useEffect(() => {
    let frame = 0;
    const syncHeader = () => {
      frame = 0;
      setScrolled(window.scrollY > 28);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(syncHeader);
    };

    syncHeader();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-open" : ""}${page === "announcements" ? " announcement-header" : ""}`}>
      <Brand locale={locale} />
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/#product">{copy.product}</Link>
        <Link href="/#ucard">{copy.ucard}</Link>
        <Link href="/#ecosystem">{copy.ecosystem}</Link>
        <Link className={page === "announcements" ? "is-active" : undefined} aria-current={page === "announcements" ? "page" : undefined} href="/announcements">{copy.announcements}</Link>
        <Link href="/#about">{copy.about}</Link>
      </nav>
      <div className="header-actions">
        <div className="language-control">
          <button className="language-button" type="button" aria-label={translations[locale].footer.language} aria-expanded={languageOpen} onClick={() => setLanguageOpen((open) => !open)}>
            <svg className="language-icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3.5 12h17M12 3c2.45 2.47 3.7 5.47 3.7 9S14.45 18.53 12 21c-2.45-2.47-3.7-5.47-3.7-9S9.55 5.47 12 3Z" />
            </svg>
            <span>{localeNames[locale]}</span>
            <svg className="language-caret" viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4" /></svg>
          </button>
          {languageOpen && (
            <div className="language-menu" role="menu">
              {(Object.keys(localeNames) as Locale[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  role="menuitemradio"
                  aria-checked={item === locale}
                  onClick={() => { setLocale(item); setLanguageOpen(false); }}
                >
                  <span>{localeNames[item]}</span>
                  {item === locale && <span aria-hidden="true">✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>
        <a className="button button-secondary button-header" href={links.webApp} target="_blank" rel="noreferrer">{copy.open}</a>
        <button className="button button-primary button-header" type="button" onClick={openDownload}>{copy.download}</button>
      </div>
      <button className="mobile-menu-button" type="button" aria-label={copy.menu} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
        <span /><span />
      </button>
      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation">
          <Link href="/#product" onClick={() => setMenuOpen(false)}>{copy.product}</Link>
          <Link href="/#ucard" onClick={() => setMenuOpen(false)}>{copy.ucard}</Link>
          <Link href="/#ecosystem" onClick={() => setMenuOpen(false)}>{copy.ecosystem}</Link>
          <Link href="/announcements" aria-current={page === "announcements" ? "page" : undefined} onClick={() => setMenuOpen(false)}>{copy.announcements}</Link>
          <Link href="/#about" onClick={() => setMenuOpen(false)}>{copy.about}</Link>
          <label className="mobile-language-control">
            <span className="sr-only">{translations[locale].footer.language}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3.5 12h17M12 3c2.4 2.6 3.6 5.6 3.6 9S14.4 18.4 12 21M12 3C9.6 5.6 8.4 8.6 8.4 12S9.6 18.4 12 21" />
            </svg>
            <select value={locale} onChange={(event) => setLocale(event.target.value as Locale)}>
              {(Object.keys(localeNames) as Locale[]).map((item) => <option key={item} value={item}>{localeNames[item]}</option>)}
            </select>
          </label>
          <div className="mobile-menu-actions">
            <a className="button button-secondary" href={links.webApp} target="_blank" rel="noreferrer">{copy.open}</a>
            <button className="button button-primary" type="button" onClick={() => { setMenuOpen(false); openDownload(); }}>{copy.download}</button>
          </div>
        </nav>
      )}
    </header>
  );
}
