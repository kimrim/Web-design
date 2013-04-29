(function(){
function PrintResult(result){	
	document.getElementById("result").innerHTML = result;
	//alert(result);
}

//Task 1
var button1 = document.getElementById("butt1");
button1.addEventListener("click", function(){
	
	function PointBuild(coordX, coordY){
		return{
			X:coordX,
			Y:coordY			
		};
	}
	
	function getDistance(firstPoint, secondPoint){
		return Math.sqrt((firstPoint.X - secondPoint.X)*(firstPoint.X - secondPoint.X) +
		(firstPoint.Y - secondPoint.Y)*(firstPoint.Y - secondPoint.Y))
	}
	
	var point1 = PointBuild(10, 6);
	var point2 = PointBuild(4, 1);
	var line1 = getDistance(point1, point2);
	var line2 = getDistance(PointBuild(5,5), PointBuild(7,12));
	var line3 = getDistance(PointBuild(-5,1), PointBuild(0,9));
	var triangle = false;
	if(line1*line1 + line2*line2 == line3*line3) triangle = true;
	else if(line1*line1 + line3*line3 == line2*line2) triangle = true;
	else if(line2*line2 + line3*line3 == line1*line1) triangle = true;
	
	var result = "Line1: " + line1.toFixed(2) + ", line2: " + line2.toFixed(2) + ", line3: " + line3.toFixed(2);
	result += "<br/>";
	result += "From pythagoras: in a triangle(a^2 + b^2 = c^2). The above lines can form a triangle?: " + triangle; 
	PrintResult(result);
});

//Task 2
var button2 = document.getElementById("butt2");
button2.addEventListener("click", function(){
	var arr = [1,2,1,4,1,3,4,1,111,3,2,1,"1"];
	Array.prototype.remove = function(element){
		var newArr = [];
		for (var i = 0, j = 0; i < arr.length; i++){
			if(arr[i] === parseInt(element)) continue;
			newArr[j] = arr[i];
			j++;
		}
		arr = newArr;
	}
	
	arr.remove(1);
	PrintResult("Removing '1' from the array => " + arr);
});

//Task 3
var button3 = document.getElementById("butt3");
button3.addEventListener("click", function(){
	//function will copy all properties recursively
	function clone(obj){
		if(obj == null || typeof(obj) != 'object') return obj;
		var temp = obj.constructor(); // changed

		for(var key in obj)
			temp[key] = clone(obj[key]);
		return temp;
	}
	
	var car = {model :"Opel", color : "blue"};
	var secondCar = car;        //normal copy, changes original color
	secondCar.color = "red";
	var cloneCar = clone(car);  //deep copy, does not change original
	cloneCar.color = "black";
	
	PrintResult("No proper result can be printed, look at the code instead");
});

//Task 4
var button4 = document.getElementById("butt4");
button4.addEventListener("click", function(){
	function hasProperty(obj, prop) {
		if (obj.hasOwnProperty(prop)) return true;				 
		if (prop in obj) return true;		 
		return false;
	}

	var car = {model :"Opel", color : "blue"};
	var result = hasProperty(car, "color");
	PrintResult("The car has color?: " + result);		
});

//Task 5
var button5 = document.getElementById("butt5");
button5.addEventListener("click", function(){
	var persons = [
	  {firstname : "Gosho", lastname: "Petrov", age: 32}, 
	  {firstname : "Bay", lastname: "Ivan", age: 81},
	  {firstname : "Kolyo", lastname: "Terorista", age: 12}
	  ];
	  
	  var minAge = persons[0].age;
	  var youngestPerson = persons[0];
	  for(var i in persons){
		var age = persons[i].age;
		if(age < minAge) {
		minAge = age;	
		youngestPerson = persons[i];
		}	
	  }
	  
	PrintResult("Youngest person: " + youngestPerson.firstname + " " + youngestPerson.lastname);	
});

//Task 6
var button6 = document.getElementById("butt6");
button6.addEventListener("click", function(){
	function group(people, prop) {
		switch (prop) {
			case "firstName":
			case "lastName":
			case "age":
				{
					var groups = {};
					people.map(function (p) {
						if (!groups[p[prop]]) groups[p[prop]] = new Array();							
						groups[p[prop]].push(p);
					});
					return groups;
				} break;
			default:
				alert("No such property exists in the object"); break;
		}
	}
	
	function Person(firstName, lastName, age) {		
			this.firstName = firstName;
			this.lastName = lastName;
			this.age = age;
			this.toString = function () {
				return "name: " + this.firstName + " " +  this.lastName + ", age: " + this.age;
			}		
	}
	
	var people = [new Person("Gosho", "Petrov", 32), new Person("Bay", "Ivan", 81), new Person("Gosho", "Goshev", 52),
				  new Person("Kolyo", "Terorista", 12), new Person("Kolyo", "Bombeto", 22) ];	 
	 
	var grouped = group(people, "firstName"); 
	var result = "";
	for (i in grouped) {result += "<b>" + i + "</b>" + ": " + grouped[i] + "; <br/>"}
	PrintResult(result);		
});
})()