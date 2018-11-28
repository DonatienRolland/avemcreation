var scrollStop = require('../components/scrollStop').scrollStop

// CODE FONCTIONNEL
$(document).ready(function(){
  var scrollIni = 0;
  let mobile = window.innerWidth < 800
  if (!mobile) {
    scrollStop(function () {
      var ecranActif = Math.trunc( ($(window).scrollTop() + (screen.availHeight / 2) ) / screen.availHeight );
      var ecrans = $(".ecran");
      var ecranID = ecrans[ecranActif].id
      var ecran = $("#"+ecranID)
      $("html, body").animate({
        scrollTop: ecran.offset().top
      }, 250);
    });
  }


})

    // $(window).scroll(function(){
    //   var scrollAim = $(this).scrollTop();
    //   var ecranActif = Math.trunc( $(window).scrollTop() / screen.availHeight );
    //   if( Math.abs(scrollAim - scrollIni) > 100){
    //     var ecrans = $(".ecran");
    //     var ecranActif = Math.trunc( $(window).scrollTop() / screen.availHeight );
    //     if(scrollAim > scrollIni){
    //       if(ecranActif != ecrans.length){
    //         var ecranID = ecrans[ecranActif + 1].id
    //         var ecran = $("#"+ecranID)
    //         $("html, body").animate({
    //           scrollTop: ecran.offset().top
    //         }, 250);
    //       }
    //     } else if(scrollAim < scrollIni){
    //       var ecranID = ecrans[ecranActif].id
    //       var ecran = $("#"+ecranID)
    //       $("html, body").animate({
    //         scrollTop: ecran.offset().top
    //       }, 250);
    //     }
    //     scrollIni = $(window).scrollTop();
    //   }
    // })


// $(document).scrollTop(ecran.next.offset().top);
