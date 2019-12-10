//Zadanie 1
var elements=document.getElementsByClassName("sample_class");

function getTagsOfElements(elements){
	var tab=[];
	for(i=0; i<elements.length; i++)
	{
		tab.push(elements[i]);
	}
	
return tab;
}

//Zadanie 2
var element=document.getElementById('sample_id')
element = element.classList;

function getClassesOfElement(element){
	var tab=[]
	for(i=0; i<element.length; i++)
	{
		tab.push(element[i]);
	}
	return tab;
	
	
}

//Zadanie 3
var elem = document.getElementsByClassName("sample_class_2")[0];
elem =item.getElementsByTagName("li");

     function getInnerTextsOfElements(elem){
		 var tab=[];
		 for(i=0; i<elem.length; i++)
		 {
			 tab.push(elem[i].innerHTML);
		 }
	return tab;
	}
  
//Zadanie 4
var elements = document.getElementsByTagName("a");
	
function getAddressesOfElements(elements){
	 
var tab=[];
for(i=0; i<elements.length; i++){
tab.push(elements[i].getAttribute("href"));
		 
}
return tab;
}

//Zadanie 5
var foo=document.getElementsByClassName("sample_class_3")[0];
foo=foo.children;
function foofunction(foo){
var tab=[];
for(i=0; i<foo.length; i++){
tab.push(foo[i].tagName);
}
		return tab;
}
