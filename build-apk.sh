#!/usr/bin/env bash
set -euo pipefail
GRADLE_VERSION=8.9
GRADLE_ROOT="${HOME}/.gradle/laolao"
GRADLE_HOME="${GRADLE_ROOT}/gradle-${GRADLE_VERSION}"
if [[ ! -x "${GRADLE_HOME}/bin/gradle" ]]; then
  mkdir -p "${GRADLE_ROOT}"
  curl -fL "https://services.gradle.org/distributions/gradle-${GRADLE_VERSION}-bin.zip" -o /tmp/laolao-gradle.zip
  unzip -q -o /tmp/laolao-gradle.zip -d "${GRADLE_ROOT}"
  rm -f /tmp/laolao-gradle.zip
fi
java -version
if [[ -z "${ANDROID_HOME:-}" && -z "${ANDROID_SDK_ROOT:-}" && ! -f "local.properties" ]]; then
  echo "Please install Android SDK Platform 35 and set ANDROID_HOME."
  exit 1
fi
"${GRADLE_HOME}/bin/gradle" --no-daemon assembleDebug
echo "APK: app/build/outputs/apk/debug/app-debug.apk"
