import type { Metadata } from "next";
import AccountDeletionPage from "./AccountDeletionPage";
import { createPageMetadata } from "@/lib/metadata";
import "@/styles/legal.css";

export const metadata: Metadata = createPageMetadata({
  path: "/account-deletion",
  title: "Account Deletion Request — GoldHouse",
  description: "Learn how to permanently delete your GoldHouse account and which data is deleted or retained.",
});

export default function Page() { return <AccountDeletionPage />; }
