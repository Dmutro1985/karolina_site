// Мобільне меню
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.classList.toggle('active');
  });
}

// Закриваємо меню при кліку на посилання
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.classList.remove('active');
  });
});

const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Перевіряємо збережену тему
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  html.setAttribute('data-theme', savedTheme);
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';

  if (next === 'dark') {
    html.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
  } else {
    html.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
  }

  localStorage.setItem('theme', next === 'dark' ? 'dark' : 'light');
});

// Плавна поява блоків при скролі
const revealEls = document.querySelectorAll(
  '.section, .quote-section, .hero-main'
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// Поява карток по черзі (stagger)
document.querySelectorAll('.cards-grid, .mini-cards').forEach((grid) => {
  const items = grid.querySelectorAll('.card, .mini-card');
  items.forEach((item, i) => {
    item.style.transitionDelay = `${i * 90}ms`;
  });
});

// Тінь у шапки при скролі
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});