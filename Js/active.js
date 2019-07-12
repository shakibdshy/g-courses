$(document).ready(function () {

      // Slider Area
      $('.active-slider').owlCarousel({
            loop: true,
            nav: true,
            navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 1
                  },
                  1000: {
                        items: 1
                  }
            }
      });

      // Counter Up
      $('.counter').counterUp({
            delay: 10,
            time: 1000,
      });

      // Popular Courses Area
      $('.active-popular-courses').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 1
                  },
                  1000: {
                        items: 3
                  }
            }
      });

      // Why Choose Area
      $('.why-choose-active').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 1
                  },
                  1000: {
                        items: 3
                  }
            }
      });

      // Testimonials Area
      $('.active-testimonials').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 1
                  },
                  1000: {
                        items: 2
                  }
            }
      });

      // Brand Area
      $('.brand-active').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 1
                  },
                  1000: {
                        items: 6
                  }
            }
      });

      // Product Area
      $('.product-active').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 2
                  },
                  1000: {
                        items: 4
                  }
            }
      });

      // FAQ Tab Area 
      $("#faq-tabs").tabs();

      


});

