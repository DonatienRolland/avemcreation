// $(document).ready(function(){
//   var calculEltHauteur = require('../components/calculEltHauteur').calculEltHauteur

//   const listeDefilement = document.getElementById("liste-defilement-auto");
//   const itemsDefilant = listeDefilement.getElementsByClassName("item-defilant");
//   const items = listeDefilement.getElementsByClassName("item");
//   var j = 0

//   setInterval(function(){

//   const hauteurAllItem = calculAllEltHauteur(items, calculEltHauteur)
//   var item = items[j];
//   var hauteurItem = calculEltHauteur(item)



//     for (var i = 0; i < items.length; i++){
//       items[i].classList.remove("active")
//     }

//     if (j < items.length-1){
//       items[j+1].classList.add("active")
//     } else {
//       items[0].classList.add("active")
//     }


//     // parcourt les lignes
//     if (j < items.length-1){
//       for (var i = 0; i < itemsDefilant.length ; i++) {
//         itemsDefilant[i].style.top = parseInt(itemsDefilant[i].style.top, 10) + hauteurItem + "px";
//       }
//       j += 1;
//     } else {
//       for (var i = 0; i < itemsDefilant.length ; i++) {
//         itemsDefilant[i].style.top = parseInt(itemsDefilant[i].style.top, 10) - hauteurAllItem  + "px";
//       }
//       j = 0
//     }

//   }, listeDefilement.dataset.interval);

// })


// function calculAllEltHauteur(items, calculEltHauteur){
//   var hauteurAllItem = 0
//   for (var i=0 ; i < items.length-1; i++){
//     hauteurAllItem = hauteurAllItem + calculEltHauteur(items[i]);
//   }
//   return hauteurAllItem;
// }
