var next = document.getElementById("next");
var prev = document.getElementById("previous");
next.addEventListener("click", function(){SetActive(true);},false);
prev.addEventListener("click", function(){SetActive(false);},false);

var counter = 0;
var oldElement;
	
function SetActive(next){
  if(oldElement) document.getElementById(oldElement).setAttribute("class", "");
      
  if(next){
	  counter++;  
	  if(counter > 6) counter = 1;
  }else{
	  counter--;  
	  if(counter < 1) counter = 6;
  }
  
  var element = "pic" + counter;  
  
  document.getElementById(element).setAttribute("class", "active");
  oldElement = element;
}
