var buttons = document.querySelectorAll("button");
for(i=0; i<buttons.length; i++){
	buttons[i].addEventListener('click',function fun(){ document.getElementById("container").innerHTML=this.getAttribute("data-text")});
}
