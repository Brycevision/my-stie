# BryceVision — 此刻在场 V2

这是一个纯静态摄影集网站，不需要 Astro / React / 构建工具。

## 文件

- `index.html` 网站结构
- `style.css` 视觉样式
- `script.js` 内容与图片 URL 配置
- `README.md` 使用说明

## 部署到 GitHub + Cloudflare Pages

1. 解压 zip。
2. 把 `index.html`、`style.css`、`script.js`、`README.md` 上传到 GitHub 仓库根目录。
3. Cloudflare Pages 连接该 GitHub 仓库。
4. 设置：
   - Framework preset: `None`
   - Build command: 留空
   - Output directory: `/` 或留空
5. Deploy。

## 替换图片

打开 `script.js`，把空字符串改成你的图片链接：

```js
heroImage: "https://images.yourdomain.com/brycevision/hero.webp"
```

每一章里也有图片：

```js
feature: { url: "https://images.yourdomain.com/cikezaichang/old-places/01.webp", caption: "Lingyin Temple" }
```

建议图片格式：

- WebP
- 长边 2000–2600px
- 单张 300KB–900KB
- 使用 Cloudflare R2 或其他 CDN 图片链接

## 设计思路

V2 改成更清晰的“线上摄影书 / 个人视觉档案”结构：

- 首页像摄影书封面
- 第二屏像 archive board / folder index
- chapters 用统一的书页式排版
- 不再使用杂乱相册式排布
- 图片链接集中在 `script.js` 里管理

