"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { links } from "@/config/links";
import { translations, type Locale } from "@/i18n/landing";

type FooterDestination =
  | { kind: "internal"; href: string }
  | { kind: "external"; href: string }
  | { kind: "download" };

const footerDestinations: FooterDestination[][] = [
  [
    { kind: "internal", href: "#top" },
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

export default function Footer({ locale, openDownload, page = "home" }: { locale: Locale; openDownload?: () => void; page?: "home" | "announcements" | "policy" }) {
  const copy = translations[locale].footer;
  return (
    <footer className={`footer${page === "announcements" ? " footer-announcements" : ""}`}>
      <div className="footer-inner">
        <div className="footer-brand">
          <Link className="brand" href="/#top" aria-label={copy.home}>
            <img src="/assets/figma/goldhouse-logo.svg?v=2" alt="" />
            <span>GoldHouse</span>
          </Link>
          <p>{copy.tagline}</p>
          <a className="footer-social" href={links.x} target="_blank" rel="noreferrer">Twitter / X <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-links">
          {copy.groups.map((group, groupIndex) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link, linkIndex) => {
                const destination = footerDestinations[groupIndex]?.[linkIndex];
                if (!destination) return null;
                if (destination.kind === "download") {
                  return openDownload
                    ? <button type="button" onClick={openDownload} key={link}>{link}</button>
                    : <Link href="/#about" key={link}>{link}</Link>;
                }

                const external = destination.kind === "external";
                const href = destination.kind === "internal" && page !== "home" ? `/${destination.href}` : destination.href;
                const capabilityLink = page === "home" && destination.href.startsWith("#product-");
                return (
                  <a
                    href={href}
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
              {groupIndex === 0 ? <>
                <Link href="/terms">{copy.terms}</Link>
                <Link href="/privacy">{copy.privacy}</Link>
              </> : null}
              {groupIndex === 3 ? <>
                <Link href="/#about">{copy.about}</Link>
                <Link href="/announcements">{copy.updates}</Link>
              </> : null}
            </div>
          ))}
        </div>
      </div>
      <p className="footer-copyright">{copy.copyright}</p>
      <div className="footer-word" aria-hidden="true">GoldHouse</div>
    </footer>
  );
}
