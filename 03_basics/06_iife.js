//Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.
(function() {
    // IIFE code block
    var localVar = 'This is a local variable';
    console.log(localVar); // Output: This is a local variable
})();
//between two iife we have to end first one to run second one 
var result = (function() {
    var x = 10;
    var y = 20;
    return x + y;
})();
 
console.log(result); // Output: 30
//IIFEs are commonly used to create private scope in JavaScript, allowing variables and functions to be encapsulated and inaccessible from outside the function.
var counter = (function() {
	var count = 0;

	return {
		increment: function() {
			count++;
		},
		decrement: function() {
			count--;
		},
		getCount: function() {
			return count;
		}
	};
})();

// Increment the counter
counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount()); // Output: 3

// Trying to access the private count variable directly
console.log(counter.count); // Output: undefined (cannot access private variable)
//Here, count is a private variable scoped to the IIFE, inaccessible from outside. The returned object exposes methods (increment, decrement, and getCount) that allow controlled manipulation and access to the private count variable.

(function one(){
    //named iife
    console.log("hii")
})();

(()=>{
    console.log("this is unnamed iife through arrow function")
})();

((name)=>{
    console.log(`this is unnamed iffe passing ${name}`)
})("parameter");