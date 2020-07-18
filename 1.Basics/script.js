
/******************************
* 1 - Varibale and Data Types
*/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 29;
var old = false;
console.log(old);

var job;
console.log(job); // undefined 

job = 'teacher';
console.log(job);

// Variable Namimg Rules
var _isOld = true;
var $middleName = 'A';
*/


/*******************************************
* 2 - Variable mutation and type correction
*/

// Type correction
var firstName = 'John';
var age = 29;
console.log(firstName + ' ' + age); //converts int to string

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old '+ job + '. Is he married? Ans: ' + isMarried); //converts boolean to string

// Variable Mutation
age = 'twenty nine'; // age was a int now string
job = 'driver';

alert(firstName + ' is a ' + age + ' year old '+ job + '. Is he married? Ans: ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' '+ lastName);



























