import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const toursSwiper = new Swiper('.tours__slider', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 18,
  navigation: {
    nextEl: '.tours__slider-button--next',
    prevEl: '.tours__slider-button--prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

toursSwiper.slideReset();
