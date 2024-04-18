// Var=Variables declared with var can have a global or local scope. Global scope is for variables declared outside functions, while local scope is for variables declared inside functions.
var number = 50
function print() {
  var square = number * number
  console.log(square)
}
console.log(number) // 50
print() // 2500
// The number variable has a global scope – it's declared outside functions in the global space – so you can access it everywhere (inside and outside functions).
function print() {
    var number = 50
    var square = number * number
    console.log(square)
  }
  
  print() // 2500
  console.log(number)// ReferenceError: number is not defined
//   we declared the number variable in the function print, so it has a local scope. This means that the variable can only be accessed inside that function. Any attempt to access the variable outside the function where it was declared will result in a variable is not defined reference error.
// Variables declared with var can be redeclared and reassigned.
var redeclared = 50
console.log(redeclared);//50
var redeclared = 100
console.log(redeclared);//100
// reassigned
var reassigned = 50
console.log(reassigned);//50
reassigned = 100
console.log(reassigned);//100

// Variables declared with var are hoisted to the top of their global or local scope, which makes them accessible before the line they are declared. Here's an example:

console.log(hoist) // undefined
var hoist = 50
console.log(hoist) // 50

// The hoist variable here has a global scope. Since it is declared with var, the variable is hoisted. This means that we can access the variable before the line where it was declared without errors.
// But the variable is hoisted with a default value of undefined. So that's the value returned from the variable (until the line where the variable is declared with an initial value gets executed).
function printhoistvar() {
    var square1 = number * number
    console.log(square1)
    var number = 50
    var square2 = number * number
    console.log(square2)
  }
  printhoistvar()
  // undefined*undefined=NaN
  // 50*50=2500