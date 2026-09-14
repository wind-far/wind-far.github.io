/**
 * 无头冒烟测试：加载 index.html，走一遍启动流程与全部导航视图，捕获运行期错误。
 * 运行：NODE_PATH=<workspace>/node_modules node smoke-test.mjs
 */
import { createRequire } from 'node:module';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const { JSDOM, VirtualConsole } = require(
  process.env.JSDOM_PATH || '/Users/wind/.workbuddy/binaries/node/workspace/node_modules/jsdom'
);
const errors = [];
const vc = new VirtualConsole();
vc.on('jsdomError', (e) => errors.push('jsdomError: ' + (e.stack || e.message)));
vc.on('error', (...a) => errors.push('console.error: ' + a.join(' ')));

const dom = new JSDOM(readFileSync(resolve(root, 'index.html'), 'utf8'), {
  url: 'file://' + resolve(root, 'index.html'),
  runScripts: 'dangerously',
  resources: 'usable',
  pretendToBeVisual: true,
  virtualConsole: vc,
});

const { window } = dom;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const $ = (s) => window.document.querySelector(s);
const assert = (cond, msg) => {
  if (!cond) throw new Error('断言失败: ' + msg);
  console.log('  ✓ ' + msg);
};

await new Promise((r) => window.addEventListener('load', r));

async function waitFor(fn, msg, timeout = 15000) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeout) {
    if (fn()) return;
    await wait(60);
  }
  throw new Error('超时: ' + msg);
}

console.log('1) 终端开机');
await waitFor(() => $('#bootLines') && $('#bootLines').children.length > 0, '开机日志输出');
assert($('#terminal'), '终端节点存在');
assert(!$('#terminal').classList.contains('power-off'), '终端已通电');

// 跳过等待（点击非 CTA 区域）
$('#bootView').dispatchEvent(new window.MouseEvent('pointerdown', { bubbles: true }));
await waitFor(() => $('#bootCta').classList.contains('visible'), '启动提示显示');
assert($('#bootCta').classList.contains('visible'), '启动提示已显示');

console.log('2) 回车启动');
window.document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
await waitFor(() => $('#mainView').classList.contains('is-live'), '桌面进场');
assert($('#mainView').classList.contains('is-primed'), '桌面已挂载');
assert($('#mainView').classList.contains('is-live'), '桌面已可见');
assert($('#terminal').classList.contains('gone'), '终端已退场');

console.log('3) ABOUT 视图');
assert($('#profile-name')?.textContent === '吕浩', '姓名渲染正确');
assert($('.decision-network')?.querySelectorAll('.decision-lane').length === 3, '决策系统 3 条链路');
assert($('.portrait-card img')?.getAttribute('src') === 'assets/img/portrait.png', '头像路径正确');
assert($('.os-mark')?.textContent.indexOf('LH OS') >= 0, '顶部标识来自配置');
assert($('.decision-lane.is-selected'), '默认选中一条链路');
$('[data-lane="0"]').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
await wait(50);
assert($('[data-lane="0"]').classList.contains('is-selected'), '点击可切换链路');

console.log('4) 导航切换');
const navs = ['product', 'stack', 'contact', 'about'];
for (const id of navs) {
  $(`[data-nav="${id}"]`).dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
  await wait(80);
  assert($(`.os-sidebar [data-nav="${id}"]`).classList.contains('is-active'), `切到 ${id} 后侧栏高亮`);
  assert($('#stage').children.length === 1, `${id} 视图已渲染`);
  if (id === 'product') assert($('#stage').querySelectorAll('.work-product-card').length === 4, '产品卡片 4 张');
  if (id === 'stack') assert($('#stage').querySelectorAll('.work-tool-card').length === 8, '能力栈卡片 8 张');
  if (id === 'contact') assert($('#stage').querySelectorAll('.contact-channels a').length === 3, '联系方式 3 条');
}
assert(!$('.os-sidebar [data-nav="work"]'), '侧栏无 WORK 入口（工作经历不上站）');
assert(
  window.document.querySelectorAll('.os-sidebar [data-nav]').length === 4,
  '导航共 4 项（ABOUT / PRODUCT / STACK / CONTACT）'
);

console.log('4b) CONTACT 渠道');
$('[data-nav="contact"]').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
await wait(80);
const hrefs = Array.from(window.document.querySelectorAll('#stage .contact-channels a')).map((a) =>
  a.getAttribute('href')
);
assert(hrefs.includes('mailto:lvhao4748@163.com'), '邮箱已换为 163');
assert(hrefs.includes('https://github.com/wind-far'), '已加入 GitHub 主页');
assert(
  hrefs.some((h) => h.includes('xiaohongshu.com/user/profile/67875f8d')),
  '已加入小红书主页'
);
assert(!hrefs.some((h) => h.startsWith('tel:')), '已移除电话拨号链接');

console.log('5) 轮播交互');
$(`[data-nav="product"]`).dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
await wait(80);
const rail = $('#stage .work-carousel-rail');
assert(rail, '轮播容器存在');
assert($('#stage .work-carousel-slot.is-active'), '存在激活卡片');
$('#stage .work-carousel-next').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
await wait(80);
assert($('#stage').querySelectorAll('.work-carousel-slot')[1].classList.contains('is-active'), '下一张按钮生效');

console.log('6) 隐私回归：站点不得出现雇主与履历信息');
// 词表故意放在 .workbuddy/（已被 .gitignore 排除）——若把它写进本文件，
// 推送到公开仓库就等于把要隐藏的履历指纹一起公开了。
let BANNED = [];
try {
  BANNED = JSON.parse(
    readFileSync(resolve(root, '.workbuddy/privacy-words.json'), 'utf8')
  ).words;
} catch {
  console.warn('  ! 未找到 .workbuddy/privacy-words.json，跳过词表检查');
}
assert(BANNED.length > 0, `已加载本地隐私词表（${BANNED.length} 个词）`);
const scanned = ['index.html', 'assets/content.js', 'assets/app.js', 'assets/icons.js', 'assets/styles.css'];
const leaks = [];
for (const file of scanned) {
  const text = readFileSync(resolve(root, file), 'utf8');
  for (const word of BANNED) if (text.includes(word)) leaks.push(`${file} → 「${word}」`);
}
assert(leaks.length === 0, '源码无履历/雇主信息' + (leaks.length ? `（发现：${leaks.join('；')}）` : ''));

const rendered = window.document.documentElement.innerHTML;
const domLeaks = BANNED.filter((w) => rendered.includes(w));
assert(domLeaks.length === 0, '渲染结果无履历/雇主信息' + (domLeaks.length ? `（发现：${domLeaks.join('、')}）` : ''));

const imgLeaks = readdirSync(resolve(root, 'assets/img')).filter((f) => BANNED.some((w) => f.includes(w)));
assert(imgLeaks.length === 0, '图片文件名无履历/雇主信息' + (imgLeaks.length ? `（发现：${imgLeaks.join('、')}）` : ''));

if (errors.length) {
  console.error('\n运行期错误：');
  errors.forEach((e) => console.error('  - ' + e));
  process.exit(1);
}
console.log('\n全部通过，无运行期错误。');
dom.window.close();
