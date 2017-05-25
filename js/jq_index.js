$(function(){
	$('.djwx').click(function(){
		$('.zg_tmc').show();
		$('.zg_wxtk').show();	
	});
	$('.zg_wxtk span').click(function(){
		$(this).parent().hide();
		$('.zg_tmc').hide();	
	});
	$('.head_a2').click(function(){
		$('#tgo').toggle();
		var turn=$('.fanzhuan')[0];
		if(turn.style.transform=='rotate(180deg)'){
			turn.style.transform='rotate(0deg)';
			turn.style.transition='0.5s'
		}else{
			turn.style.transform='rotate(180deg)';
			turn.style.transition='0.5s'
		}
		$('.ch_item').eq(0).show();
		var oBtn=document.querySelector('.head_a2');
		var oBtn_nav=document.querySelector('.h_choose');
		var aBtn_nav=oBtn_nav.querySelectorAll('li');
		var aCh_item=document.querySelectorAll('.ch_item');
		for(var i=1;i<aBtn_nav.length;i++){
			aBtn_nav[i].index=i;
			aBtn_nav[i].addEventListener('touchstart',function (ev){
				for(var j=0;j<aCh_item.length;j++){
					aBtn_nav[j].className='';
					aCh_item[j].style.display='none'
				}
				aBtn_nav[5].className='';
				this.className='active';
				aCh_item[this.index-1].style.display='block'
			},false)
		};
	})
})
