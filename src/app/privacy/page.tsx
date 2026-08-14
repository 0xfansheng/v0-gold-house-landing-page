import type { Metadata } from "next";
import PolicyPage from "@/components/legal/PolicyPage";
import { createPageMetadata } from "@/lib/metadata";
import "@/styles/legal.css";

export const metadata: Metadata = createPageMetadata({
  path: "/privacy",
  title: "Privacy Policy — GoldHouse",
  description: "Learn how GoldHouse collects, uses, and protects your personal information.",
});

export default function PrivacyPage() { return <PolicyPage policyKey="privacy" />; }
