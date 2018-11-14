$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var un = $("#contact").offset().top - 195;

    // navbar-wagon-right becoming transparent
    $(".navbar-wagon-right").css("opacity", ( 1 - ( scroll / 100 )));

    //logo dynamic change
    var x = scroll - un;
    if(x < 0){
      x = 0;
      $(".logo-gris").css("transform", "translateY(" + x + "%)");
      $(".dynamic-logo-item-gris").css("transform", "translateY(-" + x + "%)");
      $(".logo-blanc").css("transform", "translateY(-" + ( 100 - x ) + "%)");
      $(".dynamic-logo-item-blanc").css("transform", "translateY(" + (100 - x ) + "%)");
    } else if ( x > 100 ){
      x = 100;
      $(".logo-gris").css("transform", "translateY(" + x + "%)");
      $(".dynamic-logo-item-gris").css("transform", "translateY(-" + x + "%)");
      $(".logo-blanc").css("transform", "translateY(-" + ( 100 - x ) + "%)");
      $(".dynamic-logo-item-blanc").css("transform", "translateY(" + (100 - x ) + "%)");
    } else {
      $(".logo-gris").css("transform", "translateY(" + x + "%)");
      $(".dynamic-logo-item-gris").css("transform", "translateY(-" + x + "%)");
      $(".logo-blanc").css("transform", "translateY(-" + ( 100 - x ) + "%)");
      $(".dynamic-logo-item-blanc").css("transform", "translateY(" + (100 - x ) + "%)");
    }

    //navbar background to transparent
    if(scroll >= un){
      $("#navbar-white-bg-bottom").removeClass("hidden");
      $(".navbar-white-bg").css("background-color", "transparent");
      // $(".navbar-wagon-brand").children().attr("src", "assets/Logo-blanc-detoure.png")
    } else {
      $("#navbar-white-bg-bottom").addClass("hidden");
      $(".navbar-white-bg").css("background-color", "white");
      // $(".navbar-wagon-brand").children().attr("src", "assets/Logo-gris-detoure.png")
    }
  })
});


// $(document).ready(function() {
//   $("#myRange").on("input change", function(){
//     var x = document.getElementById("myRange").value;
//     $(".logo-gris").css("transform", "translateY(" + x + "%)");
//     $(".dynamic-logo-item-gris").css("transform", "translateY(-" + x + "%)");
//     $(".logo-blanc").css("transform", "translateY(-" + ( 100 - x ) + "%)");
//     $(".dynamic-logo-item-blanc").css("transform", "translateY(" + (100 - x ) + "%)");
//   })
// });
