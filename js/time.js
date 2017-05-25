window.onload=function(){
		var oT=document.getElementById('time2');
		//设置时间
		var oDate=new Date();
		oDate.setFullYear(2018,11,23);
		oDate.setHours(0,0,0,0);
		//获取2017.1.1时间戳
		var future=oDate.getTime();
		clock();
		setInterval(clock,1000);
		function clock(){
			//获取当前时间戳
			var oDate=new Date();
			var now=oDate.getTime();
			//获取差值,单位是毫秒
			//alert(future-now);
			//转化成秒
			var s=parseInt((future-now)/1000);
			//转化成天
			var d=parseInt(s/86400);
			oT.innerHTML='距2018年考研还有<span style="color: #e62929">'+d+'</span>天';
		}
	}