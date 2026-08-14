import type { Metadata } from "next";
import PolicyPage from "@/components/legal/PolicyPage";
import { createPageMetadata } from "@/lib/metadata";
import "@/styles/legal.css";

export const metadata: Metadata = createPageMetadata({
  path: "/terms",
  title: "Terms of Service — GoldHouse",
  description: "Read the rules and conditions that apply when using GoldHouse services.",
});

export default function TermsPage() { return <PolicyPage policyKey="terms" />; }
