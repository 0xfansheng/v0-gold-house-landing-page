function requiredPublicEnv(value: string | undefined, name: string): string {
  if (!value) {
    throw new Error(`Missing required public environment variable: ${name}`);
  }

  return value;
}

export const links = {
  webApp: requiredPublicEnv(process.env.NEXT_PUBLIC_WEB_APP_URL, "NEXT_PUBLIC_WEB_APP_URL"),
  iosAppStore: requiredPublicEnv(process.env.NEXT_PUBLIC_IOS_APP_STORE_URL, "NEXT_PUBLIC_IOS_APP_STORE_URL"),
  iosTestFlight: requiredPublicEnv(process.env.NEXT_PUBLIC_IOS_TESTFLIGHT_URL, "NEXT_PUBLIC_IOS_TESTFLIGHT_URL"),
  androidApk: requiredPublicEnv(process.env.NEXT_PUBLIC_ANDROID_APK_URL, "NEXT_PUBLIC_ANDROID_APK_URL"),
  androidGooglePlay: requiredPublicEnv(process.env.NEXT_PUBLIC_ANDROID_GOOGLE_PLAY_URL, "NEXT_PUBLIC_ANDROID_GOOGLE_PLAY_URL"),
  x: requiredPublicEnv(process.env.NEXT_PUBLIC_X_URL, "NEXT_PUBLIC_X_URL"),
} as const;
