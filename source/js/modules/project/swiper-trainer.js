const initSwiperTrainer = (swiper) => {
  if (swiper) {
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
          initialSlide: 2,
        },

        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 2,
        },

        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
          initialSlide: 2,
        },

        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 40,
          initialSlide: 0,
        },
      },
    });
  }
};

export {initSwiperTrainer};
