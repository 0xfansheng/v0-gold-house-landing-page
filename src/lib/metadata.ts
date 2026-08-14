import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadataOptions = {
  path: `/${string}`;
  title: string;
  description: string;
  robots?: Metadata["robots"];
};

export function createPageMetadata({
  path,
  title,
  description,
  robots,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: siteConfig.name,
      title,
      description,
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    ...(robots ? { robots } : {}),
  };
}
