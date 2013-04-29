(function(){
function PrintResult(result){	
	document.getElementById("result").innerHTML = result;
	//alert(result);
}

//Task 1
var button1 = document.getElementById("butt1");
button1.addEventListener("click", function(e){
	var n = prompt("Please enter the end number N", "");
	var number = parseInt(n);
	var result = "Numbers from 1 to N: ";
	for(var i = 1; i <= number; i++){
		result += i + ", "; 
	}
	PrintResult(result);
});

//Task 2
var button2 = document.getElementById("butt2");
button2.addEventListener("click", function(){
	var n = prompt("Please enter the end number N", "");
	var number = parseInt(n);
	var result = "Numbers from 1 to N, not divisable by 3 and 7: ";
	for(var i = 1; i <= number; i++){
	
		if(i%3 != 0 || i%7 != 0)result += i + ", ";
		
	}
	PrintResult(result);
});

//Task 3
var button3 = document.getElementById("butt3");
button3.addEventListener("click", function(){
	var sequence = new Array(2, 5, 9, 56, 17, 22, 50, 15);
	var min = sequence[0];
	var max = sequence[sequence.length-1];
	
	for (var i = 0; i < sequence.length; i++){
		if(sequence[i] < min) min = sequence[i];
		else if(sequence[i] > max) max = sequence[i];
	}
	var result = "Array: " + sequence + "\n";
	result += "Min: " + min + " Max: " + max;
	PrintResult(result);
});

//Task 4
var button4 = document.getElementById("butt4");
button4.addEventListener("click", function(){
	var result = "";
	findSmallest(window);
	findLargest(window);
	findSmallest(navigator);
	findLargest(navigator);
	findSmallest(document);
	findLargest(document);
	
		function findSmallest(object) {
            var smallest = 'zzz';
            for (var property in object) {
                if (property.toString() < smallest) {
                    smallest = property;					
                }
            }
            result += "The lexicographically smallest property in "+object+ " is "+smallest + "; \n";			
        }
        function findLargest(object) {
            var largest = 'AAA';
            for (var property in object) {
                if (property.toString() > largest) {
                    largest = property;
                }
            }
            result += "The lexicographically largest property in " + object + " is " + largest + "; \n";
			
        }
	PrintResult(result);		
});
})();
