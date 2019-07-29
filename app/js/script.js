var options_list = $('.options-list'),
    details_list = $('.details-list'),
    collection = $('.choose-collection');

$(".filter--found-sizes").on("click", function(e) {
     $('.details-list').toggleClass("details-list_active");
});

$(".shipment-btn").on("click", function(e) {
     $('.options-list').toggleClass("options-list_active");
});

$(".shipment-btn").on("click", function(e) {
	if($(options_list).css('display') == 'none'){
       $(options_list).fadeIn();
     } else{
     	$(options_list).fadeOut();
     }
});


$(".map-carriers__block").on("click", function(e) {

    if($('.map-carriers__block').hasClass('map-carriers__block_active')){
        $('.map-carriers__block').removeClass('map-carriers__block_active')
    }
    
    $(this).toggleClass("map-carriers__block_active");

});


$(".collection-date-btn").on("click", function(e) {
    if($(collection).css('display') == 'none'){
       $(collection).fadeIn();
     } else{
        $(collection).fadeOut();
     }
});

$(".close-choose-btn").on("click", function(e) {
    $('.choose-collection').fadeOut();
});




