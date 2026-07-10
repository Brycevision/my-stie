# BryceVision — Static Photobook Website

这是一个纯静态摄影集网站版本，可以直接上传 GitHub，并用 Cloudflare Pages 部署。

## 文件

- `index.html`：网页结构
- `style.css`：视觉设计、排版、响应式样式
- `script.js`：章节内容、图片链接、滚动动画、图片预览

## 如何替换图片

打开 `script.js`，找到：

```js
const SITE = {
  heroImage: "",
};
```

把首页封面图改成：

```js
heroImage: "https://images.yourdomain.com/brycevision/hero.webp",
```

每个 chapter 里也有：

```js
cover: "",
photos: [
  {
    url: "",
    caption: "...",
    shape: "landscape"
  }
]
```

把 `url: ""` 改成你的图片链接即可。

## 推荐图片规格

- WebP / AVIF
- 长边 1800–2500px
- 单张最好 300KB–900KB
- 横图用 `shape: "landscape"`
- 竖图用 `shape: "portrait"`
- 方图用 `shape: "square"`

## Cloudflare Pages 部署

1. 新建 GitHub repository
2. 上传这三个文件：`index.html`, `style.css`, `script.js`
3. Cloudflare Pages → Create a project
4. 连接 GitHub repository
5. Framework preset 选择：`None`
6. Build command 留空
7. Output directory 填：`/` 或留空
8. Deploy

## 图片存储建议

推荐使用 Cloudflare R2：

- 网站域名：`brycevision.com`
- 图片域名：`images.brycevision.com`
- 图片路径示例：`https://images.brycevision.com/cikezaichang/chapter-01/01.webp`
