# 捞捞小鱼 3.0 · 第七阶段 Android 工程检查报告

## 原版 APK 结构检查

从用户提供的 V2.0 APK 中确认：

- APK 内含 `assets/www/index.html` 与 `assets/www/game.html`。
- DEX 字符串显示原生入口类路径为 `com.llxy.app.MainActivity`。
- DEX 字符串包含 WebView、`WebViewClient`、`WebChromeClient`、`setJavaScriptEnabled`、`setDomStorageEnabled`、`shouldInterceptRequest`。
- DEX 字符串包含 `https://appassets.androidplatform.net/www/index.html` 和 `file:///android_asset/www/index.html`。
- 由此判断原版采用轻量原生 Activity + WebView 加载本地网页的架构。

说明：当前容器没有 aapt/apktool，未能解码二进制 AndroidManifest.xml。因此 `com.llxy.app` 是根据 MainActivity 类路径推定的 applicationId，正式构建前应核实原 APK 的实际包名和版本信息。

## 第七阶段完成内容

- 创建 Android Studio 原生 Java 工程。
- 采用 AndroidX WebKit `WebViewAssetLoader`，从应用内 assets 加载新版游戏网页。
- 本地资源 URL 采用 `https://appassets.androidplatform.net/assets/www/index.html`。
- 开启 JavaScript、DOM Storage；关闭 file access、content access 和 mixed content。
- 继续采用本地 HTML 游戏结构，所有网页、脚本、背景和鱼类素材随 APK 打包。
- 保留原版 87 种鱼类记录和素材。
- 加入 Android 状态栏/导航栏颜色、竖屏配置和系统返回键处理。
- 保留 `game.html` 兼容入口。
- 加入 Windows / macOS / Linux Debug 构建脚本。

## 静态检查结果

运行：
```bash
node tools/verify-android-project.js
```

结果：
- Android 网页页面：10
- 鱼类数据：87条
- 鱼类素材：87/87
- JavaScript 语法及静态资源引用：通过
- AndroidManifest.xml：XML 解析通过
- styles.xml：XML 解析通过
- 静态检查错误：0

## 尚未执行的真实构建

当前执行环境没有 Android SDK、Gradle、adb、aapt，也没有 Android 设备模拟器。因此本阶段没有声称 APK 已编译或真机通过。要完成最终安装包，仍需 Android Studio/SDK 环境执行 Gradle Debug 构建，并在安卓手机上进行安装测试。

## 重要的旧版兼容风险

- Debug APK 的 applicationId 为 `com.llxy.app.debug`，用于与旧版并存测试。
- Release applicationId 为 `com.llxy.app`，但原 APK 的签名证书未知。
- 即使 applicationId 相同，没有原始签名密钥也不能覆盖安装旧 APK。
- Debug 应用与旧版应用的 WebView localStorage 相互隔离。
- 更换应用或卸载前，应从旧版导出/保留存档；新版 JSON 恢复流程还需要用真实旧版存档做迁移验证。
