# 捞捞小鱼 3.0 · Android Studio 工程

这是基于原版 APK 的轻量 Android WebView 外壳工程。游戏本体仍是本地 HTML/CSS/JavaScript，资源随 APK 一起安装，核心玩法不依赖联网。

## 当前工程内容

- Android 原生入口：`MainActivity.java`
- WebViewAssetLoader：通过 HTTPS 虚拟源加载本地 `assets/www`，让 `localStorage` 使用稳定的同源存储。
- 9个游戏页面及全部本地素材。
- 原版 87 种物种记录和对应鱼类素材。
- 兼容文件名 `game.html`（内容指向新版 `gameplay.html`）。
- 使用原版 APK 中发现的图标。
- 不申请网络权限，不允许混合内容，不允许网页任意访问本地文件。

## 工程参数

| 项目 | 设置 |
|---|---|
| Android namespace / applicationId | `com.llxy.app` |
| versionName | `3.0` |
| versionCode | `3` |
| minSdk | 23（Android 6.0） |
| compileSdk / targetSdk | 35 |
| JDK | 17 |
| Android Gradle Plugin | 8.7.3 |
| Gradle | 8.9 |
| WebViewAssetLoader | androidx.webkit 1.12.1 |

注意：`com.llxy.app` 是根据原 APK 中 `com.llxy.app.MainActivity` 类路径推定的 applicationId，原 APK 的二进制 Manifest 在当前环境没有可用的 aapt/apktool 解码器，正式发布前应在 Android Studio / aapt 中核对原包名、版本号和签名信息。

## 用 Android Studio 构建

1. 安装 Android Studio 稳定版。
2. 在 SDK Manager 安装 Android SDK Platform 35、Build Tools 35.x 和 Platform Tools。
3. 安装 JDK 17（Android Studio 自带的 JBR 17 通常可用）。
4. Android Studio 选择 **Open**，打开本文件夹 `laolao-fish-3.0-android`。
5. 等待 Gradle Sync 完成；首次同步需要下载 Android Gradle Plugin 和 AndroidX WebKit。
6. 选择 `app` 模块，执行 **Build > Build Bundle(s) / APK(s) > Build APK(s)**。
7. Debug APK 输出位置：

   `app/build/outputs/apk/debug/app-debug.apk`

也可以在配置好 Android SDK 后运行：
- Windows：双击 `build-apk.bat`
- macOS / Linux：`chmod +x build-apk.sh && ./build-apk.sh`

脚本会在用户的 Gradle 缓存目录下载 Gradle 8.9（如果尚未安装），然后执行 `assembleDebug`。

## 安装测试版

Debug 构建默认带 `.debug` applicationId 后缀，即 `com.llxy.app.debug`，可以和原版并存，适合先做新版本验收。

安装到已连接的 Android 设备：
```bash
adb install -r app/build/outputs/apk/debug/app-debug.apk
```

## 非常重要：旧版存档和升级

1. **先在旧版 V2.0 中导出存档备份**（如果旧版没有备份入口，请先保留旧 APK 和设备数据，不要卸载）。
2. Debug 版使用不同 applicationId，和旧版的 WebView 存储隔离；不能直接读取旧版 `localStorage`。
3. 正式版 `com.llxy.app` 即使包名相同，如果没有原开发者的签名密钥，也不能覆盖安装旧 APK。
4. 如果签名不匹配，Android 会拒绝更新。卸载旧版再装新版本会清除旧应用私有数据；请先确认备份可用。
5. JSON 备份目前用于游戏网页存档恢复。旧版字段结构若有差异，需要在恢复流程中做一次迁移验证，不能默认保证所有字段无损兼容。

## 真实设备验收清单

- [ ] 首次启动能离线进入首页
- [ ] 首页、海域、图鉴、任务、补给、档案、设置均可打开
- [ ] 进入关卡、完成通关、失败后重试正常
- [ ] 金币、水滴、经验和每日任务进度能保存
- [ ] 购买的撤回、洗牌、捞回道具能带入下一关
- [ ] 87 种鱼类图鉴和水族馆素材都能显示
- [ ] 导出 JSON 后可恢复到相同进度
- [ ] Android 系统返回键能按页面层级返回
- [ ] 连续游玩 20 分钟无明显卡顿、白屏或崩溃
- [ ] 杀掉进程并重新启动后存档仍在

## 当前限制

- 本交付是 Android Studio 源工程，不是已经编译签名的 APK。
- 当前执行环境没有 Android SDK、Gradle、adb 或 aapt，因此无法在此环境真实编译、签名、安装或运行 Android APK。
- 当前没有原版发布签名密钥；无法承诺直接覆盖升级 V2.0。
- 云同步、账号系统、排行榜和服务器经济系统尚未实现。
