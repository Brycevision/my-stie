const siteData = {
  // Replace this with your Cloudflare R2 / image CDN URL.
  heroImage: "",
  chapters: [
    {
      no: "Ⅰ",
      title: "旧处微光",
      en: "Light in Old Places",
      places: "Nanjing · Hangzhou · Shanghai",
      cn: "有些地方并不真正沉默。墙面、香火、屋檐、石阶，都在替时间说话。",
      enText: "Some places do not remain silent. Walls, incense, roofs and stone steps carry the quiet weight of time.",
      feature: { url: "", caption: "Temple / Old street / Trace of time" },
      thumbs: ["", "", ""]
    },
    {
      no: "Ⅱ",
      title: "人间片刻",
      en: "Human Moments",
      places: "Street · Market · Temple",
      cn: "人只是经过，但片刻会留下来。一个背影、一盏灯、一段停顿，都让地方重新有了温度。",
      enText: "People pass by, but certain moments remain. A back, a light, a pause — enough to warm a place.",
      feature: { url: "", caption: "Human trace / Ordinary gestures" },
      thumbs: ["", "", ""]
    },
    {
      no: "Ⅲ",
      title: "城市低语",
      en: "The City Speaks Softly",
      places: "Shanghai · Hong Kong · Nanjing",
      cn: "城市从不停止，只是偶尔放低声音。雨、玻璃、街角和人群之间，有短暂的安静。",
      enText: "The city never stops. Sometimes, it simply lowers its voice between rain, glass, corners and crowds.",
      feature: { url: "", caption: "Urban breath / Rain / Night" },
      thumbs: ["", "", ""]
    },
    {
      no: "Ⅳ",
      title: "山河远行",
      en: "Distant Landscapes",
      places: "American West · Arizona · Road",
      cn: "远方不是目的地，是人和世界之间忽然拉开的距离。天空、公路和荒野，让观看变得缓慢。",
      enText: "Distance is not a destination. It is the space that opens between the self and the world.",
      feature: { url: "", caption: "Desert / Highway / Horizon" },
      thumbs: ["", "", ""]
    },
    {
      no: "Ⅴ",
      title: "无人在场",
      en: "No One Was There",
      places: "Empty street · Room · Afterimage",
      cn: "没有人在画面里，但人的痕迹仍然存在。空处不是缺失，而是一种更安静的在场。",
      enText: "No one appears in the frame, yet traces of people remain. Absence becomes another form of presence.",
      feature: { url: "", caption: "Absence / Silence / Afterimage" },
      thumbs: ["", "", ""]
    }
  ]
};

function imageOrFallback(url, alt, className = "") {
  if (url && url.trim()) {
    return `<img class="${className}" src="${url}" alt="${alt}" loading="lazy">`;
  }
  return `<div class="image-fallback ${className}"><span>IMAGE URL<br>script.js</span></div>`;
}

function renderHero() {
  const wrap = document.getElementById("heroImageWrap");
  const fallback = wrap.querySelector(".hero-fallback");
  if (siteData.heroImage && siteData.heroImage.trim()) {
    fallback.outerHTML = `<img src="${siteData.heroImage}" alt="BryceVision cover image" loading="eager">`;
  }
}

function renderIndex() {
  const mount = document.getElementById("chapterIndex");
  mount.innerHTML = siteData.chapters.map((c, i) => `
    <a class="index-row reveal" href="#chapter-${i + 1}">
      <span class="index-no">${c.no}</span>
      <span class="index-title">${c.title}</span>
      <span class="index-en">${c.en}</span>
      <span class="index-place">${c.places}</span>
    </a>
  `).join("");
}

function renderChapters() {
  const mount = document.getElementById("chapterMount");
  mount.innerHTML = siteData.chapters.map((c, i) => `
    <article class="chapter reveal" id="chapter-${i + 1}">
      <aside class="chapter-side">
        <div>
          <p class="chapter-no">CHAPTER ${c.no}</p>
          <p>${c.places}</p>
        </div>
        <div class="chapter-title">
          <h2>${c.title}</h2>
          <p>${c.en}</p>
        </div>
      </aside>

      <figure class="chapter-image">
        ${imageOrFallback(c.feature.url, c.title)}
        <figcaption>
          <span>${c.feature.caption}</span>
          <span>${String(i + 1).padStart(2, "0")} / 05</span>
        </figcaption>
      </figure>

      <div class="chapter-copy">
        <p class="cn">${c.cn}</p>
        <p class="en">${c.enText}</p>
        <div class="thumb-strip">
          ${c.thumbs.map((url, t) => `<div class="thumb">${imageOrFallback(url, `${c.title} thumbnail ${t + 1}`)}</div>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

function revealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.15 });
  items.forEach(item => io.observe(item));
}

renderHero();
renderIndex();
renderChapters();
revealOnScroll();
