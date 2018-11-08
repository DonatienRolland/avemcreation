// CODE FONCTIONNEL
// $(document).ready(function(){
//   var scrollIni = 0;
//   $(window).scroll(function(){
//     var scrollAim = $(this).scrollTop();
//     var ecran = $(".ecran");
//     if(scrollAim < scrollIni){
//       // A REMPLACER
//     } else {
//       // A REMPLACER
//     }
//     scrollIni = scrollAim;
//   })
// })





$("#haut").click(function(){
  var position = $(window).scrollTop();
  var ecran = $("#home");
  ecran.each(function(){
    var ecranPosition = ecran.offset().top;
    if(position > ecranPosition){
      var hash = this.hash;
      $("html, body").animate({
        scrollTop: ecran.offset().top
      }, 250, function(){
        window.location.hash = hash;
      });
    }
  })
})
$("#bas").click(function(){
  var position = $(window).scrollTop();
  var ecran = $("#about");
  ecran.each(function(){
    var ecranPosition = ecran.offset().top;
    if(position < ecranPosition){
      var hash = this.hash;
      $("html, body").animate({
        scrollTop: ecran.offset().top
      }, 250, function(){
        window.location.hash = hash;
      });
    }
  })
})


// $(document).scrollTop(ecran.next.offset().top);
