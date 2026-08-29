# 卢知轩 Zhixuan Lu — 个人学术主页

华侨大学发光材料与信息显示研究院副研究员卢知轩的个人学术主页（静态单页网站，中英双语）。

- 主页预览：打开 `index.html` 即可
- 内容来源：华侨大学教师主页（[faculty.hqu.edu.cn/LZX123456](https://faculty.hqu.edu.cn/LZX123456/zh_CN/index.htm)）与 [Google Scholar](https://scholar.google.com.hk/citations?user=P2GWkmgAAAAJ&hl=en)
- 风格参考：厦门大学田中群教授课题组主页（https://zqtian.xmu.edu.cn/）

## 文件结构

```
├── index.html        # 主页面（含全部内容，中英双语）
├── css/style.css     # 样式
├── js/main.js        # 交互脚本（论文列表渲染、语言切换、移动端导航）
├── favicon.svg       # 网站图标
└── 谷歌学术论文.csv  # Google Scholar 论文数据源（用于生成论文列表）
```

## 本地预览

直接双击 `index.html`，或用任意静态服务器：

```bash
# Python
python -m http.server 8000
# 然后浏览器打开 http://localhost:8000
```

## 部署

这是一个纯静态站点，可部署到任意静态托管平台（GitHub Pages、Netlify、Vercel、Cloudflare Pages 等），或放入学校的 Web 空间。

以 GitHub Pages 为例：

```bash
git init
git add .
git commit -m "init academic homepage"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

然后在仓库 Settings → Pages 中选择 `main` 分支即可。

## 如何维护

### 更新论文

1. 在 Google Scholar 个人主页导出论文列表（或更新 `谷歌学术论文.csv`）。
2. 打开 `js/main.js`，在 `PUBLICATIONS` 数组中按年份添加/修改条目：
   - `year`：年份
   - `authors`：作者列表，用 `**` 包住自己的姓名（会加粗），如 `**Lu, Zhixuan**`
   - `title` / `journal` / `vol` / `issue` / `pages`：题录信息
   - `doi`：论文 DOI（自动生成原文链接）
   - `badge`：徽章（`zh` 中文 / `en` 英文 / `cls` 样式类），可为 `null`
3. 保存后刷新页面即可。

### 切换语言

页面右上角有「中文 / EN」切换按钮，选择会保存在浏览器本地。新增内容时，给可翻译元素同时添加：

```html
<span data-zh>中文</span><span data-en>English</span>
```

### 更新联系方式 / 项目 / 教学

直接在 `index.html` 对应小节（`#contact`、`#projects`、`#teaching`）中修改即可，注意同时维护中英文两套文本。

## 说明

- 论文列表与引用统计以 Google Scholar 为准；页面中「第一作者 / 共同第一作者 / 通讯作者」标注依据华侨大学主页及论文作者顺序整理。
- 姓名在论文列表中已加粗显示；带「第一作者」徽章的为第一 / 共同第一 / 通讯作者论文。
- 如需更换头像/照片，将图片放入项目根目录并在 `index.html` 的 `.profile-avatar` 处替换。

## 新增栏目说明

- **新闻动态（#news）**：位于首页统计栏之后，内容在 `index.html` 中直接维护（每条含日期、标题、简介，中英双语）。
- **相册（#gallery）**：图片统一放在 `images/gallery/`，页面引用本地文件。原始照片来自「学校个人主页照片」文件夹（已按哈希比对识别并复制到 `images/gallery/`）。
  - 更新相册：把新照片放入 `images/gallery/`，然后在 `index.html` 的相册区块中复制一个 `<figure class="gallery-item">` 条目，修改 `src`、`alt`、`data-caption-zh`、`data-caption-en` 和 `figcaption` 即可。
  - 点击相册图片可全屏放大，支持左右切换与 Esc 关闭。
- 头像照片：`images/avatar.jpg`（由「主页卢知轩个人照片.jpg」压缩生成，800px 宽）；替换时覆盖该文件或修改 `index.html` 中 `.profile-avatar img` 的 `src`。
