function openClose(){
	var men=document.getElementById("menu");
	var but=document.getElementById("menuButton");
	
	men.style.left=(men.style.left=="0px")?"-450px":"0px";
	but.innerText=(but.innerText=="≡")?"×":"≡";
	but.style.left=(men.style.left=="0px")?"450px":"10px";
}

var hs=document.querySelectorAll("h2,h3,h4");
var length=hs.length;
var top=document.querySelector("h1");
var menu="<h2>目次</h2>";
var id=0;

if(top){
	top.id="top";
	menu+='<a href="#top">↑トップに戻る</a>'
}
menu+="<hr>";

function anchor(element){return '<a href="#'+element.id+'">'+element.innerText+'</a><br>'}

for(var i=0;i<length;i++){
	if(!hs[i].id){
		hs[i].id="id"+(i+1);
	}
	switch(hs[i].tagName){
		case "H2":menu+=anchor(hs[i]);break;
		case "H3":menu+='<div class="indent">'+anchor(hs[i])+"</div>";break;
		case "H4":menu+='<div class="double-indent">'+anchor(hs[i])+"</div>";break;
	}
}
document.getElementById("menu").innerHTML=menu;
window.addEventListener("load",function(e){location.hash=location.hash;});