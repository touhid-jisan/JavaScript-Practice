/************************************************
*				Function Constructor
*************************************************/
//
//var jhon = {
//	name: 'Jhon',
//	yearOfBirth: 1980,
//	job: 'Teacher'
//};
//
/*
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
*/

/************************************************
*					Object.create 
*************************************************/
/*
var personProto = {
	calculateAge: function() {
		console.log(2020 - this.yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1980;
john.job = 'Teacher';

var jane = Object.create(personProto, {
	name: {value: 'Jane'},
	yearOfBirth: {value : 1969},
	job: {value: 'Designer'}
});
*/

/************************************************
*				Primitives vs Objects
*************************************************/
/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
	name: 'John',
	age: 23
};
var obj2 = obj1;
obj1.age = 32;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
	name : 'Touhid',
	city : 'Dhaka'
};

function chage(a,b) {
	a = 30;
	b.city = 'Comilla'
}

chage(age, obj);
console.log(age);
console.log(obj.city);
*/

/**********************************************************************************
*				First Class Function Passing Function as Arguments
***********************************************************************************/

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for(var i=0; i<arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calAge(el) {
	return 2020 - el;
}

function isFullAge(el) {
	return el >=18;
}
function maxHeartRate(el) {
	if(el >= 18 && el ) {
		return Math.round(206.9 - (0.67 * el));	
	} else {
		return -1;
	}
	
}

var ages = arrayCalc(years, calAge);
var fulAges = arrayCalc(ages, isFullAge);
var heartRates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fulAges);
console.log(heartRates);








