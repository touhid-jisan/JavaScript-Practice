// ES7
// don't use constructor 
// don't use this when creating class variable
// use arrow function in methods
class Human {
    gender = 'Female';
    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Touhid';
    gender = 'Male';
    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person()
person.printMyName()
person.printGender()