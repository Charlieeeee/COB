function getStyle(obj,name)
	{
		if(obj.currentStyle)
		{
			return obj.currentStyle[name];
		}
		else
		{
			return getComputedStyle(obj,false)[name];
		};
	};
var timer=null;
	function show(obj,json,fuEnd)
	{
		clearTimeout(obj.timer);  						// 停止当前的定时器
		obj.timer=setInterval(function(){
			var bStop = true; 							// 假设 所有的值都到了
			for(var attr in	json)						// 用josn循环整个函数
			{
				var cur=0;
				if(attr=='opacity')                    // 在运行的时候 判断是不是透明度
				{
					cur=Math.round(parseFloat(getStyle(obj,attr))*100);
				}
				else
				{
					cur=parseInt(getStyle(obj,attr));
				}
				var speed=(json[attr]-cur)/6;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				if(cur!=json[attr])					//如果有个一个当前的不等于目标距离
					bStop=false;					// 那么就停止当前的函数
				if(attr=='opacity')
				{
							obj.style.filter='alpha(opacity:'+(cur+speed)+')';
							obj.style.opacity=(cur+speed)/100;
				}
					else
				{
						obj.style[attr]=cur+speed+'px';
				}
			}
			if(bStop)
			{
				clearInterval(obj,timer);                   //如果都执行成功，那么停止当前的定时器
				if(fuEnd)fuEnd();							// 判断是不是又有一个函数 有的话 执行
			}
		},30);
	};