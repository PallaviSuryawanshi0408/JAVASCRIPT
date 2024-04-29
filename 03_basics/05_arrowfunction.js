//this refer to the current context of the website

const user ={
    username : "pallavi",
    age : 23,
    welcome : function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }
}
user.welcome()
user.username ="sam"
user.welcome()

console.log(this)//this will refer a empty object because we are in node environment globally it is not referring to any object but in browser this will refer some window object

//through arrow function
const newfunc = ()=>{
let newname ="pallavi"
console.log(this.newname); //undefined
console.log(this);
}
newfunc()

//arrow functon parameters

// let arrowfunct = (num1,num2)=>{
//     return num1+num2
// }
// console.log(arrowfunct(3,4))
// or 
let arrowfunct = (num1,num2)=>(num1+num2)
console.log(arrowfunct(3,4));

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()