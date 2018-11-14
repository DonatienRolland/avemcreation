// CODE FONCTIONNEL
$(document).ready(function(){
  var scrollIni = 0;
  console.log(screen.availHeight);
  $(window).scroll(function(){
    var scrollAim = $(this).scrollTop();
    if( Math.abs(scrollAim - scrollIni) > 100){
      var position = $(window).scrollTop();
      var ecrans = $(".ecran");
      var ecranActif = Math.trunc( $(window).scrollTop() / screen.availHeight );
      console.log(ecranActif);
      if(scrollAim > scrollIni){
        if(ecranActif != ecrans.length){
          // alert("scroll bas; scrollIni =" + scrollIni)
          var ecranID = ecrans[ecranActif + 1].id
          var ecran = $("#"+ecranID)
          // console.log(ecran);
          // console.log(ecran.offset().top);
          $("html, body").animate({
            scrollTop: ecran.offset().top
          }, 250);
        }
      } else if(scrollAim < scrollIni){
        if(ecranActif != 0){
          // alert("scroll haut; scrollIni =" + scrollIni)
          var ecranID = ecrans[ecranActif - 1].id
          // console.log(ecranID)
          var ecran = $("#"+ecranID)
          $("html, body").animate({
            scrollTop: ecran.offset().top
          }, 250);
        }
      }
      scrollIni = $(window).scrollTop();
    }
  })
})





    // $("#haut").click(function(){
    //   var position = $(window).scrollTop();
    //   var ecran = $("#home");
    //   ecran.each(function(){
    //     var ecranPosition = ecran.offset().top;
    //     if(position > ecranPosition){
    //       var hash = this.hash;
    //       $("html, body").animate({
    //         scrollTop: ecran.offset().top
    //       }, 250, function(){
    //         window.location.hash = hash;
    //       });
    //     }
    //   })
    // })
    // $("#bas").click(function(){
    //   var position = $(window).scrollTop();
    //   var ecran = $("#service");
    //   console.log(ecran);
    //   ecran.each(function(){
    //     var ecranPosition = ecran.offset().top;
    //     if(position < ecranPosition){
    //       var hash = this.hash;
    //       $("html, body").animate({
    //         scrollTop: ecran.offset().top
    //       }, 250, function(){
    //         window.location.hash = hash;
    //       });
    //     }
    //   })
    // })


// $(document).scrollTop(ecran.next.offset().top);
