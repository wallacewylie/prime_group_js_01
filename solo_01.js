var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var Employee = function (name, number, pay, rating) {
	this.name = name;
	this.number = number;
	this.pay = pay;
	this.rating = rating;

}
	var atticus = new Employee (atticus[0],atticus[1],atticus[2],atticus[3]);
	var jem = new Employee (jem[0], jem[1], jem[2], jem[3]);
	var boo = new Employee (boo[0], boo[1], boo[2], boo[3]);
	var scout = new Employee (scout[0], scout[1], scout[2], scout[3]);

var employees = [atticus, jem, boo, scout];

var bonus = 0;


var compensation = function(Employee) {
   var pay = Employee.pay;
   var number = Employee.number;
   var rating = Employee.rating;
   var name = Employee.name;
   pay = parseInt(pay, 10);
 if (number.length === 4) {
	bonus += 5;
} else if (rating === 5) {
	bonus += 10;
} else if (rating === 4) {
	bonus += 6;
} else if (rating === 3) {
	bonus += 4;
} else (rating <= 2) 
    bonus += 0;

if(pay > 65000) {
	bonus -= 1;
}    

if (bonus > 13) {
    bonus = 13;
} 


return ["Name: " + name, bonus + "%", "$" + Math.round((pay + (bonus/100 * pay))), "$" + Math.round((pay * (bonus / 100)))]; 




}



console.log(compensation(atticus));
console.log(compensation(jem));
console.log(compensation(boo));
console.log(compensation(scout));


    
