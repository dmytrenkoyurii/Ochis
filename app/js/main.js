$(function() {

    $('.choose-slider').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        // autoplay: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.header__menu--btn').on('click', function() {
        $('.header__menu--list').slideToggle();
    });

});


// onclick = 'window.scrollBy(0, window.innerHeight)' > window.scrollBy(0, window.innerHeight)