import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { LandingLocaleProvider } from "@/i18n/LandingLocaleProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  authors: [{ name: "GoldHouse Team" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/assets/figma/goldhouse-logo.svg",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7faff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <LandingLocaleProvider>{children}</LandingLocaleProvider>
      </body>
    </html>
  );
}
