var listeDefilement = document.getElementById("liste-defilement-auto");
var itemsDefilant = listeDefilement.getElementsByClassName("item-defilant");
var items = listeDefilement.getElementsByClassName("item");
var j = 0

setInterval(function(){

var item = items[j];
var hauteurItem = parseInt(window.getComputedStyle(item).marginBottom, 10) + item.offsetHeight + parseInt(window.getComputedStyle(item).marginTop, 10) || parseInt(item.currentStyle.marginBottom, 10) + item.offsetHeight + parseInt(item.currentStyle.marginTop, 10)

  for (var i = 0; i < items.length; i++){
    items[i].classList.remove("active")
  }

  if (j < items.length-1){
    items[j+1].classList.add("active")
  } else {
    items[0].classList.add("active")
  }


  // parcourt les lignes
  if (j < items.length-1){
    for (var i = 0; i < itemsDefilant.length ; i++) {
      itemsDefilant[i].style.top = parseInt(itemsDefilant[i].style.top, 10) + hauteurItem + "px";
    }
    j += 1;
  } else {
    for (var i = 0; i < itemsDefilant.length ; i++) {
      itemsDefilant[i].style.top = parseInt(itemsDefilant[i].style.top, 10) - ( (items.length-1) * hauteurItem ) + "px";
    }
    j = 0
  }

}, listeDefilement.dataset.interval);

