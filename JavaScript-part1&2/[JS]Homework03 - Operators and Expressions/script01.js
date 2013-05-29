function TypeAnswer (Id, result){
	document.getElementById(Id).innerHTML = result;
}

// 1.Write an expression that checks if given integer is odd or even.
var x = 14;
var result; 

if (x % 2 == 0){
	result = "Even";
} else {
	result = "Odd"
}

TypeAnswer("demo1", result);

// 2.Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.
x = 35;
if (x % 5 == 0 && x % 7 == 0){
	result = "Divisable by 7 and 5";
} else{
	result = "Not divisable by 7 and/or 5";
}

TypeAnswer("demo2", result);

// 3.Write an expression that calculates rectangle’s area by given width and height.
var width = 8;
var height = 6;

result = "Rectangle area is " + width*height;
TypeAnswer("demo3", result);

// 4.Write an expression that checks for given integer if its third digit (right-to-left) is 7. E. g. 1732 ? true.
x = 1765;

x /= 100;
x = parseInt(x);

if (x % 10 == 7) {
	result = "The third digit is 7";
} else{
	result = "The third digit is not 7";
}

TypeAnswer("demo4", result);

// 5. Write a boolean expression for finding if the bit 3 (counting from 0) of a given integer is 1 or 0.
var number = 9;   //in binary - 1001

if((number >> 3) & 1){
	result = "Third bit is 1";
} else{
	result = "Third bit is 0";
}

TypeAnswer("demo5", result);

// 6.Write an expression that checks if given point (x,  y) is within a circle K(O, 5).
var x = 3;
var y = 4;

if(x*x + y*y < 25){
	result = "The point (" + x + "," + y +") is in the circle";
} else{
	result = "The point (" + x + "," + y +") is outside the circle";
}

TypeAnswer("demo6", result);

// 7.Write an expression that checks if given positive integer number n (n ? 100) is prime. E.g. 37 is prime.
var n = 18;
var prime = true;

for (var i = 2; i < Math.sqrt(n); i++)
{
	if(n % i == 0){
		prime = false;
	}	
}

result = n + " is prime? : " + prime;
TypeAnswer("demo7", result);

// 8.Write an expression that calculates trapezoid's area by given sides a and b and height h.
var a = 6;
var b = 10;
var h = 4;

result = (a + b)*h / 2;
result = "Area = " + result;
TypeAnswer("demo8", result);

// 9.Write an expression that checks for given point (x, y) if it is within the circle K( (1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2).
var pointX = 3;
var pointY = 3;
var inCircle = false;
var inSquare = false;

if (Math.sqrt((pointX-1)*(pointX-1) + (pointY-1)*(pointY-1)) < 3){
	inCircle = true;
}

if ((pointX < 5 && pointX > -1) && (pointY < 1 && pointY > -1)){
	inSquare = true;
}

result = "Inside the circle : " + inCircle + ". ";
result += "Inside the rectangle : " + inSquare;

TypeAnswer("demo9", result);
