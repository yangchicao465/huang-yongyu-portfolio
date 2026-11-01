# 黄泳豫个人作品集

一个无需安装依赖的静态个人作品集网站，以 7 秒影片静止画面开场，点击播映后自动进入霓虹像素路径目录，并继续展开 GENTLE MONSTER、mist、Desigual 与 WUFF 品牌项目、AI 动态影像、手工作品、账号运营、社会实践与个人介绍。

## 在线访问

- 正式网站：<https://yangchicao465.github.io/huang-yongyu-portfolio/>
- GitHub 仓库：<https://github.com/yangchicao465/huang-yongyu-portfolio>
- 发布方式：GitHub Pages，直接使用 `main` 分支根目录，无构建步骤；更新并推送 `main` 后会重新发布。

## 本地预览

在这个文件夹运行：

```powershell
python -m http.server 4173
```

然后打开 `http://localhost:4173`。

## 替换内容

- 开场影片：`index.html` 的 `.portfolio-intro` 使用 `assets/projects/portfolio-walk-7s/portfolio-walk-7s.mp4`；静止封面使用同目录的 `portfolio-walk-7s-player-cover.webp`，取自影片约 2.3 秒处完整显示 `my, portfolio` 的播放器画面。页面首次打开保持静止，点击任意非控制区域后播放；“声音 ON / OFF”独立控制声音，影片结束后自动进入目录。
- 开场锁定为一屏；目录右下角的“返回封面”和 Escape 可回到静止开场。返回后会重置到 00:00，需要再次点击才开始播放。
- 从目录点击任一分类后，只显示该分类内容，上下滚动不会进入其他分类；页面右下角固定显示“回到目录”，浏览器返回键和 Escape 也可返回目录。
- 霓虹作品目录：编辑 `index.html` 中的 `.directory-map`；图片位于 `assets/portfolio-directory/`，品牌、手绘手作和运营的点击区域分别对应 `#work`、`#handmade`、`#social`。手机端在同一张路径图下方提供三项大尺寸入口。
- 品牌项目：编辑 `index.html` 中 `work` 区块里的四个 `.brand-case`。案例标题在桌面端采用双栏结构，640px 以下自动回到单栏。
- GENTLE MONSTER：`assets/projects/gentle-monster/grid/` 包含 12 个拆分版面的 720px / 1280px WebP；原始 `full-project.webp` 和五个长分段保留为完整原稿与备用素材。
- GENTLE MONSTER 动态延展：第一个品牌案例之后新增 2 段 AI 视频，位于 `assets/projects/gentle-monster/motion/`。网页版本为 1280 × 720、30 fps 的 H.264 / AAC MP4，分别约 11 秒和 7 秒；同目录保留原始 HEVC 文件与 WebP 封面。桌面双栏、1000px 以下单栏，视频使用原生控件且不自动播放。
- mist：12 张高清显示文件位于 `assets/brand/mist-gallery-hd/`，同时提供 720px 与 1280px WebP 并通过 `srcset` 自动选择。
- Desigual：`assets/projects/desigual/` 内含 14 张项目页面的 720px / 1550px WebP、白色字标和完整 PDF。页面按 14 页顺序双栏展示，并提供 `full-project.pdf` 原稿入口。
- WUFF：`assets/projects/wuff/` 内含 3 张项目长画布的 720px / 1550px WebP、清理后的完整 PDF 与尺寸清单。网页展示图与站内 PDF 均已去除“豆包 AI 生成”字样；桌面按与前面案例一致的双列排列，640px 以下回到单列。
- AI 动态影像：品牌区末尾的“商业视觉生成实验”会先展示“数字壁画”短片，随后排列 5 张 AI 视觉研究。网页视频位于 `assets/projects/ai-mural-video/digital-mural-ai-video.mp4`，为 960 × 544、30 fps、54.5 秒的 H.264 / AAC 兼容版本；原始 HEVC 文件保留在同目录的 `digital-mural-ai-video-original-hevc.mp4`，封面为 `digital-mural-ai-video-poster.webp`。
- 像素衣橱短片：`assets/projects/pixel-wardrobe-video/` 内包含根据用户提供的四位像素角色制作的 7.8 秒竖屏动态短片，规格为 1080 × 1920、30 fps、H.264 / AAC；同目录提供 WebP 封面、联系表、四张角色源图和 `manifest.json`。参考链接仅用于动态与版式研究，成片没有使用第三方影像或音频，目前作为独立交付素材，尚未接入网页。
- 复古播放器短片：`assets/projects/my-portfolio-player/` 内包含 7.8 秒 16:9 动态版本、静态封面与联系表。画面基于用户提供的黄色屏幕播放器参考，中央文字改为 `my, portfolio`，右侧生成水印已通过构图裁切移除；成片为 1920 × 1080、30 fps、H.264 / AAC，并配有原创轻节拍音轨。当前作为独立交付素材，尚未接入网页。
- 黄色点阵羊短片：`assets/projects/sheep-walk-motion/` 将用户提供的点阵羊从原图中分离，制作成从左向右穿过画面的 7.8 秒动态镜头。成片为 1920 × 1080、30 fps、H.264 / AAC，包含步态起伏、身体摆动、移动点阵地面与原创节奏音效；带水印的参考原图只保留在本地 `tmp/`。
- 合成短片：`assets/projects/portfolio-walk-film/` 将“my, portfolio”播放器镜头与黄色点阵羊镜头连成 13.6 秒完整成片。播放器屏幕推近后，黄色界面转为羊的黑色剪影，再反转为黑底黄羊并继续向右行走；成片为 1920 × 1080、30 fps、H.264 / AAC。音乐前半段为 100 BPM 摆动切分律动，转场以递增鼓点和噪声上扬衔接，羊出场后切换为 120 BPM 四拍及木鱼式脚步强调。
- 10 秒先锋剪辑：`assets/projects/portfolio-walk-avantgarde-10s/` 以第一版合成片为基础重新压缩节奏，前 4.6 秒保留播放器与文字输入，1.2 秒完成黄色屏幕到羊剪影的翻转转场，后 4.2 秒完成黑底黄羊的横向行走。成片为 1920 × 1080、30 fps、整 10 秒、H.264 / AAC，并使用第一版音乐素材重新对齐。
- 7 秒开场：`assets/projects/portfolio-walk-7s/` 在 10 秒先锋版基础上进一步压缩为 7 秒，结构为 3 秒播放器开场、1.2 秒匹配转场和 2.8 秒羊的横向行走。成片为 1920 × 1080、30 fps、210 帧、H.264 / AAC；当前已作为网站首屏影片接入。首屏封面为 1920 × 1080 的 `portfolio-walk-7s-player-cover.webp`，旧 `portfolio-walk-7s-poster.webp` 作为备用封面保留。
- 霓虹目录图：`assets/portfolio-directory/neon-path-directory.png` 为用户提供的 1518 × 1036 路径图母版，页面实际加载同尺寸 WebP；该图负责品牌、手绘手作和运营三向导航，不与 `assets/projects/portfolio-practice-map/` 中的独立海报混用。
- 内容区其他视频继续使用浏览器原生控件、`preload="metadata"`，不自动播放；开场影片使用封面静止、用户点击播放、独立声音开关和结束自动跳转。替换开场视频时请同步更新时长、画面尺寸、封面与目录说明。
- mist 主字标来自用户提供的手写母版，透明横版与竖版分别位于 `assets/brand/mist-wordmark-horizontal.png` 和 `assets/brand/mist-wordmark-vertical.png`；页面封面使用横版，12 张作品图在下方按双栏连续排列，手机端回到单栏。包装与零售图内已统一替换，旧 PNG 源稿仍保留在 `assets/brand/luna-gallery/`。
- 品牌项目切换：`.work-switcher` 按 `01 GENTLE MONSTER`、`02 MIST`、`03 DESIGUAL`、`04 WUFF` 与 `05 AI FILM` 的顺序提供页内入口，分别对应 `#gentle-monster`、`#mist`、`#desigual`、`#wuff` 和 AI 视觉附录 `#brand-ai-visuals`。
- 手工作品：`assets/handmade/` 已接入 26 张 WebP，共 10 件作品。前三件为马赛克拼贴画、玻璃与麻绳手提箱、漆艺作品；后续按“漆艺画”“综合材料画”“抽象手工实验作品”分类展示新增作品。每张主图与缩略图都链接到同目录完整尺寸 WebP。
- 账号运营：`#social` 已接入 6 张小红书页面 WebP，位于 `assets/social/`，包括三个账号主页与三条代表笔记，并附跨账号效率、内容集中度和单篇互动分析。页面数据（3964 三号粉丝、3.8万+ 获赞与收藏、245 篇内容，以及对应单篇互动）均为 2026-10-29 的页面快照；更新指标时应同步更新截图和页面标注。截图中已隐去账号 ID、邮箱、IP 属地及私密内容。
- 社会实践：`#practice` 第一条已接入“川美艺术集市摆摊”，记录“氧氧商店”的原创角色与纸品周边线下呈现。因暂无现场照片，左侧使用明确标注为视觉笔记的 CSS 摊位图示；拿到照片后可替换 `.practice-market-art`，并同步修改“现场照片待补”的说明。
- 联系方式：把 `mailto:hello@example.com` 改为真实邮箱。
- 账号链接：在 `contact-actions` 中加入真实的社交媒体链接。

图片建议使用 WebP 格式；品牌项目封面建议 1600px 宽以上，手工作品长边建议不低于 1200px。
