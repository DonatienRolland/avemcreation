$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var un = $("#contact").offset().top - 195;
    if(scroll >= un){
      $("#carousel_portofolio").css("visibility", "hidden");
      $(".navbar-white-bg").css("background-color", "transparent");
      $(".navbar-wagon-brand").children().attr("src", "assets/Logo-blanc-detoure.png")
    } else {
      $(".navbar-white-bg").css("background-color", "white");
      $("#carousel_portofolio").css("visibility", "visible");
      $(".navbar-wagon-brand").children().attr("src", "assets/logo.png")
    }


  })
});
