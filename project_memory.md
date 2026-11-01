# 项目记忆

> 快照日期：2026-11-01（最后核对）。这是跨对话使用的当前状态记录，不是永久规则；冲突时应以实际源码、素材文件和 Git 状态为准。新的对话先读 `AGENTS.md`，再读这里；开工后若发现源码指纹或 Git 状态变化，应重新核验后再依赖本文。

## 当前基线

- 项目：黄泳豫个人作品集，静态单页网站。
- 技术栈：原生 HTML、CSS、JavaScript；无 `package.json`、无构建工具、无前端依赖。
- 本地运行：在项目根目录执行 `python -m http.server 4173`，访问 `http://localhost:4173`。
- Git：GitHub 公开仓库为 `yangchicao465/huang-yongyu-portfolio`；远端 `main` 当前部署提交为 `12b9af62f68b2049a7baba2f1a8400349660a287`，父提交为 `16a02795b1f2ae6df2f4b9ef51a07780036b29e8`。本轮因大型 Git 传输连接中断，改用 GitHub 认证 API 上传 15 个文件并更新引用；后续应以远端提交为协作基准。
- 当前工作区：原始源码目录已完成 7 秒开场、霓虹目录、三段当前网页视频与 WUFF 清理稿；远端部署包含这些网页实际引用的文件和素材。`assets/projects/pixel-wardrobe-video/`、`assets/projects/my-portfolio-player/`、`assets/projects/sheep-walk-motion/`、`assets/projects/portfolio-walk-film/`、`assets/projects/portfolio-walk-avantgarde-10s/` 与 `assets/projects/portfolio-practice-map/` 仍是独立交付素材，未加入站点资源树。
- Gitee：已通过 GitHub 授权绑定账号，并导入公开镜像仓库 `works-by-huang-yongyu/huang-yongyu-portfolio`；`main` 分支远端提交为 `16a02795b1f2ae6df2f4b9ef51a07780036b29e8`，根目录包含完整的 `index.html`、`styles.css`、`script.js` 与 `assets/`。本地已添加名为 `gitee` 的远程地址。Gitee 当前仓库“服务”菜单已无 Pages 项，直访仓库 `/pages` 返回 404，暂无可用的 Gitee Pages 发布入口。
- 在线站点：国内访问优先使用 `https://huang-yongyu-portfolio.netlify.app/`；GitHub Pages 备用地址为 `https://yangchicao465.github.io/huang-yongyu-portfolio/`。
- Netlify：站点名 `huang-yongyu-portfolio`，由 `yangchicao465/huang-yongyu-portfolio` 的 `main` 分支持续部署，发布目录为仓库根目录 `.`，无构建命令；已通过 GitHub 应用安装与首次部署验证，后续推送 `main` 会自动发布。
- 发布文件：`.nojekyll` 跳过 Jekyll 处理；`.gitignore` 排除 `tmp/`、`output/`、`assets/portfolio-pdf/`、凭据诊断日志和系统临时文件。
- 源码指纹（SHA-256 前 16 位）：`index.html` = `20638F2A80A0DB94`，`styles.css` = `09F38F4ADB0FE65D`，`script.js` = `7CA51E111F4AE20F`，`README.md` = `0D74269221DC163D`。指纹变化表示文件可能已更新，不能继续把本文当作最新快照。
- `output/pdf/` 已生成 53 页精选作品集 `黄泳豫_作品集_精选.pdf`，文件大小 19,540,870 字节，含 53 个可用书签；前三页依次为用户提供的封面、目录和自我介绍图，目录文字直接叠加在四个苹果蛋壳面上。`tmp/pdfs/build_portfolio_pdf_simple.py` 为当前可复用的对应生成脚本。`tmp/` 仍属于临时加工区；`assets/handmade/` 已接入 26 张 WebP，合计约 7,850 KiB，对应 10 件作品。
- `assets/brand/mist-gallery/` 已接入 12 张 mist 品牌图，合计 5,249,630 字节；其中项目说明页、包装系统图和零售陈列图已清理旧字标并重新排版。旧 `assets/brand/luna-gallery/` 12 张原始 PNG 继续保留，未覆盖。
- `assets/brand/mist-gallery-hd/` 包含 24 张 WebP 显示母版：12 张 1280px 桌面版共 3,214,596 字节，12 张 720px 移动版共 1,565,086 字节；总大小为 4,779,682 字节。
- 手写主字标已从用户提供的图片提取为透明 PNG；横版 1032 × 441 用于 mist 品牌封面，竖版 441 × 1032 保留用于包装与零售物料编辑。
- `assets/projects/gentle-monster/` 已接入 5 张连续章节 WebP 和 1 张完整项目 WebP，合计约 2.19 MB；内容来自用户提供的 GENTLE MONSTER 作品集 PDF。
- `assets/projects/gentle-monster/grid/` 新增 12 个独立版面，每页提供 720px / 1280px WebP；24 张图片合计 1,771,548 字节，另有一份转换清单。
- `assets/projects/gentle-monster/motion/` 新增 2 段 GENTLE MONSTER 概念动态延展：网页 H.264 / AAC 版本均为 1280 × 720、30 fps，时长 11.03 秒与 7.07 秒，大小 1,147,215 与 1,119,594 字节；两段原始 HEVC 文件和 WebP 封面同目录保留。
- `assets/projects/desigual/` 已接入 14 张项目页面的双档 WebP、白色字标、完整 14 页 PDF 与转换清单；28 张 WebP 合计 2,317,028 字节，其中 1550px 桌面版 1,657,324 字节，720px 移动版 659,704 字节。目录总大小为 5,663,274 字节。
- `assets/projects/wuff/` 已接入 WUFF 宠物品牌的 3 张超长画布双档 WebP、清理后的完整 PDF 与尺寸清单；桌面版与移动版共 6 张 WebP，合计 2,100,098 字节，站内 PDF 为 10,606,384 字节，目录总大小为 12,707,084 字节。
- `assets/projects/ai-mural-video/` 已接入用户提供的“数字壁画”AI 动画短片：网页 H.264 / AAC 版本 960 × 544、30 fps、54.5 秒、7,911,896 字节；原始 HEVC 文件 9,235,881 字节与 29,102 字节 WebP 封面同目录保留。页面使用原生控件、`preload="metadata"` 和静态封面，不自动播放。
- `assets/projects/pixel-wardrobe-video/` 新增“Pixel Wardrobe”竖屏短片：1080 × 1920、30 fps、7.8 秒、H.264 / AAC，文件 6,444,041 字节；同目录包含 118,424 字节 WebP 封面、联系表、四张角色源图、透明 WebP 角色切片和 `manifest.json`。短片参考用户提供的 Pinterest 数字衣橱动态结构，使用四位像素角色重新编排，未使用第三方影像或音频；当前为独立交付素材，尚未接入网页。
- `assets/projects/my-portfolio-player/` 新增复古播放器短片：1920 × 1080、30 fps、7.8 秒、H.264 / AAC，文件 10,490,082 字节；同目录包含 395,462 字节 WebP 封面、联系表、中性底图与 `manifest.json`。画面中央文字为 `my, portfolio`，原图中的 `hi / dooba` 已替换，右下角生成水印通过构图裁切移除；带水印的用户参考图仅保留在本地 `tmp/`。当前为独立交付素材，尚未接入网页。
- `assets/projects/sheep-walk-motion/` 新增黄色点阵羊横向行走短片：1920 × 1080、30 fps、7.8 秒、H.264 / AAC，文件 8,563,084 字节；同目录包含 598,194 字节 WebP 封面、联系表、透明点阵羊、清洁背景与 `manifest.json`。动画从画面左侧进入并向右离开，带轻微步态起伏、身体摆动、反向移动点阵地面和原创节奏音效；带水印的用户参考图仅保留在本地 `tmp/`。当前为独立交付素材，尚未接入网页。
- `assets/projects/portfolio-walk-film/` 新增 13.6 秒合成短片，将 `my, portfolio` 播放器与黄色点阵羊镜头连为一体：播放器屏幕推近后，黄色界面承接黑色羊剪影，再由左向右翻转为黑底黄羊并继续行走。成片 1920 × 1080、30 fps、H.264 / AAC，文件 20,675,268 字节；同目录包含 WebP 封面、联系表与 `manifest.json`，当前为独立交付素材，尚未接入网页。音乐已重做为前半段 100 BPM 摆动切分、加速鼓点转场与后半段 120 BPM 四拍步态，并经过 -16.8 LUFS / -1.2 dBTP 响度校准。
- `assets/projects/portfolio-walk-avantgarde-10s/` 新增 10 秒先锋剪辑：以前一版合成片的第一版视觉与音乐为基础，压缩为前 4.6 秒播放器镜头、1.2 秒黄色屏幕到羊剪影的翻转转场、4.2 秒横向行走。成片 1920 × 1080、30 fps、300 帧、H.264 / AAC，文件 15,132,500 字节；同目录包含 WebP 封面、联系表与 `manifest.json`，当前为独立交付素材，尚未接入网页。
- `assets/projects/portfolio-walk-7s/` 的 7 秒精剪已作为网站首屏影片接入：3 秒播放器开场、1.2 秒匹配转场和 2.8 秒羊的横向行走。成片 1920 × 1080、30 fps、210 帧、H.264 / AAC，文件 14,155,715 字节；首屏使用影片约 2.3 秒处的 1920 × 1080 `portfolio-walk-7s-player-cover.webp`（200,140 字节），保留原 639,030 字节羊画面封面为备用。
- `assets/projects/portfolio-practice-map/` 新增 1920 × 1080 配套海报：将“品牌 / 手绘手作 / 运营”路径图重构为深黑红底、黄绿荧光路径与黄白点阵版式，并以极简层级保留四条轨道和三个节点。全部中文与英文统一使用微软雅黑粗体，仅以字号、位置和局部黄色强调建立层次。文件包含 1,809,032 字节 PNG 母版、197,634 字节 WebP 与 `manifest.json`，当前为独立交付素材，尚未接入网页。
- `assets/portfolio-directory/` 已接入用户提供的 1518 × 1036 霓虹像素路径图：PNG 母版为 2,144,062 字节，页面实际加载的 WebP 为 309,412 字节；三个方向分别链接品牌、手绘手作与运营。
- `assets/social/` 已接入 6 张小红书页面截图 WebP，共 464,776 字节；包含三个账号主页和三条代表笔记，账号 ID、邮箱、IP 属地及私密内容已在展示图中隐去。原始截图和加工脚本保留在 `tmp/`，不作为正式资源。

