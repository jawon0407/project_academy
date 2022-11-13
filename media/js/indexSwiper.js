const mySwiper = new Swiper(".trailerMusic", {
  // Optional parameters
  loop: true,
  initialSlide: 0,
  slidesPerView: "1",
  spaceBetween: 20,
  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
