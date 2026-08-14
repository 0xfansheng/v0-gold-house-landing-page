import type { Metadata } from "next";
import PolicyPage from "@/components/legal/PolicyPage";
import { createPageMetadata } from "@/lib/metadata";
import "@/styles/legal.css";

export const metadata: Metadata = createPageMetadata({
  path: "/child-safety",
  title: "Child Safety Standards (CSAE) — GoldHouse",
  description: "GoldHouse Child Safety Standards and reporting channels.",
});

export default function ChildSafetyPage() { return <PolicyPage policyKey="childSafety" />; }
