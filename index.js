const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1.1,
  loop: true,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    375: {
      slidesPerView: 1.5,
    },

    500: {
      slidesPerView: 1.9,
    },

    600: {
      slidesPerView: 2.3
    }
  }
});

$("#button").on("click", function() {
  const $rect = $("#rect"), $butimg = $("#butimg"), $visible = $("#visible");
  const $hide = $("#hide");
  $rect.hasClass("selected") ? $rect.removeClass("selected") : $rect.addClass("selected");
  $butimg.hasClass("selected-button") ? $butimg.removeClass("selected-button") : $butimg.addClass("selected-button");
  $visible.hasClass("selected-visible") ? $visible.removeClass("selected-visible") : $visible.addClass("selected-visible");
  $hide.hasClass("selected-hide") ? $hide.removeClass("selected-hide") : $hide.addClass("selected-hide");
});