// // CODE FONCTIONNEL
// $(document).ready(function(){
//   var scrollIni = 0;
//   var scrollTimeout = null;

//   if (scrollTimeout) clearTimeout(scrollTimeout);
//   scrollTimeout = setTimeout(function(){

//     $(window).scroll(function(){
//       var scrollAim = $(this).scrollTop();
//       if( Math.abs(scrollAim - scrollIni) > 100){
//         var ecrans = $(".ecran");
//         var ecranActif = Math.trunc( $(window).scrollTop() / screen.availHeight );
//         if(scrollAim > scrollIni){
//           if(ecranActif != ecrans.length){
//             var ecranID = ecrans[ecranActif + 1].id
//             var ecran = $("#"+ecranID)
//             $("html, body").animate({
//               scrollTop: ecran.offset().top
//             }, 250);
//           }
//         } else if(scrollAim < scrollIni){
//           var ecranID = ecrans[ecranActif].id
//           var ecran = $("#"+ecranID)
//           $("html, body").animate({
//             scrollTop: ecran.offset().top
//           }, 250);
//         }
//         scrollIni = $(window).scrollTop();
//       }
//     })

//   },500);



// })

// // $(document).scrollTop(ecran.next.offset().top);
