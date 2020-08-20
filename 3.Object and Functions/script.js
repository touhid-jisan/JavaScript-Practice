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
/*
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
*/

/**********************************************************************************
*			First Class Functions: Functions Returning Function
***********************************************************************************/
/*
function interviewQuestion(job) {
	if(job === 'Designer') {
		return function(name) {
			console.log(name + ', can you please explaing what UX design is?');
		}
	} else if(job === 'Teacher') {
		return function(name) {
			console.log('What subject do you teach, ' + name);
		}
	} else {
		return function(name) {
			console.log('Hey '+name+ '! what do you do?');
		}
	}
}

var teacherQuestion = interviewQuestion('Teacher');
var designerQuestion = interviewQuestion('Designer');

teacherQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('Designer')('Touhid');
*/
/**********************************************************************************
*			Immediately Invoked Function Expressions (IIFE)
***********************************************************************************/
/*
function game() {
	var score = Math.floor(Math.random() * 10 )+ 1;
	console.log(score);
}
game();
// Same as

(function() {
	var score = Math.floor(Math.random() * 10 )+ 1;
	console.log(score);
})();

(function(number) {
	var score = Math.floor(Math.random() * 20 )+ 1;
	console.log(score - number);
})(8);
*/
/************************************************
*				Closures
*************************************************/
/*
function retirement(retirementAge) {
	var a  = ' years left until requirement';
	return function(yearsOfBirth) {
		var age = 2020 - yearsOfBirth;
		console.log((retirementAge - age) + a);
	}
}
var retirementUS = retirement(66);
retirementUS(1960);
//same as last 2 line
retirement(67)(1966);


var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);

//----------------------------------------------------
// 	chalange (make this interview question in closure)
//-----------------------------------------------------
//function interviewQuestion(job) {
//	if(job === 'Designer') {
//		return function(name) {
//			console.log(name + ', can you please explaing what UX design is?');
//		}
//	} else if(job === 'Teacher') {
//		return function(name) {
//			console.log('What subject do you teach, ' + name);
//		}
//	} else {
//		return function(name) {
//			console.log('Hey '+name+ '! what do you do?');
//		}
//	}
//}

function interviewQuestion(job) {
	//in closure we always return same function
	return function(name) {
		if(job === 'Designer') {
			console.log(name + ', can you please explaing what UX design is?');
		} else if(job === 'Teacher') {
			console.log('What subject do you teach, ' + name);
		} else {
			console.log('Hey '+name+ '! what do you do?');
		}
	}
}

interviewQuestion('Designer')('Touhid');
// same as previous line
var jobName = interviewQuestion('Teacher');
jobName('Jisan');
*/

/************************************************
*			Bind, Call and Apply
*************************************************/

var john = {
	name : 'John',
	age: 26,
	job: 'Teacher',
	presentation : function(style, timeOfDay) {
		if(style === 'formal') {
			console.log('Good ' + timeOfDay + ', Ladis and Gentlemen! I\'m '+ this.name + ', I\'m '+ this.job + ', I\'m ' + this.age + ' years old');
		} else if (style === 'friendly') {
			console.log('Hey! whats up! I\'m '+ this.name + ', I\'m '+ this.job + ', I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
		}
	}
}

var emily = {
	name: 'Emily',
	age : 35,
	job : 'designer'
}

// call method
john.presentation('friendly', 'morning') 
// call method allows using john object presentation method
john.presentation.call(emily, 'friendly', 'afternoon'); // this is called method borrowing
john.presentation('friendly', 'morning')


// apply method
//john.presentation.apply(emily, ['friendly', 'afternoon']);

// bind method - bind doesn't immediately call a function, instead generate a copy of function
var johnFriendly = john.presentation.bind(john, 'friendly'); // bind allowed us to preset some arguments its called 

johnFriendly('morning');
johnFriendly('afternoon');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

// bind example 2
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

function isFullAge(limit, el) {
	return el >= limit;
}

var ages = arrayCalc(years, calAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
















