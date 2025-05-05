import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const trainingSwiper = new Swiper('.training__slider', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 20,
  initialSlide: 2,
  navigation: {
    nextEl: '.training__slider-button--next',
    prevEl: '.training__slider-button--prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      initialSlide: 0,
    },
    1440: {
      slidesPerView: 4,
      initialSlide: 0,
    },
  },
});

trainingSwiper.slideReset();
