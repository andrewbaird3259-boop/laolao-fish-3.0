@echo off
setlocal
set "GRADLE_VERSION=8.9"
set "GRADLE_ROOT=%USERPROFILE%\.gradle\laolao"
set "GRADLE_HOME=%GRADLE_ROOT%\gradle-%GRADLE_VERSION%"
if not exist "%GRADLE_HOME%\bin\gradle.bat" (
  echo [1/3] Downloading Gradle %GRADLE_VERSION%...
  if not exist "%GRADLE_ROOT%" mkdir "%GRADLE_ROOT%"
  powershell -NoProfile -ExecutionPolicy Bypass -Command "$ProgressPreference='SilentlyContinue'; Invoke-WebRequest 'https://services.gradle.org/distributions/gradle-%GRADLE_VERSION%-bin.zip' -OutFile (Join-Path $env:TEMP 'laolao-gradle.zip'); Expand-Archive -Force (Join-Path $env:TEMP 'laolao-gradle.zip') '%GRADLE_ROOT%'; Remove-Item (Join-Path $env:TEMP 'laolao-gradle.zip')"
  if errorlevel 1 (
    echo Gradle download failed. Check your network and try again.
    exit /b 1
  )
)
echo [2/3] Checking Java and Android SDK...
java -version
if errorlevel 1 (
  echo Please install JDK 17 and configure JAVA_HOME.
  exit /b 1
)
if not defined ANDROID_HOME if not defined ANDROID_SDK_ROOT (
  if not exist "local.properties" if not exist "%LOCALAPPDATA%\Android\Sdk" (
    echo Android SDK not found. Install SDK Platform 35 in Android Studio SDK Manager.
    exit /b 1
  )
  set "ANDROID_HOME=%LOCALAPPDATA%\Android\Sdk"
)
echo [3/3] Building debug APK...
call "%GRADLE_HOME%\bin\gradle.bat" --no-daemon assembleDebug
if errorlevel 1 exit /b 1
echo.
echo Build finished:
echo app\build\outputs\apk\debug\app-debug.apk
endlocal
