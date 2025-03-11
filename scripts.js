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
  slidesPerView: 8,
  navigation: {
    nextEl: '#btn-next',
    prevEl: '#btn-prev',
  },
});