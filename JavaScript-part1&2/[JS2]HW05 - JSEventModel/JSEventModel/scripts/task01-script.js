var next = document.getElementById("next");
var prev = document.getElementById("previous");
next.addEventListener("click", function(){SetActive(true);},false);
prev.addEventListener("click", function(){SetActive(false);},false);

var counter = 1;
var oldElement = "pic1";
	
function SetActive(isNext){
  if(oldElement) document.getElementById(oldElement).setAttribute("class", "inactive");
      
  if(isNext){
	  counter++;  
	  if(counter > 6) counter = 1;
  }
  else{
	  counter--;  
	  if(counter < 1) counter = 6;
  }
  
  var element = "pic" + counter;  
  
  document.getElementById(element).setAttribute("class", "active");
  oldElement = element;
}
