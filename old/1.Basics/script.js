
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
/*
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
*/


/***********************************************************
*                   Coding Chalange - 2
************************************************************
*/
/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/

/*
var johnTeamAvg = (110 + 120+ 103)/3;
var mikeTeamAvg = (116 + 94 + 123)/3
console.log(johnTeamAvg, mikeTeamAvg);
if(johnTeamAvg > mikeTeamAvg) {
    console.log('Joh\'s Team Wins');
} else if(mikeTeamAvg > johnTeamAvg) {
    console.log('Mike\'s Team Wins');
} else{
    console.log('Draw');
}

var maryTeamAvg = (97+134+105)/3;

console.log(johnTeamAvg, mikeTeamAvg, maryTeamAvg);

if(johnTeamAvg > mikeTeamAvg && johnTeamAvg >maryTeamAvg) {
    console.log('Joh\'s Team Wins with ' + johnTeamAvg );
} else if(mikeTeamAvg > johnTeamAvg && mikeTeamAvg > maryTeamAvg) {
    console.log('Mike\'s Team Wins with ' + mikeTeamAvg);
} else if(maryTeamAvg > johnTeamAvg && maryTeamAvg > mikeTeamAvg) {
     console.log('Mary\'s Team Wins with ' + maryTeamAvg);
} else {
     console.log('Draw');
}

*/


/***********************************************************
*                       9 - Functions
************************************************************
*/
/*
var touhidAge = calculateAge(1994);
var israAge = calculateAge(1995);

var touhidString = showBirth('Touhid', 1994, 7, 6, touhidAge);
var israString = showBirth('Isra', 1995, 8, 6, israAge);

function calculateAge(year) {
    return 2020 - year;
}

function showBirth(name, birthYear, birthMonth, birthDate, age) {
    return (name+ ' born on, Year : '+ birthYear + ', Month : '+birthMonth + ', Date : ' + birthDate +'. And '+age+ ' years old.\n');
}

console.log(touhidString,israString);
*/



/***********************************************************
*                 10 - Function Statement
************************************************************
*/

/*
// Function declaration
//function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job,  firstName) {
    switch(job) {
        case 'Teacher':
            return firstName + ' teaches kids how to code';
            // as we are returning something we donnot use break. ;)  
        case 'Driver':
            return firstName + ' drives BMW';
        case 'Designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

var result = whatDoYouDo('Designer', 'Touhid');
console.log(result);
console.log(whatDoYouDo('Teacher', 'Isra'));
*/


/***********************************************************
*                   11 - Arrays
************************************************************
*/

/*
var arr1 = ['touhid', 'islam', 'jisan'];
var arr2 = new Array(1990,1991, 1992);
console.log(arr1[2]);
console.log(arr2.length);

arr1[2] = 'isra';
arr1[arr1.length] = 'Jisan';
console.log(arr1[2]);
console.log(arr1[3]);

// different data types

var jhon = ['Jhon', 'Smith', 1990, 'teacher', false];
jhon.push('blue');
console.log(jhon);
jhon.pop();
console.log(jhon);
jhon.unshift('Mr.');
console.log(jhon);

console.log(jhon.indexOf(1990));

var isDesigner = jhon.indexOf('designer') === -1 ? 'Jhon is not a desginer' : 'Jhon is a designer';
console.log(isDesigner);

*/

/***********************************************************
*                  12 - Objects and Properties
************************************************************
*/


/*
// Object Literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

var x = 'firstName';
console.log(john);
console.log(john.family);
console.log(john['lastName']);
console.log(john[x]);

john.job = 'designer';
john.isMarried = true;
console.log(john);

// New Object Syntex
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] =  'Smit';

console.log(jane);
/*


/***********************************************************
*                   13 - Objects and Methods
************************************************************
*/

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calAge: function() {
        this.age =  2020-this.birthYear;
    }
};

john.calAge();
console.log(john);

*/




/***********************************************************
*                   14 - Loops and Iteration
************************************************************
*/

for(var i=0; i<10; i+=2) {
    console.log(i);
}

var jhon = ['Jhon', 'Smith', 1990, 'teacher', false];
console.log(jhon[0]);

for(var i=0; i<jhon.length; i++) {
    console.log(jhon[i]);
}

// While
var i=0;
while(i<jhon.length) {
    console.log(jhon[i]);
    i++;
}


// Continue and Break Statements
console.log('----')
for(var i=0; i<jhon.length; i++) {
    if(typeof jhon[i] !== 'string') continue;
    console.log(jhon[i]);
}

console.log('----')
for(var i=0; i<jhon.length; i++) {
    if(typeof jhon[i] !== 'string') break;
    console.log(jhon[i]);
}



/***********************************************************
*                   Coding Chalange - 2
************************************************************
*/






/***********************************************************
*                   Coding Chalange - 2
************************************************************
*/






/***********************************************************
*                   Coding Chalange - 2
************************************************************
*/






/***********************************************************
*                   Coding Chalange - 2
************************************************************
*/





/***********************************************************
*                   Coding Chalange - 2
************************************************************
*/






/***********************************************************
*                   Coding Chalange - 2
************************************************************
*/



























  