## 文件地图

| 文件或目录 | 当前职责 |
| --- | --- |
| `index.html` | 2,602 行；8 个长页主分区、3 个手工分类子区与 1 个品牌动态延展区；首屏含 7 秒开场、声音开关与霓虹路径目录；品牌区含 4 个案例、2 段 GENTLE MONSTER 动态影像、AI 视觉附录与“数字壁画”，运营区含三账号数据案例 |
| `styles.css` | 6,573 行；定义色彩变量、拼贴布局、全屏影片开场、霓虹路径目录、四案例品牌区、品牌动态延展卡、AI 动态影像卡、三账号运营数据版式、川美集市视觉卡、分类独立视图，以及 1000px、640px 响应式和 reduced-motion 规则 |
| `script.js` | 404 行；处理静止开场/点击播放/声音开关/结束入目录、目录/分类视图、移动菜单、历史状态、Escape、滚动显现、旧版动态面板初始化和年份 |
| `README.md` | 50 行；记录在线地址、本地运行、7 秒开场与声音控制、霓虹目录替换方式、分类独立视图、品牌案例与 AI 视频素材位置、各短片素材、三账号运营数据口径、川美实践缺图处理与逐区内容替换说明 |
| `assets/brand/` | `mist-gallery/` 保留 12 张约 520px 的原稿，`mist-gallery-hd/` 为页面实际使用的 720px / 1280px 高清 WebP；根目录另有透明手写字标 |
| `assets/projects/gentle-monster/` | GENTLE MONSTER 的完整原稿与五个长分段保留；`grid/` 内 12 张双档版面用于当前网页，`motion/` 内 2 段动态延展及封面 |
| `assets/projects/desigual/` | Desigual DOUBLE TAKE 的 14 张 720px / 1550px WebP、白色字标、完整 PDF 和素材尺寸清单 |
| `assets/projects/wuff/` | WUFF 宠物品牌的 3 张 720px / 1550px 长画布 WebP、完整 PDF 和尺寸清单 |
| `assets/projects/ai-mural-video/` | “数字壁画”Web H.264 / AAC 视频、原始 HEVC 文件与 WebP 封面 |
| `assets/projects/pixel-wardrobe-video/` | 7.8 秒竖屏“Pixel Wardrobe”短片、H.264 / AAC 成片、WebP 封面、联系表、透明角色切片、源图与素材清单 |
| `assets/projects/my-portfolio-player/` | 7.8 秒 16:9 复古播放器短片、H.264 / AAC 成片、WebP 封面、联系表、清洁底图、源图与素材清单 |
| `assets/projects/sheep-walk-motion/` | 7.8 秒 16:9 点阵羊横向行走短片、H.264 / AAC 成片、WebP 封面、联系表、透明角色与清洁背景 |
| `assets/projects/portfolio-walk-film/` | 13.6 秒的 16:9 合成成片、黄色界面到羊剪影的匹配转场、WebP 封面、联系表与素材清单 |
| `assets/projects/portfolio-walk-avantgarde-10s/` | 10 秒 16:9 压缩版、第一版音乐重排、WebP 封面、联系表与素材清单 |
| `assets/projects/portfolio-walk-7s/` | 已接入首屏的 7 秒 16:9 成片、播放器封面、备用羊画面封面、联系表与素材清单 |
| `assets/projects/portfolio-practice-map/` | 1920 × 1080 配套海报 PNG / WebP、品牌与手工运营路径图、素材清单 |
| `assets/portfolio-directory/` | 用户提供的 1518 × 1036 霓虹路径图 PNG 母版与页面实际加载的 WebP |
| `assets/social/` | 三个小红书账号主页与三条代表内容的 6 张 WebP 截图，作为运营区数据证据 |
| `assets/favicon.svg` | 站点图标 |
| `output/pdf/黄泳豫_作品集_精选.pdf` | 53 页精选作品集：原图封面/目录/简介、四组品牌长页、两页海报编排、三页九件手工图版、一页账号总览和三页代表内容 |
| `tmp/pdfs/build_portfolio_pdf_simple.py` | 当前精选作品集 PDF 的原生 Python / ReportLab 生成脚本，使用站点现有素材和公开页面数据 |
| `preview-*.png` | 封面、目录与品牌案例参考图；`preview-brand-desktop.png`、`preview-brand-mobile.png` 已更新为当前 mist 标题首屏 |
| `preview-wuff-desktop.png`、`preview-wuff-mobile.png` | 当前 WUFF 案例标题首屏的 1440 × 1000 与 390 × 844 实渲染截图 |
| `preview-section-brand-desktop.png` | 当前品牌独立分类视图，包含固定“回到目录”按钮 |
| `tmp/pdfs/brand-source/` | 品牌 PDF 加工中间素材，未对外引用 |
| `tmp/social-sources/` | 小红书截图的未改尺寸 PNG 原件，未对外引用 |

