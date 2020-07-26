$('#number-field').mask('+994 (ZZ) ZZZ-ZZ-ZZ', {
    translation: {
        'Z': {
            pattern: /[0-9]/, optional: true
        }
    },
    placeholder: "+994(__) ___ - __ - __"
});


/*==========================
       testinomial
==========================*/

$(document).ready(function() {
              $('#demo2').owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 1,
                    nav: false
                  },
                  1000: {
                    items: 2,
                    nav: true,
                    loop: false,
                    margin: 20
                  }
                }
              })
            })