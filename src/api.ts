import http from "@/lib/axios";

export type AppPlatform = "android" | "ios" | "ios_app_store" | "android_google_play";

export type AppVersion = {
  platform: AppPlatform;
  latestVersionCode: string;
  updatedAt: string;
};

type ApiResponse<T> = {
  code: number;
  message: string;
  data: T;
};

export async function getAppVersions(): Promise<AppVersion[]> {
  const response = await http.get<ApiResponse<AppVersion[]>>("/api/public/app-versions");

  if (response.data.code !== 200) {
    throw new Error(response.data.message);
  }

  return response.data.data;
}
