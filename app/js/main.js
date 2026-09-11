const swiper = new Swiper('.accessories__slider', {

  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  // Navigation arrows
  navigation: {
    nextEl: '.accessories__arrow-prev',
    prevEl: '.accessories__arrow-next',
  },

});