// open modal

var wrap = $('.modal-wrapper'),
     info_btn = $('.more-info'),
     drop_btn = $('.view-drop-btn'),
     close = $('.close-btn'),
     modal_info = $('.modal-cover, .modal, .modal-content').
     modal_map = $('.modal-cover, .modal_map, .modal-content');

info_btn.on('click', function() {
  modal_info.fadeIn();
});

close.on('click', function() {
  modal_info.fadeOut();
  wrap.unbind('click');
});

drop_btn.on('click', function() {
  modal_info.fadeIn();
});

close.on('click', function() {
  modal_map.fadeOut();
  wrap.unbind('click');
});

// close modal

$('.modal').click(function() {
  wrap.on('click', function(event) {
    var select = $('.modal-content');
    if ($(event.target).closest(select).length)
      return;
    modal_info.fadeOut();
    wrap.unbind('click');
  });
});

$('.modal').click(function() {
  wrap.on('click', function(event) {
    var select = $('.modal-content');
    if ($(event.target).closest(select).length)
      return;
    modal_map.fadeOut();
    wrap.unbind('click');
  });
});


