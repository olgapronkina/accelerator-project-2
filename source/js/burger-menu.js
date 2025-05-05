const menu = document.querySelector('.nav');
const burgerButton = document.querySelector('.burger-button');
const body = document.querySelector('.page-body');

function scrollHandler() {
  if (menu.classList.contains('nav--active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
}

burgerButton.addEventListener('click', () => {
  menu.classList.toggle('nav--active');
  burgerButton.classList.toggle('burger-button--active');
  body.classList.toggle('page-body--overlay');
  scrollHandler();
});

menu.addEventListener('click', (evt) => {
  if (evt.target.closest('.nav__link')) {
    menu.classList.remove('nav--active');
    burgerButton.classList.remove('burger-button--active');
    body.classList.remove('page-body--overlay');
    scrollHandler();
  }
});
