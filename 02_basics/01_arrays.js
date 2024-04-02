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
console.log("A ", MyArr);

const myn1 = MyArr.slice(1, 3)
console.log( myn1);
console.log("B ", MyArr);


const myn2 = MyArr.splice(1, 3)
console.log("C ", MyArr);
console.log(myn2);
// slice() creates a new array with a portion of elements copied from the original array, while splice() mutates the original array itself by removing, replacing or adding elements to it.