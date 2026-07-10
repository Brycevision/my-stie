# BryceVision — Static Photobook Website V3

This is a pure static website. No build tools are required.

## Files

- `index.html`
- `style.css`
- `script.js`
- `README.md`

## Deploy on GitHub + Cloudflare Pages

1. Upload all files to the root of your GitHub repository.
2. In Cloudflare Pages:
   - Framework preset: `None`
   - Build command: leave blank
   - Output directory: `/` or leave blank
3. Deploy.

## Replace images

Open `script.js` and replace empty image URLs:

```js
heroImage: "https://images.yourdomain.com/brycevision/hero.webp"
```

For each chapter:

```js
feature: { url: "https://images.yourdomain.com/chapter-01/cover.webp" }
thumbs: [
  "https://images.yourdomain.com/chapter-01/01.webp",
  "https://images.yourdomain.com/chapter-01/02.webp",
  "https://images.yourdomain.com/chapter-01/03.webp"
]
```

## Design logic

V3 uses a stricter visual system:

- one paper background color
- one ink color
- one red accent
- two font systems only: serif for titles, sans-serif for interface/body
- fixed grid and chapter rhythm
- no random collage colors
- smaller typography than previous versions
