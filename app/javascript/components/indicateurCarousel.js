function changeColor() {
  // Declare all variables

  // Show the current tab, and add an "active" class to the link that opened the tab
  function actionLink(event){
    var i, indicateur;

    // Get all elements with class="indicateur" and remove the class "active"
    indicateur = document.getElementsByClassName("indicateur");

    for (i = 0; i < indicateur.length; i++) {
        indicateur[i].classList.remove("active");
    }

    event.currentTarget.classList.add("active");
  }
  // Get the good div clicked
  let tablinkAll = document.querySelector(".carousel-indicators").getElementsByTagName("li");
  for (var i = 0 ; i < tablinkAll.length ; i++) {
    tablinkAll[i].addEventListener('click', actionLink)
  }
}

export { changeColor };



