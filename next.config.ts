import type { NextConfig } from "next";

const pageCacheHeaders = [
  {
    key: "Cache-Control",
    value: "public, max-age=0, s-maxage=300, stale-while-revalidate=86400",
  },
];

const staticPageRoutes = [
  "/",
  "/announcements",
  "/account-deletion",
  "/child-safety",
  "/opensource-notice",
  "/privacy",
  "/terms",
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31_536_000,
  },
  async headers() {
    return [
      ...staticPageRoutes.map((source) => ({
        source,
        headers: pageCacheHeaders,
      })),
      {
        source: "/announcements/:file*.webp",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/announcements/:file*.xlsx",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
