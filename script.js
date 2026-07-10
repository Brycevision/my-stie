/*
  BryceVision — edit this file to replace image links.

  How to use image URLs:
  1. Upload your optimized images to Cloudflare R2 / Cloudflare Images / another stable host.
  2. Copy the public image URL.
  3. Replace the `url` values below.

  Recommended image format:
  - WebP or AVIF
  - Long edge: 1800–2500px
  - File size: ideally 300KB–900KB
*/

const SITE = {
  heroImage: "", 
  // Example:
  // heroImage: "https://images.yourdomain.com/brycevision/hero.webp",
};

const chapters = [
  {
    number: "Ⅰ",
    cn: "旧处微光",
    en: "Light in Old Places",
    places: "南京 / 杭州 / 上海老城 / 寺庙 / 旧街",
    statement: "有些地方并不真正沉默。墙面、香火、屋檐、石阶，都在替时间说话。",
    cover: "",
    quote: "旧处不是过去，而是时间仍在发光的地方。",
    photos: [
      {
        url: "",
        caption: "Old walls, incense, roofs and stone steps carry the quiet weight of time.",
        shape: "landscape"
      },
      {
        url: "",
        caption: "A corner of silence in the middle of movement.",
        shape: "portrait"
      },
      {
        url: "",
        caption: "Light remains where people have passed.",
        shape: "square"
      }
    ]
  },
  {
    number: "Ⅱ",
    cn: "人间片刻",
    en: "Human Moments",
    places: "街头 / 香客 / 小店 / 早餐 / 背影",
    statement: "人只是经过，但片刻会留下来。",
    cover: "",
    quote: "真正留下来的，往往不是事件，而是一个很轻的瞬间。",
    photos: [
      {
        url: "",
        caption: "People pass by, but certain moments remain.",
        shape: "portrait"
      },
      {
        url: "",
        caption: "A small gesture, a short pause, a trace of daily life.",
        shape: "landscape"
      },
      {
        url: "",
        caption: "The human trace is sometimes quieter than the face itself.",
        shape: "square"
      }
    ]
  },
  {
    number: "Ⅲ",
    cn: "城市低语",
    en: "The City Speaks Softly",
    places: "上海 / 香港 / 南京 / 杭州 / 雨夜 / 街角",
    statement: "城市从不停止，只是偶尔放低声音。",
    cover: "",
    quote: "在最喧闹的地方，也会有一秒钟的安静。",
    photos: [
      {
        url: "",
        caption: "The city never stops. Sometimes, it simply lowers its voice.",
        shape: "landscape"
      },
      {
        url: "",
        caption: "Rain, glass, traffic and a private world.",
        shape: "portrait"
      },
      {
        url: "",
        caption: "A city remembered through reflection and light.",
        shape: "landscape"
      }
    ]
  },
  {
    number: "Ⅳ",
    cn: "山河远行",
    en: "Distant Landscapes",
    places: "美国西部 / Arizona / 荒漠 / 公路 / 天空",
    statement: "远方不是目的地，是人和世界之间忽然拉开的距离。",
    cover: "",
    quote: "风景不是远方，而是人在路上突然停下来的理由。",
    photos: [
      {
        url: "",
        caption: "Distance is the space that opens between the self and the world.",
        shape: "landscape"
      },
      {
        url: "",
        caption: "Road, desert, mountain, sky.",
        shape: "landscape"
      },
      {
        url: "",
        caption: "The horizon becomes a way of thinking.",
        shape: "portrait"
      }
    ]
  },
  {
    number: "Ⅴ",
    cn: "无人在场",
    en: "No One Was There",
    places: "空街 / 空房间 / 荒野 / 公路 / 夜晚建筑",
    statement: "没有人在画面里，但人的痕迹仍然存在。",
    cover: "",
    quote: "缺席不是空白。它只是另一种在场。",
    photos: [
      {
        url: "",
        caption: "No one appears in the frame, yet traces of people remain.",
        shape: "landscape"
      },
      {
        url: "",
        caption: "After people leave, the place begins to speak.",
        shape: "square"
      },
      {
        url: "",
        caption: "Silence as evidence.",
        shape: "portrait"
      }
    ]
  }
];

function romanToIndex(roman) {
  return ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ"].indexOf(roman) + 1;
}

