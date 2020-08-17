$(document).ready(() => {
    // Project slider Items
    // slider 1 
    var psItems = $('.ps-items');
    if (psItems.length) {
        psItems.slick({
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            fade: false
        });
        $('#ps_prev').click(function (e) {
            e.preventDefault();
            psItems.slick('slickPrev');
        });
        $('#ps_next').click(function (e) {
            e.preventDefault();
            psItems.slick('slickNext');
        });
    }
})