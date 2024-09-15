$(document).ready(function () {
    $(".custom-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoWidth: true
    });
    
    // Toggle active class on item click
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });