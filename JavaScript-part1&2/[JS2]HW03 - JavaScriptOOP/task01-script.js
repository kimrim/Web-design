//used for inheritance by copying all properties of the parent, 
//uber reference to parent is also included
function extend(Child, Parent) { 
	var p = Parent.prototype; 
	var c = Child.prototype; 
	for (var i in p) { 
		 c[i] = p[i]; 
	} 
	c.uber = p;
}

//Base class for propulsors
function PropulsionUnit() {}

PropulsionUnit.prototype.name = "base propulsion unit";
PropulsionUnit.prototype.toString = function(){return this.name;};

//Children classes
function Wheel(radius){
	this.radius = radius;
	PropulsionUnit.apply(this, arguments);
}

extend(Wheel, PropulsionUnit);

Wheel.prototype.name = "wheel";
Wheel.prototype.applyAcceleration = function(){
	return 2 * Math.PI * this.radius;
}

//================================================
function PropellingNozzle(power, afterburnerSwitchOn){
	this.power = power;
	this.afterburnerSwitchOn = afterburnerSwitchOn;
	PropulsionUnit.apply(this, arguments);
}

extend(PropellingNozzle, PropulsionUnit);

PropellingNozzle.prototype.name = "nozzle";
PropellingNozzle.prototype.applyAcceleration = function(){
	if(this.afterburnerSwitchOn){
		return this.power*2;
	}
	else{
		return this.power;
	}
}

//=================================================
function Propeller(finsCount, spinDirectionClockwise){
	this.finsCount = finsCount;
	this.spinDirectionClockwise = spinDirectionClockwise;
	PropulsionUnit.apply(this, arguments);
}

extend(Propeller, PropulsionUnit);

Propeller.prototype.name = "propeller";
Propeller.prototype.applyAcceleration = function(){
	if(this.spinDirectionClockwise == true){
		return this.finsCount;
	}
	else {
		return (-this.finsCount);
	}
}
//=====================================================

//Base class for vehicles
function Vehicle(speed, propulsionUnits) {        
	this.speed = speed;
	this.propulsionUnits = propulsionUnits;        
}

Vehicle.prototype.name = "base vehicle";	
Vehicle.prototype.accelerate = function(){
	for(var i = 0; i < this.propulsionUnits.length; i++){
		this.speed += this.propulsionUnits[i].applyAcceleration();
	}
}

Vehicle.prototype.toString = function(){return "Name: " + this.name + ", current speed: " + this.speed;};	

//Children classes
function LandVehicle(speed, propulsionUnits){
	for(var i = 0; i < propulsionUnits.length; i++){
		if(!(propulsionUnits[i] instanceof Wheel)){
			throw Error("The propulsion units of land vehicles can only be of type Wheel");
		}
	}
	if(propulsionUnits.length != 4){
		throw Error("The number of wheels should be exactly 4!");
	}
	Vehicle.apply(this, arguments);		
}

extend(LandVehicle, Vehicle);

LandVehicle.prototype.name = "land vehicle";

//====================================================
function AirVehicle(speed, propulsionUnits){
	if(propulsionUnits.length != 1){
		throw Error("The propulsion units of aircrafts should be exactly 1!");
	}
	if(!(propulsionUnits[0] instanceof PropellingNozzle)){ 
		throw Error("The propulsion units of aircrafts can only be of type PropellingNozzle!");
	}
	Vehicle.apply(this, arguments);		
}

extend(AirVehicle, Vehicle);
AirVehicle.prototype.name = "aircraft";

//if the afterburners are on, switch them off and vice-versa
AirVehicle.prototype.switchAfterburner = function(){
	if(this.propulsionUnits[0].afterburnerSwitchOn == true){
		this.propulsionUnits[0].afterburnerSwitchOn = false;
	}
	else if(this.propulsionUnits[0].afterburnerSwitchOn == false){
		this.propulsionUnits[0].afterburnerSwitchOn = true;
	}
}

//=====================================================
function WaterVehicle(speed, propulsionUnits){
	for(var i = 0; i < propulsionUnits.length; i++){
		if(!(propulsionUnits[i] instanceof Propeller)){
			throw Error("The propulsion units of water vehicles can only be of type Propeller!");
		}		
	}		
	Vehicle.apply(this, arguments);		
}

extend(WaterVehicle, Vehicle);
WaterVehicle.prototype.name = "water vehicle";

//if the direction is clockwise change it to counter-clockwise and vise-versa
WaterVehicle.prototype.changeSpinDirection = function(){
	for(var fan = 0; fan < this.propulsionUnits.length; fan++){
		if(this.propulsionUnits[fan].spinDirectionClockwise){
			this.propulsionUnits[fan].spinDirectionClockwise = false;
		}
		else{
			this.propulsionUnits[fan].spinDirectionClockwise = true;
		}
	}
}