## 当前页面与交互

- 初始 `body` 带 `home-locked`，只展示全屏静态开场画面；视频默认暂停在 00:00，其他内容区和顶部常规导航隐藏。
- 点击开场中任意非控制区域或中央播放按钮后，7 秒影片开始播放；“声音 ON / OFF”可在播放前或播放中切换，跳过开场不会播放影片。
- 影片播放结束后自动进入 `.portfolio-directory`，URL 状态替换为 `#skills`；目录只显示自身，其他内容分区均隐藏。
- 霓虹目录在桌面使用原图的品牌、手绘手作和运营三个点击区域；640px 以下隐藏叠加热区，并在路径图下方显示三项大尺寸文字入口。
- 目录右下角固定显示“返回封面”；点击或按 Escape 回到封面时会把影片重置到 00:00、移除播放状态，并聚焦中央播放按钮。
- 点击目录或导航中的内容入口后，`body.view-section` 只保留所选顶层分区，并添加 `.is-active-section`；品牌、手工、运营、彩蛋、关于与联系之间不会通过上下滚动串联。
- 分类页右下角固定显示“回到目录”按钮；浏览器返回键、Escape 和该按钮均可回到目录。Escape 在目录中继续返回封面。
- 直接打开 `#skills`、`#work`、`#handmade`、`#social`、`#practice`、`#about` 或 `#contact` 会恢复到对应目录或独立分类视图。
- 品牌区顶部的 `.work-switcher` 按 `01 GENTLE MONSTER`、`02 MIST`、`03 DESIGUAL`、`04 WUFF`、`05 AI FILM` 排序，入口分别为 `#gentle-monster`、`#mist`、`#desigual`、`#wuff` 和 `#brand-ai-visuals`；390px 下前四项两列排列，AI FILM 独占下一行。
- mist 案例采用与 GENTLE MONSTER 相同的双栏封面结构：左侧为横向手写字标和中文副标题，右侧为项目说明、紫色贴纸与三项信息表；桌面字标宽 760px，移动端占满内容宽度。
- mist 的 12 张作品页位于标题下方 `.mist-longform`，桌面采用两栏连续排版，640px 以下变为单栏；最大宽度 1500px、图片间距 1px。
- mist 图片使用 `srcset` 与 `sizes`：桌面选择 1280px，移动端选择 720px；图片宽高属性同步为高清版尺寸，避免加载时产生布局跳动。
- GENTLE MONSTER 案例把完整项目拆成 12 个独立版面，桌面采用两栏网格，手机端按容器宽度单列缩放；完整长图仍保留为原稿入口。
- GENTLE MONSTER 完整长图之后、mist 之前新增 `.brand-motion-suite`：桌面双栏展示“镜面甲虫 / 戴镜之后”两段短视频，1000px 以下改为单栏；两段视频均使用 H.264 / AAC、原生控件、`preload="metadata"` 和静态封面，不自动播放。
- Desigual 案例采用黑色品牌首屏、白色字标与红白“DOUBLE TAKE”标题；下方 14 页在桌面按两栏、七行排列，手机端按内容宽度单列展示。
- WUFF 案例采用黑底、亮蓝与荧光绿品牌首屏，下方 3 张长画布在桌面按两列排列、640px 以下按单栏排列；最大容器宽度 1500px，并通过 `srcset` 在桌面与移动端切换 1550px / 720px WebP。
- GENTLE MONSTER 与 Desigual 图片使用 `srcset` 和固定宽高；14 张 Desigual 页面均配有描述性替代文本，底部链接到 `assets/projects/desigual/full-project.pdf`。
- WUFF 的 3 张长画布均配有描述性替代文本，底部链接到 `assets/projects/wuff/full-project.pdf`；网页展示图与站内 PDF 中原有的 5 处“豆包 AI 生成”字样均已移除，页尾说明也已删除。
- AI 视觉附录先展示“数字壁画”动态影像，再排列 5 张商业视觉研究。视频桌面为左右分栏、1000px 以下改为上下排列；封面、时长、画面规格与 AI 生成声明在页面可见，浏览器原生控件支持播放、暂停和全屏。
- 品牌页内锚点（包括 AI FILM）只改变当前 `#work` 视图内的滚动位置；`popstate` 遇到未知页内锚点不再误触发返回封面，Escape 仍从品牌页返回目录。
- 手工区前段包含 `#mosaic-panel`、`#mosaic-suitcase` 和 `#lacquer-panel` 三件作品；后段分为漆艺画、综合材料画、抽象手工实验作品三个 `.craft-category`。
- 新增作品为 `#lacquer-finishing-painting`、`#mixed-media-composition`、`#mixed-media-information-age`、`#public-art-installation`、`#abstract-wire-bloom`、`#abstract-film-button`、`#abstract-green-network`。
- 每件手工作品由一张主图、多角度缩略图和课程/材料信息组成。主图与缩略图均链接到 `assets/handmade/` 中对应的完整尺寸 WebP，并在新标签页打开。
- 运营区 `#social` 采用数据优先结构：三账号总览位于首屏，随后分别展示三号的粉丝、赞藏与笔记数；账号主页截图作为佐证置于文字数据之后。
- 运营区新增跨账号分析：插画主号集中约 96.3% 的粉丝和 88.2% 的内容；最高赞笔记占生活号 14 篇可见点赞样本的 79.3%，插画主号约每篇 162 次赞藏，商店号代表笔记评论数达到点赞数的 26.5%。
- 三篇内容拆解分别展示 2062 赞 / 775 收藏 / 25 评论、96 赞 / 6 收藏 / 12 评论，以及 34 赞 / 7 收藏 / 9 评论；每张截图均可点击打开同目录 WebP 原图。
- 运营区末尾保留“内容策划、账号视觉、社群互动”三项方法卡，并链接到 `#contact`。
- 社会实践区第一条为“川美艺术集市摆摊”，桌面以跨双栏案例卡呈现“氧氧商店”角色与纸品周边的线下呈现；手机端按视觉笔记、标题、说明、信息表的顺序单列。
- 川美实践卡左侧是由 HTML/CSS 绘制的摊位视觉笔记，不是现场照片；卡内明确标注“现场照片待补”，后续不得将图示描述为真实记录。
- 进入普通长页后，桌面导航可用；视口不超过 1000px 时切换为菜单按钮和下拉导航，640px 为更紧凑的移动布局。
- `.menu-toggle` 维护 `aria-expanded`、`is-open` 和 `menu-open`；Escape 会关闭菜单。
- `.reveal` 由 `IntersectionObserver` 控制入场动画；不支持该 API 时直接显示。`prefers-reduced-motion` 会关闭平滑滚动、动画和过渡。
- 旧版动态玻璃封面和手账目录 DOM 仍保留在源码中，但由 `.portfolio-intro` / `.portfolio-directory` 规则隐藏；`script.js` 中的 12 × 7 面板初始化只会在旧 `#kinetic-grid` 存在时运行，当前不参与页面展示。
- 旧目录条目的指针倾斜逻辑仍保留，但原 `.skill-entry` 已隐藏且不在当前霓虹目录中显示。

