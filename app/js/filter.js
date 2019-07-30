$('.choose-date').find('.collect-today-btn').click(function(){
	if( $(this).find('input').is(':checked') ) {
		$(this).find('input').removeAttr('checked');

	} else {
		$(this).find('input').attr('checked', true);
	}
});

$(".filter--found-sizes").on("click", function(e) {
	if($(details_list).css('display') == 'none'){
       $(details_list).slideToggle();
     } else{
     	$(details_list).slideToggle();
     }
});

$(".filter-btn").on("click", function(e) {

    if($('.filter-btn').hasClass('filter-btn_active')){
    	$('.filter-btn').removeClass('filter-btn_active')
    }
	
	$(this).toggleClass("filter-btn_active");

});

$(".filter-mobile-btn").on("click", function(e) {

    if($('.filter-buttons').css('display') == 'none'){
       $('.filter-buttons').slideToggle();
     } else{
     	$('.filter-buttons').slideToggle();
     }

});

$(".collect-today-btn").on("click", function(e) {
	$(this).toggleClass("collect-today-btn_active");
});

$("#all").on("click", function(e) {
	$('.choose-date').css({'display':'none'});
    $('.drop-postcode').css({'display':'none'});
   
});

$("#collection").on("click", function(e) {
	   $('.choose-date').css({'display':'block'});
       $('.drop-postcode').css({'display':'none'});
});

$("#drop-off").on("click", function(e) {
       $('.drop-postcode').css({'display':'block'});
       $('.choose-date').css({'display':'none'});
});


$("#fastest").on("click", function(e) {
       $('.choose-date').css({'display':'block'});
       $('.drop-postcode').css({'display':'none'});
});

$("#no-printer").on("click", function(e) {
       $('.choose-date').css({'display':'block'});
       $('.drop-postcode').css({'display':'none'});
});

////////////////////////////////////////////////////////

$(".collection-date__block").on("click", function(e) {

    if($('.collection-date__block').hasClass('collection-date__block_active')){
    	$('.collection-date__block').removeClass('collection-date__block_active')
    }

     $(this).toggleClass("collection-date__block_active");

});



/////////////////////////////////////////////////////////

// $(".collect-today-btn").on("click", function(e) {
// 	if( $('#item_1').find('input').is(':checked') ) {
// 	  var oldData = $("#item_1").html();
// 	  alert(oldData);
// 	  $("#item_1 .collect-today").html("<p>Оппа!</p>")
//     }
//     else{

//     }
// })