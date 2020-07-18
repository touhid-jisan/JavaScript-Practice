
/*********************************************************
*              1 - Varibale and Data Types
**********************************************************
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



/**********************************************************
*       2 - Variable mutation and type correction
***********************************************************
*/
/*
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
*/




/************************************************************
*                   3 - Basic operation
*************************************************************
*/
/*
var year, johnYear, markYear;
year = 2020;

// Math operator
johnYear = year -29;
markYear = year -33;

console.log(johnYear);
console.log(year * 2);
console.log(year / 3);


// Logical operator

ageJohn = 28;
ageMark = 33;
var johnOld = ageJohn > ageMark;
console.log(johnOld)

var ternaryOp = (ageMark<ageJohn) ? 'John is older' : 'Mark is older';
alert(ternaryOp);

//typeof operator
console.log(typeof ageJohn);
console.log(typeof johnOld);
console.log(typeof ternaryOp);
var x;
console.log(typeof x);
*/




/***********************************************************
*                   4 - Operator precedence
************************************************************
*/
/*
var now = 2020;
var yearJhon = 1969;
var fullAge = 18;\

// Multiple operator
var isFullAge = now-yearJhon >=fullAge; // check js precedence table
console.log(isFullAge);

// Grouping
var ageJhon = now - yearJhon;
var ageMark = 35;
var avgAge = (ageJhon+ageMark)/2;
console.log(avgAge);

// Multiple assignments

var x,y;
x = y = (3+5)*4-6; //8*4-6 //32-6 //26 //we all know assignment happens from right to left

//More operators
x = x*2;
x *= 2;
x += 10;
x -= 10;
x++;
/*


/**********************************************************
*                       Coding Chalange - 1
************************************************************
*/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*/

/*
var massMark = prompt('Hello Mark please enter your mass in kg');
var heightMark = prompt('Enter your height in meter')


var massJohn = prompt('Hello John please enter your mass in kg');
var heightJohn = prompt('Enter your height in meter')


var bmiMark = massMark / (heightMark*heightMark);
var bmiJohn = massJohn / (heightJohn*heightJohn);
console.log(bmiMark, bmiJohn);

var flag = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI higher than John\'s? '+ flag);

*/
















