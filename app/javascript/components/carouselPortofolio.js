//Allows bootstrap carousels to display 3 items per page rather than just one
$('.carousel.carousel-multi .item').each(function () {
  var prev = $(this).prev();
  if (!prev.length) {
    prev = $(this).siblings(':last');
    prev.children(':first-child').clone().attr("aria-hidden", "true").insertBefore($(this).children());
  }
  else{
    prev.children(':nth-child(2)').clone().attr("aria-hidden", "true").insertBefore($(this).children());
  }

  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
    next.children(':nth-child(2)').clone().attr("aria-hidden", "true").appendTo($(this));
  }
  else{
    next.children(':first-child').clone().attr("aria-hidden", "true").appendTo($(this));
  }
});
