const siteUrl = process.env.SITE_URL;

if (!siteUrl) {
  throw new Error("Missing required server environment variable: SITE_URL");
}

export const siteConfig = {
  name: "GoldHouse",
  url: siteUrl,
  defaultLocale: "zh-CN",
  title: "GoldHouse — To hold! The world!",
  description: "GoldHouse — 连接身份、资产、治理与应用的 Web3 社交账户。",
  company: "AUROWAVE TECHNOLOGIES PTE. LTD.",
  supportEmail: "support@goldhouse.cc",
  businessEmail: "business@goldhouse.cc",
} as const;
