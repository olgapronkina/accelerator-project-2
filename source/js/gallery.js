import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const gallerySwiper = new Swiper('.gallery__slider', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 5,
  loop: true,
  navigation: {
    nextEl: '.gallery__slider-button--next',
    prevEl: '.gallery__slider-button--prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 5,
      loop: false,
    },
  },
});

if (window.innerWidth >= 1440) {
  gallerySwiper.destroy(true, false);
}
