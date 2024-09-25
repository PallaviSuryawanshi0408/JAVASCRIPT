// Variables are Containers for Storing Data
// JavaScript Variables can be declared in 4 ways:
// Automatically
// Using var
// Using let
// Using const
/*Note
The var keyword was used in all JavaScript code from 1995 to 2015.
The let and const keywords were added to JavaScript in 2015.
The var keyword should only be used in code written for older browsers. */
/*When to Use var, let, or const?
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers. */
/*If you re-declare a JavaScript variable declared with var, it will not lose its value.
The variable carName will still have the value "Volvo" after the execution of these statements:
Example
var carName = "Volvo";
var carName;  */
/*You cannot re-declare a variable declared with let or const.
This will not work:
let carName = "Volvo";
let carName; */

const AccountId = 101
// AccountId=201 
// console.log(AccountId)


// not allowed to change the value of const
/*The const keyword was introduced in ES6 (2015)
Variables defined with const cannot be Redeclared
Variables defined with const cannot be Reassigned
Variables defined with const have Block Scope */

let AccountHolderName ="pallavi"
var Branch ="Indore"
State="MP" //automatically declared 
let city;//undefined variable
console.table([AccountId,AccountHolderName,Branch,State,city])

AccountHolderName ="Sandeep"
Branch ="New Delhi"
State="Delhi"
console.table([AccountId,AccountHolderName,Branch,State])

// prefer to use let for variables and for constants use const avoid to use var beacause of the problem of block and functional scope
