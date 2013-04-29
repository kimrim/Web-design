(function(){
function PrintResult(result){	
	document.getElementById("result").innerHTML = result;
	//alert(result);
}

//Task 1
var button1 = document.getElementById("butt1");
button1.addEventListener("click", function(){
	var number = prompt("Enter a number", "");
	number = parseInt(number);
	number = number % 10;
	var result = "The last digit of the given number is: ";
	switch(number)
	{
		case 0: result += "Zero"; break;
		case 1: result += "One"; break;
		case 2: result += "Two"; break;
		case 3: result += "Three"; break;
		case 4: result += "Four"; break;
		case 5: result += "Five"; break;
		case 6: result += "Six"; break;
		case 7: result += "Seven"; break;
		case 8: result += "Eight"; break;
		case 9: result += "Nine"; break;
		default: "N/A"; break;
	}
	PrintResult(result);
});

//Task 2
var button2 = document.getElementById("butt2");
button2.addEventListener("click", function(){
	var number = prompt("Enter a number", "");
	var newNum = new String();
	for (var i = 0; i < number.length; i++){
		newNum += number[number.length - 1 - i];
	}
	var result = parseInt(newNum);
	PrintResult(result);
});

//Task 3
var button3 = document.getElementById("butt3");
button3.addEventListener("click", function(){
	//will search in the task description
	
	var input = prompt("Enter a word to search for", "");
	var insensitive = confirm("OK - for case-insensitive search, or Cancel - for default");
	
	//function overloading condition
	var result;
	if(insensitive) result = SearchWord(input, true);
	else result = SearchWord(input)
	
	function SearchWord(word, caseInsensitive) {  
		var text = document.getElementById("sample").innerHTML;
		var arr = text.split(/[\s,\.]+/);	
		if(arguments.length > 1) word = word.toLowerCase();     //overloading		
		var positions = "The word \"" + word + "\" is found at positions: ";
		var found = false;
		for (i = 0; i < arr.length; i++) {
			if(arguments.length > 1) arr[i] = arr[i].toLowerCase();    //overloading
			if(word == arr[i]) {
				positions += i + ", ";
				found = true;
			}
		}
		if(found) return positions;
		else return "Word not found";
		
	}	
	
	PrintResult(result);
});

//Task 4
var button4 = document.getElementById("butt4");
button4.addEventListener("click", function(){
	var count = document.getElementsByTagName("div");
	PrintResult("Number of divs = " + count.length);		
});

//Task 5
var button5 = document.getElementById("butt5");
button5.addEventListener("click", function(){
	var arr = [1, 3, 9, 144, 87, 2, 3, 14, 3];
	var number = 3;
	
	function CountNumber(arr, number){
		var counter = 0;
		for(i = 0; i< arr.length; i++){
			if(arr[i] == number) counter++;
		}
		return counter;
	}
	
	var result = CountNumber(arr, number);	
	PrintResult("in the array(" + arr + ") the number " + number + " can be found " + result + " times");	
});

//Task 6
var button6 = document.getElementById("butt6");
button6.addEventListener("click", function(){
	var arr = [1, 2, 6, 4, 2, 19];
	var pos = 2;
	var result = "In the arrary (" + arr +"), the number at position " + pos + " is larger than its neighbours?: ";
	
	function FindNeighbours(arr, pos){
		if (pos > 1 && pos < arr.length - 1)
		{
			if (arr[pos] > arr[pos - 1] && arr[pos] > arr[pos + 1])
			{
				return "true";
			}
		}
		return "false";
	}
	
	result += FindNeighbours(arr, pos);
	PrintResult(result);		
});

//Task 7
var button7 = document.getElementById("butt7");
button7.addEventListener("click", function(){
	var arr = [1, 2, 6, 4, 12, 19];
	var position = 0;
	var result = "In the arrary (" + arr +"), the first number that is larger than its neighbours is at pos: ";
	
	for(var i = 0; i < arr.length; i++){
		position = FindNeighbours(arr, i);
		if (position >= 0)
		{
			break;
		}
	}
	
	function FindNeighbours(arr, pos){
		if (pos > 1 && pos < arr.length - 1)
		{
			if (arr[pos] > arr[pos - 1] && arr[pos] > arr[pos + 1])
			{
				return pos;
			}
		}
		return -1;
	}
	
	if(position >= 0) result += position;
	else result = "No such member exists";
	PrintResult(result);		
});
})();
