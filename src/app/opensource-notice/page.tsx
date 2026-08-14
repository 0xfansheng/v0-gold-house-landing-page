import type { Metadata } from "next";
import OpenSourcePage from "./OpenSourcePage";
import { createPageMetadata } from "@/lib/metadata";
import "@/styles/legal.css";

export const metadata: Metadata = createPageMetadata({
  path: "/opensource-notice",
  title: "Open Source Software Notice (Android) — GoldHouse",
  description: "Third-party open source software used by the GoldHouse Android client.",
  robots: { index: false, follow: false },
});

export default function Page() { return <OpenSourcePage />; }
