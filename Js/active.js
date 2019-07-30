$(document).ready(function () {

      // Responsive Menu
      $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991"
      });
      // Slider Active
      $('.slider-active').owlCarousel({
            loop:true,
            nav:true,
            nevText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
            responsive:{
                  0:{
                        items:1,
                        nav:false
                  },
                  600:{
                        items:1,
                        nav:false
                  },
                  1000:{
                        items:1
                  }
            }
      })
});

// Counter Plugin Active
$('.counter').counterUp({
      delay: 10,
      time: 1000
});