## 视觉系统

- 开场与目录：荧光黄黑视频、像素节点轨迹、清晰的声音/跳过控制；进入作品分类后继续使用纸张、胶带、装订环、手账、拼贴与实验性编辑排版。
- 核心变量：纸色 `--paper: #f2efe6`、墨色 `--ink: #171713`、红 `--red: #ff542d`、蓝 `--blue: #3151d9`、黄 `--yellow: #f2d94d`、紫 `--purple: #d4b9ff`、奶油色 `--cream: #fffaf0`。
- 字体族由系统字体组成，无远程字体依赖。
- 主要响应断点：`max-width: 1000px`、`max-width: 640px`；另有 `prefers-reduced-motion: reduce`。

## 内容完成度

已完成或基本成型：

- 姓名、身份描述、关于我文案、作品集分章结构。
- 7 秒影片开场（静止待点击、声音开关、结束自动入目录）、霓虹路径目录和章节间导航骨架已完成。
- 品牌区已完成四个项目：GENTLE MONSTER 以“以镜观骨，以虫观我”为主线；mist 项目介绍后展示 12 张饰品品牌图片；Desigual 以“DOUBLE TAKE”为主线，用 14 页完整长卷展示原创插画、概念、字标、字体、色彩、版式与应用；WUFF 以宠物奖励与日常陪伴为主线，用 3 张长画布展示角色、字标、色彩、包装、标签、零售与传播。
- 品牌顺序为 GENTLE MONSTER、GENTLE MONSTER AI 动态延展、mist、Desigual、WUFF，品牌区末尾为 5 张 AI 视觉研究与“数字壁画”动态影像。mist 的手写母版已统一用于网页标题、项目说明、包装系统与零售陈列；Desigual 使用独立概念全案的白色字标和橙红强调色。
- 手工区已完成 10 件作品：马赛克拼贴画、玻璃与麻绳手提箱、漆艺作品、漆艺画、《构成实验》、《信息时代》、公共艺术装置、金属与薄膜造型、薄膜与蓝色纽扣、绿色网状结构。
- 作品标题使用课程目录、文件名或可见媒介/外观描述，没有虚构正式作品名。照片按实际作品关系合并为多视角，不把同一作品的不同角度重复计件。
- 运营区已从能力占位更新为带截图和量化结果的真实账号案例，包含 3964 三号粉丝、3.8万+ 获赞与收藏、245 篇主页内容的汇总快照。
- 社会实践第一条“川美艺术集市摆摊”已完成文字与视觉图示；关于、联系等内容区具有完整版面。

