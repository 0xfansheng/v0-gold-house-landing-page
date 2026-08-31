import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/announcements", "/privacy", "/terms", "/account-deletion", "/child-safety"];
  return routes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      changeFrequency: "monthly",
      priority: route ? 0.5 : 1,
  }));
}
