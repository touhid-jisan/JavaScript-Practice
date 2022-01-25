// let can be updated not re-declared
const numbers = [1, 2, 3];
let newNumbers = [5, 6, numbers]
console.log(newNumbers)
newNumbers = [5, 6, ...numbers]
console.log(newNumbers)