"use client";

import { useState, type ReactNode } from "react";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import DownloadModal from "@/components/landing/DownloadModal";
import { useI18n } from "@/i18n/I18nProvider";
import { useLandingLocale } from "@/i18n/LandingLocaleProvider";
import type { Locale } from "@/i18n/config";

export default function PolicyShell({ children, title, updated }: { children: ReactNode; title: string; updated: string }) {
  const { locale, setLocale } = useI18n();
  const { setLocale: setLandingLocale } = useLandingLocale();
  const [downloadOpen, setDownloadOpen] = useState(false);

  function changeLocale(next: Locale) {
    setLocale(next);
    setLandingLocale(next);
  }

  return (
    <div className="goldhouse-landing policy-page">
      <Header locale={locale} setLocale={changeLocale} openDownload={() => setDownloadOpen(true)} page="policy" />
      <main className="policy-main">
        <div className="policy-heading">
          <span className="policy-badge">GoldHouse</span>
          <h1>{title}</h1>
          <p>{updated}</p>
        </div>
        {children}
      </main>
      <Footer locale={locale} openDownload={() => setDownloadOpen(true)} page="policy" />
      {downloadOpen ? <DownloadModal locale={locale} close={() => setDownloadOpen(false)} /> : null}
    </div>
  );
}
