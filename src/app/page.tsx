import { getAppVersions, type AppVersion } from "@/api";
import LandingPage from "@/components/landing/LandingPage";
import "@/styles/landing.css";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let appVersions: AppVersion[] = [];

  try {
    appVersions = await getAppVersions();
  } catch (error) {
    console.error("Failed to load app versions", error);
  }

  return <LandingPage appVersions={appVersions} />;
}
