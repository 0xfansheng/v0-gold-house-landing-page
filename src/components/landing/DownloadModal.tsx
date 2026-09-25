"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import type { AppVersion } from "@/api";
import { loadDownloadVersions } from "@/lib/download-actions";
import { links } from "@/config/links";
import { translations, type Locale } from "@/i18n/landing";

type DownloadChannelIcon = "testflight" | "apple" | "android" | "google-play";

function DownloadChannelMark({ icon }: { icon: DownloadChannelIcon }) {
  if (icon === "android") {
    return <img className="download-channel-mark" src="/assets/download/android.svg" alt="" aria-hidden="true" />;
  }

  if (icon === "testflight") {
    return <img className="download-channel-mark" src="/assets/download/testflight.png" alt="" aria-hidden="true" />;
  }

  if (icon === "google-play") {
    return <img className="download-channel-mark" src="/assets/download/google-play.svg" alt="" aria-hidden="true" />;
  }

  return <img className="download-channel-mark" src="/assets/download/app-store.png" alt="" aria-hidden="true" />;
}

function DownloadOption({ name, platform, version, versionLabel, href, icon }: { name: string; platform: "iOS" | "Android"; version?: string; versionLabel: string; href: string; icon: DownloadChannelIcon }) {
  const displayVersion = version?.replace(/^(v?\d+\.\d+\.\d+)-\d+$/, "$1");
  const formattedVersion = displayVersion ? (displayVersion.startsWith("v") ? displayVersion : `v${displayVersion}`) : undefined;
  const label = displayVersion ? `${name}, ${platform}, ${versionLabel} ${displayVersion}` : `${name}, ${platform}`;

  return (
    <div className="download-option">
      <a className="download-qr" href={href} target="_blank" rel="noreferrer" aria-label={`${name} QR code`}>
        <QRCodeSVG value={href} size={122} level="M" title={`${name} QR code`} />
      </a>
      <a className="download-store-button" href={href} target="_blank" rel="noreferrer" aria-label={label}>
        <DownloadChannelMark icon={icon} />
        <span className="download-store-copy">
          <strong>{name}</strong>
          <small>{platform}{formattedVersion ? <> <span aria-hidden="true">·</span> {formattedVersion}</> : null}</small>
        </span>
      </a>
    </div>
  );
}

export default function DownloadModal({ locale, close, appVersions }: { locale: Locale; close: () => void; appVersions?: AppVersion[] }) {
  const copy = translations[locale].download;
  const [loadedVersions, setLoadedVersions] = useState<AppVersion[]>([]);
  const versions = appVersions ?? loadedVersions;

  useEffect(() => {
    if (appVersions) return;
    let cancelled = false;

    void loadDownloadVersions()
      .then((result) => { if (!cancelled) setLoadedVersions(result); })
      .catch(() => { /* Keep download links available if the request fails. */ });

    return () => { cancelled = true; };
  }, [appVersions]);

  const iosVersion = versions.find((item) => item.platform === "ios")?.latestVersionCode;
  const androidVersion = versions.find((item) => item.platform === "android")?.latestVersionCode;
  const iosAppStoreVersion = versions.find((item) => item.platform === "ios_app_store")?.latestVersionCode;
  const downloads = [
    { name: "TestFlight", platform: "iOS", version: iosVersion, href: links.iosTestFlight, icon: "testflight" },
    { name: "App Store", platform: "iOS", version: iosAppStoreVersion, href: links.iosAppStore, icon: "apple" },
    { name: "Android APK", platform: "Android", version: androidVersion, href: links.androidApk, icon: "android" },
    // Google Play 下载入口暂时隐藏；重新开放时恢复 android_google_play 版本和此下载选项。
  ] satisfies Array<{ name: string; platform: "iOS" | "Android"; version?: string; href: string; icon: DownloadChannelIcon }>;

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
            {downloads.map((download) => (
              <DownloadOption key={download.name} {...download} versionLabel={copy.version} />
            ))}
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
