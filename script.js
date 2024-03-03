//slider
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        dotsClass: 'slick-dots',
        responsive: [{
            breakpoint: 1425,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 1,
            }

        },{
             breakpoint: 768,
             settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
       
    ]
    });
});