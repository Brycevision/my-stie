const data = window.BRYCEVISION_DATA;
const byId = (id) => document.getElementById(id);

const hero = byId('hero-cover');
const firstChapter = data.chapters[0];
hero.src = firstChapter.featureImage.src;
hero.alt = firstChapter.featureImage.caption || firstChapter.title;

function escapeAttr(value = '') {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function chapterCard(ch) {
  return `
    <a class="chapter-card reveal" href="#${ch.id}">
      <div>
        <div class="chapter-card__num">${ch.num}</div>
        <h3>${ch.title}</h3>
        <p>${ch.en}<br>${ch.tag}</p>
      </div>
      <div class="chapter-card__thumb">
        <img loading="lazy" src="${ch.featureImage.src}" alt="${escapeAttr(ch.featureImage.caption || ch.title)}">
      </div>
    </a>`;
}

function chapterSection(ch) {
  const first = ch.images[0];
  const thumbs = ch.images.map((img, i) => `
    <button class="deck-thumb${i === 0 ? ' is-active' : ''}" type="button" data-index="${i}" aria-label="Show ${escapeAttr(img.caption)}">
      <img loading="lazy" src="${img.src}" alt="${escapeAttr(img.caption)}">
    </button>`).join('');

  const slidesData = encodeURIComponent(JSON.stringify(ch.images));

  return `
    <section class="chapter" id="${ch.id}">
      <aside class="chapter__meta reveal">
        <div class="num">${ch.num}</div>
        <h2>${ch.title}</h2>
        <div class="en">${ch.en}</div>
        <p class="chapter__quote">${ch.quote}</p>
        <p class="chapter__body">${ch.body}</p>
        <p class="chapter__en">${ch.enBody}</p>
      </aside>

      <div class="photo-deck reveal" data-chapter="${ch.id}" data-slides="${slidesData}">
        <div class="deck-topline">
          <span>${ch.num} / ${ch.title}</span>
          <span class="deck-counter"><b>01</b> / ${String(ch.images.length).padStart(2, '0')}</span>
        </div>

        <div class="deck-stage" role="group" aria-label="${escapeAttr(ch.title)} image carousel">
          <button class="deck-nav deck-nav--prev" type="button" aria-label="Previous image">←</button>
          <figure class="deck-photo" data-src="${first.src}" data-caption="${escapeAttr(first.caption)}">
            <div class="deck-photo__image-wrap">
              <img class="deck-main-img" src="${first.src}" alt="${escapeAttr(first.caption)}">
            </div>
            <figcaption class="deck-caption">
              <span class="deck-caption__title">${first.caption}</span>
            </figcaption>
          </figure>
          <button class="deck-nav deck-nav--next" type="button" aria-label="Next image">→</button>
        </div>

        <div class="deck-strip" aria-label="Image thumbnails">
          ${thumbs}
        </div>
      </div>
    </section>`;
}

byId('chapter-index').innerHTML = data.chapters.map(chapterCard).join('');
byId('chapter-sections').innerHTML = data.chapters.map(chapterSection).join('');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

function setDeckImage(deck, nextIndex) {
  const slides = JSON.parse(decodeURIComponent(deck.dataset.slides));
  const total = slides.length;
  const index = ((nextIndex % total) + total) % total;
  const slide = slides[index];

  deck.dataset.current = String(index);
  const fig = deck.querySelector('.deck-photo');
  const img = deck.querySelector('.deck-main-img');
  const caption = deck.querySelector('.deck-caption__title');
  const counter = deck.querySelector('.deck-counter b');

  fig.classList.add('is-changing');
  window.setTimeout(() => {
    img.src = slide.src;
    img.alt = slide.caption || '';
    fig.dataset.src = slide.src;
    fig.dataset.caption = slide.caption || '';
    caption.textContent = slide.caption || '';
    counter.textContent = String(index + 1).padStart(2, '0');
    deck.querySelectorAll('.deck-thumb').forEach((button, i) => {
      button.classList.toggle('is-active', i === index);
    });
    fig.classList.remove('is-changing');
  }, 120);
}

document.querySelectorAll('.photo-deck').forEach((deck) => {
  deck.dataset.current = '0';
  deck.querySelector('.deck-nav--prev').addEventListener('click', () => {
    setDeckImage(deck, Number(deck.dataset.current || 0) - 1);
  });
  deck.querySelector('.deck-nav--next').addEventListener('click', () => {
    setDeckImage(deck, Number(deck.dataset.current || 0) + 1);
  });
  deck.querySelectorAll('.deck-thumb').forEach((button) => {
    button.addEventListener('click', () => {
      setDeckImage(deck, Number(button.dataset.index));
    });
  });
});

const lightbox = byId('lightbox');
const lightboxImg = byId('lightbox-img');
const lightboxCaption = byId('lightbox-caption');

document.addEventListener('click', (e) => {
  const fig = e.target.closest('.deck-photo');
  if (!fig) return;
  if (e.target.closest('button')) return;
  lightboxImg.src = fig.dataset.src;
  lightboxCaption.textContent = fig.dataset.caption || '';
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
});

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
}

document.querySelector('.lightbox__close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
  if (!document.activeElement.closest?.('.photo-deck')) return;
  const deck = document.activeElement.closest('.photo-deck');
  if (e.key === 'ArrowLeft') setDeckImage(deck, Number(deck.dataset.current || 0) - 1);
  if (e.key === 'ArrowRight') setDeckImage(deck, Number(deck.dataset.current || 0) + 1);
});
