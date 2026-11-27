/* 捞捞小鱼 · 鱼类造型库（86 种手绘造型）
   主线卡面与大厅图鉴共用同一份，避免两边画出两种鱼。
   原先是内联在 捞捞小鱼-原型.html 里的，抽出来是为了让图鉴也能用同一套造型。 */

const PALETTE = [
  {bg:'#FFDCCE', c1:'#FFD3BC', c2:'#FF9C72', deep:'#C2593A'}, // 0  河豚
  {bg:'#FFEFC9', c1:'#FFDC8C', c2:'#FFA92E', deep:'#C06A0A'}, // 1  小丑鱼
  {bg:'#D6F0E5', c1:'#C6EFDD', c2:'#5FCBAD', deep:'#2C8A73'}, // 2  水母
  {bg:'#D2E6F5', c1:'#A9D7F1', c2:'#57A3D6', deep:'#2B6D9A'}, // 3  海星
  {bg:'#E6D8F2', c1:'#D6BCEC', c2:'#A276CE', deep:'#6A4291'}, // 4  小章鱼
  {bg:'#FBDDE8', c1:'#F9BFD3', c2:'#E8739A', deep:'#A8466A'}, // 5  海马
  {bg:'#FFF0EA', c1:'#FFE0D4', c2:'#F5B9A4', deep:'#C07E64'}, // 6  贝壳
  {bg:'#FBE7C4', c1:'#F7D79C', c2:'#DDA957', deep:'#8F5E1C'}, // 7  海龟
  {bg:'#D5E4F6', c1:'#B0CDEF', c2:'#6B98D0', deep:'#35608C'}, // 8  螃蟹
  {bg:'#F1E7D3', c1:'#E8D7B6', c2:'#C2A472', deep:'#7A6040'}, // 9  珍珠贝
  {bg:'#DCE8F0', c1:'#A7C4D8', c2:'#5E85A3', deep:'#33556E'}, // 10 鲸鱼
  {bg:'#FBEEDD', c1:'#F7DCBE', c2:'#DFA97A', deep:'#96613A'}, // 11 海螺
  {bg:'#D8E0E8', c1:'#A9BCCB', c2:'#5A7285', deep:'#2E4353'}, // 12 灯笼鱼
  {bg:'#FFF3C0', c1:'#FFF0A2', c2:'#F5C846', deep:'#A97D08'}, // 13 海兔
  {bg:'#FFD8D0', c1:'#FFB6A2', c2:'#EF6146', deep:'#A6301E'}, // 14 龙虾
  {bg:'#F7D9EC', c1:'#F2B4DA', c2:'#DE6BAE', deep:'#96386E'}, // 15 海葵
  {bg:'#D3EAF8', c1:'#A6D8F2', c2:'#4E9ED2', deep:'#25719C'}, // 16 海豚
  {bg:'#E2E2F4', c1:'#C9CCEA', c2:'#8A8EC4', deep:'#545991'}, // 17 剑鱼
  {bg:'#DCE2E8', c1:'#A7B7C6', c2:'#5F7488', deep:'#334A5C'}, // 18 蝠鲼
  {bg:'#E8DCF4', c1:'#CDB6E6', c2:'#8B62B8', deep:'#563A7C'}, // 19 海胆
  {bg:'#E6EACF', c1:'#CDD5A6', c2:'#8E9C5E', deep:'#5A6634'}, // 20 海参
  {bg:'#F3DDF2', c1:'#E9A8E0', c2:'#B95FC0', deep:'#7A2F82'}, // 21 珊瑚
  {bg:'#DCEBDD', c1:'#A9CDB0', c2:'#5E8E6C', deep:'#33543F'}, // 22 鳗鱼
  {bg:'#E2E4E6', c1:'#BFC4C9', c2:'#868F98', deep:'#4E5862'},  // 23 海牛
  {bg:'#E2F7FB', c1:'#B6ECF5', c2:'#35C8D8', deep:'#0E5F6B'}, // 24 孔雀鱼
  {bg:'#F7E4FA', c1:'#E9BFF0', c2:'#C77BD8', deep:'#6C3480'}, // 25 泰国斗鱼
  {bg:'#FFF4D6', c1:'#FFE08A', c2:'#FFC53D', deep:'#9A5B00'}, // 26 金波子
  {bg:'#DFE9FB', c1:'#A9C4F2', c2:'#3E7BE0', deep:'#1B3E86'}, // 27 蓝波子
  {bg:'#EDE7FA', c1:'#CDBFEF', c2:'#9B87DE', deep:'#46327F'}, // 28 刚果美人
  {bg:'#EDF2F6', c1:'#D8E2EA', c2:'#AEBDC9', deep:'#4E6070'}, // 29 神仙鱼
  {bg:'#FFF6DF', c1:'#FFE9B0', c2:'#FFD166', deep:'#A6711A'}, // 30 霓虹燕子
  {bg:'#FCE2DC', c1:'#F2AFA0', c2:'#D8452F', deep:'#7E1D12'}, // 31 漂亮宝贝鲋
  {bg:'#DFF3FB', c1:'#9DDDF2', c2:'#2FB6E8', deep:'#0C5A78'}, // 32 宝莲灯
  {bg:'#F7F2E7', c1:'#EFE6D8', c2:'#D6C4A8', deep:'#8A7355'}, // 33 珍珠燕子
  {bg:'#E8F2F8', c1:'#CFE0EC', c2:'#9DBACE', deep:'#4A6E85'}, // 34 黄帆天堂鸟
  {bg:'#E4EEF6', c1:'#BFD7E6', c2:'#7FA5C0', deep:'#2F5D7A'}, // 35 斑马鱼
  {bg:'#DEF5EA', c1:'#9FE7C8', c2:'#6FD3B0', deep:'#1E6E55'}, // 36 天使鱼
  {bg:'#FFF0DE', c1:'#FFD9AE', c2:'#FFC08A', deep:'#A25B2A'}, // 37 玛丽鱼
  {bg:'#FFF0F2', c1:'#FFDDE3', c2:'#F3B6C0', deep:'#B87A80'}, // 38 迷你鹦鹉
  {bg:'#FFE9DE', c1:'#FFC2A2', c2:'#FF8A4C', deep:'#A03C10'}, // 39 月光米奇
  {bg:'#FFFBDF', c1:'#FFEFAE', c2:'#FFD93D', deep:'#9C6B00'}, // 40 蝴蝶鱼
  {bg:'#FCE6E2', c1:'#F7B3A6', c2:'#F2705A', deep:'#8E2A1C'}, // 41 狮子鱼
  {bg:'#FDE8F0', c1:'#FFC7D9', c2:'#FF9EB5', deep:'#A44A63'}, // 42 鹦嘴鱼
  {bg:'#E6EDFB', c1:'#B9CBF4', c2:'#7FA8F0', deep:'#2E4C9E'}, // 43 飞鱼,
  {bg:'#D6EAF8', c1:'#A9CFE8', c2:'#6E9FC4', deep:'#2B5272'}, // 44 蓝鲸
  {bg:'#E4EDF4', c1:'#B8CEDD', c2:'#7B9BB2', deep:'#33566E'}, // 45 座头鲸
  {bg:'#E8E4F0', c1:'#C3BCD6', c2:'#8C82A8', deep:'#413A57'}, // 46 抹香鲸
  {bg:'#DDE5EC', c1:'#AAB8C4', c2:'#4A5C6B', deep:'#22303A'}, // 47 虎鲸
  {bg:'#F4FAFF', c1:'#DCE9F4', c2:'#AFC8DC', deep:'#5B7689'}, // 48 白鲸
  {bg:'#E2EBF0', c1:'#B4C6D2', c2:'#718C9E', deep:'#33505F'}, // 49 江豚
  {bg:'#EFE6DA', c1:'#D9C6B0', c2:'#B0906F', deep:'#6B4C32'}, // 50 海豹
  {bg:'#F5E3CB', c1:'#E4C293', c2:'#C18E54', deep:'#77501F'}, // 51 海狮
  {bg:'#F0E0CC', c1:'#DCBC93', c2:'#B98957', deep:'#6E4A22'}, // 52 海象
  {bg:'#E6EDE6', c1:'#C2D4C4', c2:'#8BA78F', deep:'#41583F'}, // 53 儒艮
  {bg:'#DDE6EC', c1:'#A9BCC9', c2:'#6C879B', deep:'#2E4657'}, // 54 鲨鱼
  {bg:'#D5E2EC', c1:'#9DB4C4', c2:'#5E7B90', deep:'#254154'}, // 55 鲸鲨
  {bg:'#E1E9EE', c1:'#AFC0CB', c2:'#718B9B', deep:'#2F4655'}, // 56 双髻鲨
  {bg:'#DCE7ED', c1:'#A5B9C5', c2:'#637F92', deep:'#243C4D'}, // 57 大白鲨
  {bg:'#E9E2D2', c1:'#CBBB9B', c2:'#9E8961', deep:'#5B4A2C'}, // 58 魟鱼
  {bg:'#DCEAF6', c1:'#A6C4DE', c2:'#5D89B4', deep:'#234B74'}, // 59 金枪鱼
  {bg:'#D8E6F6', c1:'#9DBFE6', c2:'#4F86C4', deep:'#1F4A82'}, // 60 旗鱼
  {bg:'#EFEAD9', c1:'#D8CBA8', c2:'#B4A171', deep:'#6B5A2E'}, // 61 鳕鱼
  {bg:'#F6E2D6', c1:'#EBB9A2', c2:'#D07C63', deep:'#8A3D2C'}, // 62 鲑鱼
  {bg:'#E6E4D6', c1:'#C6C2A6', c2:'#9B9473', deep:'#565031'}, // 63 比目鱼
  {bg:'#E9E1D2', c1:'#CCB894', c2:'#A28A5F', deep:'#5C4A28'}, // 64 石斑鱼
  {bg:'#F6EBC8', c1:'#EDD48C', c2:'#D4AC4E', deep:'#8A6413'}, // 65 箱鲀
  {bg:'#E4EFCB', c1:'#C4DCA0', c2:'#94B763', deep:'#4E6B27'}, // 66 海龙
  {bg:'#D8E2D2', c1:'#A8BCA2', c2:'#728E6C', deep:'#33482F'}, // 67 海鳗
  {bg:'#E4EBEF', c1:'#BECDD5', c2:'#8AA2AE', deep:'#3F5762'}, // 68 带鱼
  {bg:'#F2E4D2', c1:'#DCC0A0', c2:'#B98F63', deep:'#6B4826'}, // 69 乌贼
  {bg:'#F7DEDA', c1:'#EDB2AA', c2:'#D87F74', deep:'#8C3D33'}, // 70 鱿鱼
  {bg:'#FAEFD8', c1:'#F0D5A4', c2:'#D9A961', deep:'#8A6222'}, // 71 鹦鹉螺
  {bg:'#E7DCC8', c1:'#C9B491', c2:'#9F8457', deep:'#5B4626'}, // 72 鲍鱼
  {bg:'#E8E2D4', c1:'#C8BCA2', c2:'#9C8B6A', deep:'#57482E'}, // 73 牡蛎
  {bg:'#FFE3EE', c1:'#FFB3CE', c2:'#F0709E', deep:'#9E2C55'}, // 74 裸鳃海蛞蝓
  {bg:'#E3F2FA', c1:'#B8D8EC', c2:'#7FB2D2', deep:'#3A6A8C'}, // 75 海月水母
  {bg:'#DCE9F8', c1:'#A8C6E6', c2:'#5E8FBE', deep:'#254B74'}, // 76 僧帽水母
  {bg:'#E9E2C4', c1:'#C9BC8E', c2:'#9C8B56', deep:'#584A22'}, // 77 脑珊瑚
  {bg:'#F7DCD2', c1:'#EFB3A2', c2:'#D97F6C', deep:'#8E3D2E'}, // 78 鹿角珊瑚
  {bg:'#E4E0F2', c1:'#BEB6DC', c2:'#8A7EBE', deep:'#423A72'}, // 79 蛇尾
  {bg:'#FBEAD2', c1:'#F3CBA0', c2:'#E2A164', deep:'#94601F'}, // 80 磷虾
  {bg:'#FBE3D2', c1:'#F2BC9A', c2:'#DC8C60', deep:'#8E4A22'}, // 81 寄居蟹
  {bg:'#F6DCD4', c1:'#EAB0A2', c2:'#D37B6A', deep:'#8A3A2C'}, // 82 梭子蟹
  {bg:'#F3D8CC', c1:'#E3A894', c2:'#C86D55', deep:'#7E2E1E'}, // 83 帝王蟹
  {bg:'#DCE9D6', c1:'#AECFA4', c2:'#7BA470', deep:'#3A5730'}, // 84 海蛇
  {bg:'#E4E8EE', c1:'#B6C0CC', c2:'#78879A', deep:'#2E3C4C'}, // 85 企鹅
  {bg:'#DCE9FB', c1:'#A8C8F5', c2:'#2F62C8', deep:'#173A82'}  // 86 蓝吊鱼
];

