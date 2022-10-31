$('#tabs div a:not(:first)').addClass('inactive');
$('.container').hide();
$('.container:first').show();
$('#tabs div a').click(function(){
	var t = $(this).attr('href');
	$('#tabs div a').addClass('inactive');        
	$(this).removeClass('inactive');
	$('.container').hide();
	$(t).fadeIn('slow');
	return false;
})
