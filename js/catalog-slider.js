document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".catalog-detail__slider", {
    // Optional parameters

    loop: true,

    spaceBetween: 20, // расстояние между слайдами в px

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".catalog-detail__slider-arrow--next",
      prevEl: ".catalog-detail__slider-arrow--prev",
    },
  });
});
