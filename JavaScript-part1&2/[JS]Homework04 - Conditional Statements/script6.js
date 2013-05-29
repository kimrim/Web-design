//6.Write a script that enters the coefficients a, b and c of a quadratic equation
	//a*x2 + b*x + c = 0
	//and calculates and prints its real roots. Note that quadratic equations may have 0, 1 or 2 real roots.

function TypeAnswer (Id, result){
	document.getElementById(Id).innerHTML = result;
}

var a = prompt("enter coeff a:", "");
var b = prompt("enter coeff b:", "");
var c = prompt("enter coeff c:", "");

var disc = b*b - 4*a*c;

if (disc < 0) result = "There are no real roots";
else {
	root1 = (-b - Math.sqrt(disc))/2*a;
	root2 = (-b + Math.sqrt(disc))/2*a;
	if (disc == 0) result = "Only one root: " + root1;
	else result = "Root 1 = " + root1 + "; root 2 = " + root2;
}

TypeAnswer("demo6", result);