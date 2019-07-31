var service_item = $('.service-item'),
    fastest_time = 19,
    drop_off_cost = 3.07,
    collection_cost = 2.55,
    fastest_cost = 6.85,
    printer_cost = 3.56;

/* Choose date button check on active */

$('.choose-date').find('.collect-today-btn').click(function(){
	if( $(this).find('input').is(':checked') ) {
		$(this).find('input').removeAttr('checked');

	} else {
		$(this).find('input').attr('checked', true);
	}
});

/* Found sizes button */

$(".filter--found-sizes").on("click", function(e) {
	if($(details_list).css('display') == 'none'){
       $(details_list).slideToggle();
     } else{
     	$(details_list).slideToggle();
     }
});

/* Filter button and active all service items */

$(".filter-btn").on("click", function(e) {

    if($('.filter-btn').hasClass('filter-btn_active')){
    	$('.filter-btn').removeClass('filter-btn_active')
    }
	
	 $(this).toggleClass("filter-btn_active");

	 $(service_item).show();

   if($('.collect-today-btn').find('input').is(':checked')) {
		$('.collect-today-btn').find('input').removeAttr('checked');;
   }

});

/* Filter mobile button toggle */

$(".filter-mobile-btn").on("click", function(e) {

    if($('.filter-buttons').css('display') == 'none'){
       $('.filter-buttons').slideToggle();
     } else{
     	$('.filter-buttons').slideToggle();
     }

});

/* Collection today button toggle */

$(".collect-today-btn").on("click", function(e) {
	$(this).toggleClass("collect-today-btn_active");
	$(service_item).each(function() {
	  if($(this).hasClass('collect')){
	  	
	  }
	  else{
	  	$(this).css({'display':'none'});
	  }
	});

});

/* Collection date toggle */

$(".collection-date__block").on("click", function(e) {

    if($('.collection-date__block').hasClass('collection-date__block_active')){
    	$('.collection-date__block').removeClass('collection-date__block_active')
    }

     $(this).toggleClass("collection-date__block_active");

     var day = $(this).find('.date-week').text().substring(0,3);
     var time = $('.collection-time__block').find('.date-time').text();

		$(".collection-time__block").on("click", function(e) {

		    if($('.collection-time__block').hasClass('collection-time__block_active')){
		    	$('.collection-time__block').removeClass('collection-time__block_active')
		    }

		     $(this).toggleClass("collection-time__block_active");
		     $('.choose-collection').fadeOut();
		     $('.collection-date__block').removeClass('collection-date__block_active');
		     $(this).removeClass('collection-time__block_active')

         $(service_item).each(function() {
					  var check_day = $(this).find('.day').text().substring(0,3);
					  var check_time = $(this).find('.drop-by').text();


		    	 if(day == check_day){
		  	    $(this).css({'display':'block'});
		  	    
				  }
				  else{ 
		        $(this).css({'display':'none'});
		        
		        
				  }

				});

			});

});













/////////////////////////////////////////////////////

/* Filter Buttons */


$("#all").on("click", function(e) {
	  $('.choose-date').css({'display':'none'});
    $('.drop-postcode').css({'display':'none'});
});

$("#collection").on("click", function(e) {
	   $('.choose-date').css({'display':'block'});
     $('.drop-postcode').css({'display':'none'});

    $(service_item).each(function() {
	    	if($(this).find(".ship-cost").text() >= collection_cost){
	  	    $(this).css({'display':'block'});
			  }
			  else{
			  	$(this).css({'display':'none'});
			  }

			});
});

$("#drop-off").on("click", function(e) {
     $('.drop-postcode').css({'display':'block'});
     $('.choose-date').css({'display':'none'});

      $(service_item).each(function() {
	    	if($(this).hasClass('drop') && $(this).find(".ship-cost").text() >= drop_off_cost){
	  	    $(this).css({'display':'block'});
			  }
			  else{
			  	$(this).css({'display':'none'});
			  }

			});
  
});


$("#fastest").on("click", function(e) {
       $('.choose-date').css({'display':'block'});
       $('.drop-postcode').css({'display':'none'});

     //   $('.delivery').each(function() {
		  	//   if($(this).text() > fastest){
		  	//   	$('this').parent().parent().parent().parent().parent().parent().css({'display':'none'});
		  	//   }
		   // });

        $(service_item).each(function() {
	    	if($(this).find(".ship-cost").text() >= fastest_cost){
	  	    $(this).css({'display':'block'});
			  }
			  else{
			  	$(this).css({'display':'none'});
			  }

			});
	       
 
});

$("#no-printer").on("click", function(e) {
       $('.choose-date').css({'display':'block'});
       $('.drop-postcode').css({'display':'none'});

       $(service_item).each(function() {
	    	if($(this).hasClass('printer-not') && $(this).find(".ship-cost").text() >= printer_cost){
	  	    $(this).css({'display':'block'});
			  }
			  else{
			  	$(this).css({'display':'none'});
			  }

			});

   
});

////////////////////////////////////////////////////////