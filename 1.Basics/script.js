
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
*                   3 - Basic operator
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

if(bmiMark > bmiJhon) {
    console.log('Mark\'s BMI is higher than John\'s BMI');
} else {
    console.log('John\'s BMI is higher than Mark\'s BMI');
}

*/


/***********************************************************
*                   5 - if/else statement
************************************************************
*/

/*
var firstName = 'Jhon';
var civilStatus = 'single';
if(civilStatus === 'married') {
    console.log(firstName + ' is Married');
} else {
    console.log(firstName + ' will hopefully marry soon');
}

var isMarried = false;
if(isMarried) {
    console.log(firstName + ' is Married');
}else {
    console.log(firstName + ' will hopefully marry soon');
}
*/

/***********************************************************
*                   6 - Boolean logic
************************************************************
*/

/*
var firstName = 'John';
var age = 29;
if(age < 13) {
    console.log(firstName + ' is a boy.');
} else if(age >= 13 && age <20) {
    console.log(firstName + ' is a teenager.');
} else if(age >=20 && age <30) {
    console.log(firstName + ' is a young boy.');
} else {
    console.log(firstName + ' is a man.');
}
*/


/***********************************************************
*       7 - Ternary operator and Switch statement
************************************************************
*/

/*
// Ternary operator
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

var canDrink = (age>=18) ? 'bear': 'juice';
console.log(firstName + ' drinks ' + canDrink);

// Switch statement
var job = prompt('Enter your profession');

switch(job) {
    case 'Teacher':
    case 'Instructure': //same goes for java ;)
        console.log(firstName + ' teaches kids how to code!');
        break;
    case 'Drive':
        console.log(firstName + ' knows how to drive.');
        break;
    case 'Designer': 
        console.log(firstName + ' designs good websites');
        break;
    default:
        console.log(firstName + ' is good at his job');
}


age 15;
switch(true) {
    case age<13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30: 
        console.log(firstName + ' is a young boy.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/


/***********************************************************
*    8 - Truthy and Falsy values abd Equality operator
************************************************************
*/

// falsy values: undefined, null, 0 '', NaN
// truthy vaues: all the values that are not falsy
var height;
if(height) {
    console.log('Variable is defined');
} else {
    console.log('Variable is not defined');
}

height =0;
// 0 is falsy value
if(height) {
    console.log('for 0 = Variable is defined');
} else {
    console.log('for 0 = Variable is not defined');
}

if(height || height === 0) {
    console.log('for 0 = Variable is defined');
} else {
    console.log('for 0 = Variable is not defined');
}

// Equality operator
height =23;
// here '23' is a string and we are using '=='. so '==' converts '23'(string) into integer
// but if we use '===' then it will strictly match 23(int) with'23'(string).
// 23 == '23' return true
// 23 === '23' return false
if(height == '23')  {
    console.log('the === operator does type coercion');
}



/***********************************************************
*                   4 - Operator precedence
************************************************************
*/













