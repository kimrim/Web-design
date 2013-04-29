(function(){
function PrintResult(result){	
	document.getElementById("result").innerHTML = result;
	//alert(result);
}

//Task 1
var button1 = document.getElementById("butt1");
button1.addEventListener("click", function(){
	var result= "Array of 20 numbers (1-20): ";
	var array = [];
	for(var i = 1; i <= 20; i++){
		array[i] = i;		
	}
	for (number in array) result += number*5 + ", ";
	PrintResult(result);
});

//Task 2
var button2 = document.getElementById("butt2");
button2.addEventListener("click", function(){
	var firstArray = new Array( 'a', 'b', 'c', 'd', 'e' );
	var secondArray = new Array( 'a', 'b', 'c', 'd', 'b', 'f');
	var smallerLength = Math.min(firstArray.length, secondArray.length);
	var firstArraySmaller = false;
	var secondArraySmaller = false;
	var result = "Compared 2 arrays A = " + firstArray + " and B = " + secondArray + ": \n";

	for (var i = 0; i < smallerLength; i++)
	{
		if (firstArray[i] < secondArray[i])
		{
			firstArraySmaller = true;
			result += "Lexicographically, array A is first";
			break;
		}
		else if (firstArray[i] > secondArray[i])
		{
			secondArraySmaller = true;
			result += "Lexicographically, array B is first";
			break;
		}
	}

	if (firstArraySmaller == false && secondArraySmaller == false)    //Condition where both arrays have same numbers
	{
		if (firstArray.Length < secondArray.Length)                   //The shorter length determines the winner
		{
			result += "Lexicographically, array A is first";
		}
		else if (firstArray.Length > secondArray.Length)
		{
			result += "Lexicographically, array B is first";
		}
		else if (firstArray.Length == secondArray.Length)
		{
			result += "The arrays are equal";
		}
	}
	PrintResult(result);
});

//Task 3
var button3 = document.getElementById("butt3");
button3.addEventListener("click", function(){
	var array = new Array( 2, 2, 1, 5, 7, 7, 7, 9, 3, 2 );
	var maxCounter = 0;
	var start = 0;

	for (var i = 0; i < array.length - 1; i++)
	{
		var counter = 1;
		while (i < array.length - 1 && array[i] == array[i + 1])    //for each element checks the next ones that are equal
		{
			counter++;
			i++;                     //this makes sure that after the outside loop will continue from the last equal number(avoiding repetition)
		}
		if (counter > maxCounter)
		{
			maxCounter = counter;
			start = i - maxCounter + 1;
		}
	}
	
	var result = "The maximal sequence in (" + array + ") is: ";
	for (var i = start; i < start + maxCounter; i++)
	{
		result += array[i] + ", ";
	}
	
	PrintResult(result);
});

//Task 4
var button4 = document.getElementById("butt4");
button4.addEventListener("click", function(){
	var array = new Array( 2, 2, 1, 3, 5, 7, 7, 9, 10, 13 );
	var maxCounter = 0;
	var start = 0;

	for (var i = 0; i < array.length - 1; i++)
	{
		var counter = 1;
		while (i < array.length - 1 && array[i] < array[i + 1])    
		{
			counter++;
			i++;                    
		}
		if (counter > maxCounter)
		{
			maxCounter = counter;
			start = i - maxCounter + 1;
		}
	}
	
	var result = "The maximal increasing sequence in (" + array + ") is: ";
	for (var i = start; i < start + maxCounter; i++)
	{
		result += array[i] + ", ";
	}
	
	PrintResult(result);
	PrintResult(result);		
});

//Task 5
var button5 = document.getElementById("butt5");
button5.addEventListener("click", function(){
	var array = new Array( 7, 5, -2, 3, -7, 11, 1, 9 );
	var result = "The initial array (" + array + "); when sorted: ";
	
	for (var element = 0; element < array.length - 1; element++)   //go through each element (without the very last)
	{
		for (var i = element+1; i < array.length; i++)              //swap current element with the next smallest number
		{
			if (array[element] > array[i])
			{
				var tempNumber = array[element];
				array[element] = array[i];
				array[i] = tempNumber;
			}
		}
	}
	
	for (var i = 0; i < array.length; i++)
	{
		result += array[i] + ", ";
		
	}
	
	PrintResult(result);		
});

//Task 6
var button6 = document.getElementById("butt6");
button6.addEventListener("click", function(){
	var array = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
	var counter = 1;
	var bestCount = 1;
	var result = "In the array (" + array + ") "; 

	array.sort();
	var bestNumber = array[0];

	if (array.length > 1)
	{
		for (var i = 1; i < array.length; i++)
		{
			if (array[i] == array[i - 1])
			{
				counter++;
			}
			else
			{
				if (counter > bestCount)
				{
					bestCount = counter;
					bestNumber = array[i - 1];
				}
				counter = 1;
			}
		}
	}
            
	result += "the number " + bestNumber + " appears most frequently --> " + bestCount + " times";
	PrintResult(result);		
});

//Task 7
var button7 = document.getElementById("butt7");
button7.addEventListener("click", function(){
	var array = [1, 4, 4, 6, 9, 14, 17];
	var searchNumber = 14;
	var maxIndex = array.length-1;
	var minIndex = 0;
	var middleIndex = 0;
	var noNumber = true;
	var result = "";

	while (maxIndex >= minIndex)
	{
		middleIndex = (maxIndex + minIndex) / 2;        //This takes the average of Min Max   		

		if (array[middleIndex] > searchNumber)          //Max-1 if the searched number is lower than the average, or Min+1 if higher
		{                                               
			maxIndex = middleIndex - 1;
		}
		else if (array[middleIndex] < searchNumber)
		{
			minIndex = middleIndex + 1;
		}
		else if (array[middleIndex] == searchNumber)
		{
			noNumber = false;
			result = "The index of the number " + searchNumber + " in the array (" + array + ") is: " + middleIndex;
			break;
		}		
	}
	if (noNumber)
	{
		result = "Number not found!";
	}
	PrintResult(result);		
});
})();
