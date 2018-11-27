function calculEltHauteur(element) {
  if(element){

    var eltHauteur = parseInt(window.getComputedStyle(element).marginBottom, 10) + element.offsetHeight + parseInt(window.getComputedStyle(element).marginTop, 10) || parseInt(element.currentStyle.marginBottom, 10) + element.offsetHeight + parseInt(element.currentStyle.marginTop, 10)

    return eltHauteur;

  }
}

export { calculEltHauteur };
