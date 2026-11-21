// ===== Nav scroll state =====
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ===== Mobile menu =====
const menu = document.getElementById('mobileMenu');
const burger = document.getElementById('burger');
const mmClose = document.getElementById('mmClose');

const openMenu = () => { menu.classList.add('open'); document.body.style.overflow = 'hidden'; };
const closeMenu = () => { menu.classList.remove('open'); document.body.style.overflow = ''; };

burger.addEventListener('click', openMenu);
mmClose.addEventListener('click', closeMenu);
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
// close on Esc
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

// ===== Reveal on scroll =====
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 4 * 80) + 'ms';
  io.observe(el);
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
