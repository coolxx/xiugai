$(function(){
	$('.tc').click(function(){
		$('.zg_tmc').show();
		$('.zg_wxtk').show();	
	});
	$('.zg_wxtk span').click(function(){
		$(this).parent().hide();
		$('.zg_tmc').hide();	
	});
})
