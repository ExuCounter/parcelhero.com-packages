$('.choose-date').find('.collect-today-btn').click(function(){
	if( $(this).find('input').is(':checked') ) {
		$(this).find('input').removeAttr('checked');

	} else {
		$(this).find('input').attr('checked', true);
	}
});

$(".filter--found-sizes").on("click", function(e) {
	if($(details_list).css('display') == 'none'){
       $(details_list).fadeIn();
     } else{
     	$(details_list).fadeOut();
     }
});

$(".filter-btn").on("click", function(e) {

    if($('.filter-btn').hasClass('filter-btn_active')){
    	$('.filter-btn').removeClass('filter-btn_active')
    }
	
	$(this).toggleClass("filter-btn_active");

});

$(".collect-today-btn").on("click", function(e) {
	$(this).toggleClass("collect-today-btn_active");
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