function fishSVG(type, size){
  const WILD = { c1:'#FFE9A8', c2:'#F2B23A', deep:'#A96F12', bg:'#FFE7A8' };
  const P = (type === 'W') ? WILD : (PALETTE[type] || PALETTE[0]);
  const gid = (type === 'W') ? 'gW' : ('g' + type);
  const fill = 'url(#' + gid + ')';
  const deep = P.deep;
  const gid2 = gid + 'd';
  const deepFill = 'url(#' + gid2 + ')';   // 鳍/刺/肢足也用渐变，避免这些部位保持扁平

  /* 3D 玩具渲染需要更"立"的眼睛：深色虹膜 + 两颗高光 + 上缘暗边 */
  const eye = (cx, cy, r) =>
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r*1.04).toFixed(1) + '" fill="#fff"/>' +
    '<circle cx="' + (cx + r*0.14).toFixed(1) + '" cy="' + (cy + r*0.04).toFixed(1) + '" r="' + (r*0.6).toFixed(1) + '" fill="#1B2A34"/>' +
    '<circle cx="' + (cx + r*0.36).toFixed(1) + '" cy="' + (cy - r*0.38).toFixed(1) + '" r="' + (r*0.26).toFixed(1) + '" fill="#fff"/>' +
    '<circle cx="' + (cx - r*0.2).toFixed(1) + '" cy="' + (cy + r*0.3).toFixed(1) + '" r="' + (r*0.12).toFixed(1) + '" fill="#fff" opacity=".7"/>';
  /* 颜色工具：把扁平色拉成"塑料玩具"的明暗 */
  const hx = (h) => {
    h = h.replace('#','');
    return [parseInt(h.substr(0,2),16), parseInt(h.substr(2,2),16), parseInt(h.substr(4,2),16)];
  };
  const toHex = (r,g,b) => '#' + [r,g,b].map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2,'0')).join('');
  const mixc = (c1, c2, t) => { const A = hx(c1), B = hx(c2); return toHex(A[0]+(B[0]-A[0])*t, A[1]+(B[1]-A[1])*t, A[2]+(B[2]-A[2])*t); };
  const satc = (c, k) => {   // k>1 更艳
    const [r,g,b] = hx(c);
    const gray = 0.299*r + 0.587*g + 0.114*b;
    return toHex(gray + (r-gray)*k, gray + (g-gray)*k, gray + (b-gray)*k);
  };
  /* 描边改成"同色加深"而不是原来的深棕/近黑：
     3D 渲染里轮廓是明暗交界，不是一条黑线 */
  const edge2 = mixc(satc(P.c2, 1.06), '#262B38', .52);
  const blush = (cx, cy, rx) =>
    '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + (rx || 4.4) + '" ry="' + ((rx || 4.4) * 0.6).toFixed(1) +
    '" fill="#FF8FA8" opacity=".34"/>';
  const smile = (cx, cy, r) =>
    '<path d="M' + (cx - r) + ' ' + cy + ' q' + r + ' ' + (r * 0.95).toFixed(1) + ' ' + (r * 2) + ' 0" stroke="#22333E" ' +
    'stroke-width="1.7" fill="none" stroke-linecap="round" opacity=".5"/>';

  let body = '';

  if(type === 'W'){
    /* 魔法鱼：金色，带星星 */
    body =
      '<path d="M28 54 L6 38 L12 54 L6 70 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<ellipse cx="52" cy="54" rx="30" ry="23" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M42 33 q7 -12 18 -6" stroke="' + edge2 + '" stroke-width="1.8" fill="none" stroke-linecap="round" opacity=".55"/>' +
      '<ellipse cx="46" cy="64" rx="17" ry="9" fill="#fff" opacity=".16"/>' +
      eye(66, 47, 6.2) + blush(38, 60, 4.6) + smile(58, 62, 4.2) +
      '<path d="M80 18 l2.6 7 7 2.6 -7 2.6 -2.6 7 -2.6 -7 -7 -2.6 7 -2.6z" fill="#FFF6CE"/>' +
      '<circle cx="88" cy="34" r="1.8" fill="#FFF6CE" opacity=".9"/>';

  } else if(type === 0){
    /* 河豚：正面圆脸 + 尖刺 */
    let sp = '';
    for(let i = 0; i < 12; i++){
      const a = i * Math.PI / 6;
      sp += '<path d="M' + (50 + 24*Math.cos(a-0.16)).toFixed(1) + ' ' + (54 + 24*Math.sin(a-0.16)).toFixed(1) +
            'L' + (50 + 35*Math.cos(a)).toFixed(1) + ' ' + (54 + 35*Math.sin(a)).toFixed(1) +
            'L' + (50 + 24*Math.cos(a+0.16)).toFixed(1) + ' ' + (54 + 24*Math.sin(a+0.16)).toFixed(1) + 'Z" fill="' + deepFill + '" opacity=".85"/>';
    }
    body = sp +
      '<circle cx="50" cy="54" r="25" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<ellipse cx="50" cy="64" rx="15" ry="9" fill="#fff" opacity=".18"/>' +
      eye(40, 50, 6.2) + eye(60, 50, 6.2) + blush(30, 60, 4.2) + blush(70, 60, 4.2) +
      '<ellipse cx="50" cy="63" rx="3.4" ry="4.2" fill="' + deepFill + '" opacity=".55"/>' +
      '<circle cx="86" cy="28" r="3.2" fill="#fff" opacity=".55"/><circle cx="92" cy="18" r="2" fill="#fff" opacity=".4"/>';

  } else if(type === 1){
    /* 小丑鱼：椭圆 + 三条白纹 */
    body =
      '<path d="M24 54 L4 36 Q10 54 4 72 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M46 32 q10 -12 22 -4 q-8 6 -22 4z" fill="' + deepFill + '" opacity=".55"/>' +
      '<ellipse cx="54" cy="54" rx="29" ry="21" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M40 35 q7 19 0 38" stroke="#fff" stroke-width="6.5" fill="none" opacity=".92" stroke-linecap="round"/>' +
      '<path d="M58 34 q7 20 0 40" stroke="#fff" stroke-width="6.5" fill="none" opacity=".92" stroke-linecap="round"/>' +
      '<ellipse cx="50" cy="63" rx="16" ry="8" fill="#fff" opacity=".25"/>' +
      eye(72, 48, 5.8) + smile(72, 60, 3.6);

  } else if(type === 2){
    /* 水母：伞盖 + 飘带 */
    body =
      '<path d="M20 54 a30 26 0 0 1 60 0 q-7.5 8 -15 0 q-7.5 8 -15 0 q-7.5 8 -15 0 q-7.5 8 -15 0z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.7"/>' +
      '<path d="M34 34 q16 -10 30 2" stroke="#fff" stroke-width="3" fill="none" opacity=".5" stroke-linecap="round"/>' +
      '<path d="M28 60 q-7 12 1 19 t2 13" stroke="' + edge2 + '" stroke-width="3.6" fill="none" stroke-linecap="round" opacity=".9"/>' +
      '<path d="M41 63 q-5 13 2 19 t1 11" stroke="' + edge2 + '" stroke-width="2.9" fill="none" stroke-linecap="round" opacity=".75"/>' +
      '<path d="M59 63 q5 13 -2 19 t-1 11" stroke="' + edge2 + '" stroke-width="2.9" fill="none" stroke-linecap="round" opacity=".75"/>' +
      '<path d="M72 60 q7 12 -1 19 t-2 13" stroke="' + edge2 + '" stroke-width="3.6" fill="none" stroke-linecap="round" opacity=".9"/>' +
      eye(41, 47, 5.6) + eye(59, 47, 5.6) + blush(31, 55, 4) + blush(69, 55, 4) +
      smile(50, 55, 3.4);

  } else if(type === 3){
    /* 海星 */
    body =
      '<path d="M50 12 L61 40 L91 43 L68 61 L76 91 L50 74 L24 91 L32 61 L9 43 L39 40 Z" fill="' + fill +
        '" stroke="' + edge2 + '" stroke-width="1.8" stroke-linejoin="round"/>' +
      '<circle cx="50" cy="26" r="2.2" fill="#fff" opacity=".6"/>' +
      '<circle cx="79" cy="52" r="2" fill="#fff" opacity=".5"/><circle cx="21" cy="52" r="2" fill="#fff" opacity=".5"/>' +
      '<circle cx="38" cy="80" r="2" fill="#fff" opacity=".45"/><circle cx="62" cy="80" r="2" fill="#fff" opacity=".45"/>' +
      eye(41, 52, 5) + eye(59, 52, 5) + blush(31, 62, 3.8) + blush(69, 62, 3.8) +
      '<path d="M45 64 q5 4 10 0" stroke="#22333E" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".5"/>';

  } else if(type === 4){
    /* 小章鱼 */
    body =
      '<path d="M30 66 q-12 10 -6 20" stroke="' + edge2 + '" stroke-width="6" fill="none" stroke-linecap="round" opacity=".85"/>' +
      '<path d="M40 70 q-8 12 -1 18" stroke="' + edge2 + '" stroke-width="5.4" fill="none" stroke-linecap="round" opacity=".85"/>' +
      '<path d="M50 72 q-3 12 2 17" stroke="' + edge2 + '" stroke-width="5" fill="none" stroke-linecap="round" opacity=".85"/>' +
      '<path d="M60 70 q8 12 1 18" stroke="' + edge2 + '" stroke-width="5.4" fill="none" stroke-linecap="round" opacity=".85"/>' +
      '<path d="M70 66 q12 10 6 20" stroke="' + edge2 + '" stroke-width="6" fill="none" stroke-linecap="round" opacity=".85"/>' +
      '<path d="M27 52 a23 25 0 0 1 46 0 q0 17 -23 17 q-23 0 -23 -17z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<ellipse cx="50" cy="60" rx="13" ry="7" fill="#fff" opacity=".25"/>' +
      eye(40, 46, 6) + eye(60, 46, 6) + blush(30, 56, 4) + blush(70, 56, 4) + smile(50, 57, 3.2);

  } else if(type === 5){
    /* 海马：弯脖子 + 卷尾巴 */
    body =
      '<path d="M56 30 C40 38 38 54 50 64 C62 74 54 86 42 84" stroke="' + fill + '" stroke-width="15" fill="none" stroke-linecap="round"/>' +
      '<path d="M56 30 C40 38 38 54 50 64 C62 74 54 86 42 84" stroke="' + edge2 + '" stroke-width="1.5" fill="none" opacity=".22"/>' +
      '<path d="M42 84 q-13 2 -13 -9 q0 -9 9 -8" stroke="' + fill + '" stroke-width="9" fill="none" stroke-linecap="round"/>' +
      '<circle cx="60" cy="26" r="11" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.7"/>' +
      '<path d="M68 24 l13 -3 l0 7 l-13 3z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M50 30 q-7 -10 1 -14 q7 -3 9 4" fill="' + deepFill + '" opacity=".42"/>' +
      '<path d="M34 48 q11 -7 15 2 q-11 6 -15 -2z" fill="' + deepFill + '" opacity=".3"/>' +
      eye(61, 24, 4.4) + blush(52, 32, 3.2);

  } else if(type === 6){
    /* 贝壳：扇贝，底部铰合 + 波浪外缘 + 放射肋 */
    const crests = [[31,44],[41,35],[50,33],[59,35],[69,44]];
    let ribs = '';
    for(const [rx, ry] of crests){
      ribs += '<path d="M50 84 L' + rx + ' ' + ry + '" stroke="' + edge2 + '" stroke-width="1.5" opacity=".22"/>';
    }
    body =
      '<path d="M50 90 L22 60 C16 46 25 39 31 45 C35 32 45 34 47 42 C50 29 60 32 60 42 C64 33 73 36 73 46 C80 40 86 49 78 60 Z" fill="' + fill +
        '" stroke="' + edge2 + '" stroke-width="1.9" stroke-linejoin="round"/>' + ribs +
      '<path d="M50 84 L50 38" stroke="#fff" stroke-width="2" opacity=".4"/>' +
      '<path d="M50 90 q-5.4 0 -5.4 -4.6 q0 -4.6 5.4 -4.6 q5.4 0 5.4 4.6 q0 4.6 -5.4 4.6z" fill="' + deepFill + '" opacity=".5"/>' +
      eye(43, 58, 4.6) + eye(57, 58, 4.6) + blush(32, 64, 3.2) + blush(68, 64, 3.2) + smile(50, 68, 3);

  } else if(type === 7){
    /* 海龟：龟壳分片 */
    body =
      '<ellipse cx="24" cy="46" rx="9" ry="6" transform="rotate(-28 24 46)" fill="' + deepFill + '" opacity=".7"/>' +
      '<ellipse cx="76" cy="46" rx="9" ry="6" transform="rotate(28 76 46)" fill="' + deepFill + '" opacity=".7"/>' +
      '<ellipse cx="26" cy="70" rx="8" ry="5.5" transform="rotate(28 26 70)" fill="' + deepFill + '" opacity=".7"/>' +
      '<ellipse cx="74" cy="70" rx="8" ry="5.5" transform="rotate(-28 74 70)" fill="' + deepFill + '" opacity=".7"/>' +
      '<ellipse cx="50" cy="52" rx="29" ry="25" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="2"/>' +
      '<path d="M50 31 L67 42 L67 62 L50 73 L33 62 L33 42 Z" fill="#fff" opacity=".5"/>' +
      '<path d="M50 31 L67 42 L67 62 L50 73 L33 62 L33 42 Z" fill="none" stroke="' + edge2 + '" stroke-width="1.5" opacity=".45"/>' +
      '<path d="M50 31 L50 73 M33 42 L67 62 M67 42 L33 62" stroke="' + edge2 + '" stroke-width="1.2" opacity=".22"/>' +
      '<ellipse cx="50" cy="82" rx="9" ry="7" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.6"/>' +
      eye(50, 81, 3.8) + blush(43, 86, 2.6) + blush(57, 86, 2.6);

  } else if(type === 8){
    /* 螃蟹 */
    body =
      '<path d="M30 60 q-14 -4 -18 -16 q10 -3 15 6 q3 -9 12 -10" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8" stroke-linejoin="round"/>' +
      '<path d="M70 60 q14 -4 18 -16 q-10 -3 -15 6 q-3 -9 -12 -10" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8" stroke-linejoin="round"/>' +
      '<path d="M34 74 l-8 14 M44 77 l-3 16 M56 77 l3 16 M66 74 l8 14" stroke="' + edge2 + '" stroke-width="3.4" stroke-linecap="round" opacity=".85"/>' +
      '<ellipse cx="50" cy="60" rx="23" ry="17" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<ellipse cx="50" cy="66" rx="13" ry="7" fill="#fff" opacity=".25"/>' +
      eye(41, 55, 5.4) + eye(59, 55, 5.4) + blush(31, 65, 3.6) + blush(69, 65, 3.6) +
      smile(50, 66, 3.2);

  } else if(type === 9){
    /* 珍珠贝：开壳托珠，珍珠在壳上方，脸在贝壳上 */
    body =
      '<ellipse cx="50" cy="74" rx="26" ry="14" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<path d="M26 70 q24 16 48 0 q-4 15 -24 15 q-20 0 -24 -15z" fill="' + deepFill + '" opacity=".16"/>' +
      '<path d="M27 72 q23 -12 46 0" stroke="#fff" stroke-width="2" fill="none" opacity=".5"/>' +
      '<circle cx="50" cy="50" r="12" fill="#FFFDF7" stroke="' + edge2 + '" stroke-width="1.3"/>' +
      '<circle cx="45" cy="45" r="3.6" fill="#fff"/>' +
      '<path d="M67 38 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2z" fill="#FFF3BE"/>' +
      eye(43, 76, 3.8) + eye(57, 76, 3.8) + blush(33, 80, 3) + blush(67, 80, 3) + smile(50, 82, 2.6);

  } else if(type === 10){
    /* 鲸鱼 */
    body =
      '<path d="M30 60 q-16 2 -22 -12 q-2 12 4 20 q-8 4 -2 12 q12 2 20 -8z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.7" stroke-linejoin="round"/>' +
      '<path d="M20 62 q22 -34 50 -26 q26 6 26 26 q0 20 -30 22 q-32 2 -46 -22z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<path d="M34 74 q20 14 44 2 q-14 14 -44 -2z" fill="#fff" opacity=".45"/>' +
      '<path d="M64 40 q4 -10 12 -8 q-6 4 -4 10z" fill="' + deepFill + '" opacity=".7"/>' +
      '<path d="M44 34 q-2 -10 4 -12 M50 33 q2 -9 8 -10" stroke="#BFEAF7" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".85"/>' +
      eye(76, 56, 5.6) + blush(66, 66, 4.2) + smile(78, 66, 3.4);

  } else if(type === 11){
    /* 海螺：螺旋壳 + 喇叭口 */
    body =
      '<circle cx="55" cy="46" r="24" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<path d="M55 30 a16 16 0 1 0 16 16 a11 11 0 1 1 -11 -11 a6 6 0 1 0 6 6" stroke="' + deep +
        '" stroke-width="2.4" fill="none" opacity=".38" stroke-linecap="round"/>' +
      '<path d="M33 62 q-11 13 0 21 q12 8 23 -5 q-13 5 -19 -3 q-5 -6 -4 -13z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8" stroke-linejoin="round"/>' +
      '<ellipse cx="61" cy="38" rx="7" ry="5" fill="#fff" opacity=".2"/>' +
      eye(48, 44, 4.4) + blush(60, 55, 3.2);

  } else if(type === 12){
    /* 灯笼鱼：圆身 + 大牙 + 提灯 */
    body =
      '<path d="M42 24 q4 -14 16 -18" stroke="' + edge2 + '" stroke-width="2.2" fill="none" stroke-linecap="round"/>' +
      '<circle cx="60" cy="4" r="5.5" fill="#FFE08A"/><circle cx="60" cy="4" r="11" fill="#FFE08A" opacity=".26"/>' +
      '<path d="M22 56 a28 26 0 0 1 56 0 q0 18 -28 20 q-28 -2 -28 -20z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<path d="M30 64 q20 16 40 0 q-20 8 -40 0z" fill="#16232B" opacity=".62"/>' +
      '<path d="M34 64 l5 9 l5 -9 l6 9 l6 -9 l6 9 l5 -9" stroke="#F4F9FC" stroke-width="2.4" fill="none" stroke-linejoin="round"/>' +
      '<path d="M22 56 q-11 2 -15 -6 q-2 10 5 14 q-5 6 4 9 q8 0 8 -9z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<circle cx="64" cy="46" r="8" fill="#FFE08A" opacity=".95"/><circle cx="66" cy="46" r="3.6" fill="#22333E"/>' +
      '<circle cx="63" cy="43" r="1.5" fill="#fff"/>';

  } else if(type === 13){
    /* 海兔 */
    body =
      '<path d="M36 34 q-4 -14 4 -16 q6 -2 6 12" fill="' + deepFill + '" opacity=".55"/>' +
      '<path d="M56 34 q4 -14 -2 -16 q-6 -2 -6 12" fill="' + deepFill + '" opacity=".55"/>' +
      '<ellipse cx="50" cy="58" rx="30" ry="22" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<path d="M50 38 q10 8 0 16 q-10 -8 0 -16z" fill="#fff" opacity=".16"/>' +
      '<circle cx="30" cy="52" r="3.2" fill="#FF7FA8" opacity=".8"/>' +
      '<circle cx="68" cy="58" r="3.6" fill="#FF7FA8" opacity=".8"/>' +
      '<circle cx="38" cy="70" r="2.6" fill="#9C6BE0" opacity=".75"/>' +
      '<circle cx="62" cy="72" r="2.2" fill="#9C6BE0" opacity=".75"/>' +
      eye(40, 54, 5.4) + eye(60, 54, 5.4) + blush(28, 62, 3.6) + blush(72, 62, 3.6) + smile(50, 64, 3);

  } else if(type === 14){
    /* 龙虾：一对大钳 + 分节身体 */
    body =
      '<path d="M45 33 q-15 -16 -25 -9 M55 33 q15 -16 25 -9" stroke="' + edge2 + '" stroke-width="1.8" fill="none" stroke-linecap="round" opacity=".5"/>' +
      '<path d="M31 46 q-15 -3 -18 -18 q10 -3 15 8 q2 -13 11 -15 q7 8 -1 21 q-2 6 -7 4z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8" stroke-linejoin="round"/>' +
      '<path d="M69 46 q15 -3 18 -18 q-10 -3 -15 8 q-2 -13 -11 -15 q-7 8 1 21 q2 6 7 4z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8" stroke-linejoin="round"/>' +
      '<ellipse cx="50" cy="50" rx="15" ry="13" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<ellipse cx="50" cy="64" rx="13" ry="10" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.6"/>' +
      '<ellipse cx="50" cy="77" rx="11" ry="8" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.6"/>' +
      '<path d="M50 84 l-11 9 q11 7 22 0z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      eye(44, 47, 4.4) + eye(56, 47, 4.4) + blush(37, 55, 3) + blush(63, 55, 3);

  } else if(type === 15){
    /* 海葵：花状 */
    let t = '';
    for(let i = 0; i < 11; i++){
      const a = -Math.PI + (i / 10) * Math.PI;
      const x = 50 + 30 * Math.cos(a), y = 64 + 26 * Math.sin(a) * 0.9;
      t += '<path d="M50 64 Q' + (50 + 16*Math.cos(a - 0.2)).toFixed(1) + ' ' + (64 - 14).toFixed(1) + ' ' +
           x.toFixed(1) + ' ' + y.toFixed(1) + '" stroke="' + fill + '" stroke-width="7" fill="none" stroke-linecap="round"/>';
    }
    body = t +
      '<ellipse cx="50" cy="66" rx="18" ry="14" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<ellipse cx="50" cy="70" rx="11" ry="7" fill="#fff" opacity=".16"/>' +
      eye(43, 64, 5) + eye(57, 64, 5) + blush(34, 71, 3.4) + blush(66, 71, 3.4) + smile(50, 71, 3);

  } else if(type === 16){
    /* 海豚 */
    body =
      '<path d="M24 62 q-12 4 -18 -6 q-2 12 4 16 q-6 4 0 10 q10 2 16 -8z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.7" stroke-linejoin="round"/>' +
      '<path d="M26 56 q8 -30 40 -30 q26 0 30 22 q-6 20 -30 22 q-30 2 -40 -14z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<path d="M56 28 q6 -14 14 -12 q-8 6 -6 14z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M62 50 q22 2 34 8 q-16 12 -34 6 q16 -8 0 -14z" fill="#fff" opacity=".34"/>' +
      '<path d="M30 66 q22 12 44 2 q-16 14 -44 -2z" fill="#fff" opacity=".5"/>' +
      eye(84, 56, 5.4) + blush(74, 66, 4) + smile(86, 66, 3.2);

  } else if(type === 17){
    /* 剑鱼：长吻 + 背帆 */
    body =
      '<path d="M26 56 L8 45 Q16 56 8 67 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M34 42 q18 2 26 13 q0 11 -26 13 q-13 -2 -17 -13 q4 -11 17 -13z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<path d="M58 48 q22 -7 40 -11 q-3 5 -8 7 q6 2 8 5 q-20 3 -40 4z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M36 42 q6 -17 23 -14 q-11 6 -11 15z" fill="' + deepFill + '" opacity=".45"/>' +
      '<path d="M38 63 q12 6 24 2 q-12 8 -24 -2z" fill="#fff" opacity=".42"/>' +
      eye(50, 51, 4.6) + blush(32, 58, 3.2);

  } else if(type === 18){
    /* 蝠鲼：宽三角翼 */
    body =
      '<path d="M50 34 L6 60 L30 66 L50 56 L70 66 L94 60 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9" stroke-linejoin="round"/>' +
      '<path d="M50 56 q-2 18 2 30" stroke="' + edge2 + '" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".8"/>' +
      '<path d="M34 46 q-10 2 -16 10 q12 2 18 -2z" fill="' + deepFill + '" opacity=".45"/>' +
      '<path d="M66 46 q10 2 16 10 q-12 2 -18 -2z" fill="' + deepFill + '" opacity=".45"/>' +
      '<ellipse cx="50" cy="46" rx="13" ry="8" fill="#fff" opacity=".25"/>' +
      eye(44, 44, 4.4) + eye(58, 44, 4.4) + blush(34, 52, 3) + blush(66, 52, 3);

  } else if(type === 19){
    /* 海胆：圆球 + 长刺 */
    let sp = '';
    for(let i = 0; i < 20; i++){
      const a = i * Math.PI / 10;
      sp += '<path d="M' + (50 + 16*Math.cos(a)).toFixed(1) + ' ' + (52 + 16*Math.sin(a)).toFixed(1) +
            'L' + (50 + 33*Math.cos(a + 0.06)).toFixed(1) + ' ' + (52 + 33*Math.sin(a + 0.06)).toFixed(1) +
            '" stroke="' + edge2 + '" stroke-width="2.6" stroke-linecap="round" opacity=".85"/>';
    }
    body = sp +
      '<circle cx="50" cy="52" r="17" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<circle cx="50" cy="52" r="10" fill="#fff" opacity=".22"/>' +
      eye(44, 50, 4.4) + eye(56, 50, 4.4) + blush(37, 58, 3) + blush(63, 58, 3) + smile(50, 58, 2.6);

  } else if(type === 20){
    /* 海参：肉刺 + 前端触手 */
    let bumps = '';
    for(let i = 0; i < 5; i++){
      const x = 34 + i * 11;
      bumps += '<path d="M' + x + ' 40 l-3 -9 l6 0 z" fill="' + deepFill + '" opacity=".55"/>';
    }
    body = bumps +
      '<path d="M24 58 q2 -20 26 -20 q26 0 28 20 q2 22 -28 24 q-28 -2 -26 -24z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<path d="M26 62 q24 16 50 0 q-22 20 -50 0z" fill="#fff" opacity=".16"/>' +
      '<path d="M22 60 q-6 -2 -8 -8 M22 66 q-7 0 -9 -5 M24 72 q-6 2 -9 -2" stroke="' + edge2 + '" stroke-width="2.2" fill="none" stroke-linecap="round" opacity=".45"/>' +
      eye(60, 58, 4.6) + blush(50, 67, 3.4) + smile(62, 67, 2.8);

  } else if(type === 21){
    /* 珊瑚：粗干 + 向上分叉 + 圆头珊瑚虫 */
    const brs = [
      ['M50 92 L50 66', 13],
      ['M50 70 C44 62 38 57 34 48', 9],
      ['M50 70 C56 62 62 57 66 48', 9],
      ['M35 52 C31 44 31 37 33 30', 7],
      ['M65 52 C69 44 69 37 67 30', 7],
      ['M44 58 C40 52 38 46 39 39', 5],
      ['M56 58 C60 52 62 46 61 39', 5],
      ['M50 64 L50 50', 6],
      ['M60 80 C68 76 74 71 77 63', 5.5]
    ];
    let br = '';
    for(const [d, w] of brs){
      br += '<path d="' + d + '" stroke="' + fill + '" stroke-width="' + w + '" fill="none" stroke-linecap="round"/>';
      br += '<path d="' + d + '" stroke="' + edge2 + '" stroke-width="1.1" fill="none" opacity=".16"/>';
    }
    body = '<ellipse cx="50" cy="90" rx="23" ry="7" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.6"/>' + br +
      '<circle cx="33" cy="28" r="5.6" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4"/>' +
      '<circle cx="67" cy="28" r="5.6" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4"/>' +
      '<circle cx="39" cy="36" r="4" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.2"/>' +
      '<circle cx="61" cy="36" r="4" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.2"/>' +
      '<circle cx="50" cy="48" r="4.6" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.3"/>' +
      '<circle cx="77" cy="62" r="3.8" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.2"/>' +
      eye(45.5, 78, 3.8) + eye(54.5, 78, 3.8) + blush(40, 84, 2.4) + blush(60, 84, 2.4) + smile(50, 84, 2.4);

  } else if(type === 22){
    /* 鳗鱼：长条 S 形 */
    body =
      '<path d="M14 62 q14 -26 30 -12 q14 12 26 -6 q6 -6 12 -2" stroke="' + fill + '" stroke-width="13" fill="none" stroke-linecap="round"/>' +
      '<path d="M14 62 q14 -26 30 -12 q14 12 26 -6 q6 -6 12 -2" stroke="' + edge2 + '" stroke-width="1.4" fill="none" opacity=".3"/>' +
      '<path d="M22 66 q10 6 22 2" stroke="' + edge2 + '" stroke-width="1.6" fill="none" opacity=".35" stroke-linecap="round"/>' +
      '<path d="M40 64 q10 5 20 0" stroke="' + edge2 + '" stroke-width="1.6" fill="none" opacity=".35" stroke-linecap="round"/>' +
      '<circle cx="80" cy="40" r="10" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.7"/>' +
      eye(83, 38, 4.2) + smile(84, 46, 2.4);

  } else if(type === 23){
    /* 海牛：桨尾 + 小鳍 */
    body =
      '<path d="M18 58 q-10 0 -12 -8 q-4 10 2 16 q-6 4 0 10 q8 2 12 -6z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<ellipse cx="54" cy="56" rx="30" ry="20" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<ellipse cx="54" cy="64" rx="20" ry="9" fill="#fff" opacity=".16"/>' +
      '<path d="M46 70 q8 8 18 2 q-8 10 -18 -2z" fill="' + deepFill + '" opacity=".4"/>' +
      '<circle cx="80" cy="50" r="8" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.6"/>' +
      '<circle cx="84" cy="52" r="1.8" fill="' + deepFill + '" opacity=".55"/>' +
      '<circle cx="84" cy="47" r="1.8" fill="' + deepFill + '" opacity=".55"/>' +
      '<path d="M36 40 q4 -6 10 -4" stroke="' + edge2 + '" stroke-width="2.2" fill="none" opacity=".3" stroke-linecap="round"/>' +
      eye(76, 47, 4.4) + blush(64, 60, 4) + smile(78, 57, 2.8);

  } else if(type === 24){
    /* 孔雀鱼：小身子 + 占了半张脸的大扇尾 */
    let rays = '';
    for(let i = 0; i < 4; i++){
      rays += '<path d="M34 56 L' + (8 + i * 2) + ' ' + (32 + i * 14) + '" stroke="' + edge2 + '" stroke-width="1.3" opacity=".26"/>';
    }
    body =
      '<path d="M36 54 C24 34 10 24 6 28 C10 40 12 50 8 58 C4 70 8 82 16 84 C26 82 32 68 36 54z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.7" stroke-linejoin="round"/>' + rays +
      '<circle cx="20" cy="46" r="3" fill="' + deepFill + '" opacity=".3"/><circle cx="26" cy="70" r="2.4" fill="' + deepFill + '" opacity=".3"/><circle cx="13" cy="66" r="2" fill="#fff" opacity=".6"/>' +
      '<ellipse cx="56" cy="54" rx="21" ry="13" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M48 42 q10 -9 17 -3 q-8 5 -17 3z" fill="' + deepFill + '" opacity=".38"/>' +
      '<ellipse cx="56" cy="61" rx="12" ry="5" fill="#fff" opacity=".16"/>' +
      eye(68, 50, 5) + blush(66, 62, 3.2) + smile(70, 62, 2.8);

  } else if(type === 25){
    /* 泰国斗鱼：纱一样的大尾巴 */
    body =
      '<path d="M40 54 C28 30 8 20 6 30 C12 42 14 52 10 60 C6 74 10 88 20 88 C30 86 36 68 40 54z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.6"/>' +
      '<path d="M35 50 C26 36 15 30 13 36 C19 46 21 54 17 62" stroke="#fff" stroke-width="2.2" fill="none" opacity=".45" stroke-linecap="round"/>' +
      '<ellipse cx="56" cy="54" rx="20" ry="17" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M47 39 q12 -13 20 -1 q-10 6 -20 1z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5"/>' +
      '<path d="M42 68 q-7 14 1 20 q7 -8 5 -20z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4"/>' +
      eye(68, 48, 5.4) + blush(66, 60, 3.6) + smile(70, 61, 3);

  } else if(type === 26){
    /* 金波子：圆滚滚的金身子 + 红眼睛 */
    body =
      '<path d="M28 46 L10 34 Q14 54 10 74 L30 62 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M42 35 q9 -16 22 -5 q-10 8 -22 5z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<ellipse cx="56" cy="56" rx="24" ry="21" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<ellipse cx="56" cy="64" rx="15" ry="7" fill="#fff" opacity=".16"/>' +
      '<path d="M44 40 q10 -6 20 0" stroke="' + edge2 + '" stroke-width="1.3" opacity=".25" fill="none"/>' +
      '<circle cx="53" cy="47" r="2.6" fill="' + deepFill + '" opacity=".3"/>' +
      '<circle cx="70" cy="50" r="6.4" fill="#FF6B4A" opacity=".55"/>' +
      eye(70, 50, 5.2) + blush(66, 62, 3.8) + smile(72, 62, 3.2);

  } else if(type === 27){
    /* 蓝波子：高背鳍 + 橘色脸颊 */
    body =
      '<path d="M30 48 L12 36 Q16 54 12 72 L32 60 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M40 37 q6 -20 20 -9 q-7 12 -20 9z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<ellipse cx="55" cy="56" rx="23" ry="20" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<path d="M64 40 q9 8 6 16 q-2 8 -11 10 q9 -14 5 -26z" fill="#FFB37A" opacity=".8"/>' +
      '<circle cx="46" cy="58" r="2.2" fill="#fff" opacity=".65"/><circle cx="43" cy="48" r="1.8" fill="#fff" opacity=".55"/>' +
      eye(70, 50, 5.4) + blush(66, 62, 3.4) + smile(72, 62, 3);

  } else if(type === 28){
    /* 刚果美人：细长身 + 紫鳞竖纹 */
    body =
      '<path d="M26 54 L8 40 Q12 54 8 68 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<ellipse cx="54" cy="54" rx="28" ry="14" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M40 43 q4 22 0 22 M50 41 q4 26 0 26 M60 42 q4 24 0 24" stroke="' + edge2 + '" stroke-width="1.2" opacity=".2" fill="none"/>' +
      '<path d="M44 61 q10 8 22 2" stroke="#fff" stroke-width="1.8" opacity=".4" fill="none"/>' +
      '<ellipse cx="54" cy="60" rx="16" ry="4.4" fill="#fff" opacity=".22"/>' +
      eye(72, 50, 4.8) + blush(70, 60, 3) + smile(74, 60, 2.8);

  } else if(type === 29){
    /* 神仙鱼：菱形薄身子 + 高背帆 + 长腹丝 + 黑竖纹 */
    body =
      '<path d="M46 30 Q40 12 28 4 Q44 8 54 26 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M54 74 Q62 90 74 96 Q56 94 46 78 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M50 26 C58 34 70 45 72 52 C70 61 58 73 50 79 C42 73 30 61 28 52 C30 45 42 34 50 26 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8" stroke-linejoin="round"/>' +
      '<path d="M44 37 q-3 16 0 31 M57 36 q-3 17 0 32" stroke="' + edge2 + '" stroke-width="3.8" opacity=".5" fill="none"/>' +
      '<path d="M50 27 L50 20" stroke="' + edge2 + '" stroke-width="1.6" opacity=".35"/>' +
      '<ellipse cx="56" cy="45" rx="10" ry="5.4" fill="#fff" opacity=".16"/>' +
      eye(60, 48, 4.2) + blush(58, 58, 2.6) + smile(62, 58, 2.4);

  } else if(type === 30){
    /* 霓虹燕子：银身黄燕尾 + 蓝眼圈 */
    body =
      '<path d="M28 54 L8 38 Q14 54 8 70 Z" fill="#FFD166" stroke="' + edge2 + '" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<ellipse cx="52" cy="54" rx="25" ry="13" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M34 50 q18 -6 34 0" stroke="#fff" stroke-width="2" opacity=".55" fill="none"/>' +
      '<ellipse cx="52" cy="60" rx="16" ry="4" fill="#fff" opacity=".25"/>' +
      '<path d="M44 43 q6 -8 14 -6" stroke="' + edge2 + '" stroke-width="1.8" opacity=".3" fill="none"/>' +
      '<circle cx="70" cy="50" r="5.6" fill="none" stroke="#4FC3F7" stroke-width="1.7" opacity=".85"/>' +
      eye(70, 50, 4.6) + blush(68, 60, 3) + smile(72, 60, 2.6);

  } else if(type === 31){
    /* 漂亮宝贝鲋：朱红身 + 蓝点 + 旗尾 */
    body =
      '<path d="M26 54 L6 34 Q14 54 6 74 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<ellipse cx="54" cy="54" rx="26" ry="16" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<circle cx="40" cy="46" r="2" fill="#8FE3FF" opacity=".9"/><circle cx="50" cy="42" r="2" fill="#8FE3FF" opacity=".9"/>' +
      '<circle cx="44" cy="62" r="1.8" fill="#8FE3FF" opacity=".8"/><circle cx="56" cy="64" r="1.8" fill="#8FE3FF" opacity=".8"/>' +
      '<circle cx="60" cy="48" r="1.6" fill="#8FE3FF" opacity=".75"/>' +
      '<ellipse cx="54" cy="62" rx="16" ry="4.6" fill="#fff" opacity=".2"/>' +
      eye(72, 50, 5) + blush(70, 62, 3.2) + smile(74, 61, 2.8);

  } else if(type === 32){
    /* 宝莲灯：蓝上红下两道荧光带 */
    body =
      '<path d="M26 54 L10 42 Q14 54 10 66 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<ellipse cx="54" cy="54" rx="27" ry="13" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.7"/>' +
      '<path d="M34 49 q20 -4 40 0" stroke="#2FE0FF" stroke-width="4.4" fill="none" opacity=".95" stroke-linecap="round"/>' +
      '<path d="M30 58 q22 4 44 0" stroke="#E8394F" stroke-width="5.2" fill="none" opacity=".9" stroke-linecap="round"/>' +
      eye(71, 50, 4.4) + smile(73, 58, 2.2);

  } else if(type === 33){
    /* 珍珠燕子：银身 + 黑点背鳍 */
    body =
      '<path d="M28 54 L10 40 Q14 54 10 68 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<path d="M44 43 q5 -19 16 -12 q-4 11 -16 12z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<circle cx="52" cy="35" r="1.6" fill="' + deepFill + '" opacity=".6"/><circle cx="47" cy="39" r="1.3" fill="' + deepFill + '" opacity=".55"/>' +
      '<ellipse cx="54" cy="54" rx="26" ry="15" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M32 50 q20 -6 40 0" stroke="#fff" stroke-width="2" opacity=".5" fill="none"/>' +
      eye(72, 50, 4.8) + blush(70, 60, 3) + smile(74, 60, 2.6);

  } else if(type === 34){
    /* 黄帆天堂鸟：白身 + 大黄背帆 */
    body =
      '<path d="M28 54 L10 42 Q14 54 10 66 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<path d="M40 44 q4 -24 20 -17 q2 14 -8 19z" fill="#FFD84D" stroke="#B98A00" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<ellipse cx="54" cy="56" rx="26" ry="16" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M34 50 q20 -6 38 0" stroke="#fff" stroke-width="2" opacity=".6" fill="none"/>' +
      eye(72, 52, 4.8) + blush(70, 62, 3) + smile(74, 62, 2.6);

  } else if(type === 35){
    /* 斑马鱼：五道横条纹 */
    body =
      '<path d="M26 54 L10 42 Q14 54 10 66 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<ellipse cx="54" cy="54" rx="27" ry="12" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.7"/>' +
      '<path d="M30 48 h44 M30 54 h46 M30 60 h44" stroke="' + edge2 + '" stroke-width="2.6" opacity=".55"/>' +
      '<path d="M38 45 q6 18 0 18" stroke="#fff" stroke-width="1.4" opacity=".35" fill="none"/>' +
      eye(71, 50, 4.4) + smile(73, 58, 2.2);

  } else if(type === 36){
    /* 天使鱼（七彩）：圆盘身 + 竖纹 */
    body =
      '<path d="M28 54 L10 44 Q14 54 10 64 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<ellipse cx="53" cy="54" rx="27" ry="27" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<path d="M40 30 q-5 24 0 48 M53 28 q-5 26 0 52 M66 31 q-5 22 0 46" stroke="' + edge2 + '" stroke-width="2.6" opacity=".26" fill="none"/>' +
      '<path d="M30 40 q16 -10 32 -2" stroke="#fff" stroke-width="2.4" opacity=".4" fill="none"/>' +
      '<path d="M30 72 q22 10 44 2" stroke="#fff" stroke-width="2" opacity=".25" fill="none"/>' +
      eye(64, 44, 5.2) + blush(60, 56, 3.6) + smile(64, 58, 3);

  } else if(type === 37){
    /* 玛丽鱼：胖身子 + 大背鳍 */
    body =
      '<path d="M28 54 L10 40 Q14 54 10 68 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<path d="M42 42 q4 -22 22 -11 q-4 14 -22 11z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<ellipse cx="56" cy="56" rx="25" ry="20" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<ellipse cx="56" cy="64" rx="15" ry="6.6" fill="#fff" opacity=".18"/>' +
      eye(72, 50, 5.4) + blush(70, 62, 3.6) + smile(74, 62, 3);

  } else if(type === 38){
    /* 迷你鹦鹉：奶白圆脸 + 小勾嘴 */
    body =
      '<path d="M30 54 L14 44 Q18 54 14 66 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<ellipse cx="56" cy="55" rx="23" ry="21" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M76 52 q7 3 4 9 q-4 2 -8 -3" fill="' + deepFill + '" opacity=".5" stroke="' + edge2 + '" stroke-width="1"/>' +
      '<ellipse cx="54" cy="64" rx="14" ry="7" fill="#fff" opacity=".4"/>' +
      eye(68, 47, 5.8) + blush(64, 60, 4);

  } else if(type === 39){
    /* 月光米奇：橘红身 + 尾巴上的米奇斑 */
    body =
      '<path d="M30 54 L12 42 Q16 54 12 68 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<ellipse cx="56" cy="56" rx="24" ry="17" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<circle cx="36" cy="50" r="5" fill="' + deepFill + '" opacity=".5"/><circle cx="33" cy="59" r="3.4" fill="' + deepFill + '" opacity=".5"/>' +
      '<circle cx="42" cy="45" r="3.4" fill="' + deepFill + '" opacity=".5"/>' +
      '<ellipse cx="58" cy="64" rx="14" ry="5.6" fill="#fff" opacity=".28"/>' +
      eye(72, 50, 5.4) + blush(70, 62, 3.6) + smile(74, 62, 3);

  } else if(type === 40){
    /* 蝴蝶鱼：黄身 + 黑眼带 + 尖嘴 */
    body =
      '<path d="M28 54 L10 40 Q14 54 10 68 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<ellipse cx="54" cy="54" rx="26" ry="24" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M42 31 q10 24 0 46" stroke="' + edge2 + '" stroke-width="7" opacity=".65" fill="none" stroke-linecap="round"/>' +
      '<path d="M76 44 q11 4 11 10 q-5 -2 -12 0z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.3" stroke-linejoin="round"/>' +
      '<path d="M34 72 q10 8 22 4" stroke="' + edge2 + '" stroke-width="2" opacity=".22" fill="none"/>' +
      eye(64, 46, 4.8) + blush(62, 58, 3.2) + smile(66, 60, 2.8);

  } else if(type === 41){
    /* 狮子鱼：红白条纹 + 张开的棘 */
    body =
      '<path d="M40 40 L29 12 M48 37 L44 7 M57 37 L59 8 M65 41 L72 14" stroke="' + edge2 + '" stroke-width="2.6" opacity=".7" stroke-linecap="round"/>' +
      '<path d="M31 66 L18 88 M39 72 L30 93 M53 74 L50 95" stroke="' + edge2 + '" stroke-width="2.4" opacity=".55" stroke-linecap="round"/>' +
      '<path d="M28 56 L8 44 Q12 56 8 68 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<ellipse cx="55" cy="56" rx="24" ry="19" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M40 39 q-5 18 0 34 M52 37 q-5 20 0 38" stroke="#fff" stroke-width="4.6" opacity=".7" fill="none"/>' +
      eye(70, 50, 5) + blush(68, 62, 3.2) + smile(72, 62, 2.8);

  } else if(type === 42){
    /* 鹦嘴鱼：厚唇 + 鳞纹 */
    body =
      '<path d="M26 56 L8 42 Q12 56 8 70 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<ellipse cx="54" cy="56" rx="26" ry="20" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M40 44 q6 6 6 12 M50 40 q6 8 6 16 M60 42 q6 8 5 14" stroke="' + edge2 + '" stroke-width="1.3" opacity=".26" fill="none"/>' +
      '<path d="M75 50 q9 3 9 8 q-5 5 -11 2" fill="#FFF0F2" stroke="' + edge2 + '" stroke-width="1.4" stroke-linejoin="round"/>' +
      eye(66, 45, 4.8) + blush(64, 60, 3.2) + smile(68, 61, 2.6);

  } else if(type === 43){
    /* 飞鱼：长翼胸鳍 */
    body =
      '<path d="M40 50 C30 30 14 20 8 26 C14 40 22 50 34 54 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M28 56 L6 58 L26 66 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<ellipse cx="56" cy="56" rx="26" ry="14" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M40 52 q16 -6 30 0" stroke="#fff" stroke-width="2" opacity=".45" fill="none"/>' +
      eye(74, 52, 4.6) + smile(76, 62, 2.4);

  } else if(type === 44){
    /* 蓝鲸：大身子 + 尾鳍 + 喷水柱 + 喉腹褶 */
    body =
      '<path d="M18 56 L2 40 Q8 56 2 74 L22 66 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<ellipse cx="52" cy="56" rx="32" ry="21" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<path d="M28 68 q22 12 46 0" stroke="#fff" stroke-width="7" fill="none" opacity=".45" stroke-linecap="round"/>' +
      '<path d="M30 62 q22 12 44 0 M32 56 q20 12 42 0" stroke="' + edge2 + '" stroke-width="1.2" fill="none" opacity=".22"/>' +
      '<path d="M60 72 q10 8 16 4" fill="' + deepFill + '" opacity=".35"/>' +
      '<path d="M44 36 q-2 -14 6 -16 M52 34 q0 -12 8 -12" stroke="#BFE7F5" stroke-width="3" fill="none" opacity=".9" stroke-linecap="round"/>' +
      eye(72, 50, 5) + blush(78, 58, 3.4) + smile(76, 61, 3);

  } else if(type === 45){
    /* 座头鲸：长白胸鳍 + 头上疙瘩 */
    body =
      '<path d="M18 58 L2 42 Q8 58 2 76 L22 68 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<ellipse cx="52" cy="56" rx="31" ry="20" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<path d="M58 72 C64 88 82 92 90 84 C82 78 72 74 64 70 Z" fill="#F4FAFF" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<circle cx="30" cy="42" r="2.4" fill="' + deepFill + '" opacity=".35"/><circle cx="38" cy="38" r="2" fill="' + deepFill + '" opacity=".3"/><circle cx="46" cy="36" r="1.8" fill="' + deepFill + '" opacity=".28"/>' +
      '<path d="M28 66 q22 10 44 -2" stroke="' + edge2 + '" stroke-width="1.3" fill="none" opacity=".22"/>' +
      eye(72, 50, 5) + blush(78, 58, 3.2) + smile(76, 61, 3);

  } else if(type === 46){
    /* 抹香鲸：方脑壳 + 皱褶 + 小喷气孔在前面 */
    body =
      '<path d="M20 58 L4 44 Q10 58 4 72 L24 68 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M22 34 L58 32 C74 34 84 44 84 56 C84 68 74 78 58 78 L22 74 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9" stroke-linejoin="round"/>' +
      '<path d="M30 44 h22 M30 52 h26 M30 60 h24 M30 68 h20" stroke="' + edge2 + '" stroke-width="1.4" opacity=".25"/>' +
      '<circle cx="24" cy="42" r="2.6" fill="' + deepFill + '" opacity=".5"/>' +
      eye(70, 52, 5) + blush(78, 60, 3) + smile(76, 63, 2.8);

  } else if(type === 47){
    /* 虎鲸：黑身白肚 + 眼罩 + 高背鳍 */
    body =
      '<path d="M18 58 L2 44 Q8 58 2 72 L22 68 Z" fill="#2E3A44" stroke="#22303A" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M56 32 C62 12 76 12 78 30 Z" fill="#2E3A44" stroke="#22303A" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<ellipse cx="54" cy="58" rx="30" ry="19" fill="#2E3A44" stroke="#22303A" stroke-width="1.8"/>' +
      '<path d="M30 64 q24 10 46 -2 q-22 16 -46 2z" fill="#F7FBFF"/>' +
      '<path d="M64 42 q12 -2 12 8 q-2 8 -12 6 q-6 -6 0 -14z" fill="#F7FBFF"/>' +
      '<path d="M56 74 q10 6 14 2" stroke="#F7FBFF" stroke-width="2.4" fill="none" opacity=".7"/>' +
      eye(68, 48, 4.2) + smile(76, 58, 3);

  } else if(type === 48){
    /* 白鲸：奶油白 + 圆脑门 + 无背鳍的小脊 */
    body =
      '<path d="M20 58 L4 44 Q10 58 4 72 L24 68 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<ellipse cx="52" cy="58" rx="29" ry="18" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<circle cx="70" cy="48" r="15" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M46 42 q6 -8 14 -4" stroke="' + edge2 + '" stroke-width="1.6" opacity=".28" fill="none"/>' +
      '<path d="M36 44 q6 -6 12 -2" stroke="' + edge2 + '" stroke-width="1.4" opacity=".2" fill="none"/>' +
      eye(72, 46, 5) + blush(80, 54, 3.4) + smile(78, 58, 3.2);

  } else if(type === 49){
    /* 江豚：圆头无喙 + 短背鳍 */
    body =
      '<path d="M20 58 L4 46 Q10 58 4 70 L24 66 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<ellipse cx="52" cy="58" rx="28" ry="17" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<circle cx="72" cy="52" r="13" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M52 42 q8 -8 14 -2 q-8 6 -14 2z" fill="' + deepFill + '" opacity=".35"/>' +
      '<ellipse cx="52" cy="66" rx="16" ry="5" fill="#fff" opacity=".16"/>' +
      eye(74, 50, 4.8) + blush(80, 58, 3) + smile(78, 61, 2.8);

  } else if(type === 50){
    /* 海豹：泪滴身子 + 前鳍 + 胡须 */
    body =
      '<path d="M14 62 Q22 34 52 32 Q82 34 86 58 Q88 76 58 80 Q28 82 14 62 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9" stroke-linejoin="round"/>' +
      '<path d="M30 70 q-12 6 -18 2 q10 -12 20 -8z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4"/>' +
      '<ellipse cx="52" cy="66" rx="20" ry="8" fill="#fff" opacity=".28"/>' +
      '<path d="M74 58 l12 -2 M74 61 l12 2 M74 64 l10 5" stroke="' + edge2 + '" stroke-width="1.3" opacity=".55"/>' +
      eye(72, 48, 5.2) + blush(68, 58, 3.6) + smile(74, 58, 3);

  } else if(type === 51){
    /* 海狮：直立 + 耳廓 + 长前鳍 */
    body =
      '<path d="M22 86 Q18 52 36 36 Q56 24 72 38 Q88 52 82 84 Q60 92 22 86 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9" stroke-linejoin="round"/>' +
      '<path d="M28 62 Q10 66 8 82 Q20 84 30 76 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<ellipse cx="62" cy="36" rx="14" ry="12" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.7"/>' +
      '<path d="M50 30 q-4 -6 2 -7 q4 2 3 7z" fill="' + deepFill + '" opacity=".5"/>' +
      '<path d="M70 40 q8 2 8 8 q-6 2 -10 -2z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.3"/>' +
      '<path d="M76 44 l8 -2 M76 47 l8 1" stroke="' + edge2 + '" stroke-width="1.1" opacity=".5"/>' +
      eye(62, 32, 4.6) + blush(56, 42, 3.2) + smile(66, 43, 2.6);

  } else if(type === 52){
    /* 海象：两根长牙 + 粗脖 + 胡须 */
    body =
      '<path d="M16 62 Q24 38 54 36 Q82 38 86 60 Q86 78 56 82 Q26 82 16 62 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9" stroke-linejoin="round"/>' +
      '<path d="M64 66 q10 -2 14 4 q-6 8 -16 4z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5"/>' +
      '<path d="M62 70 L58 92 M72 70 L74 92" stroke="#FFF3E2" stroke-width="5.4" stroke-linecap="round"/>' +
      '<path d="M62 70 L58 92 M72 70 L74 92" stroke="' + edge2 + '" stroke-width="1.2" fill="none" opacity=".5"/>' +
      '<path d="M76 62 l10 -3 M76 66 l10 1 M74 70 l9 4" stroke="' + edge2 + '" stroke-width="1.3" opacity=".55"/>' +
      '<path d="M30 70 q-12 6 -18 2 q10 -12 20 -8z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.3"/>' +
      eye(66, 50, 5) + blush(58, 60, 3.6) + smile(68, 60, 3);

  } else if(type === 53){
    /* 儒艮：钝吻 + 鲸尾 + 前鳍 */
    body =
      '<path d="M18 58 L2 42 Q8 58 2 76 L22 68 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<ellipse cx="52" cy="58" rx="30" ry="19" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<path d="M72 46 q14 2 14 12 q-2 8 -12 8 q-4 -10 -2 -20z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.6"/>' +
      '<ellipse cx="52" cy="68" rx="18" ry="6" fill="#fff" opacity=".28"/>' +
      '<path d="M40 72 q-4 10 6 12 q10 -2 8 -12z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4"/>' +
      '<path d="M80 54 l6 -2 M80 58 l6 1" stroke="' + edge2 + '" stroke-width="1.2" opacity=".5"/>' +
      eye(76, 50, 4.8) + blush(70, 62, 3.2) + smile(80, 62, 2.8);

  } else if(type === 54){
    /* 鲨鱼：鱼雷身 + 三角背鳍 + 镰刀尾 */
    body =
      '<path d="M14 56 L2 38 Q10 56 2 74 L18 66 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M46 36 L56 12 L66 38 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M34 70 q10 12 22 6" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.3"/>' +
      '<path d="M14 56 Q34 32 66 38 Q88 44 88 56 Q88 68 66 74 Q34 80 14 56 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9" stroke-linejoin="round"/>' +
      '<path d="M74 62 l6 0 l-4 5 l6 0" stroke="' + edge2 + '" stroke-width="1.4" fill="none"/>' +
      '<path d="M26 48 h6 M32 50 h6 M38 52 h6" stroke="' + edge2 + '" stroke-width="1.3" opacity=".35"/>' +
      eye(74, 50, 4.4) + smile(82, 58, 2.6);

  } else if(type === 55){
    /* 鲸鲨：宽嘴 + 白点星空 */
    body =
      '<path d="M14 58 L2 40 Q10 58 2 76 L20 68 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M46 36 L52 14 L62 38 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<ellipse cx="54" cy="58" rx="32" ry="20" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<circle cx="30" cy="52" r="1.6" fill="#fff" opacity=".8"/><circle cx="40" cy="46" r="1.4" fill="#fff" opacity=".75"/>' +
      '<circle cx="46" cy="58" r="1.5" fill="#fff" opacity=".8"/><circle cx="34" cy="64" r="1.3" fill="#fff" opacity=".7"/>' +
      '<circle cx="56" cy="48" r="1.4" fill="#fff" opacity=".7"/><circle cx="62" cy="62" r="1.5" fill="#fff" opacity=".75"/>' +
      '<path d="M78 54 q10 2 10 8 q-4 4 -12 2" fill="' + deepFill + '" opacity=".35"/>' +
      eye(72, 50, 4.6) + smile(82, 60, 2.8);

  } else if(type === 56){
    /* 双髻鲨：T 形锤头，眼睛在两端 */
    body =
      '<path d="M16 58 L2 44 Q8 58 2 72 L20 68 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M42 38 L48 14 L58 38 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<ellipse cx="56" cy="58" rx="26" ry="18" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M62 42 L92 36 L92 56 L62 52 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9" stroke-linejoin="round"/>' +
      eye(88, 40, 4.2) + eye(70, 42, 3.6) + smile(80, 62, 2.6);

  } else if(type === 57){
    /* 大白鲨：尖吻 + 白肚 + 大背鳍 + 锯齿牙 */
    body =
      '<path d="M14 56 L2 38 Q10 56 2 74 L18 66 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M44 34 L58 8 L68 36 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M32 72 q12 10 22 2" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.3"/>' +
      '<path d="M14 56 Q30 30 66 36 Q88 42 88 54 Q88 66 66 74 Q30 80 14 56 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9" stroke-linejoin="round"/>' +
      '<path d="M28 62 q26 12 50 -2 q-24 18 -50 2z" fill="#F6FBFF"/>' +
      '<path d="M70 58 l4 -5 l4 5 l4 -5 l4 5" stroke="' + edge2 + '" stroke-width="1.7" fill="none" stroke-linejoin="round"/>' +
      '<path d="M24 48 h5 M31 50 h5 M38 52 h5" stroke="' + edge2 + '" stroke-width="1.3" opacity=".3"/>' +
      eye(74, 48, 4.6) + smile(84, 58, 2.4);

  } else if(type === 58){
    /* 魟鱼：圆盘 + 鞭尾 + 背上眼 */
    body =
      '<path d="M8 56 Q22 34 50 34 Q78 34 92 56 Q78 78 50 78 Q22 78 8 56 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9" stroke-linejoin="round"/>' +
      '<path d="M50 78 L58 96" stroke="' + edge2 + '" stroke-width="2.6" stroke-linecap="round"/>' +
      '<path d="M22 52 q14 -8 28 -4 M78 52 q-14 -8 -28 -4" stroke="' + edge2 + '" stroke-width="1.3" opacity=".25" fill="none"/>' +
      '<ellipse cx="50" cy="62" rx="18" ry="6" fill="#fff" opacity=".16"/>' +
      eye(40, 50, 4.4) + eye(60, 50, 4.4) + blush(32, 62, 3) + blush(68, 62, 3) + smile(50, 62, 3);

  } else if(type === 59){
    /* 金枪鱼：鱼雷 + 镰刀尾 + 一排小鳍 */
    body =
      '<path d="M18 56 L2 38 Q10 56 2 74 L22 66 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M46 34 L54 16 L62 36 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<ellipse cx="54" cy="56" rx="32" ry="17" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M30 68 q24 8 44 -2" stroke="#fff" stroke-width="2.2" fill="none" opacity=".45"/>' +
      '<path d="M26 62 l-6 4 l6 3 l-6 4 M34 64 l-6 4 l6 3 l-6 4" stroke="' + edge2 + '" stroke-width="1.2" opacity=".5" fill="none"/>' +
      '<path d="M40 44 q16 -4 30 2" stroke="' + edge2 + '" stroke-width="1.3" opacity=".22" fill="none"/>' +
      eye(76, 52, 4.4) + smile(84, 60, 2.6);

  } else if(type === 60){
    /* 旗鱼：大帆鳍 + 长剑吻 */
    body =
      '<path d="M20 58 L4 44 Q10 58 4 72 L24 68 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M30 42 Q40 8 78 12 Q74 32 66 42 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.7" stroke-linejoin="round"/>' +
      '<ellipse cx="52" cy="58" rx="27" ry="15" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M74 52 L98 46" stroke="' + edge2 + '" stroke-width="3.4" stroke-linecap="round"/>' +
      '<path d="M36 66 q16 6 30 -2" stroke="#fff" stroke-width="2" opacity=".4" fill="none"/>' +
      eye(70, 54, 4.2) + smile(78, 62, 2.4);

  } else if(type === 61){
    /* 鳕鱼：下巴一根须 + 三片背鳍 + 麻点 */
    body =
      '<path d="M18 56 L4 42 Q10 56 4 70 L22 66 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<ellipse cx="54" cy="56" rx="31" ry="18" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M30 38 q6 -10 12 -2 M48 36 q6 -10 12 -2 M66 38 q6 -8 12 -2" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.3"/>' +
      '<path d="M80 62 q-2 8 4 10" stroke="' + edge2 + '" stroke-width="1.8" fill="none" stroke-linecap="round"/>' +
      '<circle cx="36" cy="52" r="1.6" fill="' + deepFill + '" opacity=".3"/><circle cx="48" cy="60" r="1.4" fill="' + deepFill + '" opacity=".28"/>' +
      '<circle cx="58" cy="48" r="1.5" fill="' + deepFill + '" opacity=".3"/><circle cx="42" cy="64" r="1.3" fill="' + deepFill + '" opacity=".25"/>' +
      eye(74, 52, 4.6) + blush(80, 60, 3) + smile(82, 61, 2.6);

  } else if(type === 62){
    /* 鲑鱼：斑点 + 弯钩下颌 + 脂鳍 */
    body =
      '<path d="M18 56 L2 40 Q10 56 2 72 L22 66 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<ellipse cx="52" cy="56" rx="31" ry="15" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M44 38 q6 -8 12 -2" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.3"/>' +
      '<path d="M62 38 q4 -6 8 -2" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.2"/>' +
      '<circle cx="32" cy="52" r="1.5" fill="' + deepFill + '" opacity=".3"/><circle cx="42" cy="58" r="1.4" fill="' + deepFill + '" opacity=".28"/>' +
      '<circle cx="52" cy="50" r="1.5" fill="' + deepFill + '" opacity=".3"/><circle cx="60" cy="58" r="1.3" fill="' + deepFill + '" opacity=".28"/>' +
      '<path d="M78 62 q6 2 4 8 q-4 2 -8 -2" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4"/>' +
      eye(74, 52, 4.4) + blush(80, 58, 2.8) + smile(82, 60, 2.4);

  } else if(type === 63){
    /* 比目鱼：扁片 + 两只眼睛在同一侧 + 波浪边 */
    body =
      '<path d="M8 58 Q14 34 50 34 Q86 34 92 58 Q86 82 50 82 Q14 82 8 58 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9" stroke-linejoin="round"/>' +
      '<path d="M10 58 q6 -4 6 0 q6 -4 6 0 q6 -4 6 0 q6 -4 6 0 q6 -4 6 0 q6 -4 6 0 q6 -4 6 0 q6 -4 6 0 q6 -4 6 0" stroke="' + edge2 + '" stroke-width="1.5" fill="none" opacity=".5"/>' +
      '<path d="M20 48 q30 -6 58 0 M20 66 q30 6 58 0" stroke="' + edge2 + '" stroke-width="1.2" opacity=".22" fill="none"/>' +
      eye(38, 48, 4.6) + eye(54, 46, 4.6) + blush(30, 62, 3) + blush(64, 62, 3) + smile(46, 62, 3);

  } else if(type === 64){
    /* 石斑鱼：粗身 + 花斑 + 大嘴 */
    body =
      '<path d="M18 56 L4 42 Q10 56 4 70 L22 66 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<ellipse cx="52" cy="56" rx="30" ry="21" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<path d="M40 36 q10 -8 18 -2" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.3"/>' +
      '<circle cx="36" cy="52" r="2.2" fill="' + deepFill + '" opacity=".3"/><circle cx="50" cy="46" r="1.8" fill="' + deepFill + '" opacity=".28"/>' +
      '<circle cx="58" cy="60" r="2" fill="' + deepFill + '" opacity=".3"/><circle cx="42" cy="66" r="1.7" fill="' + deepFill + '" opacity=".26"/>' +
      '<path d="M76 60 q10 2 10 8 q-6 4 -14 0" fill="' + deepFill + '" opacity=".4"/>' +
      eye(72, 50, 5) + blush(80, 58, 3.2) + smile(82, 60, 2.8);

  } else if(type === 65){
    /* 箱鲀：方箱子 + 六边形斑 */
    body =
      '<path d="M22 40 L78 36 L84 62 L74 80 L26 80 L16 60 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9" stroke-linejoin="round"/>' +
      '<path d="M30 48 l6 -3 l0 6 l-6 3z M44 44 l6 -3 l0 6 l-6 3z M58 46 l6 -3 l0 6 l-6 3z" fill="' + deepFill + '" opacity=".22"/>' +
      '<path d="M34 62 l6 -3 l0 6 l-6 3z M50 58 l6 -3 l0 6 l-6 3z M62 64 l6 -3 l0 6 l-6 3z" fill="' + deepFill + '" opacity=".2"/>' +
      '<path d="M20 46 L6 40 L10 56 L22 58 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.3" stroke-linejoin="round"/>' +
      '<path d="M76 40 L90 34 L86 50 L78 50 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.3" stroke-linejoin="round"/>' +
      eye(68, 52, 5) + blush(70, 64, 3.2) + smile(74, 62, 2.8);

  } else if(type === 66){
    /* 海龙：细长卷身 + 叶片附肢 */
    body =
      '<path d="M26 76 C44 78 52 66 46 56 C40 46 30 44 28 36 C26 28 34 22 42 24" stroke="' + fill + '" stroke-width="9" fill="none" stroke-linecap="round"/>' +
      '<path d="M26 76 C44 78 52 66 46 56 C40 46 30 44 28 36 C26 28 34 22 42 24" stroke="' + edge2 + '" stroke-width="1.2" fill="none" opacity=".3"/>' +
      '<path d="M34 68 q-12 -6 -16 -14 q12 2 16 8z" fill="' + deepFill + '" opacity=".4"/>' +
      '<path d="M46 54 q12 -4 18 -12 q-12 0 -18 6z" fill="' + deepFill + '" opacity=".38"/>' +
      '<path d="M32 36 q-10 -8 -10 -18 q10 4 12 12z" fill="' + deepFill + '" opacity=".38"/>' +
      '<circle cx="42" cy="24" r="7" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.5"/>' +
      '<path d="M48 22 l10 -2 l0 5 l-10 2z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.2"/>' +
      eye(42, 22, 3.8) + blush(36, 30, 2.6);

  } else if(type === 67){
    /* 海鳗：S 形 + 大嘴尖牙 */
    body =
      '<path d="M12 76 C10 56 26 52 30 40 C34 28 50 26 58 32 C66 38 62 50 52 52" stroke="' + fill + '" stroke-width="12" fill="none" stroke-linecap="round"/>' +
      '<path d="M12 76 C10 56 26 52 30 40 C34 28 50 26 58 32 C66 38 62 50 52 52" stroke="' + edge2 + '" stroke-width="1.3" fill="none" opacity=".3"/>' +
      '<path d="M52 44 C62 38 78 38 86 44 C82 58 64 62 54 56 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.7" stroke-linejoin="round"/>' +
      '<path d="M60 50 l3 -5 l3 5 l3 -5 l3 5 l3 -5 l3 5" stroke="' + edge2 + '" stroke-width="1.5" fill="none"/>' +
      '<path d="M22 62 q-4 4 -8 2 M30 48 q-4 -3 -8 -2" stroke="' + edge2 + '" stroke-width="1.3" opacity=".3" fill="none"/>' +
      eye(74, 44, 4.6) + smile(78, 54, 2.4);

  } else if(type === 68){
    /* 带鱼：银色长带 + 小头 */
    body =
      '<path d="M40 12 C58 26 52 44 44 56 C36 68 30 78 34 90 L24 88 C18 72 24 58 32 46 C40 34 46 22 32 12 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.7" stroke-linejoin="round"/>' +
      '<path d="M36 20 C48 32 44 46 38 58 C32 70 28 78 30 86" stroke="#fff" stroke-width="2" fill="none" opacity=".45"/>' +
      '<path d="M32 14 L44 8 L46 16 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.3"/>' +
      '<path d="M28 88 L20 96 L34 94 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.2"/>' +
      eye(38, 18, 3.6) + blush(33, 26, 2.2);

  } else if(type === 69){
    /* 乌贼：带边鳍的卵圆身 + 十条腕 */
    body =
      '<path d="M30 42 Q24 22 40 16 Q60 12 72 24 Q82 36 74 54 Q64 70 46 68 Q28 66 30 42 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8" stroke-linejoin="round"/>' +
      '<path d="M30 42 Q14 36 12 22 Q30 24 38 32z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<path d="M74 46 Q88 44 92 32 Q78 30 70 38z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<path d="M42 68 q-12 12 -22 14 M50 70 q-6 14 -14 18 M58 68 q2 14 -2 20 M64 64 q10 12 8 20" stroke="' + fill + '" stroke-width="5.4" fill="none" stroke-linecap="round"/>' +
      '<path d="M42 68 q-12 12 -22 14 M50 70 q-6 14 -14 18 M58 68 q2 14 -2 20 M64 64 q10 12 8 20" stroke="' + edge2 + '" stroke-width="1.1" fill="none" opacity=".3"/>' +
      eye(46, 38, 5.6) + blush(58, 46, 3.4) + smile(52, 50, 3);

  } else if(type === 70){
    /* 鱿鱼：鱼雷身 + 三角耳鳍 + 一束腕 */
    body =
      '<path d="M50 12 L72 30 L58 34 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<path d="M50 12 L28 30 L42 34 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<path d="M50 12 C64 26 66 52 56 68 L44 68 C34 52 36 26 50 12 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8" stroke-linejoin="round"/>' +
      '<path d="M46 68 q-10 12 -16 16 M50 70 q0 14 -2 20 M54 68 q10 12 14 16" stroke="' + fill + '" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<path d="M46 68 q-10 12 -16 16 M50 70 q0 14 -2 20 M54 68 q10 12 14 16" stroke="' + edge2 + '" stroke-width="1.1" fill="none" opacity=".3"/>' +
      eye(42, 40, 5) + eye(58, 40, 5) + blush(50, 54, 3.4) + smile(50, 56, 2.8);

  } else if(type === 71){
    /* 鹦鹉螺：螺线壳 + 条纹 + 小触手 */
    body =
      '<circle cx="52" cy="52" r="30" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<path d="M52 52 m0 -22 a22 22 0 1 1 -15 38" fill="none" stroke="' + edge2 + '" stroke-width="2.2" opacity=".5"/>' +
      '<path d="M52 52 m0 -12 a12 12 0 1 1 -8 21" fill="none" stroke="' + edge2 + '" stroke-width="1.8" opacity=".4"/>' +
      '<path d="M52 52 m0 -2 a2 2 0 1 1 -1.4 3.4" fill="none" stroke="' + edge2 + '" stroke-width="1.5" opacity=".4"/>' +
      '<path d="M28 38 q-6 -8 -2 -14 M26 52 q-8 -2 -10 -8 M30 66 q-6 6 -2 12" stroke="' + edge2 + '" stroke-width="1.3" opacity=".3" fill="none"/>' +
      '<path d="M74 62 q10 4 12 12 q-8 2 -14 -4" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.3"/>' +
      eye(62, 62, 4.6) + blush(52, 68, 3) + smile(58, 72, 2.6);

  } else if(type === 72){
    /* 鲍鱼：耳壳 + 一排呼吸孔 + 软足 */
    body =
      '<ellipse cx="52" cy="52" rx="30" ry="22" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<ellipse cx="52" cy="52" rx="18" ry="12" fill="' + deepFill + '" opacity=".2"/>' +
      '<circle cx="30" cy="44" r="2.2" fill="' + deepFill + '" opacity=".5"/><circle cx="38" cy="38" r="2.2" fill="' + deepFill + '" opacity=".5"/>' +
      '<circle cx="48" cy="36" r="2.2" fill="' + deepFill + '" opacity=".5"/><circle cx="58" cy="38" r="2.2" fill="' + deepFill + '" opacity=".5"/>' +
      '<path d="M26 70 q26 14 52 -2 q-20 20 -52 2z" fill="' + deepFill + '" opacity=".35"/>' +
      '<path d="M34 40 q14 -6 28 -2" stroke="#fff" stroke-width="2" opacity=".35" fill="none"/>' +
      eye(44, 52, 5.4) + eye(60, 52, 5.4) + blush(34, 60, 3) + blush(70, 60, 3) + smile(52, 62, 3);

  } else if(type === 73){
    /* 牡蛎：粗糙不规则壳 + 开口 */
    body =
      '<path d="M20 56 Q16 30 40 24 Q62 18 82 34 Q94 50 84 70 Q66 86 42 82 Q22 78 20 56 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9" stroke-linejoin="round"/>' +
      '<path d="M30 40 l6 -6 l4 6 l6 -6 l4 6 l6 -6 l4 6 l6 -6 l4 6" stroke="' + edge2 + '" stroke-width="1.5" fill="none" opacity=".3"/>' +
      '<path d="M28 62 q26 12 52 -2" stroke="' + edge2 + '" stroke-width="1.4" opacity=".3" fill="none"/>' +
      '<path d="M34 58 Q50 48 74 58 Q56 72 34 58 Z" fill="#FFF7EC" stroke="' + edge2 + '" stroke-width="1.3"/>' +
      eye(44, 56, 3.6) + eye(62, 56, 3.6) + blush(36, 68, 3) + blush(70, 68, 3) + smile(53, 68, 2.8);

  } else if(type === 74){
    /* 裸鳃海蛞蝓：艳色软体 + 触角 + 腮羽 */
    body =
      '<path d="M12 62 Q16 40 42 38 Q72 36 84 52 Q92 66 70 74 Q42 82 22 74 Q10 70 12 62 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8" stroke-linejoin="round"/>' +
      '<path d="M22 44 q-6 -14 2 -18 q6 6 4 16z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4"/>' +
      '<path d="M34 40 q-2 -14 6 -18 q6 8 2 18z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4"/>' +
      '<path d="M58 68 q2 12 -4 16 M68 66 q6 12 2 18 M76 62 q10 10 8 18" stroke="' + fill + '" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<circle cx="30" cy="56" r="3" fill="#fff" opacity=".7"/><circle cx="46" cy="52" r="2.4" fill="#fff" opacity=".6"/><circle cx="58" cy="58" r="2.8" fill="#fff" opacity=".65"/>' +
      eye(26, 54, 4) + blush(36, 62, 3) + smile(30, 63, 2.6);

  } else if(type === 75){
    /* 海月水母：透明伞 + 四个月牙环 */
    body =
      '<path d="M18 52 a32 30 0 0 1 64 0 q-8 8 -16 0 q-8 8 -16 0 q-8 8 -16 0 q-8 8 -16 0z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.7"/>' +
      '<ellipse cx="36" cy="44" rx="6" ry="4" fill="none" stroke="' + edge2 + '" stroke-width="2.6" opacity=".55"/>' +
      '<ellipse cx="50" cy="40" rx="6" ry="4" fill="none" stroke="' + edge2 + '" stroke-width="2.6" opacity=".55"/>' +
      '<ellipse cx="64" cy="44" rx="6" ry="4" fill="none" stroke="' + edge2 + '" stroke-width="2.6" opacity=".55"/>' +
      '<path d="M26 58 q-2 14 2 22 M38 60 q-1 14 1 22 M50 61 q0 14 1 22 M62 60 q1 14 -1 22 M74 58 q2 14 -2 22" stroke="' + edge2 + '" stroke-width="1.8" fill="none" opacity=".45" stroke-linecap="round"/>' +
      eye(42, 52, 3.4) + eye(58, 52, 3.4) + blush(34, 58, 2.4) + blush(66, 58, 2.4) + smile(50, 60, 2.6);

  } else if(type === 76){
    /* 僧帽水母：蓝气囊 + 长触手 */
    body =
      '<path d="M22 46 Q22 26 50 24 Q78 26 78 46 Q78 56 50 56 Q22 56 22 46 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      '<path d="M22 46 q28 10 56 0" stroke="' + edge2 + '" stroke-width="1.5" opacity=".4" fill="none"/>' +
      '<path d="M30 56 q-8 16 -2 28 M42 58 q-4 18 2 30 M54 58 q2 18 -2 30 M66 56 q10 16 4 28" stroke="' + fill + '" stroke-width="3.6" fill="none" stroke-linecap="round"/>' +
      '<path d="M30 56 q-8 16 -2 28 M42 58 q-4 18 2 30 M54 58 q2 18 -2 30 M66 56 q10 16 4 28" stroke="' + edge2 + '" stroke-width="1" fill="none" opacity=".35"/>' +
      '<path d="M32 34 q18 -8 36 0" stroke="#fff" stroke-width="2.4" opacity=".5" fill="none"/>' +
      eye(42, 42, 3.6) + eye(58, 42, 3.6) + blush(50, 50, 2.6) + smile(50, 50, 2.4);

  } else if(type === 77){
    /* 脑珊瑚：半球 + 迷宫纹 */
    body =
      '<path d="M12 74 Q12 30 50 28 Q88 30 88 74 Q50 84 12 74 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9" stroke-linejoin="round"/>' +
      '<path d="M22 66 q4 -18 12 -22 M34 70 q2 -22 10 -30 M46 72 q0 -26 6 -34 M58 72 q4 -22 10 -28 M70 68 q6 -14 12 -18" stroke="' + edge2 + '" stroke-width="1.8" opacity=".38" fill="none"/>' +
      '<path d="M20 52 q12 -6 18 2 M32 40 q14 -6 20 4 M46 34 q12 -4 18 6 M60 42 q12 -4 18 8" stroke="' + edge2 + '" stroke-width="1.6" opacity=".32" fill="none"/>' +
      eye(38, 58, 5) + eye(58, 58, 5) + blush(28, 68, 3.2) + blush(70, 68, 3.2) + smile(48, 68, 3);

  } else if(type === 78){
    /* 鹿角珊瑚：分叉鹿角 */
    body =
      '<path d="M50 92 L50 62" stroke="' + fill + '" stroke-width="12" fill="none" stroke-linecap="round"/>' +
      '<path d="M50 68 L28 44 L20 22 M28 44 L38 24" stroke="' + fill + '" stroke-width="9" fill="none" stroke-linecap="round"/>' +
      '<path d="M50 68 L72 46 L82 24 M72 46 L64 24" stroke="' + fill + '" stroke-width="9" fill="none" stroke-linecap="round"/>' +
      '<path d="M50 62 L40 48 L34 36 M50 62 L62 50 L70 40" stroke="' + fill + '" stroke-width="7" fill="none" stroke-linecap="round"/>' +
      '<path d="M50 92 L50 62 M50 68 L28 44 L20 22 M28 44 L38 24 M50 68 L72 46 L82 24 M72 46 L64 24" stroke="' + edge2 + '" stroke-width="1.1" fill="none" opacity=".16"/>' +
      '<circle cx="20" cy="22" r="5" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.2"/>' +
      '<circle cx="82" cy="24" r="5" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.2"/>' +
      '<circle cx="38" cy="24" r="4" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.1"/>' +
      '<circle cx="64" cy="24" r="4" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.1"/>' +
      eye(45, 80, 3.8) + eye(55, 80, 3.8) + blush(50, 87, 2.6);

  } else if(type === 79){
    /* 蛇尾：小圆盘 + 五条细腕 */
    body =
      '<path d="M50 50 C30 46 18 30 14 18" stroke="' + fill + '" stroke-width="6" fill="none" stroke-linecap="round"/>' +
      '<path d="M50 50 C40 30 40 16 42 6" stroke="' + fill + '" stroke-width="6" fill="none" stroke-linecap="round"/>' +
      '<path d="M50 50 C62 32 74 22 86 18" stroke="' + fill + '" stroke-width="6" fill="none" stroke-linecap="round"/>' +
      '<path d="M50 50 C68 52 82 62 92 74" stroke="' + fill + '" stroke-width="6" fill="none" stroke-linecap="round"/>' +
      '<path d="M50 50 C36 60 22 72 14 86" stroke="' + fill + '" stroke-width="6" fill="none" stroke-linecap="round"/>' +
      '<circle cx="50" cy="50" r="11" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8"/>' +
      eye(45, 48, 3.2) + eye(55, 48, 3.2) + smile(50, 55, 2.2);

  } else if(type === 80){
    /* 磷虾：小透明虾 + 大眼 + 一排小腿 */
    body =
      '<path d="M22 40 Q40 28 66 34 Q84 40 82 56 Q80 70 62 72 Q40 74 26 62 Q16 52 22 40 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.7" stroke-linejoin="round"/>' +
      '<path d="M26 40 L8 26 M28 46 L6 42" stroke="' + edge2 + '" stroke-width="1.5" stroke-linecap="round"/>' +
      '<path d="M32 68 l-4 12 M42 72 l-2 12 M52 72 l2 12 M62 70 l6 10" stroke="' + edge2 + '" stroke-width="1.7" stroke-linecap="round"/>' +
      '<path d="M40 42 q10 -4 20 0" stroke="#fff" stroke-width="2" opacity=".5" fill="none"/>' +
      eye(72, 48, 5.4) + blush(62, 58, 3) + smile(74, 58, 2.6);

  } else if(type === 81){
    /* 寄居蟹：背壳 + 伸出来的钳子和脚 */
    body =
      '<path d="M26 74 C14 66 14 42 30 32 C46 22 66 28 70 44 C74 60 62 74 46 78 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8" stroke-linejoin="round"/>' +
      '<path d="M40 32 C34 42 34 58 42 68" stroke="' + edge2 + '" stroke-width="1.6" opacity=".35" fill="none"/>' +
      '<path d="M46 30 C40 42 40 58 48 70" stroke="' + edge2 + '" stroke-width="1.4" opacity=".28" fill="none"/>' +
      '<path d="M64 58 q12 -6 20 -2 q2 8 -6 12 q-10 2 -14 -4z" fill="#FF9E7A" stroke="' + edge2 + '" stroke-width="1.4"/>' +
      '<path d="M58 72 l-2 12 M68 70 l4 12 M74 64 l10 8" stroke="' + edge2 + '" stroke-width="2" stroke-linecap="round"/>' +
      '<circle cx="76" cy="52" r="4" fill="#FF9E7A" stroke="' + edge2 + '" stroke-width="1.3"/>' +
      eye(74, 50, 3.4) + blush(66, 58, 2.4);

  } else if(type === 82){
    /* 梭子蟹：尖梭形壳 + 游泳足 */
    body =
      '<path d="M10 52 Q26 34 52 34 Q78 34 92 52 Q78 70 52 70 Q26 70 10 52 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.8" stroke-linejoin="round"/>' +
      '<path d="M24 44 L12 32 M32 40 L24 26 M76 44 L88 32 M68 40 L76 26" stroke="' + edge2 + '" stroke-width="2.4" stroke-linecap="round"/>' +
      '<path d="M28 68 L18 84 M40 72 L36 88 M60 72 L64 88 M72 68 L82 84" stroke="' + edge2 + '" stroke-width="2.4" stroke-linecap="round"/>' +
      '<path d="M20 52 q-12 -2 -16 -10 q10 -4 18 2z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4"/>' +
      '<path d="M80 52 q12 -2 16 -10 q-10 -4 -18 2z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4"/>' +
      '<path d="M30 50 q22 -6 44 0" stroke="#fff" stroke-width="2" opacity=".35" fill="none"/>' +
      eye(38, 48, 4.4) + eye(62, 48, 4.4) + blush(30, 58, 3) + blush(70, 58, 3) + smile(50, 60, 3);

  } else if(type === 83){
    /* 帝王蟹：带刺厚壳 + 长关节腿 */
    body =
      '<path d="M26 44 Q30 28 50 28 Q70 28 74 44 Q76 62 50 64 Q24 62 26 44 Z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9" stroke-linejoin="round"/>' +
      '<path d="M32 58 L14 74 L6 88 M42 64 L34 82 L28 94 M58 64 L66 82 L72 94 M68 58 L86 74 L94 88" stroke="' + fill + '" stroke-width="5.4" fill="none" stroke-linecap="round"/>' +
      '<path d="M32 58 L14 74 L6 88 M42 64 L34 82 L28 94 M58 64 L66 82 L72 94 M68 58 L86 74 L94 88" stroke="' + edge2 + '" stroke-width="1.1" fill="none" opacity=".3"/>' +
      '<path d="M30 38 l4 -6 l3 6 l5 -6 l3 6 M62 38 l4 -6 l3 6 l5 -6 l3 6" stroke="' + edge2 + '" stroke-width="1.4" fill="none"/>' +
      '<path d="M36 50 q14 -6 28 0" stroke="#fff" stroke-width="2" opacity=".35" fill="none"/>' +
      eye(40, 46, 4.2) + eye(60, 46, 4.2) + blush(32, 56, 2.8) + blush(68, 56, 2.8) + smile(50, 56, 2.8);

  } else if(type === 84){
    /* 海蛇：盘起来的 S + 环带 + 桨尾 */
    body =
      '<path d="M18 62 C34 82 62 84 78 70 C92 56 84 38 68 36 C54 34 46 44 52 52" stroke="' + fill + '" stroke-width="11" fill="none" stroke-linecap="round"/>' +
      '<path d="M18 62 C34 82 62 84 78 70 C92 56 84 38 68 36 C54 34 46 44 52 52" stroke="' + edge2 + '" stroke-width="1.2" fill="none" opacity=".3"/>' +
      '<path d="M30 74 q2 -6 6 -8 M44 80 q0 -6 4 -8 M60 80 q2 -6 6 -7 M74 72 q2 -6 6 -7" stroke="' + edge2 + '" stroke-width="2.2" opacity=".45"/>' +
      '<path d="M52 52 q-6 -10 4 -14 q10 2 10 12" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.6"/>' +
      '<path d="M18 62 q-10 -6 -14 -2 q6 8 14 8z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.3"/>' +
      eye(58, 46, 3.6) + smile(62, 52, 2.2);

  } else if(type === 85){
    /* 企鹅：站姿 + 白肚 + 橙嘴橙脚 */
    body =
      '<ellipse cx="50" cy="52" rx="24" ry="30" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.9"/>' +
      '<ellipse cx="52" cy="58" rx="16" ry="22" fill="#FFFDF8"/>' +
      '<path d="M26 44 q-8 12 -4 26 q8 -2 8 -12z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4"/>' +
      '<path d="M74 44 q8 12 4 26 q-8 -2 -8 -12z" fill="' + fill + '" stroke="' + edge2 + '" stroke-width="1.4"/>' +
      '<path d="M40 80 q-6 8 -2 10 q8 2 10 -4z" fill="#FFA23E" stroke="' + edge2 + '" stroke-width="1.3"/>' +
      '<path d="M60 80 q6 8 2 10 q-8 2 -10 -4z" fill="#FFA23E" stroke="' + edge2 + '" stroke-width="1.3"/>' +
      '<path d="M48 34 L64 36 L52 42 Z" fill="#FFA23E" stroke="' + edge2 + '" stroke-width="1.3" stroke-linejoin="round"/>' +
      eye(42, 36, 5) + eye(58, 36, 5) + blush(38, 46, 3.2) + blush(62, 46, 3.2) + smile(50, 46, 2.8);

  }

  /* 一只鱼一身"塑料体积"：左上高光 → 本色 → 本色加深 → 边缘暗部 */
  const hi   = mixc(P.c1, '#FFFFFF', .62);
  const lit  = satc(P.c1, 1.16);
  const mid  = satc(P.c2, 1.22);
  const edge = mixc(P.c2, '#20222E', .32);
  return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">' +
    '<defs><radialGradient id="' + gid + '" gradientUnits="userSpaceOnUse" cx="42" cy="36" r="66">' +
    '<stop offset="0" stop-color="#FFFFFF"/>' +
    '<stop offset=".06" stop-color="#FFFFFF" stop-opacity=".72"/>' +
    '<stop offset=".16" stop-color="' + hi + '"/>' +
    '<stop offset=".40" stop-color="' + lit + '"/>' +
    '<stop offset=".80" stop-color="' + mid + '"/>' +
    '<stop offset="1" stop-color="' + edge + '"/>' +
    '</radialGradient>' +
    '<radialGradient id="' + gid2 + '" gradientUnits="userSpaceOnUse" cx="42" cy="36" r="66">' +
    '<stop offset="0" stop-color="' + mixc(P.deep, '#FFFFFF', .5) + '"/>' +
    '<stop offset=".42" stop-color="' + satc(P.deep, 1.18) + '"/>' +
    '<stop offset="1" stop-color="' + mixc(P.deep, '#1A1B26', .34) + '"/>' +
    '</radialGradient></defs>' +
    '<g class="fish">' + body + '</g></svg>';
}

