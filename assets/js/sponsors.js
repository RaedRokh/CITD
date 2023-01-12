$(document).ready(function(){
    $('#line1').slick({
        // mobileFirst:true,
        autoplaySpeed: 1000,
        speed : 1000,
        // cssEase: 'linear',
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
    // $('#line2').slick({
    //     mobileFirst:true,
    //     slidesToScroll: -1,
    //     cssEase: 'linear',
    //     speed: 3000,
    //     autoplaySpeed: 40,
    //     slidesToShow: 4,
    //     autoplay: true,
    //     arrows: false,
    //     dots: false,
    //     pauseOnHover: false,
    //     responsive: [{
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 4
    //         }
    //     }, {
    //         breakpoint: 520,
    //         settings: {
    //             slidesToShow: 3
    //         }
    //     }]
    // });
});