仍是占位或待正式接入：

- 仍有 2 个社会实践占位：“社会实践二/三”和“内容待加入”；川美艺术集市的现场照片仍待补。
- 联系区仍使用 `mailto:hello@example.com`，并明确写着“邮箱与社交账号待补充”。

## 已知注意点

- `preview-desktop.png`、`preview-mobile.png`、`preview-directory-live-mobile.png` 与 `preview-skills-desktop.png` 都早于当前影片开场和霓虹目录改版，不能再作为当前首屏参考；最新测试截图位于 `tmp/qa-intro/`，不属于正式交付资源。
- `preview-brand-desktop.png` 与 `preview-brand-mobile.png` 已更新为当前 mist 标题首屏；其余 `preview-brand-*` 章节截图来自较早的自定义排版，不再代表当前页面。
- 当前正式预览图尚未包含 GENTLE MONSTER 与 Desigual；最新三品牌双栏 QA 截图保存在 `tmp/qa-brand-grids/`，不是对外交付资源。
- WUFF 的桌面与移动端预览图已更新为当前源码；完整长卷仍以 `assets/projects/wuff/` 中的 WebP 为准。
- Desigual 的网页内容来自参考任务 `制作Desigual品牌全案` 中的 2026 排版定稿，页面内明确标注“独立概念全案”，不得表述为 Desigual 官方商业委托。
- WUFF 的网页内容来自用户提供的 `宠物品牌pdf.pdf`，页面内明确标注“独立视觉全案”。原 PDF 的 3 张超长画布已转成网页长卷与清理后的站内 PDF；5 处“豆包 AI 生成”字样已通过局部修补移除。含原字样的源 PDF 备份在 `tmp/pdfs/wuff-original-full-project.pdf`，不作为公开下载稿。
- GENTLE MONSTER 的 12 个拆分版面按当前页面视觉顺序裁切；`full-project.webp` 与五个长分段仍作为完整原稿和备用素材，不覆盖、不删除。
- 旧 `.brand-gallery` 多列规则仍保留供历史样式参考，当前 mist 使用独立的 `.mist-longform` 单列网格；图片自身与长卷均无横向溢出。
- mist 原始页面图仅约 517–537px 宽，高清版通过 Lanczos 放大并做轻度锐化生成；显示尺寸已达到 1:1，但源图缺失的细节不能被无损恢复。
- 手工区素材已按作品顺序命名：`mosaic-*`、`lacquer-*`、`mixed-media-*`、`public-art-*`、`abstract-*`。源 JPG 的文件名不可读，站内 WebP 使用描述性名称，但未改变画面内容。
- 手工区主图使用 `object-fit: cover`；后续如需突出某件作品的局部，应重新处理素材，不要在 HTML 中用不一致的硬编码裁切。
- 手工区 QA 截图和验收辅助页位于 `tmp/`，均是临时文件，不是正式交付资源。
- 运营数据为 2026-10-29 小红书页面快照；`3.5万` 与 `3.8万+` 均为平台四舍五入展示口径，不能当作实时后台数据。
- 运营截图已对账号 ID、邮箱、IP 属地及私密内容做模糊处理；`tmp/social-sources/` 保留未改尺寸的原始 PNG，不对外引用。
- “数字壁画”原始文件为 HEVC，网页交付版已转为 H.264 / AAC 以扩大浏览器兼容性；原始 HEVC 文件未被覆盖。视频右上角保留源文件形态标识，页面另以文字标注 AI 生成，不能表述为实拍或商业委托。
- GENTLE MONSTER 的 2 段动态延展同样由 HEVC 转成 H.264 / AAC，原文件未被覆盖；画面包含源平台水印，页面已明确标注为 AI 辅助生成的独立概念延展，不表述为品牌官方发布、商业委托或真实商品实拍。
- 精选 PDF 中的海报实验页明确标注 AI 辅助生成，不代表真实商品、商业委托或实拍；运营页保留 2026-10-29 公开页面快照口径，不将数据写成实时后台指标。
- 精选 PDF 不再设置额外结束页；自我介绍页直接使用用户提供的原图，品牌和手作以原图为主，仅海报与运营部分进行信息编排。
- PDF 图片以高质量 JPEG 嵌入，当前文件约 7.7 MB；若后续替换素材，需重新运行生成脚本并逐页复核透明 PNG、中文混排与字体嵌入。
- 本地素材和“氧氧商店”公开内容中未找到川美艺术集市的现场照片，因此实践卡使用明确标注的 CSS 视觉笔记；不能把该图示或搜索结果中他人的摊位照片当作本人现场影像。
- 用户再次明确要求撤掉红色“认真做事 / 尽情玩耍 / 保持好奇”横幅；对应 HTML 与 `.manifesto` 专用样式均已移除。
- `styles.css` 保留了当前 HTML 未使用的历史选择器，如 `.hero-grid`、`.hero-art`、`.round-link`、`.ticker`、`.scroll-cue` 等；清理前先确认作用。
- `#work` 等顶层分区哈希现在可直接恢复独立分类视图；品牌案例内部锚点（如 `#wuff`）仍是页内定位，不作为顶层视图恢复入口。
- 页面没有数据库、后端、CMS、分析脚本或表单提交；不得在未获授权时补入真实个人联系方式或外部账号。
- 误发到工作区的三张 `assets/portfolio-pdf/` 图片保留在本地供用户处理，其中自我介绍图含私人联系方式；该目录已加入 `.gitignore`，没有上传到公开仓库。
- GitHub 页面的移动提示文案会在 640px 以下从“移动鼠标”切换为“触摸屏幕”；HTML 已加入移动 Web App、分享卡片与主题相关元信息。
- 当前没有自动化测试套件，验证主要依赖静态检查、本地服务器与浏览器人工检查。
- Gitee Pages 的旧教程不适用于当前 Gitee 账号和仓库；不要重复寻找传统的“服务 → Gitee Pages → 启动”入口。当前国内访问由 Netlify 持续部署站点承担，Gitee 仅作为公开代码镜像。

