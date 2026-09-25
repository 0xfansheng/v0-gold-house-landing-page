"use client";

/* Source markup intentionally uses img elements during the pixel-accurate migration. */
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import AnnouncementsPage from "@/components/announcements/AnnouncementsPage";
import FlowField from "./FlowField";
import Footer from "./Footer";
import Header from "./Header";
import DownloadModal from "./DownloadModal";
import type { AppVersion } from "@/api";
import { links } from "@/config/links";
import { partners as brands } from "@/config/partners";
import { useLandingLocale } from "@/i18n/LandingLocaleProvider";
import { translations, type Locale } from "@/i18n/landing";

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
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  return (
    <section className="ecosystem" id="ecosystem">
      <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <div className="ecosystem-glow" aria-hidden="true" />
      <div className="ecosystem-grid" aria-label={copy.title}>
        {brands.map((brand, index) => {
          const isActive = activeBrand === brand.name;
          const linkGroupId = `ecosystem-links-${index}`;
          return (
            <article className={`ecosystem-brand${isActive ? " is-open" : ""}`} aria-label={brand.name} key={brand.name}>
              <button
                className="ecosystem-brand-main"
                type="button"
                aria-expanded={isActive}
                aria-controls={linkGroupId}
                onClick={() => setActiveBrand((current) => current === brand.name ? null : brand.name)}
              >
                <img src={brand.icon} alt="" loading="lazy" decoding="async" />
                <span>{brand.name}</span>
              </button>
              <div className="ecosystem-brand-links" id={linkGroupId} aria-label={`${brand.name} links`}>
                {brand.goldHouseUrl ? (
                  <a className="ecosystem-entry ecosystem-entry-goldhouse" href={brand.goldHouseUrl} target="_blank" rel="noreferrer" aria-label={`Open ${brand.name} in GoldHouse`} title="GoldHouse">
                    <img src="/assets/figma/goldhouse-logo.svg?v=2" alt="" aria-hidden="true" />
                    <span>GoldHouse</span>
                  </a>
                ) : null}
                <a className="ecosystem-entry ecosystem-entry-x" href={brand.profileUrl} target="_blank" rel="noreferrer" aria-label={`Open ${brand.name} on X`} title="X">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                  </svg>
                  <span>X</span>
                </a>
              </div>
            </article>
          );
        })}
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

export default function LandingPage({ page = "home", appVersions }: { page?: "home" | "announcements"; appVersions: AppVersion[] }) {
  const { locale, setLocale } = useLandingLocale();
  const [downloadOpen, setDownloadOpen] = useState(false);
  const copy = translations[locale];

  return (
    <div className="goldhouse-landing">
      <Header locale={locale} setLocale={setLocale} openDownload={() => setDownloadOpen(true)} page={page} />
      {page === "announcements" ? (
        <AnnouncementsPage locale={locale} />
      ) : (
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
      )}
      <Footer locale={locale} openDownload={() => setDownloadOpen(true)} page={page} />
      {downloadOpen ? <DownloadModal locale={locale} close={() => setDownloadOpen(false)} appVersions={appVersions} /> : null}
    </div>
  );
}
