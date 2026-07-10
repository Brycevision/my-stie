# BryceVision — 此刻在场

这是一个纯静态摄影集网站版本，可直接部署到 GitHub + Cloudflare Pages。

## 文件结构

```text
index.html
style.css
script.js
site-data.js
assets/photos/*.webp
```

## Cloudflare Pages 部署

1. 把本文件夹里的所有内容上传到 GitHub 仓库根目录。
2. 在 Cloudflare Pages 里连接该 GitHub 仓库。
3. 构建设置：
   - Framework preset: `None`
   - Build command: 留空
   - Output directory: `/` 或留空
4. 部署后即可访问。

## 替换为正式高清图片

当前 `assets/photos/*.webp` 是从你上传的 PDF 里导出的网页预览图。正式版建议把原图压缩成 WebP 后放到 Cloudflare R2，再在 `site-data.js` 里把本地路径替换成图片 URL。

例如：

```js
"src": "https://images.yourdomain.com/cikezaichang/eaves/01.webp"
```

## 章节结构

- 檐下微光 / Under the Eaves
- 人间片刻 / Human Moments
- 城市低语 / The City Speaks Softly
- 空椅之间 / Between Empty Chairs
- 草木生灵 / Plants and Living Things
