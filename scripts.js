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

const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  const sc = window.scrollY;
  if (sc > 250) {
    nav.style.top = "-300px";
    nav.style.transition = "all .8s ease";
  } else {
    nav.style.top = "0px";
    nav.style.transition = "all .8s ease";
  }
})


function increase() {
  let count = document.getElementById("count");
  count.value = parseInt(count.value) + 1;
}
function decrease() {
  let count = document.getElementById("count");
  if (count.value > 0) {

    count.value = parseInt(count.value) - 1;
  } else {
    count.value = 0;
  }
}