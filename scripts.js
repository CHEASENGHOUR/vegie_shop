AOS.init();
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  freemode: {
    enabled: true,
    sticky: true,
  },
  autoplay: {
    delay: 1000,
  },
  spaceBetween: 20,
  slidesPerView: 2,
  breakpoints: {
    1400: {
      spaceBetween: 20,
      slidesPerView: 8,
    },
    1200: {
      spaceBetween: 20,
      slidesPerView: 6
    },
    992: {
      spaceBetween: 20,
      slidesPerView: 5,
    },
    768: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: '#btn-next',
    prevEl: '#btn-prev',
  },
});