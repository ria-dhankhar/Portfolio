/**
 * Ria Dhankhar Portfolio — main.js
 * ==================================
 * NOTE: The site currently uses an inline <script> in index.html.
 * This file is a reference/extracted copy for maintainability.
 * To use this externally, remove the <script> block from index.html
 * and add: <script src="assets/js/main.js" defer></script>
 */

/* ─── SCROLL PROGRESS + NAV HIGHLIGHT ─────────────────────── */
const scrollBar = document.getElementById('scrollBar');
const navbar    = document.getElementById('navbar');
const backTop   = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  scrollBar.style.width = pct + '%';

  navbar.classList.toggle('scrolled', window.scrollY > 50);
  backTop.classList.toggle('show', window.scrollY > 400);

  const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
  let current = 'hero';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 200) current = id;
  });

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });

/* ─── MOBILE MENU ──────────────────────────────────────────── */
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ─── TYPING ANIMATION ─────────────────────────────────────── */
const phrases = ['ECE Student', 'Embedded Engineer', 'ML Enthusiast', 'VLSI Explorer', 'DRDO R&D Intern'];
let phraseIndex = 0;
let charIndex   = 0;
let deleting    = false;
const typingEl  = document.getElementById('typingText');

function type() {
  if (!deleting) {
    typingEl.textContent = phrases[phraseIndex].slice(0, ++charIndex);
    if (charIndex === phrases[phraseIndex].length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typingEl.textContent = phrases[phraseIndex].slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 55 : 95);
}

type();

/* ─── SCROLL REVEAL ────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in');
  });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

/* ─── CONTACT FORM ─────────────────────────────────────────── */
function handleSubmit() {
  const name  = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const msg   = document.getElementById('fmessage').value.trim();

  if (!name || !email || !msg) {
    alert('Please fill in the required fields.');
    return;
  }

  document.getElementById('formContent').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
}

/* ─── BACK TO TOP ──────────────────────────────────────────── */
document.getElementById('backTop')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
