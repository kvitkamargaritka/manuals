$(document).ready(function() {
  $('.carousel').owlCarousel({
    autoplay: false,
    autoplayTimeout: 5000,
    // margin: 20,
    loop: true,
    pagination: false,
    nav: true,
    navText: ['<span class="btn-prev icon icon-big-arrow-l"></span>','<span class="btn-next icon icon-big-arrow-r"></span>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 3
      },
      768: {
        items: 6
      },
      1200: {
        items: 9
      }
    }
  });
});
