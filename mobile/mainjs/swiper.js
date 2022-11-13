const mySwiper = new Swiper(".promotion", {
  // Optional parameters
  loop: true,
  initialSlide: 0,
  slidesPerView: "auto",
  centeredSlides: true,
  slideToClickedSlide: true,
  spaceBetween: 50,
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

const mySwiper2 = new Swiper(".business", {
  // Optional parameters
  loop: true,
  initialSlide: 0,
  slidesPerView: "auto",
  centeredSlides: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
