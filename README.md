# 黄泳豫个人作品集

一个无需安装依赖的静态个人作品集网站，包含单屏可交互的玻璃封面、点击进入的拼贴作品目录、以 GENTLE MONSTER、mist、Desigual 与 WUFF 为主的品牌项目、手工作品、账号运营、社会实践与个人介绍。

## 本地预览

在这个文件夹运行：

```powershell
python -m http.server 4173
```

然后打开 `http://localhost:4173`。

## 替换内容

- 首页英文：编辑 `index.html` 中 `.portfolio-word` 的文字；镜面面板的行列数量可在 `script.js` 的 `panelColumns` 和 `panelRows` 中调整。
- 首页锁定为一屏，点击中央入口后显示目录；目录右上角的“返回封面”可回到开场画面。
- 从目录点击任一分类后，只显示该分类内容，上下滚动不会进入其他分类；页面右下角固定显示“回到目录”，浏览器返回键和 Escape 也可返回目录。
- 作品目录：编辑 `index.html` 中的 `.skills-menu`；三个作品入口与“彩蛋”分别链接到对应内容区。
- 品牌项目：编辑 `index.html` 中 `work` 区块里的四个 `.brand-case`。案例标题在桌面端采用双栏结构，640px 以下自动回到单栏。
- GENTLE MONSTER：`assets/projects/gentle-monster/grid/` 包含 12 个拆分版面的 720px / 1280px WebP；原始 `full-project.webp` 和五个长分段保留为完整原稿与备用素材。
- mist：12 张高清显示文件位于 `assets/brand/mist-gallery-hd/`，同时提供 720px 与 1280px WebP 并通过 `srcset` 自动选择。
- Desigual：`assets/projects/desigual/` 内含 14 张项目页面的 720px / 1550px WebP、白色字标和完整 PDF。页面按 14 页顺序双栏展示，并提供 `full-project.pdf` 原稿入口。
- WUFF：`assets/projects/wuff/` 内含 3 张项目长画布的 720px / 1550px WebP、清理后的完整 PDF 与尺寸清单。网页展示图与站内 PDF 均已去除“豆包 AI 生成”字样；桌面按与前面案例一致的双列排列，640px 以下回到单列。
- mist 主字标来自用户提供的手写母版，透明横版与竖版分别位于 `assets/brand/mist-wordmark-horizontal.png` 和 `assets/brand/mist-wordmark-vertical.png`；页面封面使用横版，12 张作品图在下方按双栏连续排列，手机端回到单栏。包装与零售图内已统一替换，旧 PNG 源稿仍保留在 `assets/brand/luna-gallery/`。
- 品牌项目切换：`.work-switcher` 按 `01 GENTLE MONSTER`、`02 MIST`、`03 DESIGUAL`、`04 WUFF` 的顺序提供页内入口，对应 `#gentle-monster`、`#mist`、`#desigual` 和 `#wuff`。
- 手工作品：`assets/handmade/` 已接入 26 张 WebP，共 10 件作品。前三件为马赛克拼贴画、玻璃与麻绳手提箱、漆艺作品；后续按“漆艺画”“综合材料画”“抽象手工实验作品”分类展示新增作品。每张主图与缩略图都链接到同目录完整尺寸 WebP。
- 账号运营：`#social` 已接入 6 张小红书页面 WebP，位于 `assets/social/`，包括三个账号主页与三条代表笔记，并附跨账号效率、内容集中度和单篇互动分析。页面数据（3964 三号粉丝、3.8万+ 获赞与收藏、245 篇内容，以及对应单篇互动）均为 2026-10-29 的页面快照；更新指标时应同步更新截图和页面标注。截图中已隐去账号 ID、邮箱、IP 属地及私密内容。
- 社会实践：`#practice` 第一条已接入“川美艺术集市摆摊”，记录“氧氧商店”的原创角色与纸品周边线下呈现。因暂无现场照片，左侧使用明确标注为视觉笔记的 CSS 摊位图示；拿到照片后可替换 `.practice-market-art`，并同步修改“现场照片待补”的说明。
- 联系方式：把 `mailto:hello@example.com` 改为真实邮箱。
- 账号链接：在 `contact-actions` 中加入真实的社交媒体链接。

图片建议使用 WebP 格式；品牌项目封面建议 1600px 宽以上，手工作品长边建议不低于 1200px。
