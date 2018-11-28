var openNav = document.getElementById("openNav");
var closeNav = document.getElementById("mySidenav").getElementsByTagName("a");

/* Open the sidenav */
openNav.addEventListener("click", function() {
  document.getElementById("mySidenav").style.width = "100%";
})

/* Close/hide the sidenav */
for( var i = 0; i < closeNav.length; i++ ){
  closeNav[i].addEventListener("click", function() {
    document.getElementById("mySidenav").style.width = "0";
  })
}

