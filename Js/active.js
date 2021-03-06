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
      
      // Counter Plugin Active
      $('.counter').counterUp({
            delay: 10,
            time: 1000
      });

      // Popular Courses Slider Active
      $('.active-popular-courses').owlCarousel({
            loop:true,
            nav:true,
            margin: 30,
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
                        items:3
                  }
            }
      });

      // Why Choose Slider Active
      $('.why-choose-active').owlCarousel({
            loop:true,
            nav:false,
            responsive:{
                  0:{
                        items:1,
                        nav: false
                  },
                  600:{
                        items:2,
                        nav: false
                  },
                  1000:{
                        items:3
                  }
            }
      })
      // Why Choose Slider Active
      $('.active-testimonial').owlCarousel({
            loop  :true,
            margin: 30,
            nav   :true,
            nevText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
            responsive:{
                  0:{
                        items:1,
                        nav: false
                  },
                  600:{
                        items:2,
                        nav: false
                  },
                  1000:{
                        items:2
                  }
            }
      })
      // Brand Slider Active
      $('.brand-active').owlCarousel({
            loop  :true,
            margin: 30,
            nav   :true,
            nevText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
            responsive:{
                  0:{
                        items:2,
                        nav: false
                  },
                  600:{
                        items:4,
                        nav: false
                  },
                  1000:{
                        items:6
                  }
            }
      })
      // Brand Slider Active
      $('.product-active').owlCarousel({
            loop  :true,
            margin: 30,
            nav   :true,
            nevText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
            responsive:{
                  0:{
                        items:1,
                  },
                  600:{
                        items:3,
                  },
                  1000:{
                        items:4
                  }
            }
      })

      // FAQ Tabs Active
      $('#faq-tabs').tabs();


});
