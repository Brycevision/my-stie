/*
  BryceVision static photobook site
  Replace the empty image URL strings below with your Cloudflare R2 / image CDN URLs.
  Example: url: "https://images.yourdomain.com/cikezaichang/old-places/01.webp"
*/

const siteData = {
  heroImage: "",
  chapters: [
    {
      number: "Ⅰ",
      title: "旧处微光",
      english: "Light in Old Places",
      anchor: "old-places",
      places: "Nanjing / Hangzhou / Shanghai",
      text: "有些地方并不真正沉默。墙面、香火、屋檐、石阶，都在替时间说话。",
      feature: { url: "", caption: "Temple / old street / quiet light" },
      images: [
        { url: "", caption: "stone steps" },
        { url: "", caption: "incense" },
        { url: "", caption: "old wall" }
      ],
      colors: ["#1d3557", "#c49a6c", "#e7dcc7"]
    },
    {
      number: "Ⅱ",
      title: "人间片刻",
      english: "Human Moments",
      anchor: "human-moments",
      places: "Shanghai / Hong Kong / Nanjing",
      text: "人只是经过，但片刻会留下来。",
      feature: { url: "", caption: "street / passerby / daily life" },
      images: [
        { url: "", caption: "passerby" },
        { url: "", caption: "small shop" },
        { url: "", caption: "breakfast" }
      ],
      colors: ["#4b3621", "#d8a15d", "#e6c9ad"]
    },
    {
      number: "Ⅲ",
      title: "城市低语",
      english: "The City Speaks Softly",
      anchor: "city-whispers",
      places: "Shanghai / Hong Kong / Hangzhou",
      text: "城市从不停止，只是偶尔放低声音。",
      feature: { url: "", caption: "rain / night / reflection" },
      images: [
        { url: "", caption: "rain" },
        { url: "", caption: "window" },
        { url: "", caption: "streetlight" }
      ],
      colors: ["#061c67", "#697b8f", "#c1b6a3"]
    },
    {
      number: "Ⅳ",
      title: "山河远行",
      english: "Distant Landscapes",
      anchor: "distant-landscapes",
      places: "American West / Arizona / mountains",
      text: "远方不是目的地，是人和世界之间忽然拉开的距离。",
      feature: { url: "", caption: "desert / road / horizon" },
      images: [
        { url: "", caption: "desert" },
        { url: "", caption: "highway" },
        { url: "", caption: "sky" }
      ],
      colors: ["#865f3d", "#d4a373", "#f1d6b8"]
    },
    {
      number: "Ⅴ",
      title: "无人在场",
      english: "No One Was There",
      anchor: "absence",
      places: "empty streets / rooms / wilderness",
      text: "没有人在画面里，但人的痕迹仍然存在。",
      feature: { url: "", caption: "absence / trace / silence" },
      images: [
        { url: "", caption: "empty room" },
        { url: "", caption: "road" },
        { url: "", caption: "after people" }
      ],
      colors: ["#11110f", "#6f6a60", "#d4cec0"]
    }
  ]
};

function romanToIndex(roman) {
  return ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ"].indexOf(roman) + 1;
}

function photoMarkup(photo, className, colors = [], index = 0) {
  const safeCaption = photo.caption || "photograph";
  if (photo.url && photo.url.trim()) {
    return `<figure class="${className}" data-caption="${safeCaption}"><img src="${photo.url}" alt="${safeCaption}" loading="lazy"></figure>`;
  }
  const color = colors[index % colors.length] || "#c8ba9b";
  if (className.includes("feature-photo")) {
    return `<figure class="${className} empty" data-caption="${safeCaption}" style="--photo-a:${colors[0] || '#061c67'};--photo-b:${colors[1] || '#e9b89d'};"></figure>`;
  }
  return `<figure class="${className} empty" style="--tile-color:${color};"><span>${safeCaption}</span></figure>`;
}

function initHero() {
  const hero = document.getElementById("hero-photo");
  if (siteData.heroImage && siteData.heroImage.trim()) {
    hero.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,.08), rgba(0,0,0,.18)), url('${siteData.heroImage}')`;
    hero.classList.add("has-image");
  }
}

function renderChapterIndex() {
  const list = document.getElementById("chapter-list");
  list.innerHTML = siteData.chapters.map(chapter => `
    <a class="chapter-link" href="#${chapter.anchor}">
      <span class="num">${chapter.number}</span>
      <span class="title">${chapter.title}</span>
      <span class="en">${chapter.english}</span>
      <span class="arrow-right">→</span>
    </a>
  `).join("");
}

function renderChapters() {
  const target = document.getElementById("chapter-sections");
  target.innerHTML = siteData.chapters.map((chapter, i) => `
    <section class="chapter-section page-section" id="${chapter.anchor}">
      <div class="chapter-copy reveal">
        <div>
          <span class="chapter-number">CHAPTER ${chapter.number}</span>
          <h2 class="chapter-title">${chapter.title}</h2>
          <p class="chapter-en">${chapter.english}</p>
          <p class="chapter-text">${chapter.text}</p>
        </div>
        <div class="chapter-meta">
          <span>${chapter.places}</span>
          <span>BryceVision / 此刻在场 / ${String(i + 1).padStart(2, "0")}</span>
        </div>
      </div>
      <div class="chapter-visual reveal">
        ${photoMarkup(chapter.feature, "feature-photo", chapter.colors)}
        <div class="photo-row">
          ${chapter.images.map((img, idx) => photoMarkup(img, "photo-tile", chapter.colors, idx)).join("")}
        </div>
      </div>
    </section>
  `).join("");
}

function renderArchive() {
  const sheet = document.getElementById("contact-sheet");
  const allPhotos = siteData.chapters.flatMap(ch => [ch.feature, ...ch.images]);
  sheet.innerHTML = allPhotos.map((photo, i) => {
    if (photo.url && photo.url.trim()) {
      return `<figure class="contact-frame" data-id="BV-${String(i + 1).padStart(3, "0")}"><img src="${photo.url}" alt="${photo.caption || 'archive photo'}" loading="lazy"></figure>`;
    }
    return `<figure class="contact-frame empty" data-id="BV-${String(i + 1).padStart(3, "0")}"></figure>`;
  }).join("");
}

function revealOnScroll() {
  const items = document.querySelectorAll(".reveal, .section-heading, .board-card, .chapter-link");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(item => {
    item.classList.add("reveal");
    observer.observe(item);
  });
}

function backTop() {
  const btn = document.getElementById("backTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 900);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

initHero();
renderChapterIndex();
renderChapters();
renderArchive();
revealOnScroll();
backTop();
