import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/i18n/I18nProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GoldHouse — 多链 Web3 社交平台 · 基础设施级社交入口",
  description:
    "GoldHouse 是基础设施级的 Web3 社交平台，将身份、资金、治理与应用整合进同一社交账户体系。社交即身份、社交即支付、社交即治理、社交即应用——用 Web2 级别的丝滑体验承载 Web3 完整价值。",
  keywords: [
    "GoldHouse",
    "Web3",
    "多链",
    "社交平台",
    "DID",
    "GoldHouse Pay",
    "E2E 加密",
    "MPC",
    "Token-gated",
    "DApp Hub",
  ],
  authors: [{ name: "GoldHouse Team" }],
  openGraph: {
    title: "GoldHouse — 多链 Web3 社交平台",
    description:
      "构建 Web3 时代基础设施级的社交入口。身份 · 钱包 · 关系 · 权限 · 应用，整合进同一账户体系。",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoldHouse — 多链 Web3 社交平台",
    description: "世界在你掌中。链接全球，打造无感生态。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#0B1A33]">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
