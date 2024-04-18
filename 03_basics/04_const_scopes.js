// const=Variables declared with const are similar to let in regards to scope. Such variables can have a global, local, or block scope

const number = 50

function print() {
  const square = number * number

  if (number < 60) {
    var largerNumber = 80
    const anotherLargerNumber = 100

    console.log(square)
  }

  console.log(largerNumber)
  console.log(anotherLargerNumber)
}

print()
// 2500
// 80
// ReferenceError: anotherLargerNumber is not defined

// const is different from var and let. const is used for declaring constant variables – which are variables with values that cannot be changed. So such variables cannot be redeclared, and neither can they be reassigned to other values. 

// Variables declared with const, just like let, are hoisted to the top of their global, local, or block scope – but without a default initialization.Accessing a variable declared with const before the line of declaration will throw a cannot access variable before initialization error.

//hoisting in function
console.log(addone(5))

function addone(num){
    return num + 1
}//will not throw error



addTwo(5)
const addTwo = function(num){
    return num + 2
}//will throw error