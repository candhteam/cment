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
