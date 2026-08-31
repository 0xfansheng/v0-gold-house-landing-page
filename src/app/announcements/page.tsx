import LandingPage from "@/components/landing/LandingPage";
import { createPageMetadata } from "@/lib/metadata";
import "@/styles/landing.css";
import "@/styles/announcements.css";

export const metadata = createPageMetadata({
  path: "/announcements",
  title: "Announcements",
  description: "Follow every step forward from GoldHouse.",
});

export default function AnnouncementsRoute() {
  return <LandingPage page="announcements" />;
}
