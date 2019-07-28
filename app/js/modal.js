// open modal
var wrap = $('.modal-wrapper'),
     btn = $('.more-info'),
     close = $('.close-btn'),
     modal = $('.modal-cover, .modal, .modal-content');

btn.on('click', function() {
  modal.fadeIn();
});

close.on('click', function() {
  modal.fadeOut();
  wrap.unbind('click');
});

// close modal
$('.modal').click(function() {
  wrap.on('click', function(event) {
    var select = $('.modal-content');
    if ($(event.target).closest(select).length)
      return;
    modal.fadeOut();
    wrap.unbind('click');
  });
});