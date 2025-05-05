import Swiper from 'swiper';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

const heroSlider = document.querySelector('.hero__slider');

const heroSwiper = new Swiper('.hero__slider', {
  modules: [Pagination],
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.hero__pagination',
    bulletClass: 'hero__pagination-bullet',
    bulletElement: 'button',
    clickable: true,
    bulletActiveClass: 'hero__pagination-bullet--active',
  },
});

const updateTabIndex = () => {
  heroSlider.querySelectorAll('.hero__slide-link').forEach((link) => {
    link.setAttribute('tabindex', '-1');
  });

  const activeSlide = heroSlider.querySelector('.swiper-slide-active');
  const slideLink = activeSlide.querySelector('.hero__slide-link');
  if (slideLink) {
    slideLink.setAttribute('tabindex', '0');
  }
};

updateTabIndex();

heroSwiper.on('slideChangeTransitionEnd', updateTabIndex);
