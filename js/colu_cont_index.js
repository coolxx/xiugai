document.addEventListener('DOMContentLoaded',function (){
	var aBtn1=document.querySelectorAll('.colu_cont li a');
	var aBtn2=document.querySelectorAll('.colu_cont2 li a');
	var aBtn3=document.querySelectorAll('.colu_cont3 li a');
	var aBtn4=document.querySelectorAll('.colu_cont4 li a');
	for(var i=0;i<aBtn1.length;i++){
		aBtn1[i].addEventListener('touchstart',function (ev){
			for(var i=0;i<aBtn1.length;i++){
				aBtn1[i].className='';
			}
			this.className='on';
		},false);
	}
	for(var i=0;i<aBtn2.length;i++){
		aBtn2[i].addEventListener('touchstart',function (ev){
			for(var i=0;i<aBtn2.length;i++){
				aBtn2[i].className='';
			}
			this.className='on';
		},false);
	}		
	for(var i=0;i<aBtn3.length;i++){
		aBtn3[i].addEventListener('touchstart',function (ev){
			for(var i=0;i<aBtn3.length;i++){
				aBtn3[i].className='';
			}
			this.className='on';
		},false);
	}		
	for(var i=0;i<aBtn4.length;i++){
		aBtn4[i].addEventListener('touchstart',function (ev){
			for(var i=0;i<aBtn4.length;i++){
				aBtn4[i].className='';
			}
			this.className='on';
		},false);
	}				
},false);