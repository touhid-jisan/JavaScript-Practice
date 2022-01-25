// ES6 

class Human {
    constructor() {
        this.gender = 'female';
    }
    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name = 'Max';
        this.gender = 'male'
    }
    printMyName() {
        console.log(this.name)
    }
}

const person = new Person();
person.printMyName()
person.printGender()