## 本次核验结果

- `node --check script.js`：通过。
- 7 秒开场首次打开时保持暂停在 00:00，显示约 2.3 秒处完整 `my, portfolio` 播放器封面；中央“点击任意位置开始”与“声音 ON”可见，点击声音开关会切换为 OFF 且不会启动影片。
- 点击开场任意非控制区域后，影片进入播放状态、时间轴前进且默认有声；7 秒播放结束时自动切换到 `#skills` 目录。
- 1440 × 1000 下霓虹目录图片完整加载为 1518px WebP，品牌点击区域可进入 `#work`，Escape 返回目录，右下角“返回封面”可回到并重置开场。
- 返回封面后影片恢复暂停、`currentTime` 为 `0`、播放状态移除，中央播放按钮获得键盘焦点。
- 390 × 844 下开场与目录均无横向溢出；“品牌 / 手绘手作 / 运营”三项大尺寸入口可见，点击“手绘手作”可进入 `#handmade`；右下角返回封面按钮距底边 16px，返回后影片同样暂停在 00:00。
- 上述无头 Edge 交互与两种视口检查均无脚本错误或控制台错误；目录图片加载状态正常。内容区两个延迟加载的 GENTLE MONSTER 视频在切换视口时请求被浏览器主动中止，不属于开场或目录资源失败。
- 本地资源审计通过：`href`、`src` 与 `srcset` 合并后有 133 个本地引用全部存在，48 个 `id` 无重复，14 个页内锚点均有目标。
- 正式 GitHub Pages 地址返回 `200 OK`；首页、`styles.css`、`script.js` 与代表性 WebP 图片均可加载。远端提交树共 211 个文件且未截断。
- 正式网址在无头 Edge 中完成 390 × 844 与 1440 × 1000 复验：封面、目录、作品页、移动菜单和 Escape 返回正常，无横向溢出、破图或浏览器错误；首张作品图在手机端正确加载 720px WebP。
- 当前 HTML 共 81 个 `<img>`，每个都包含 `alt` 属性；所有本地资源引用均有效，没有外部图片依赖。
- 页面共有 48 个 `id`，无重复；14 个唯一页内锚点均有目标元素。
- 新增运营案例后复验：所有本地 `href` / `src` 引用均存在；运营区 6 张截图均有替代文本。
- 运营区图片均成功加载；桌面 1440px 下三账号卡和三项数据结论正常三栏排列，手机 390px 下按“数据 → 文案 → 截图”顺序单列排列，页面无横向溢出。
- WUFF 新增案例已在 1440px 与 390px 实际渲染检查：桌面标题与 3 张长卷均为双栏（第三张位于下一行左列）、移动端全部单栏；图片标签文字已清除，移动端四项品牌切换为两列两行，页尾 PDF 入口可用，页面无横向溢出。
- `assets/projects/wuff/full-project.pdf` 已替换为清理稿，渲染复核 3 页均无原字样；通过本地服务器返回 `200 OK`，Content-Type 为 `application/pdf`，文件大小 10,606,384 字节。
- 川美艺术集市卡在 1280px 桌面下为左右双栏、后续两张占位实践卡并排；390px 下按“视觉笔记 → 标题与说明 → 信息表”单列，页面无横向溢出。
- 页面共有 12 个 `section`：8 个顶层主分区、3 个手工分类子区和 1 个品牌动态延展区；品牌案例 4 个，手工作品 `article` 10 个。
- 品牌顺序为 GENTLE MONSTER `#gentle-monster`、动态延展 `#monster-motion`、mist `#mist`、Desigual `#desigual`、WUFF `#wuff`；页面可见文本、无障碍名称和当前图片引用中不再出现旧品牌名。
- 当前素材数量核验：手工 26 张 WebP，共 8,038,386 字节；mist 原稿 12 张 PNG，共 5,249,630 字节，高清显示版 24 张 WebP，共 4,779,682 字节；GENTLE MONSTER 原有 6 张 WebP 共 2,292,386 字节，新增 12 个版面的双档 WebP 共 1,771,548 字节。
- Desigual 素材数量核验：14 页 PDF 可读取 14 页；28 张 WebP 合计 2,317,028 字节；`assets/projects/desigual/` 合计 5,663,274 字节。
- 运营截图素材核验：`assets/social/` 共 6 张 WebP、464,776 字节；宽度分别为 826px 与 846px，均按页面显示宽度裁切并保留完整数据区。
- 桌面 1440 × 1000 下四个品牌案例均实测为两列，单列宽约 661px，品牌案例自身无横向溢出；390 × 844 下 GENTLE MONSTER、Desigual 与 WUFF 为单列网格，mist 为单栏，均无横向溢出。
- 密度选择正常：普通桌面密度下加载 720px 档，2× 密度下 GENTLE MONSTER 加载 1280px 档、Desigual 加载 1550px 档；Desigual 首图在双栏中的 CSS 渲染宽度约 661px。
- 桌面实测首张 mist 图加载 `01-brand-overview-1280.webp`，渲染宽度 1278px，接近像素级 1:1；移动端加载 720px 档。全站滚动审计中，可见图片未再以大于自身分辨率的尺寸显示。
- 交互复验通过：封面、目录和六类内容视图相互隔离；目录进入分类、固定“回到目录”按钮、浏览器返回、Escape 两级返回、移动菜单切页和 WUFF 页内入口均正常。
- AI 视频接入后复验：本地服务器返回 video/mp4；H.264 视频被无头 Edge 识别为 960 × 544、54.5 秒，`readyState` 为 4，脚本播放检查可正常推进时间轴；默认状态为暂停且不自动出声。
- AI FILM 直达入口在 1440 × 1000 与 390 × 844 下均保留 `view-section` 并滚动到 `#brand-ai-visuals`；桌面为左右分栏，手机为上下单栏，两种宽度均无横向溢出。移动端视频卡宽 358px，桌面卡宽约 1325px。
- 新增的 GENTLE MONSTER 动态延展已通过 DOM 顺序复验：`#gentle-monster` 的下一个元素为 `#monster-motion`，后者紧接着 `#mist`。两段 H.264 / AAC 视频的 `readyState` 均为 4，脚本播放检查可正常推进时间轴，默认状态为暂停。
- GENTLE MONSTER 动态延展在 1440 × 1000 下为双栏，两卡宽约 645px；390 × 844 下为单栏，卡宽 358px；两种宽度均无横向溢出，未出现控制台错误或资源加载失败。
- Pixel Wardrobe 成片已用 FFmpeg 完整解码 234 帧，媒体参数为 1080 × 1920、30 fps、7.80 秒、H.264 Constrained Baseline + AAC LC 双声道；音频采样为 44.1 kHz，平均响度 -20.8 dB、峰值 -9.3 dB。抽帧复核确认四位角色透明边缘、衣橱网格、四次造型切换、四人同框和片尾排版均正常。
- my, portfolio 播放器成片已用 FFmpeg 完整解码 234 帧，媒体参数为 1920 × 1080、30 fps、7.80 秒、H.264 Constrained Baseline + AAC LC 双声道；音频采样为 44.1 kHz，平均响度 -28.9 dB、峰值 -15.4 dB。抽帧复核确认中央文字替换、黄色屏幕擦拭与打字、播放进度、构图裁切和无水印画面均正常。
- 黄色点阵羊成片已用 FFmpeg 完整解码 234 帧，媒体参数为 1920 × 1080、30 fps、7.80 秒、H.264 Constrained Baseline + AAC LC 双声道；音频采样为 44.1 kHz，平均响度 -25.2 dB、峰值 -12.5 dB。抽帧复核确认从左到右的入画、经过与出画，点阵边缘、地面视差和水印移除均正常。
- 合成短片已用 FFmpeg 完整解码 408 帧，媒体参数为 1920 × 1080、30 fps、13.60 秒、H.264 Constrained Baseline + AAC LC 双声道，音频为 44.1 kHz 立体声；响度分析为 -16.8 LUFS integrated、-1.2 dBTP true peak。转场抽帧复核确认播放器屏幕推近、黄色界面承接、黑色羊剪影、黑底黄羊反转和后续向右行走连续，无硬切或水印。
- 10 秒先锋剪辑已用 FFmpeg 完整解码 300 帧，媒体参数为 1920 × 1080、30 fps、10.00 秒、H.264 Constrained Baseline + AAC LC 双声道；音频为 44.1 kHz 立体声，响度分析为 -15.3 LUFS integrated、-2.4 dBTP true peak。抽帧复核确认播放器文字输入、1.2 秒匹配转场、黑底黄羊横向行走与 10 秒收束均正常。
- 7 秒精剪已用 FFmpeg 完整解码 210 帧，媒体参数为 1920 × 1080、30 fps、7.00 秒、H.264 Constrained Baseline + AAC LC 双声道；音频为 44.1 kHz 立体声，响度分析为 -15.1 LUFS integrated、-2.7 dBTP true peak。抽帧复核确认播放器开场、完整匹配转场、羊的横向行走和 7 秒收束均正常。
- 配套海报已按 1920 × 1080 输出，PNG 为 1,809,032 字节，WebP 为 197,634 字节；视觉复核确认四条轨道、点阵节点、黄绿荧光路径、统一字体的三个中文节点与双语标签在深黑红底上均清晰可见，底部说明未与边框重叠。参考原图仅保留在本地 `tmp/`。
- Escape 可从 AI FILM 或原有 WUFF 页内锚点返回目录；直接打开 `#work` 可恢复品牌独立视图，`#wuff` 与 `#brand-ai-visuals` 不再被误判为封面路由。
- 本次将目录与品牌、手工、运营、彩蛋、关于、联系改为独立内容视图，并加入固定“回到目录”按钮、Escape 两级返回与持久 URL 状态；随后完成首次 Git 提交、GitHub 公开仓库和 Pages 发布。
- 精选 PDF 已生成并逐页渲染检查：共 53 页、53 个书签，文件大小 19,540,870 字节；原图页按素材本身比例成页，并统一以 JPEG 质量 78 嵌入，海报、手作和运营编排页为 842 × 595 pt 横版 A4。
- PDF 目录标签直接叠加在四个苹果蛋壳面上；手作为三页九件作品的极简三图排版；海报只保留总标题和图片；运营以一页大图账号总览和三页大图代表内容呈现公开页面数据，不推断后台成交、营业额或私域转化。
- PDF 内的品牌/海报/手工/运营内容均来自当前站点素材和文案；海报页保留 AI 生成声明，Desigual 与 WUFF 保留独立概念/视觉全案属性，运营数据注明快照日期。
- 2026-11-01 正式部署核验：远端 `main` 指向 `12b9af62`；Netlify 首页已提供新版 7 秒开场、霓虹目录和动态影像引用。公开站点中 7 秒开场视频返回 `200 OK`、14,155,715 字节、`video/mp4`；霓虹目录 WebP 返回 `200 OK`、309,412 字节、`image/webp`；“数字壁画”视频返回 `200 OK`、7,911,896 字节、`video/mp4`。Netlify 会在 HTML 注释中注入托管说明，因此线上 HTML 字节哈希与源文件不同；源文件 `index.html` 仍为 118,032 字节、SHA-256 前 16 位 `20638F2A80A0DB94`。

## 后续更新规则

每次完成会改变项目现状的工作后，至少刷新本文件中的快照日期、Git 状态、内容完成度、已知注意点和核验结果。若只是提出方案但尚未落地，应保留原状态，不写成已完成。
