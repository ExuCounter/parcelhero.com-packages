$(".filter--found-sizes").on("click", function(e) {
     $('.details-list').toggleClass("details-list_active");
});

$(".shipment-btn").on("click", function(e) {
     $('.options-list').toggleClass("options-list_active");
});

$(".filter-btn").on("click", function(e) {

    if($('.filter-btn').hasClass('filter-btn_active')){
    	$('.filter-btn').removeClass('filter-btn_active')
    }
	
	$(this).toggleClass("filter-btn_active");

});