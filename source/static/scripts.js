$(document).ready(function() {
  $('.js-filter-trigger').click(function() {
    $('.js-filter-panel').toggleClass('js-is-open');
  });

// Projects Grid/List View Logic
  $('.js-view-list-trigger').click(function() {
      // Switch Classes for the Project Listing
      $('.js-results-list').addClass('js-is-list');
      $('.js-results-list').removeClass('js-is-grid');

      // Adds 'active' state to the button
      $(this).addClass('js-is-active');
      $('.js-view-grid-trigger').removeClass('js-is-active');
  });

  $('.js-view-grid-trigger').click(function() {
      // Switch Classes for the Project Listing
      $('.js-results-list').addClass('js-is-grid');
      $('.js-results-list').removeClass('js-is-list');

      // Adds 'active' state to the button
      $(this).addClass('js-is-active');
      $('.js-view-list-trigger').removeClass('js-is-active');
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