/* =====================================================================
   V2.1 3D 角色贴图（预渲染）
   8 种标准角色换成 3D 渲染的透明 WebP；其余物种暂时回落到矢量造型。
   fishArt(type) 是唯一出口：卡面 / 图鉴 / 鱼缸都走它，方便后续整批替换。
   ===================================================================== */
const FISH_SPRITES = {
  0:'puffer',1:'clownfish',2:'jellyfish',3:'starfish',4:'octopus',5:'seahorse',
  6:'shell',7:'turtle',8:'crab',9:'oyster',10:'whale',11:'conch',
  12:'lanternfish',13:'seahare',14:'lobster',15:'anemone',16:'dolphin',17:'swordfish',
  18:'manta',19:'urchin',20:'seacucumber',21:'coral',22:'eel',23:'dugong',
  24:'guppy',25:'betta',26:'ramgold',27:'ramblue',28:'congotetra',29:'fwangel',
  30:'neontetra',31:'killifish',32:'cardtetra',33:'pearlkilli',34:'yellowgoby',
  35:'zebrafish',36:'angelfish',37:'molly',38:'miniparrot',39:'mickeyplaty',
  40:'butterfly',41:'lionfish',42:'parrotfish',
  43:'flyingfish',44:'bluewhale',45:'humpback',46:'spermwhale',47:'orca',
  48:'beluga',49:'porpoise',50:'harpseal',51:'sealion',52:'walrus',53:'rugong',54:'shark',
  55:'whaleshark',56:'hammerhead',57:'greatwhite',58:'stingray',59:'tuna',
  60:'sailfish',61:'cod',62:'salmon',63:'flatfish',64:'grouper',65:'boxfish',66:'seadragon',67:'moray',
  68:'ribbonfish',69:'squid',70:'squid2',71:'nautilus',72:'abalone',
  73:'oyster2',74:'nudibranch',
  75:'moonjelly',76:'manowar',77:'braincoral',78:'stagcoral',79:'brittlestar',
  80:'krill',81:'hermitcrab',82:'swimcrab',83:'kingcrab',84:'seasnake',85:'penguin',86:'bluetang'
};

/* 降级开关：URL 带 nosprite，或设备不支持 WebP 时回落到矢量造型 */
const NO_SPRITE = /(?:^|[?&])nosprite\b/.test(location.search);

function fishArt(type){
  const n = NO_SPRITE ? null : FISH_SPRITES[type];
  if(!n) return fishSVG(type);
  return '<img class="fsp" alt="" draggable="false" src="art/sprites/128/' + n + '.webp"' +
         ' srcset="art/sprites/256/' + n + '.webp 2x">';
}
