//for of 
// ["","",""] or [{},{},{}]
// for (const iterator of object) {
//    syntax 
// }
/*const myArray = [1,2,3,4,5]
for (const val of myArray) {
    console.log(val); //output = 1,2,3,4,5
}

const Greetings = "hello world!"
for (const greet of Greetings) {
    console.log(greet);
} */

//maps ;A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

/*create a JavaScript Map by:

Passing an Array to new Map()
Create a Map and use Map.set() */
// Create a Map
/*const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);  */

  // Create a Map
/*const fruit = new Map();

// Set Map Values
fruit.set("apples", 500);
fruit.set("bananas", 300);
fruit.set("oranges", 200); */

// The set() method can also be used to change existing Map values:

// Example
// fruit.set("apples", 200);

// The get() Method
// The get() method gets the value of a key in a Map:

// Example
// fruit.get("apples");    // Returns 500

// typeof returns object:
// typeof fruits;

/*JavaScript Objects vs Maps
Differences between JavaScript Objects and Maps:
                 Object	                                    Map
Iterable	Not directly iterable	                  Directly iterable
Size	    Do not have a size property          	Have a size property
Key Types	Keys must be Strings (or Symbols)	    Keys can be any datatype
Key Order	Keys are not well ordered	            Keys are ordered by 
            insertion
Defaults	Have default keys	                    Do not have default keys
*/

// The size property returns the number of elements in a Map:
// Example
// fruits.size;

// The delete() method removes a Map element:
// Example
// fruits.delete("apples");

// The clear() method removes all the elements from a Map:
// Example
// fruits.clear();

// The has() method returns true if a key exists in a Map:
// Example
// fruits.has("apples");

const Map1= new Map()
Map1.set("+91","india")
Map1.set("+92","Pak")
Map1.set("+86","china")
/*
for (const code of Map1) {
    console.log(code);
}
//output 
// [ '+91', 'india' ]
// [ '+92', 'Pak' ]
// [ '+86', 'china' ] */
// for (const [key,value] of Map1) {
//     console.log(`key ${key}:- value ${value}`);
    
// }

const Myobj ={
    "name":"pallavi",
    "age" : 23
}
for (const [key,value] of Myobj) {
    console.log(`key ${key}:- value ${value}`);
}
// Myobj is not iterable