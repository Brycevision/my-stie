const data = window.BRYCEVISION_DATA;
const byId = (id) => document.getElementById(id);
const hero = byId('hero-cover');
const firstChapter = data.chapters[0];
hero.src = firstChapter.featureImage.src;
function chapterCard(ch){return `<a class="chapter-card reveal" href="#${ch.id}"><div><div class="chapter-card__num">${ch.num}</div><h3>${ch.title}</h3><p>${ch.en}<br>${ch.tag}</p></div><div class="chapter-card__thumb"><img loading="lazy" src="${ch.featureImage.src}" alt="${ch.title}"></div></a>`;}
function photoClass(img,index){const ratio=img.w/img.h;if(index===0)return 'photo--large';if(ratio>1.35)return index%4===0?'photo--full':'photo--wide';if(ratio<.8)return 'photo--portrait';return index%5===0?'photo--small':'photo--wide';}
function chapterSection(ch){const imgs=ch.images.map((img,i)=>{const cls=photoClass(img,i);return `<figure class="photo ${cls} reveal" data-src="${img.src}" data-caption="${ch.title} / page ${String(img.page).padStart(2,'0')}"><img loading="lazy" src="${img.src}" alt="${ch.title} archive page ${img.page}"><figcaption><span>${ch.title}</span><span>p.${String(img.page).padStart(2,'0')}</span></figcaption></figure>`}).join('');return `<section class="chapter" id="${ch.id}"><aside class="chapter__meta reveal"><div class="num">${ch.num}</div><h2>${ch.title}</h2><div class="en">${ch.en}</div><p class="chapter__quote">${ch.quote}</p><p class="chapter__body">${ch.body}</p><p class="chapter__en">${ch.enBody}</p></aside><div class="gallery">${imgs}</div></section>`;}
byId('chapter-index').innerHTML=data.chapters.map(chapterCard).join('');
byId('chapter-sections').innerHTML=data.chapters.map(chapterSection).join('');
const io=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target);}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const lightbox=byId('lightbox'), lightboxImg=byId('lightbox-img'), lightboxCaption=byId('lightbox-caption');
document.addEventListener('click',(e)=>{const fig=e.target.closest('.photo');if(!fig)return;lightboxImg.src=fig.dataset.src;lightboxCaption.textContent=fig.dataset.caption;lightbox.classList.add('is-open');lightbox.setAttribute('aria-hidden','false')});
function closeLightbox(){lightbox.classList.remove('is-open');lightbox.setAttribute('aria-hidden','true');lightboxImg.src='';}
document.querySelector('.lightbox__close').addEventListener('click',closeLightbox);lightbox.addEventListener('click',(e)=>{if(e.target===lightbox)closeLightbox();});document.addEventListener('keydown',(e)=>{if(e.key==='Escape')closeLightbox();});
