function createGreeting(name, age){
let yearOfBirth = 2020 - age;

return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}`
}
const greeting1 = createGreeting('Sara', 32);
console.log(greeting1);