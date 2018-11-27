var openNav = document.getElementById("openNav");
var closeNav = document.getElementById("closeNav");
var navLink = document.getElementById("mySidenav").getElementsbyTagName(a);

/* Open the sidenav */
openNav.addEventListener("click", function() {
  document.getElementById("mySidenav").style.width = "100%";
})

/* Close/hide the sidenav */
closeNav.addEventListener("click", function() {
  document.getElementById("mySidenav").style.width = "0";
})

