//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
// typeof "John Doe" // Returns "string"
// typeof 3.14 // Returns "number"
// typeof true // Returns "boolean"
// typeof 234567890123456789012345678901234567890n // Returns bigint
// typeof undefined // Returns "undefined"
// typeof null // Returns "object" (kind of a bug in JavaScript)
// typeof Symbol('symbol') // Returns Symbol

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

 const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros);
let myObj = {
    name: "hitesh",
    age: 22,
}
console.log(typeof myObj);

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3