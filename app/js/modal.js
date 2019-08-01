// Open modal

var wrap = $('.modal-wrapper'),
     info_btn = $('.more-info'),
     drop_btn = $('.view-drop-btn'),
     close = $('.close-btn'),
     modal_info = $('.modal-cover, .modal_hermes, .modal-content'),
     modal_map = $('.modal-cover, .modal_map, .modal-content');

$(info_btn).on('click', function() {
  $(modal_info).fadeIn();
});

$(close).on('click', function() {
  modal_info.fadeOut();
  wrap.unbind('click');
});

$(drop_btn).on('click', function() {
  $(modal_map).fadeIn();
});

$(close).on('click', function() {
  modal_map.fadeOut();
  wrap.unbind('click');
});


// Close modal

$('.modal').click(function() {
  wrap.on('click', function(event) {
    var select = $('.modal-content');
    if ($(event.target).closest(select).length)
      return;
    modal_info.fadeOut();
    wrap.unbind('click');
  });
});


/* Select carrier button */

$('.select-carrier-btn').on('click', function(){
  $('.map-carriers__block').slideToggle();

  $('.map-carriers__block').on('click', function(){
     $('.map-carriers__block').hide();
   });

})

