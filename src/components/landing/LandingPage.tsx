"use client";

/* Source markup intentionally uses img elements during the pixel-accurate migration. */
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import FlowField from "./FlowField";
import { appVersions, links } from "@/config/links";
import { partners as brands } from "@/config/partners";
import { localeNames, translations, type Locale } from "@/i18n/landing";

type FooterDestination =
  | { kind: "internal"; href: string }
  | { kind: "external"; href: string }
  | { kind: "download" };

const footerDestinations: FooterDestination[][] = [
  [
    { kind: "internal", href: "#top" },
    { kind: "internal", href: "#one-account" },
    { kind: "internal", href: "#all-in-one" },
    { kind: "internal", href: "#ucard" },
  ],
  [
    { kind: "internal", href: "#product-did" },
    { kind: "internal", href: "#product-pay" },
    { kind: "internal", href: "#product-governance" },
    { kind: "internal", href: "#product-dapp" },
  ],
  [
    { kind: "internal", href: "#community" },
    { kind: "internal", href: "#ecosystem" },
  ],
  [
    { kind: "external", href: links.webApp },
    { kind: "download" },
  ],
];

const capabilityVisuals = [
  { theme: "identity", src: "/assets/everything/identity.png" },
  { theme: "pay", src: "/assets/everything/pay.png" },
  { theme: "governance", src: "/assets/everything/governance.png" },
  { theme: "dapp", src: "/assets/everything/dapp.png" },
] as const;

const capabilityAnchors = ["product-did", "product-pay", "product-governance", "product-dapp"] as const;

const oneAccountMedia = {
  desktop: "/assets/product/web/one-account-v2.png",
  mobile: "/assets/product/mobile/one-account.png",
};

const productTabMedia = [
  { desktop: "/assets/product/web/message.png", mobile: "/assets/product/mobile/message.png" },
  { desktop: "/assets/product/web/community.png", mobile: "/assets/product/mobile/community.png" },
  { desktop: "/assets/product/web/discover.png", mobile: "/assets/product/mobile/discover.png" },
  { desktop: "/assets/product/web/profile.png", mobile: "/assets/product/mobile/profile.png" },
] as const;

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="GoldHouse home">
      <img src="/assets/figma/goldhouse-logo.svg?v=2" alt="" />
      <span>GoldHouse</span>
    </a>
  );
}

