
function getYearOfBirth(age){
    return 2020 - age;
}

function createGreeting(name, age){
    if(typeof age !== "number" || typeof name !== "string"){
        throw new TypeError("Type Error")
    }
    if (name === undefined || age === undefined){
        throw new Error ("Arguments not valid"); 
    }
    if(age < 0){
        throw new Error ("Age cannot be negative"); 
    }
    const yob = getYearOfBirth(age);
   
    
return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yob}.`
}
try {
    const greeting1 = createGreeting(44, 32);
    console.log(greeting1);
} 

catch (e) {
    console.error(e.message);
}
