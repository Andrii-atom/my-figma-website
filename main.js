/* Meridian Showroom — Main JS */

// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// Mobile burger
const burger = document.querySelector('.navbar__burger');
const navCenter = document.querySelector('.navbar__center');
const navRight = document.querySelector('.navbar__right');
if (burger) {
  burger.addEventListener('click', () => {
    const isOpen = burger.classList.toggle('open');
    [navCenter, navRight].forEach(el => {
      if (!el) return;
      el.style.cssText = isOpen
        ? 'display:flex;flex-direction:column;position:absolute;top:var(--navbar-h);left:0;right:0;background:var(--bg);padding:20px 32px;gap:20px;border-bottom:1px solid var(--bg-mid);z-index:99;'
        : '';
    });
  });
}

// Scroll reveal
const reveals = document.querySelectorAll('.hero-top,.about-intro,.projects-grid,.about-text-block,.about-images,.portfolio-section .about-text-block,.portfolio-grid,.portfolio-panorama,.tech-specs__row,.contact__left,.contact__form,.footer__bar');
reveals.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
reveals.forEach(el => io.observe(el));

// Smooth anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});
