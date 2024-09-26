//ARRAYS
// JavaScript arrays are resizable and can contain a mix of different data types
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// JavaScript arrays are zero-indexed
// JavaScript array-copy operations create shallow copies. 
// refer mdn reference

const MyArr = [1,2,3,4,5]
const Heros = ["hulk","spiderman","captain america"]

console.log(MyArr[0]);
console.log(Heros[1]);

const MixArr = new Array(10,20,"hello")
console.log(MixArr);

//Array Methods 
MixArr.push("welcome")
console.log(MixArr);

MixArr.pop()//pop the last element of an array
console.log(MixArr);

MyArr.unshift(89) //insert the item at 0th index and shift the leftover array
console.log(MyArr);
MyArr.shift() //shift an array from right to left 
console.log(MyArr);

console.log(Heros.includes("hulk")) //boolean value return

console.log(Heros.indexOf("captain america"))

const newArr = MixArr.join()
console.log(MixArr)
console.log(typeof MixArr);
console.log( newArr);
console.log(typeof newArr);

//slice and splice method
/*slice():
The slice() method in JavaScript extracts a section of an array and returns a new array containing the selected elements, without modifying the original array.
Syntax:
array_name.slice(s, e)
Example: In this example The slice() method in JavaScript extracts elements from the cars array, creating a new array new_cars from index 1 up to, but not including, index 4. */


let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
let new_cars = cars.slice(1, 4);
console.log("cars :", cars);
console.log("new_cars :", new_cars);

/*splice():
The splice() method in JavaScript is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place, modifying the original array.

Syntax:
array_name.splice(i, n, item 1, item 2, .....item n)
Example: In this example, The splice() method in JavaScript inserts new elements (‘ambassador’, ‘BMW’, ‘Audi’) into the cars array at index 2 without removing any elements.*/


let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
cars.splice(2, 0, 'ambassedor', 'BMW', 'Audi');
console.log("cars :", cars);

let existing = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
let newone = existing.splice(1,2)
console.log("existing:",existing)
console.log("newone:",newone)
// slice() creates a new array with a portion of elements copied from the original array, while splice() mutates the original array itself by removing, replacing or adding elements to it.
