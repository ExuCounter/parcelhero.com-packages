var options_list = $('.options-list'),
    details_list = $('.details-list'),
    collection = $('.choose-collection');

/* On click filter-mobile button => display: none options-list */

$(".filter-mobile-btn").on("click", function(e) {
     $('.options-list').css({'display':'none'});
});

/* On click shipment button toggle options-list */

$(".shipment-btn").on("click", function(e) {
	if($(options_list).css('display') == 'none'){
       $(options_list).slideToggle();
     } else{
     	$(options_list).slideToggle();
     }
});

/* Modal map carries block toggle activity */

$(".map-carriers__block").on("click", function(e) {

    if($('.map-carriers__block').hasClass('map-carriers__block_active')){
        $('.map-carriers__block').removeClass('map-carriers__block_active')
    }
    
    $(this).toggleClass("map-carriers__block_active");

});

/* Collection date button check on display: none and toggle */

$(".collection-date-btn").on("click", function(e) {
    if($(collection).css('display') == 'none'){
       $(collection).toggle();
     } else{
        $(collection).toggle();
     }
});

/* Close button */

$(".close-choose-btn").on("click", function(e) {
    $('.choose-collection').slideToggle();
});




