"use server";

import { getAppVersions, type AppVersion } from "@/api";

export async function loadDownloadVersions(): Promise<AppVersion[]> {
  try {
    return await getAppVersions();
  } catch {
    // Download links remain usable when the public version service is unavailable.
    return [];
  }
}
