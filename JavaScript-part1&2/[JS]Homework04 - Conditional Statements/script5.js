function TypeAnswer (Id, result){
	document.getElementById(Id).innerHTML = result;
}

//5.Write script that asks for a digit and depending on the input shows the name of that digit (in English) using a switch statement.

var digit = prompt("Please enter one digit", "");    

switch(parseInt(digit)){
	case 0: result = "Zero"; break;
	case 1: result = "One"; break;
	case 2: result = "Two"; break;
	case 3: result = "Three"; break;
	case 4: result = "Four"; break;
	case 5: result = "Five"; break;
	case 6: result = "Six"; break;
	case 7: result = "Seven"; break;
	case 8: result = "Eight"; break;
	case 9: result = "Nine"; break;
	default: result = "Not a valid digit!"; break;
}

TypeAnswer("demo5", result);