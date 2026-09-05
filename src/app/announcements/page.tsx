import { getAppVersions, type AppVersion } from "@/api";
import LandingPage from "@/components/landing/LandingPage";
import { createPageMetadata } from "@/lib/metadata";
import "@/styles/landing.css";
import "@/styles/announcements.css";

export const dynamic = "force-dynamic";

export const metadata = createPageMetadata({
  path: "/announcements",
  title: "Announcements",
  description: "Follow every step forward from GoldHouse.",
});

export default async function AnnouncementsRoute() {
  let appVersions: AppVersion[] = [];

  try {
    appVersions = await getAppVersions();
  } catch (error) {
    console.error("Failed to load app versions", error);
  }

  return <LandingPage page="announcements" appVersions={appVersions} />;
}
