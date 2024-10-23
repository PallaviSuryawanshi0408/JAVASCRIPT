
// What are Promises?
// A Promise is an object representing the eventual completion or failure of an asynchronous operation, and its resulting value. It allows us to write asynchronous code in a more sequential and readable manner.
/*Creating a Promise 
const myPromise = new Promise((resolve, reject) => {
   Asynchronous operation
    if (* operation successful *) {
        resolve("Operation completed successfully");
    } else {
        reject("Operation failed");
    }
}); */
// Promise States
// A Promise can be in one of three states:

// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.

// let firstPromise = new Promise( (resolve, reject) => {

//     setTimeout(function sayMyName() {
//         console.log("My Name is Love babbar");
//     }, 0);
// } );
/*Chaining Promises
One of the most powerful features of Promises is the ability to chain them together using .then() and .catch() methods, enabling sequential execution of asynchronous operations.*/
// let promise1 = new Promise((resolve, reject)=> {
//     let success = true;
//     if(success) {
//         resolve(10);
//     }
//     else {
//         reject("Internal Server Error");
//     }
// });

promise1.then((message)=> {
    console.log("first msg:" + message);
    return 20;
}).then((message)=> {
    console.log("second msg: " + message);
    return 30;
}).then((message)=> {
    console.log("third msg: " + message);
}).catch((error) => {
    console.error(error);
}).finally((message) => {
    console.log("Main to final hu, chalunga pakka")
})




// promise1.then((message) => {
//     console.log("Then ka message is " + message);
// }).catch((error)=> {
//     console.log("Error: " + error);
// })
/*Promise.all()
The Promise.all() method allows us to wait for multiple Promises to complete simultaneously. It returns a single Promise that resolves when all of the input Promises have resolved, or rejects if any of the input Promises reject. 
const promise1 = fetch('https://api.example.com/data1');
const promise2 = fetch('https://api.example.com/data2');

Promise.all([promise1, promise2])
    .then((responses) => {
        // Handle responses
    })
    .catch((error) => {
        console.error(error); // Handle errors
    });*/

let promise1 = new Promise((resolve, reject)=> {
    setTimeout(resolve, 1000, "First");
})
let promise2 = new Promise((resolve, reject)=> {
    setTimeout(resolve, 2000, "Second");
})
let promise3 = new Promise((resolve, reject)=> {
    setTimeout(reject, 4000, "Third");
})

Promise.all([promise3, promise2, promise1])
.then((values) => {
    console.log(values);
})
.catch((error)=> {
    console.error("error:" + error);
})