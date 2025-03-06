let sc = window.scrollY;
const nav = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.top = "-100px";
  } else {
    nav.style.top = "0";
  }
  sc = window.scrollY;
})