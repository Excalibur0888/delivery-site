
// // Инициализируем Swiper
new Swiper('.swiper', {
   // Стрелки навигации слайда
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   // Слайды, которые видны
   slidesPerView: 2,
   // Отступ между слайдами (в px)
   spaceBetween: 20,
   // Курсор перетаскивания
   grabCursor: true,
   effect: 'slide',
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1,
         spaceBetween: 0
      },

      1200: {
         slidesPerView: 2,
         spaceBetween: 20
      }
   }
});

// Бургер-меню
$(document).ready(function () {
   $('.hamburger').click(function () {
      $('.hamburger__main, .delivery-value-extra, .navbar__bottom').toggleClass('active');
   });
});