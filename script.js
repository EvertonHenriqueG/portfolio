// Fade in ao scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Highlight nav ativo conforme scroll
const secoes = document.querySelectorAll('.secao[id]');
const navItems = document.querySelectorAll('.nav-item');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navItems.forEach(a => {
        a.classList.toggle('ativo', a.getAttribute('href') === '#' + id);
      });
    }
  });
}, { threshold: 0.4 });

secoes.forEach(s => navObserver.observe(s));