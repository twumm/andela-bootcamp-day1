function hotelGuest(fullName, age, gender, country, checkInDay, checkOutDay){
  this.fullName = fullName;
  this.age = age;
  this.gender = gender;
  this.country = country;
  this.checkInDay = checkInDay;
  this.checkOutDay = checkOutDay;

  this.daysLeft = function () {
    this.days = this.checkOutDay - this.checkInDay;
    return this.days;
  };
}

//create a subclass of vipGuest
function vipGuest(fullName, age, gender, country, checkInDay, checkOutDay){
  this.inheritFrom = hotelGuest;
  this.inheritFrom();
	this.serveLunch = function () {
  	return true;
  };
}

// A Guest
firstGuest = new hotelGuest("Alhajiji", 34, "Male", "Togo", 1, 9);
//firstGuest.daysLeft();

vipGuest.prototype = new hotelGuest();

firstVIP = new vipGuest("Obi", 23, "Female", "Asia", 1, 12);