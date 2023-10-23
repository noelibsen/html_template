//variables & values
let firstName = "Noel";
//console.log(firstName)
firstName = "HEj"

//data types
//String - text
let lastName = "Noel"; 
//console.log(lastName);
//number
let age = 23; 
//console.log(age);

//boolean - true or false
let ismarried = true; 
//console.log(ismarried)
//console.log(typeof ismarried)

// Change the variable type
ismarried = "NO";

//Let, Var & Const

//Do not Use was, it can cause alot of trubbles and bugs
var myName = "Noel";
var isBool = true;

if (isBool) {
    var myName = "Alice";
}

//console.log(myName);

//Let  &  Const

//Use let when a variable might change in value

let myAge = "23"
myAge = "24"
//console.log(myAge)

const newAge = "40";
//console.log(newAge);

const newName = "Noel"
const ifTrue = true;

if (ifTrue){
    const newName = "Joel"
    //console.log (newName)
}
//console.log(newName)

//Const is prefered to Let
//Let is preffered to const is we know that the value is going to change


//BASIC OPERATORS

//Mathematic operators

//const myNewAge = 2023-1999;
//console.log(myNewAge);

//const brothersAge = myNewAge-3;
//console.log(myNewAge, brothersAge)

const now = 2023;
const myNewAge = now - 1999;
const brothersAge = now - 1991;
//console.log(myNewAge, brothersAge)

//concatinate

//console.log(firstName + " " + lastName)


// assignment opterator and the most stragith forward is =

let x = 10 + 6;
//console.log(x)

x += 10;
//console.log(x)

x *= 4;
//console.log(x);

//++ Increases the value by one
x++;
//console.log(x);

//COMPARISON OPERATORS
console.log(myNewAge > brothersAge);
console.log(brothersAge >= 31);

const isFullAge = brothersAge >= 32;
console.log(isFullAge);

//OPERATOR PRECEDENCE
console.log(now - 10 < now - 11);

let z, y;
z = y = 10-1-1-1;
console.log(z,y);

const avergeAge = (myNewAge + brothersAge) / 2;

console.log(avergeAge);

