var first_desc = $('.first-description'),
    second_desc = $('.second-description'),
    third_desc = $('.third-description'),
    fourth_desc = $('.fourth-description');

$(".first-upgrade").on("click", function(e) {
	if($(first_desc).css('display') == 'none'){
       $(first_desc).fadeIn();
     } else{
     	$(first_desc).fadeOut();
     }
});

$(".second-upgrade").on("click", function(e) {
	if($(second_desc).css('display') == 'none'){
       $(second_desc).fadeIn();
     } else{
     	$(second_desc).fadeOut();
     }
});

$(".third-upgrade").on("click", function(e) {
	if($(third_desc).css('display') == 'none'){
       $(third_desc).fadeIn();
     } else{
     	$(third_desc).fadeOut();
     }
});


$(".fourth-upgrade").on("click", function(e) {
	if($(fourth_desc).css('display') == 'none'){
       $(fourth_desc).fadeIn();
     } else{
     	$(fourth_desc).fadeOut();
     }
});
