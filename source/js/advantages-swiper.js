import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const advantagesSlider = document.querySelector('.advantages__slider');
const advantagesSliderWrapper = advantagesSlider.querySelector(
  '.advantages__slider-wrapper'
);
const slides = advantagesSliderWrapper.querySelectorAll('.advantages__item');
let isAdvantagesSwiper = false;
let isSlidesDuplicated = false;

function duplicateSlides() {
  if (isSlidesDuplicated) {
    return;
  }

  slides.forEach((slide) => {
    const clonedSlide = slide.cloneNode(true);
    clonedSlide.classList.add('cloned');
    advantagesSliderWrapper.appendChild(clonedSlide);
  });

  isSlidesDuplicated = true;
}

function removeSlides() {
  const clonedSlides = advantagesSliderWrapper.querySelectorAll('.cloned');

  clonedSlides.forEach((slide) => {
    slide.remove();
  });

  isSlidesDuplicated = false;
}

function isAdvantagesSwiperTogle() {
  if (window.innerWidth >= 1440) {
    duplicateSlides();

    if (!isAdvantagesSwiper) {
      advantagesSlider.classList.add('swiper');
      advantagesSlider.querySelector('ul').classList.add('swiper-wrapper');
      advantagesSlider.querySelectorAll('li').forEach((slide) => {
        slide.classList.add('swiper-slide');
      });

      isAdvantagesSwiper = new Swiper('.advantages__slider', {
        modules: [Navigation],
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        initialSlide: 2,
        slidesPerGroup: 2,
        loopAddBlankSlides: false,
        centeredSlides: true,
        navigation: {
          nextEl: '.advantages__slider-button--next',
          prevEl: '.advantages__slider-button--prev',
        },
        breakpoints: {
          1900: {
            slidesOffsetBefore: -410,
            slidesOffsetAfter: -410,
          },
        },
      });
    }
  } else {
    if (isAdvantagesSwiper) {
      isAdvantagesSwiper.destroy(true, true);
      isAdvantagesSwiper = false;

      advantagesSlider.classList.remove('swiper');
      advantagesSlider.querySelector('ul').classList.remove('swiper-wrapper');
      advantagesSlider.querySelectorAll('li').forEach((slide) => {
        slide.classList.remove('swiper-slide');
      });

      removeSlides();
    }
  }
}

isAdvantagesSwiperTogle();

window.addEventListener('resize', isAdvantagesSwiperTogle);
