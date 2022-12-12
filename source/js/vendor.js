// Swiper 7.4.1
// import './vendor/swiper';
import './vendor/focus-visible-polyfill';
import './vendor/swiper';

// eslint-disable-next-line
new Swiper('#swiperTrainer', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    280: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 22,
    },

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 22,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
    },
  },
});