function svgPlaceholder(title, subtitle, seed = 1) {
  const palettes = [
    ["#d8d0c0", "#8b8172", "#2d2b29"],
    ["#c7b49b", "#7b604f", "#211f1d"],
    ["#b7b9b4", "#6f756f", "#1f2321"],
    ["#d5c7ae", "#946e4f", "#2a2521"],
    ["#c9c1b8", "#71695f", "#191817"]
  ];
  const p = palettes[(seed - 1) % palettes.length];

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1100" viewBox="0 0 1600 1100">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${p[0]}"/>
        <stop offset="52%" stop-color="${p[1]}"/>
        <stop offset="100%" stop-color="${p[2]}"/>
      </linearGradient>
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
        <feColorMatrix type="saturate" values="0"/>
        <feComponentTransfer>
          <feFuncA type="table" tableValues="0 0.16"/>
        </feComponentTransfer>
        <feBlend mode="multiply" in2="SourceGraphic"/>
      </filter>
    </defs>
    <rect width="1600" height="1100" fill="url(#g)"/>
    <rect width="1600" height="1100" filter="url(#noise)" opacity=".42"/>
    <circle cx="${260 + seed * 130}" cy="${230 + seed * 28}" r="${220 + seed * 18}" fill="#ffffff" opacity=".08"/>
    <rect x="90" y="86" width="1420" height="928" fill="none" stroke="#f2eee4" stroke-opacity=".34"/>
    <text x="120" y="910" fill="#f2eee4" opacity=".86" font-family="Georgia, serif" font-size="76" letter-spacing="8">${escapeSvg(title)}</text>
    <text x="126" y="965" fill="#f2eee4" opacity=".64" font-family="Arial, sans-serif" font-size="22" letter-spacing="6">${escapeSvg(subtitle)}</text>
  </svg>`;

  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function escapeSvg(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getImageUrl(url, title, subtitle, seed) {
  return url && url.trim() ? url : svgPlaceholder(title, subtitle, seed);
}

function createEl(tag, className, html = "") {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (html) el.innerHTML = html;
  return el;
}

function renderChapterIndex() {
  const container = document.getElementById("chapterIndex");

  chapters.forEach((chapter, idx) => {
    const row = createEl("a", "chapter-row reveal");
    row.href = `#chapter-${idx + 1}`;
    row.innerHTML = `
      <div class="chapter-number">${chapter.number}</div>
      <div class="chapter-name">
        <strong>${chapter.cn}</strong>
        <span>${chapter.en}</span>
      </div>
      <p class="chapter-places">${chapter.places}</p>
    `;
    container.appendChild(row);
  });
}

function renderChapters() {
  const container = document.getElementById("chapterSections");

  chapters.forEach((chapter, idx) => {
    const section = createEl("article", "chapter-block");
    section.id = `chapter-${idx + 1}`;

    const coverUrl = getImageUrl(chapter.cover, chapter.cn, chapter.en, idx + 1);

    const cover = createEl("div", "chapter-cover");
    cover.innerHTML = `
      <div class="chapter-intro">
        <div class="chapter-kicker reveal">Chapter ${chapter.number}</div>
        <h2 class="chapter-title-cn reveal">${chapter.cn}</h2>
        <p class="chapter-title-en reveal">${chapter.en}</p>
        <p class="chapter-statement reveal">${chapter.statement}</p>
      </div>

      <figure class="cover-frame reveal">
        <img src="${coverUrl}" loading="lazy" alt="${chapter.cn} — ${chapter.en}">
      </figure>
    `;

    const sequence = createEl("div", "photo-sequence");

    const textPlate = createEl("div", "text-plate reveal");
    textPlate.innerHTML = `
      <span>${String(idx + 1).padStart(2, "0")}</span>
      <p>${chapter.quote}</p>
    `;

    sequence.appendChild(textPlate);

    chapter.photos.forEach((photo, photoIdx) => {
      const spreadType = photoIdx === 0 ? "wide" : (photoIdx === 1 ? "right" : "left");
      const spread = createEl("figure", `photo-spread ${spreadType} reveal`);
      const imgUrl = getImageUrl(photo.url, chapter.cn, photo.caption, (idx + 1) * (photoIdx + 2));
      const shape = photo.shape || "landscape";

      spread.innerHTML = `
        <div class="photo-card ${shape}" data-count="${chapter.number}.${photoIdx + 1}">
          <img src="${imgUrl}" loading="lazy" alt="${photo.caption}">
        </div>
        <figcaption class="caption">${photo.caption}</figcaption>
      `;

      sequence.appendChild(spread);
    });

    section.appendChild(cover);
    section.appendChild(sequence);
    container.appendChild(section);
  });
}

function initHero() {
  const hero = document.getElementById("heroMedia");
  const heroUrl = getImageUrl(SITE.heroImage, "BryceVision", "A Visual Archive", 2);
  hero.style.setProperty("--hero-image", `url("${heroUrl}")`);
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.13 }
  );

  items.forEach(item => observer.observe(item));
}

function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImage");
  const caption = document.getElementById("lightboxCaption");
  const close = document.getElementById("lightboxClose");

  document.addEventListener("click", event => {
    const card = event.target.closest(".photo-card");
    if (!card) return;

    const image = card.querySelector("img");
    img.src = image.src;
    img.alt = image.alt;
    caption.textContent = image.alt;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  });

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    img.src = "";
  }

  close.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeLightbox();
  });
}

function initCursor() {
  const dot = document.querySelector(".cursor-dot");
  if (!dot || window.matchMedia("(pointer: coarse)").matches) return;

  window.addEventListener("mousemove", event => {
    dot.style.opacity = "1";
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
  });

  document.addEventListener("mouseover", event => {
    const interactive = event.target.closest("a, button, .photo-card");
    dot.style.width = interactive ? "34px" : "10px";
    dot.style.height = interactive ? "34px" : "10px";
  });
}

function initYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

function boot() {
  initHero();
  renderChapterIndex();
  renderChapters();
  initReveal();
  initLightbox();
  initCursor();
  initYear();
}

boot();
