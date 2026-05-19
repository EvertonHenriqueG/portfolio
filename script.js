// Cursor personalizado
const cursor = document.querySelector('.cursor');
const dot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  dot.style.left = e.clientX + 'px';
  dot.style.top = e.clientY + 'px';
});

// Barra de progresso de leitura
const progress = document.querySelector('.header-progress');
window.addEventListener('scroll', () => {
  const total = document.body.scrollHeight - window.innerHeight;
  const pct = (window.scrollY / total) * 100;
  progress.style.width = pct + '%';
});

// Fade in ao scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));