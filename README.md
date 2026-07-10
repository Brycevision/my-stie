# BryceVision — 此刻在场

纯静态摄影集网站版本。可直接上传到 GitHub，并通过 Cloudflare Pages 部署。

## 文件结构

```text
index.html
style.css
script.js
site-data.js
.nojekyll
assets/photos/*.webp
```

## 这一版更新

- 图片展示从平铺改为每个 Chapter 的轮播式 Photo Deck。
- 图片下方只显示单独小标题，不显示页码。
- p25、p26、p27 已移除。
- 保留原来的 BryceVision / 此刻在场 / 五个章节结构。

## 部署到 Cloudflare Pages

1. 把本文件夹内所有内容上传到 GitHub 仓库根目录。
2. Cloudflare Pages 设置：
   - Framework preset: `None`
   - Build command: 留空
   - Output directory: `/` 或留空
3. 部署即可访问。

## 修改照片标题

打开 `site-data.js`，找到对应图片：

```js
{
  "src": "assets/photos/p13.webp",
  "caption": "父子望湖"
}
```

修改 `caption` 即可。

## 之后换成 Cloudflare R2 图片链接

把 `site-data.js` 里的：

```js
"src": "assets/photos/p13.webp"
```

替换为：

```js
"src": "https://images.yourdomain.com/cikezaichang/human/01.webp"
```
