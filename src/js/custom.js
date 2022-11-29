//Scroll Navbar
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".navbar").css("background", "#fff");
      $(".navlinks").css("color", "#000");
      $(".navbar").css("box-shadow", "0px 4px 7px #77777745");
    } else {
      $(".navbar").css("background", "transparent");
      $(".navlinks").css("color", "#fff");
      $(".navbar").css("box-shadow", "0px 4px 7px #77777700");
    }
  });
});
//hambuger menu
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".navbar-linkblock").toggleClass("active");
  });
});

// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});