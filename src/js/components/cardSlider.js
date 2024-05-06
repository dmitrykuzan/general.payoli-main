export const cardSlider = () => {
  let cardSlider = new Swiper(".online__cards", {
    slidesPerView: 1.3,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      reverseDirection: true,
    },

    breakpoints: {
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3.5,
      },
      1360: {
        spaceBetween: 50,
        slidesPerView: 3.5,
        initialSlide: 3,
      },
    },
  });
};
