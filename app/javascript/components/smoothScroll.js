// Mouvement fluide :
$(function () {
  $('.navbar-wagon-item').on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 250, function(){
      window.location.hash = hash;
    });
  });
});
