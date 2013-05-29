//7.Write a script that finds the greatest of given 5 variables.
function TypeAnswer (Id, result){
	document.getElementById(Id).innerHTML = result;
}

var numbers = [1,2,3,4,5];
var greatest = numbers[0];

for (var i = 1; i < 5; i++)	
{
	if (numbers[i] > greatest) greatest = numbers[i];
}

TypeAnswer("demo7", "The largest number is: " + greatest);