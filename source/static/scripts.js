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



  // Modal Window Logic
  // This can be better written, abstracted, etc.

  $('.js-modal-window-open').click(function(){
    $('.js-modal-window').addClass('js-is-active');
    $('.js-overlay').addClass('js-is-active');
    $('body').addClass('overlay--active');
  });

  $('.js-modal-window-close').click(function(){
    $('.js-modal-window').removeClass('js-is-active');
    $('.js-overlay').removeClass('js-is-active');
    $('body').removeClass('overlay--active');
  });

  // Top Nav Logic - For mobile only
  // This can be better written, abstracted, etc.

  $('.js-top-nav-open').click(function(){
    $('.js-top-nav').addClass('js-is-active');
    $('.js-overlay').addClass('js-is-active');
    $('body').addClass('overlay--active');
  });

  $('.js-top-nav-close').click(function(){
    $('.js-top-nav').removeClass('js-is-active');
    $('.js-overlay').removeClass('js-is-active');
    $('body').removeClass('overlay--active');
  });


  // Overlay Logic to disable all active states

  $('.js-overlay').click(function(){
    $('.js-modal-window').removeClass('js-is-active');
    $('.js-top-nav').removeClass('js-is-active');
    $('.js-overlay').removeClass('js-is-active');
    $('body').removeClass('overlay--active');
  });


});
