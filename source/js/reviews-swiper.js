import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const reviewsSwiper = new Swiper('.reviews__slider', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.reviews__slider-button--next',
    prevEl: '.reviews__slider-button--prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 120,
    },
  },
});

reviewsSwiper.slideReset();
