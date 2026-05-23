export type OssItem = {
  name: string;
  version: string;
  license: string;
  url?: string;
};

export type OssGroupId =
  | 'androidx'
  | 'compose'
  | 'cameraMedia'
  | 'google'
  | 'kotlin'
  | 'networking'
  | 'image'
  | 'utils'
  | 'tinode';

export type OssGroup = {
  id: OssGroupId;
  items: OssItem[];
};

export const OSS_GROUPS: OssGroup[] = [
  {
    id: 'androidx',
    items: [
      { name: 'androidx.core:core-ktx', version: '1.13.1', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/core' },
      { name: 'androidx.appcompat:appcompat', version: '1.6.1', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/appcompat' },
      { name: 'androidx.activity:activity-compose', version: '1.8.2', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/activity' },
      { name: 'androidx.activity:activity-ktx', version: '1.8.2', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/activity' },
      { name: 'androidx.lifecycle:lifecycle-runtime-ktx', version: '2.7.0', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/lifecycle' },
      { name: 'androidx.lifecycle:lifecycle-runtime-compose', version: '2.7.0', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/lifecycle' },
      { name: 'androidx.lifecycle:lifecycle-viewmodel-compose', version: '2.7.0', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/lifecycle' },
      { name: 'androidx.lifecycle:lifecycle-process', version: '2.7.0', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/lifecycle' },
      { name: 'androidx.room:room-runtime', version: '2.6.1', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/room' },
      { name: 'androidx.room:room-ktx', version: '2.6.1', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/room' },
      { name: 'androidx.room:room-compiler', version: '2.6.1', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/room' },
      { name: 'androidx.datastore:datastore-preferences', version: '1.0.0', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/datastore' },
      { name: 'androidx.navigation:navigation-compose', version: '2.7.6', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/navigation' },
      { name: 'androidx.webkit:webkit', version: '1.15.0', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/webkit' },
      { name: 'androidx.window:window', version: '1.3.0', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/window' },
      { name: 'androidx.constraintlayout:constraintlayout', version: '2.2.1', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/constraintlayout' },
      { name: 'androidx.constraintlayout:constraintlayout-compose', version: '1.1.1', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/constraintlayout' },
      { name: 'androidx.hilt:hilt-navigation-compose', version: '1.1.0', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/hilt' },
      { name: 'androidx.exifinterface:exifinterface', version: '1.3.7', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/exifinterface' },
      { name: 'androidx.work:work-runtime-ktx', version: '2.8.1', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/work' },
    ],
  },
  {
    id: 'compose',
    items: [
      { name: 'androidx.compose.ui:ui', version: '1.8.0', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/compose-ui' },
      { name: 'androidx.compose.ui:ui-graphics', version: '1.8.0', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/compose-ui' },
      { name: 'androidx.compose.ui:ui-tooling-preview', version: '1.8.0', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/compose-ui' },
      { name: 'androidx.compose.ui:ui-tooling', version: '1.8.0', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/compose-ui' },
      { name: 'androidx.compose.foundation:foundation', version: '1.8.0', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/compose-foundation' },
      { name: 'androidx.compose.material3:material3', version: '1.3.1', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/compose-material3' },
      { name: 'androidx.compose.material3:material3-window-size-class', version: '1.3.1', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/compose-material3' },
      { name: 'androidx.compose.material3.adaptive:adaptive-layout', version: '1.1.0', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/compose-material3-adaptive' },
      { name: 'androidx.compose.material3.adaptive:adaptive-navigation', version: '1.1.0', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/compose-material3-adaptive' },
      { name: 'androidx.compose.material:material-icons-core', version: '1.7.8', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/compose-material' },
      { name: 'androidx.compose.material:material-icons-extended', version: '1.7.8', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/compose-material' },
    ],
  },
  {
    id: 'cameraMedia',
    items: [
      { name: 'androidx.camera:camera-core', version: '1.4.1', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/camera' },
      { name: 'androidx.camera:camera-camera2', version: '1.4.1', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/camera' },
      { name: 'androidx.camera:camera-lifecycle', version: '1.4.1', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/camera' },
      { name: 'androidx.camera:camera-view', version: '1.4.1', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/camera' },
      { name: 'androidx.media3:media3-exoplayer', version: '1.6.1', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/media3' },
      { name: 'androidx.media3:media3-exoplayer-dash', version: '1.6.1', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/media3' },
      { name: 'androidx.media3:media3-ui', version: '1.6.1', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/media3' },
      { name: 'androidx.media3:media3-ui-compose', version: '1.6.1', license: 'Apache License 2.0', url: 'https://developer.android.com/jetpack/androidx/releases/media3' },
    ],
  },
  {
    id: 'google',
    items: [
      { name: 'com.google.android.material:material', version: '1.13.0', license: 'Apache License 2.0', url: 'https://github.com/material-components/material-components-android' },
      { name: 'com.google.dagger:hilt-android', version: '2.55', license: 'Apache License 2.0', url: 'https://github.com/google/dagger' },
      { name: 'com.google.dagger:hilt-compiler', version: '2.55', license: 'Apache License 2.0', url: 'https://github.com/google/dagger' },
      { name: 'com.google.guava:guava', version: '33.3.1-android', license: 'Apache License 2.0', url: 'https://github.com/google/guava' },
      { name: 'com.google.code.gson:gson', version: '2.10.1', license: 'Apache License 2.0', url: 'https://github.com/google/gson' },
      { name: 'com.google.mlkit:barcode-scanning', version: '17.3.0', license: 'Apache License 2.0', url: 'https://developers.google.com/ml-kit' },
      { name: 'com.google.zxing:core', version: '3.5.3', license: 'Apache License 2.0', url: 'https://github.com/zxing/zxing' },
      { name: 'com.google.firebase:firebase-messaging', version: 'via firebase-bom 33.7.0', license: 'Apache License 2.0', url: 'https://github.com/firebase/firebase-android-sdk' },
    ],
  },
  {
    id: 'kotlin',
    items: [
      { name: 'org.jetbrains.kotlin:kotlin-stdlib', version: '2.1.0', license: 'Apache License 2.0', url: 'https://github.com/JetBrains/kotlin' },
      { name: 'org.jetbrains.kotlinx:kotlinx-coroutines-android', version: '1.7.3', license: 'Apache License 2.0', url: 'https://github.com/Kotlin/kotlinx.coroutines' },
      { name: 'org.jetbrains.kotlinx:kotlinx-serialization-json', version: '1.6.0', license: 'Apache License 2.0', url: 'https://github.com/Kotlin/kotlinx.serialization' },
      { name: 'org.jetbrains:annotations', version: '26.0.2-1', license: 'Apache License 2.0', url: 'https://github.com/JetBrains/java-annotations' },
    ],
  },
  {
    id: 'networking',
    items: [
      { name: 'com.fasterxml.jackson.core:jackson-databind', version: '2.20.1', license: 'Apache License 2.0', url: 'https://github.com/FasterXML/jackson-databind' },
      { name: 'com.fasterxml.jackson.core:jackson-core', version: '2.20.1', license: 'Apache License 2.0', url: 'https://github.com/FasterXML/jackson-core' },
      { name: 'com.fasterxml.jackson.core:jackson-annotations', version: '2.20', license: 'Apache License 2.0', url: 'https://github.com/FasterXML/jackson-annotations' },
      { name: 'org.java-websocket:Java-WebSocket', version: '1.5.3', license: 'MIT License', url: 'https://github.com/TooTallNate/Java-WebSocket' },
    ],
  },
  {
    id: 'image',
    items: [
      { name: 'io.coil-kt:coil-compose', version: '2.5.0', license: 'Apache License 2.0', url: 'https://github.com/coil-kt/coil' },
      { name: 'io.coil-kt:coil-video', version: '2.5.0', license: 'Apache License 2.0', url: 'https://github.com/coil-kt/coil' },
      { name: 'io.coil-kt:coil-svg', version: '2.5.0', license: 'Apache License 2.0', url: 'https://github.com/coil-kt/coil' },
      { name: 'io.coil-kt.coil3:coil-compose', version: '3.1.0', license: 'Apache License 2.0', url: 'https://github.com/coil-kt/coil' },
      { name: 'io.coil-kt.coil3:coil-gif', version: '3.1.0', license: 'Apache License 2.0', url: 'https://github.com/coil-kt/coil' },
      { name: 'io.coil-kt.coil3:coil-network-okhttp', version: '3.1.0', license: 'Apache License 2.0', url: 'https://github.com/coil-kt/coil' },
      { name: 'com.github.bumptech.glide:glide', version: '4.12.0', license: 'Apache License 2.0 / BSD 2-Clause', url: 'https://github.com/bumptech/glide' },
      { name: 'com.github.bumptech.glide:okhttp3-integration', version: '4.12.0', license: 'Apache License 2.0', url: 'https://github.com/bumptech/glide' },
      { name: 'com.github.bumptech.glide:compiler', version: '4.12.0', license: 'Apache License 2.0', url: 'https://github.com/bumptech/glide' },
    ],
  },
  {
    id: 'utils',
    items: [
      { name: 'com.tencent:mmkv', version: '1.3.14', license: 'BSD 3-Clause', url: 'https://github.com/Tencent/MMKV' },
      { name: 'com.ibm.icu:icu4j', version: '77.1', license: 'Unicode License v3', url: 'https://github.com/unicode-org/icu' },
      { name: 'me.leolin:ShortcutBadger', version: '1.1.22', license: 'Apache License 2.0', url: 'https://github.com/leolin310148/ShortcutBadger' },
      { name: 'com.posthog:posthog-android', version: '3.19.1', license: 'MIT License', url: 'https://github.com/PostHog/posthog-android' },
      { name: 'com.vanniktech:android-image-cropper', version: '4.6.0', license: 'Apache License 2.0', url: 'https://github.com/CanHub/Android-Image-Cropper' },
      { name: 'org.ahocorasick:ahocorasick', version: '0.3.0', license: 'Apache License 2.0', url: 'https://github.com/robert-bor/aho-corasick' },
    ],
  },
  {
    id: 'tinode',
    items: [
      { name: 'Tindroid SDK (tinode-android)', version: '0.25.2', license: 'Apache License 2.0', url: 'https://github.com/tinode/tindroid' },
    ],
  },
];
