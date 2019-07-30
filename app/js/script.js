var options_list = $('.options-list'),
    details_list = $('.details-list'),
    collection = $('.choose-collection');

$(".filter-mobile-btn").on("click", function(e) {
     $('.options-list').css({'display':'none'});
});

$(".shipment-btn").on("click", function(e) {
	if($(options_list).css('display') == 'none'){
       $(options_list).slideToggle();
     } else{
     	$(options_list).slideToggle();
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
       $(collection).slideToggle();
     } else{
        $(collection).slideToggle();
     }
});

$(".close-choose-btn").on("click", function(e) {
    $('.choose-collection').slideToggle();
});




