class publish{
	constructor() {
		this.btn=document.querySelector("#publish");
		this.container=document.querySelector("#container");
		
	   
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
				let username = document.querySelector("#username").value;
				let contents=document.querySelector("#cont").value;
				document.write(username+"<br>",contents+"<br>",this.time(new Date()));
				
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
		
			document.oncontextmenu =e =>{
				e=e||window.event;	
			  if(e.preventfault){
				e.preventDefault();
			   }else{window.event.returnValue = false;}
			   this.myul=document.createElement("ul");
			   this.myul.innerHTML='<li class="cancel">撤回</li>'+'<li class="cancel">删除</li>';
			   this.myul.className="myMenu";
			   document.body.appendChild(this.myul);
			   
			} 		
			
	}
	
	
}
	new publish();
		