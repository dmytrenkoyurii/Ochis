$(function() {

    $('.choose-slider').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        autoplay: true,
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

});


$(function() {
    $.widget("custom.iconselectmenu", $.ui.selectmenu, {
        _renderItem: function(ul, item) {
            var li = $("<li>", { html: item.element.html() });
            var attr = item.element.attr("data-style");
            if (typeof attr !== typeof undefined && attr !== false) {
                $("<span>", {
                    style: item.element.attr("data-style"),
                    "class": "ui-icon TFOOptlstFiltreImg"
                }).appendTo(li);
            }
            return li.appendTo(ul);
        }
    });

    $("#people")
        .iconselectmenu().iconselectmenu("menuWidget").addClass("ui-menu-icons");
});


// onclick = 'window.scrollBy(0, window.innerHeight)' > window.scrollBy(0, window.innerHeight)