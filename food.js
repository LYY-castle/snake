//初始化食物
(function(){
	//定义一个数组，用来存储创建的DIV，存储食物
	var element=[];
	//食物hi一个对象，先定义构造函数，横纵坐标，高宽背景颜色
	function Food(x,y,width,height,color){
		this.x=x||0;
		this.y=y||0;
		this.width=width||20;
		this.height=height||20;
		this.color=color||"green;
	}
	//定义一个方法把食物画在地图上
	//创建一个DIV把食物画在地图上

	Food.prototype.init=function(map){
		//在产生食物前，先把原来的和食物删除
		remove();
		var div=documemnt.createElement("div");
		map.appendChild(div);
		div.style.width=this.width+"px";
		div.style.height=this.height+"px";
		div.style.backgroundColor=this.color;
		div.style.position=position;
		div.style.x=parseInt(Math.random()*map.offsetWidth/this.width)*this.width;
		div.style.y=parseInt(Math.random()*map.offsetHeight/this.height)*this.height;
		div.style.left=this.x+"px";
		div.style.top=this.y+"px";
		//把div加入到elements数组中
		elements.push(div);
	};
	//定义移除食物的函数
	function remove(){
		for(var i=0;i<elements.length;i++){
			var ele=elements[i];
			ele.parenetNode.removeChild(ele);
			elements.splice(i,1);
		}
	}
	window.Food=Food;
}());
