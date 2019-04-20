class publish{
	constructor() {
		this.btn=document.querySelector("#publish");
		this.container=document.querySelector("#container");
		this.myMenu=document.querySelector(".myMenu");
		this.cancle=document.querySelector(".del")
	    console.log(this.myMenu.style)
		this.bindEvents();
	}
	bindEvents(){
		//给发布按钮绑事件
		this.btn.onclick=()=>{
			this.container.innerHTML = '<h4 calss="h">发布信息</h4>'+
			'<a href="javascript:;" class="delBtn">X</a>'+
			'<p class="userName"><label>用户名：<input id="username" type="text"></label></p>'+
			'<p class="content"><textarea id="cont" cols="60" rows="15"></textarea></p>'+
			'<button id="publi">发布</button>';
			this.modal=document.createElement("div");
			this.container.style.display="block";
			this.modal.className="modal";
			document.body.appendChild(this.modal);
			}
		
		this.container.onclick=e=>{
			e=e||window.event;
		   var target = e.target||e.srcElemenet;
		   if(target.className==="delBtn"){
			   this.container.style.display="none"
			   document.body.removeChild(this.modal);
		    }else if(target.id==="publi"){
				this.createNew();
				this.menu();
				
			}
		 }
		 
		
		
	}
	time(date){
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let nowDate =date.getDate();
		let nowtime = date.getMinutes();
		return year + "年" + month + "月" + nowDate +"日"+nowtime +"分";
	}
	menu(){
		
			this.news.oncontextmenu =e =>{
				e=e||window.event;	
				var target=e.target||e.srcElement;
			  if(e.preventfault){
				e.preventDefault();
			   }else{window.event.returnValue = false;}
			   this.myMenu.style.display="block";
			   this.myMenu.style.left = e.clientX +20+ "px";
			   this.myMenu.style.top = e.clientY +20 + "px";
			   this.cancle.onclick=()=>{
			      this.cancleClick(target);
			   }
			} 
			document.onclick=()=>{
				this.myMenu.style.display = "none";
	        }		
	}
	cancleClick(removeone){
		var endTime=new Date();
		var time=endTime.getTime()-this.startTime.getTime();
		if(time<2000){
			document.body.removeChild(removeone);
		}else{
			alert("不能撤回此消息")}
	}
	createNew(){
		let username = document.querySelector("#username").value;
		let contents=document.querySelector("#cont").value;
		this.news=document.createElement("div");
		this.news.className="news"
		this.news.innerHTML= username+"<br>"+contents+"<br>"+this.time(new Date());
		/* document.write(username+"<br>",contents+"<br>",this.time(new Date())); */
		document.body.appendChild(this.news);
		this.container.style.display="none";
		this.modal.style.display="none";
		this.startTime=new Date();
	}
	
}
	new publish();
		