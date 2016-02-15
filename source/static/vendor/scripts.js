$(document).ready(function() {

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
