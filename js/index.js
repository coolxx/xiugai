document.addEventListener('DOMContentLoaded',function (){
	var oBtn1=document.querySelector('.btnbox');
	var aBtn1=oBtn1.querySelectorAll('li');
	var aA=oBtn1.querySelectorAll('a');
	var aBox1=document.querySelectorAll('.divbox');
	var aBtn2=document.querySelectorAll('.cont7_cont a');
	var oBtn3=document.querySelector('.wxtc');
	var show=document.querySelector('.zg_wxtk');
	var close=document.querySelector('.zg_wxtk');
	for(var i=0;i<aBtn1.length;i++){
		aBtn1[i].index=i;
		aBtn1[i].addEventListener('touchstart',function (ev){
			for(var i=0;i<aBtn1.length;i++){
				aBox1[i].style.display='none';
				aBtn1[i].className='';
				aA[i].style.color='#fff'
			}
			aBox1[this.index].style.display='block';
			this.className='on';
			aA[this.index].style.color='#fcff00'
		},false);
	};
	for(var i=0;i<aBtn2.length;i++){
		aBtn2[i].addEventListener('touchstart',function (ev){
			for(var i=0;i<aBtn2.length;i++){
				aBtn2[i].className='';
			}
			this.className='on2';
		},false);
	}
},false);