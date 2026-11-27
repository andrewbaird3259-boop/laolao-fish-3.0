#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const root = path.resolve(__dirname, '..');
const web = path.join(root, 'app/src/main/assets/www');
const pages = ['index.html','sea-map.html','gameplay.html','game.html','aquarium.html','dex.html','tasks.html','shop.html','profile.html','settings.html'];
const errors = [];
const exists = p => fs.existsSync(path.join(web,p));
for (const page of pages) {
  const file=path.join(web,page);
  if (!fs.existsSync(file)) { errors.push(`缺少页面：${page}`); continue; }
  const html=fs.readFileSync(file,'utf8');
  const refs=[
    ...[...html.matchAll(/(?:src|href)=["']([^"']+)["']/gi)].map(m=>m[1]),
    ...[...html.matchAll(/url\(["']?([^"')]+)["']?\)/g)].map(m=>m[1])
  ];
  for (const ref of refs) {
    if (!ref || /^(https?:|data:|blob:|#|javascript:)/i.test(ref) || ref.includes('${')) continue;
    const clean=decodeURIComponent(ref.split('?')[0].split('#')[0]);
    if (clean && !exists(clean)) errors.push(`${page} 引用了不存在的本地资源：${ref}`);
  }
  const scripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].map(m=>m[1]).filter(s=>s.trim());
  scripts.forEach((script,i)=>{
    const r=spawnSync(process.execPath,['--check','--input-type=commonjs'],{input:script,encoding:'utf8'});
    if(r.status!==0) errors.push(`${page} 内联脚本 #${i+1} 语法错误`);
  });
}
for(const file of ['fish-art.js','species-data.js']){
  const p=path.join(web,file);
  if(!fs.existsSync(p)){errors.push(`缺少脚本：${file}`);continue;}
  const r=spawnSync(process.execPath,['--check',p],{encoding:'utf8'});
  if(r.status!==0) errors.push(`${file} 语法错误`);
}
let species=[];
try{
  const src=fs.readFileSync(path.join(web,'species-data.js'),'utf8');
  const m=src.match(/window\.SPECIES_DATA\s*=\s*(\[[\s\S]*\]);?\s*$/);
  if(!m) throw new Error('未找到物种数组');
  species=JSON.parse(m[1]);
  if(species.length!==87) errors.push(`物种数据应为87条，实际${species.length}条`);
  for(const fish of species) if(!exists(`assets/fish/${fish.asset}.webp`)) errors.push(`鱼类素材缺失：${fish.name}`);
}catch(e){errors.push(`物种数据解析失败：${e.message}`)}
const java=fs.readFileSync(path.join(root,'app/src/main/java/com/llxy/app/MainActivity.java'),'utf8');
if(!java.includes('https://appassets.androidplatform.net/assets/www/index.html')) errors.push('WebView首页加载地址不正确');
if(!java.includes('addPathHandler("/assets/"')) errors.push('WebViewAssetLoader路径处理器配置缺失');
const manifest=fs.readFileSync(path.join(root,'app/src/main/AndroidManifest.xml'),'utf8');
if(!manifest.includes('android.permission.INTERNET')) {
  // Offline-first build intentionally does not request INTERNET permission.
}
console.log(`Android网页页面：${pages.length}`);
console.log(`鱼类数据：${species.length}条`);
console.log(`鱼类素材：${species.filter(f=>exists(`assets/fish/${f.asset}.webp`)).length}/${species.length}`);
console.log(`错误：${errors.length}`);
for(const e of errors) console.error('✗ '+e);
if(!errors.length) console.log('✓ Android工程静态检查通过（未替代真实 Gradle/设备构建）');
process.exit(errors.length?1:0);