function Header({ locale, setLocale, openDownload }: { locale: Locale; setLocale: (locale: Locale) => void; openDownload: () => void }) {
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
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
      <Brand />
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#product">{copy.product}</a>
        <a href="#ucard">{copy.ucard}</a>
        <a href="#ecosystem">{copy.ecosystem}</a>
        <a href="#about">{copy.about}</a>
      </nav>
      <div className="header-actions">
        <div className="language-control">
          <button className="language-button" type="button" aria-expanded={languageOpen} onClick={() => setLanguageOpen((open) => !open)}>
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
          <a href="#product" onClick={() => setMenuOpen(false)}>{copy.product}</a>
          <a href="#ucard" onClick={() => setMenuOpen(false)}>{copy.ucard}</a>
          <a href="#ecosystem" onClick={() => setMenuOpen(false)}>{copy.ecosystem}</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>{copy.about}</a>
          <label className="mobile-language-control">
            <span className="sr-only">Language</span>
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

function LogoMarquee() {
  return (
    <div className="logo-marquee" aria-label="GoldHouse ecosystem partners">
      <div className="logo-track">
        {[0, 1, 2, 3].map((group) => (
          <div className="logo-group" key={group} aria-hidden={group > 0}>
            {brands.map((brand) => (
              <div className="logo-item" key={brand.name}>
                <img src={brand.icon} alt="" />
                <span>{brand.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description: string; light?: boolean }) {
  return (
    <div className={`section-heading${light ? " section-heading-light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

function Capabilities({ locale }: { locale: Locale }) {
  const copy = translations[locale].core;
  const [active, setActive] = useState<number | null>(0);

  useEffect(() => {
    const syncActiveCapability = () => {
      const index = capabilityAnchors.findIndex((anchor) => `#${anchor}` === window.location.hash);
      if (index >= 0) setActive(index);
    };

    syncActiveCapability();
    window.addEventListener("hashchange", syncActiveCapability);
    return () => window.removeEventListener("hashchange", syncActiveCapability);
  }, []);

  return (
    <section className="capabilities" id="product">
      <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <div className="capability-list">
        {copy.items.map((item, index) => {
          const open = active === index;
          const visual = capabilityVisuals[index];
          return (
            <button
              className={`capability-row capability-row-${visual.theme}${open ? " is-open" : ""}`}
              id={capabilityAnchors[index]}
              type="button"
              key={item.label}
              aria-expanded={open}
              onClick={() => setActive((current) => current === index ? null : index)}
            >
              <span className="capability-label">{item.label}</span>
              <span className="capability-copy">
                <strong>{item.title}</strong>
                <span className="capability-description"><span>{item.description}</span></span>
              </span>
              <span className="capability-visual" aria-hidden="true">
                <img src={visual.src} alt="" loading="lazy" decoding="async" />
              </span>
              <span className="capability-plus" aria-hidden="true">+</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function ProductShowcase({ eyebrow, title, description, kind, tabs }: { eyebrow: string; title: string; description: string; kind: "chat" | "wallet"; tabs?: string[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const media = tabs ? (productTabMedia[activeTab] ?? productTabMedia[0]) : oneAccountMedia;
  return (
    <section className="product-showcase" id={tabs ? "all-in-one" : "one-account"} data-active-tab={activeTab}>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      {tabs && (
        <div className="product-tabs" role="tablist" aria-label="GoldHouse product navigation">
          {tabs.map((tab, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              aria-label={tab}
              className={activeTab === index ? "is-active" : ""}
              key={tab}
              onClick={() => setActiveTab(index)}
            >
              <span>{tab}</span>
            </button>
          ))}
        </div>
      )}
      <div className="product-glow" aria-hidden="true" />
      <div className="desktop-product-frame">
        <img key={`${media.desktop}-${activeTab}`} className="figma-product-image" src={media.desktop} alt={kind === "chat" ? "GoldHouse connected account interface" : `GoldHouse ${tabs?.[activeTab] ?? "product"} interface`} loading="lazy" decoding="async" />
      </div>
      <div className="mobile-product-frame">
        <img key={`${media.mobile}-${activeTab}`} className="figma-mobile-product-image" src={media.mobile} alt={kind === "chat" ? "GoldHouse mobile connected account screen" : `GoldHouse mobile ${tabs?.[activeTab] ?? "product"} screen`} loading="lazy" decoding="async" />
      </div>
      {tabs && <span className="sr-only" aria-live="polite">{tabs[activeTab]}</span>}
    </section>
  );
}

function Community({ locale }: { locale: Locale }) {
  const copy = translations[locale].community;
  return (
    <section className="community" id="community">
      <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} light />
      <div className="community-list">
        {copy.items.map((item, index) => (
          <article key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function UCard({ locale }: { locale: Locale }) {
  const copy = translations[locale].ucard;
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
        setIsPlaying(true);
        observer.disconnect();
      }
    }, { threshold: [0, 0.35, 0.55], rootMargin: "0px 0px -5% 0px" });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`ucard-section${isPlaying ? " is-playing" : ""}`} id="ucard" ref={sectionRef}>
      <div className="ucard-stage">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        <div className="ucard-pipeline" aria-label={copy.steps.join(" to ")}>
          {copy.steps.map((step, index) => (
            <span key={step}>{step}{index < copy.steps.length - 1 && <i aria-hidden="true">→</i>}</span>
          ))}
        </div>
        <div className="ucard-device" aria-label="GoldHouse U Card mobile app preview">
          <div className="ucard-device-screen">
            <div className="dynamic-island" aria-hidden="true" />
            <div className="ucard-card">
              <img className="ucard-face-base" src="/assets/figma3x/ucard-face.png" alt="GoldHouse U Card" loading="lazy" decoding="async" />
              <img className="ucard-face-color" src="/assets/figma3x/ucard-face.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
            </div>
          </div>
          <img className="iphone-frame" src="/assets/figma/iphone-frame.png" alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function Ecosystem({ locale }: { locale: Locale }) {
  const copy = translations[locale].ecosystem;
  const cards = brands.map((brand, index) => ({ ...brand, description: copy.cards[index] }));
  return (
    <section className="ecosystem" id="ecosystem">
      <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <div className="ecosystem-glow" aria-hidden="true" />
      <div className="ecosystem-carousel" aria-label={copy.title} tabIndex={0}>
        <div className="ecosystem-track">
          {[0, 1].map((group) => (
            <div className="ecosystem-group" key={group} aria-hidden={group === 1}>
              {cards.map((card) => (
                <article className="ecosystem-card" key={card.name}>
                  <div className="ecosystem-card-frame">
                    <a href={card.profileUrl} target="_blank" rel="noreferrer" aria-label={`${card.name} on X`}>
                      <img src={card.icon} alt="" />
                      <h3>{card.name}</h3>
                    </a>
                    <p>{card.description}</p>
                  </div>
                  {card.announcementUrl ? (
                    <a href={card.announcementUrl} target="_blank" rel="noreferrer">{copy.announcement}<span aria-hidden="true">→</span></a>
                  ) : (
                    <span className="ecosystem-coming-soon">{copy.comingSoon}</span>
                  )}
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing({ locale, openDownload }: { locale: Locale; openDownload: () => void }) {
  const copy = translations[locale];
  return (
    <section className="closing" id="about">
      <div className="closing-card">
        <h2>{copy.cta.title}</h2>
        <p>{copy.cta.description}</p>
        <div>
          <button className="button button-primary" type="button" onClick={openDownload}>{copy.nav.download}<span aria-hidden="true">→</span></button>
          <a className="button button-secondary" href={links.webApp} target="_blank" rel="noreferrer">{copy.nav.open}<span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}

function DownloadModal({ locale, close }: { locale: Locale; close: () => void }) {
  const copy = translations[locale].download;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [close]);

  return (
    <div className="download-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <section className="download-modal" role="dialog" aria-modal="true" aria-labelledby="download-title">
        <button className="download-close" type="button" aria-label={copy.close} onClick={close}><span /><span /></button>
        <div className="download-copy">
          <div>
            <h2 id="download-title">{copy.title}</h2>
            <p>{copy.description}</p>
          </div>
          <div className="download-options">
            <div className="download-option">
              <a className="download-qr" href={links.iosTestFlight} target="_blank" rel="noreferrer" aria-label={`${copy.ios} TestFlight`}>
                <QRCodeSVG value={links.iosTestFlight} size={122} level="M" title={`${copy.ios} TestFlight QR code`} />
              </a>
              <a className="download-store-button" href={links.iosTestFlight} target="_blank" rel="noreferrer" aria-label={`TestFlight ${appVersions.iosTestFlight}, ${copy.iosDevice}`}>
                <svg className="apple-mark" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.7 12.9c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.2-2-3.9-2-1.7-.2-3.2 1-4 1-1 0-2.5-1-4.1-.9-2.1 0-4 1.2-5.1 3-2.2 3.8-.6 9.4 1.6 12.5 1.1 1.5 2.3 3.2 3.9 3.1 1.6-.1 2.2-1 4.1-1s2.4 1 4.1 1c1.7 0 2.8-1.5 3.8-3.1 1.2-1.8 1.7-3.5 1.7-3.6-.1 0-4.3-1.6-4.3-6.1ZM13.9 5.2c.9-1.1 1.5-2.7 1.3-4.2-1.3.1-2.9.9-3.8 2-.8.9-1.5 2.5-1.3 4 1.5.1 2.9-.7 3.8-1.8Z" /></svg>
                <span className="download-store-copy">
                  <small>TestFlight <span aria-hidden="true">·</span> {appVersions.iosTestFlight}</small>
                  <strong>{copy.iosDevice}</strong>
                </span>
              </a>
            </div>
            <div className="download-option">
              <a className="download-qr" href={links.iosAppStore} target="_blank" rel="noreferrer" aria-label={`${copy.ios} App Store`}>
                <QRCodeSVG value={links.iosAppStore} size={122} level="M" title={`${copy.ios} App Store QR code`} />
              </a>
              <a className="download-store-button" href={links.iosAppStore} target="_blank" rel="noreferrer" aria-label={`App Store ${appVersions.iosAppStore}, ${copy.iosDevice}`}>
                <svg className="apple-mark" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.7 12.9c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.2-2-3.9-2-1.7-.2-3.2 1-4 1-1 0-2.5-1-4.1-.9-2.1 0-4 1.2-5.1 3-2.2 3.8-.6 9.4 1.6 12.5 1.1 1.5 2.3 3.2 3.9 3.1 1.6-.1 2.2-1 4.1-1s2.4 1 4.1 1c1.7 0 2.8-1.5 3.8-3.1 1.2-1.8 1.7-3.5 1.7-3.6-.1 0-4.3-1.6-4.3-6.1ZM13.9 5.2c.9-1.1 1.5-2.7 1.3-4.2-1.3.1-2.9.9-3.8 2-.8.9-1.5 2.5-1.3 4 1.5.1 2.9-.7 3.8-1.8Z" /></svg>
                <span className="download-store-copy">
                  <small>App Store <span aria-hidden="true">·</span> {appVersions.iosAppStore}</small>
                  <strong>{copy.iosDevice}</strong>
                </span>
              </a>
            </div>
            <div className="download-option">
              <a className="download-qr" href={links.androidApk} target="_blank" rel="noreferrer" aria-label={`${copy.android} APK`}>
                <QRCodeSVG value={links.androidApk} size={122} level="M" title={`${copy.android} APK QR code`} />
              </a>
              <a className="download-store-button" href={links.androidApk} aria-label={`APK ${appVersions.androidApk}, ${copy.androidDevice}`}>
                <img className="android-mark" src="/assets/download/android.svg" alt="" aria-hidden="true" />
                <span className="download-store-copy">
                  <small>APK <span aria-hidden="true">·</span> {appVersions.androidApk}</small>
                  <strong>{copy.androidDevice}</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="download-preview" aria-hidden="true">
          <div className="download-preview-glow" />
          <div className="download-phone">
            <img src="/assets/product/mobile/one-account.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

function Footer({ locale, openDownload }: { locale: Locale; openDownload: () => void }) {
  const copy = translations[locale].footer;
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Brand />
          <p>{copy.tagline}</p>
          <small>{copy.copyright}</small>
        </div>
        <div className="footer-links">
          {copy.groups.map((group, groupIndex) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link, linkIndex) => {
                const destination = footerDestinations[groupIndex]?.[linkIndex];
                if (!destination) return null;
                if (destination.kind === "download") {
                  return <button type="button" onClick={openDownload} key={link}>{link}</button>;
                }

                const external = destination.kind === "external";
                const capabilityLink = destination.href.startsWith("#product-");
                return (
                  <a
                    href={destination.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    onClick={capabilityLink ? (event) => {
                      event.preventDefault();
                      window.location.hash = destination.href;
                      window.setTimeout(() => {
                        document.querySelector(destination.href)?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }, 650);
                    } : undefined}
                    key={link}
                  >
                    {link}
                  </a>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-word" aria-hidden="true">GoldHouse</div>
    </footer>
  );
}

export default function App() {
  const [locale, setLocale] = useState<Locale>("en");
  const [downloadOpen, setDownloadOpen] = useState(false);
  const localeRestored = useRef(false);
  const copy = translations[locale];

  useEffect(() => {
    if (!localeRestored.current) {
      localeRestored.current = true;
      const storedLocale = window.localStorage.getItem("goldhouse-locale");
      if (storedLocale && storedLocale in translations && storedLocale !== locale) {
        const frame = window.requestAnimationFrame(() => setLocale(storedLocale as Locale));
        return () => window.cancelAnimationFrame(frame);
      }
    }

    document.documentElement.lang = locale;
    window.localStorage.setItem("goldhouse-locale", locale);
  }, [locale]);

  return (
    <div className="goldhouse-landing">
      <Header locale={locale} setLocale={setLocale} openDownload={() => setDownloadOpen(true)} />
      <main>
        <section className="hero" id="top">
          <FlowField />
          <div className="hero-content">
            <h1>{copy.hero.title}</h1>
            <p>{copy.hero.description}</p>
            <div className="hero-actions">
              <button className="button button-primary" type="button" onClick={() => setDownloadOpen(true)}>{copy.nav.download}<span aria-hidden="true">→</span></button>
              <a className="button button-secondary" href={links.webApp} target="_blank" rel="noreferrer">{copy.nav.open}<span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
        <LogoMarquee />
        <Capabilities locale={locale} />
        <ProductShowcase eyebrow={copy.product.eyebrow} title={copy.product.title} description={copy.product.description} kind="chat" />
        <ProductShowcase eyebrow={copy.product.secondEyebrow} title={copy.product.secondTitle} description={copy.product.secondDescription} kind="wallet" tabs={copy.product.tabs} />
        <Community locale={locale} />
        <UCard locale={locale} />
        <Ecosystem locale={locale} />
        <Closing locale={locale} openDownload={() => setDownloadOpen(true)} />
      </main>
      <Footer locale={locale} openDownload={() => setDownloadOpen(true)} />
      {downloadOpen ? <DownloadModal locale={locale} close={() => setDownloadOpen(false)} /> : null}
    </div>
  );
}
