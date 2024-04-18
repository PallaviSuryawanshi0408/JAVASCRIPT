// let=Variables declared with let can have a global, local, or block scope. Block scope is for variables declared in a block. A block in JavaScript involves opening and closing curly braces:
let number = 50
function print() {
  let square = number * number
   if (number < 60) {
    var largerNumber = 80
    let anotherLargerNumber = 100

    console.log(square)
  }

  console.log(largerNumber)
  console.log(anotherLargerNumber)
}

print()
// 2500
// 80
// ReferenceError: anotherLargerNumber is not defined
// In this example, we have a global scope variable number and a local scope variable square. There's also block scope variable anotherLargerNumber because it is declared with let in a block.

// largerNumber, on the other hand – though declared in a block – does not have a block scope because it is declared with var. So largerNumber has a local scope as it is declared in the function print.

// We can access number everywhere. We can only access square and largerNumber in the function because they have local scope. But accessing anotherLargerNumber outside the block throws an anotherLargerNumber is not defined error.

// Just like var, variables declared with let can be reassigned to other values, but they cannot be redeclared.
// Variables declared with let are hoisted to the top of their global, local, or block scope, but their hoisting is a little different from the one with var.

// var variables are hoisted with a default value of undefined, which makes them accessible before their line of declaration 

// But, let variables are hoisted without a default initialization. So when you try to access such variables, instead of getting undefined, or variable is not defined error, you get cannot access variable before initialization. Let's see an example:

console.log(number1)
// ReferenceError: Cannot access 'number' before initialization

let number1 = 50