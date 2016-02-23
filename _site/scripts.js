$(document).ready(function() {

$('.js-filter-trigger').click(function() {
    $('.js-filter-panel').toggleClass('js-is-open');
});

// Slider Config (Sticky)
$('.slider').slick({
    arrows: true,
    draggable: false,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 800,
            settings: {
                draggable: true,
            }
        }
    ]
});

});
