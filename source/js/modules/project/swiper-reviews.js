const initSwiperReviews = (swiper) => {
  if (swiper) {
    // eslint-disable-next-line
    new Swiper('#swiperReviews', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      initialSlide: 0,
    });
  }
};

export {initSwiperReviews};
