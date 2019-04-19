//封装方法

var tools = {
	/* obj 操作的元素
	attr 需要的样式的属性
	
	 */
	getStyle:function(obj,attr){
		return obj.currentStyle ? obj.currentStyle[arrt] : getComputedStyle(obj,false)[attr];
	},
	/* obj 操作的元素
	attr 运动变化的属性
	end 运动变化的终值
	time 运动变化的时间
	 */
		
	linearMove:function(obj,attr,end,time){
		clearInterval(obj.timer);
		var start = parseInt(this.getStyle(obj,attr));
		var distance = end - start;
		//计算所需的步数
		var steps = parseInt(time / 20);
		//计算速度
		var speed = distance / steps;
		obj.timer=setInterval(function(){
			start +=speed;
			obj.style[attr] = start +"px";
			if(Math.abs(start - end)<Math.abs(speed)){
				clearInterval(obj.timer);
				obj.style[attr] = end + "px";
			}
		},20);
	}
}