const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.menu a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const slides = [...document.querySelectorAll('.hero-slide')];
const dots = [...document.querySelectorAll('.hero-dots button')];
let activeSlide = 0;

function showSlide(index) {
  activeSlide = index;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

dots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));
setInterval(() => showSlide((activeSlide + 1) % slides.length), 6000);
