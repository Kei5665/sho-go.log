
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 2,
    },
    // 980px以上の場合
    980: {
      slidesPerView: 3,
    },
    // 1200px以上の場合
    1200: {
      slidesPerView: 4,
    }
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 55,
  centeredSlides: true,

});