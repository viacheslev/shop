const swiper = new Swiper('.accessories__slider', {

  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  // Navigation arrows
  navigation: {
    nextEl: '.accessories__arrow-next',
    prevEl: '.accessories__arrow-prev',
  },

});

const swiperReview = new Swiper('.reviews__slider', {

  loop: true,
  slidesPerView: 9,
  spaceBetween: 16,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__arrow-next',
    prevEl: '.reviews__arrow-prev',
  },

  pagination: {
    el: '.reviews__pagination',
    type: 'fraction',
  },

});