/*A Github repo containing a real-world problem modeled using OOP while taking advantage of
 inheritance, encapsulation, polymorphism and the other OOP concepts.*/
function HotelGuest(fullName, age, gender, country, checkInDay, checkOutDay){
  this.fullName = name;
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

// A Guest
firstGuest = new HotelGuest("Alhajiji", 34, "Male", "Togo", 1, 9);
firstGuest.daysLeft();