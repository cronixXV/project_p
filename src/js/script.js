$(document).ready(function(){
    $('.slider__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                dots: true,
                arrows: false
                }
            }
        ]
    });
});
