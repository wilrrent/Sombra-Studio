const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.gallery-card');
const empty = document.querySelector('#sin-resultados');

function filterPortfolio(category) {
  let visible = 0;
  cards.forEach(card => {
    const show = category === 'todos' || card.dataset.category === category;
    card.hidden = !show;
    if (show) visible++;
  });
  empty.hidden = visible !== 0;
  filters.forEach(button => {
    const active = button.dataset.filter === category;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}
filters.forEach(button => button.addEventListener('click', () => filterPortfolio(button.dataset.filter)));
document.querySelectorAll('[data-go-filter]').forEach(link => link.addEventListener('click', () => filterPortfolio(link.dataset.goFilter)));
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navbar');
menuToggle.addEventListener('click', () => {
  const opened = menu.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(opened));
  menuToggle.setAttribute('aria-label', opened ? 'Cerrar menú' : 'Abrir menú');
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
