// spread operator
const person = {
    name: 'max'
};

const newPerson = {
    ...person,
    age: 25
}

console.log(newPerson)

//  rest operator

const filtr = (...args) => args.filter(el => el === 1)