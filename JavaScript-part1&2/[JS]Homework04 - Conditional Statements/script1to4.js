function TypeAnswer (Id, result){
	document.getElementById(Id).innerHTML = result;
}

//1.Write an if statement that examines two integer variables and exchanges their values if the first one is greater than the second one.
var x = 16;
var y = 10;
var result;

if (x > y){
	var temp = x;
	x = y;
	y = temp;
}

TypeAnswer("demo1", "Values for (x,y): " + x + ", " + y);

//2.Write a script that shows the sign (+ or -) of the product of three real numbers without calculating it. Use a sequence of if statements.
var a = -5;
var b = 3;
var c = -1;
var minuses = 0;

if (a < 0) minuses++;
if (b < 0) minuses++;
if (c < 0) minuses++;

if (minuses % 2 == 0) result = "Product is positive";
else result = "Product is negative";

TypeAnswer("demo2", result);

//3.Write a script that finds the biggest of three integers using nested if statements.
var a = -5;
var b = 3;
var c = -1;
var largest;
var second;

if (a > b){
	if (a > c) largest = a;
	else largest = c;
}
else {
	if (b > c) largest = b;
	else largest = c;
}

TypeAnswer("demo3", "The largest number is " + largest);

//4.Sort 3 real values in descending order using nested if statements.
//uses the data in task 3
var largest;
var second;
var smallest;

if (a > b){
	if (a > c){
		largest = a;
		if (c > b) {second = c; smallest = b;}
		else {second = b; smallest = c}
	}
	else {
		largest = c;
		second = a;
		smallest = b;
	}
}
else {
	if (b > c) {
		largest = b;
		if (c > a) {second = c; smallest = a;}
		else {second = a; smallest = c;}
	}
	else {
		largest = c;
		second = b;
		smallest = a;
	}	
}

TypeAnswer("demo4", "In descending order: " + largest +", " + second + ", " + smallest);








