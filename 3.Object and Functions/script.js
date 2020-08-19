// Function Constructor
//
//var jhon = {
//	name: 'Jhon',
//	yearOfBirth: 1980,
//	job: 'Teacher'
//};
//

var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person.prototype.calculateAge = function () {
	console.log(2020 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var jhon = new Person('Jhon', 1990, 'Teacher');
var mark = new Person('Mark', 1980, 'Designer');
var jane = new Person('Jane', 1970, 'Retired');
jhon.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(jhon.lastName);
console.log(mark.lastName);
console.log(jane.lastName);
