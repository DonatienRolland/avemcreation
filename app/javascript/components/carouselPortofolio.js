$('#carousel_portofolio').carousel({
  interval: false
});

  // $('#carousel_portofolio').bind('mousewheel', function(e) {
  //   if(e.originalEvent.wheelDelta /120 > 0) {
  //       $(this).carousel('prev');
  //   } else {
  //       $(this).carousel('next');
  //   }
  // })



//Allows bootstrap carousels to display 3 items per page rather than just one
$('.carousel.carousel-multi .item').each(function () {
  var prev = $(this).prev();
  if (!prev.length) {
    prev = $(this).siblings(':last');
    prev.children(':first-child').clone().attr("aria-hidden", "true").removeClass("highlighted").insertBefore($(this).children());
  }
  else{
    prev.children(':nth-child(2)').clone().attr("aria-hidden", "true").removeClass("highlighted").insertBefore($(this).children());
  }

  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
    next.children(':nth-child(2)').clone().attr("aria-hidden", "true").removeClass("highlighted").appendTo($(this));
  }
  else{
    next.children(':first-child').clone().attr("aria-hidden", "true").removeClass("highlighted").appendTo($(this));
  }
});
