function sayMyName(){
    console.log("P");
    console.log("a");
    console.log("l");
    console.log("l");
    console.log("a");
    console.log("v");
    console.log("i");
}//function declaration

  sayMyName() //function call

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);
function loginUserMessage(username = "sam"){//default value sam otherwise if we pass the value it overwrite it
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))

function CalculatePrice(...num){ 
    return num
}
console.log(CalculatePrice(200,300,5500));//passing multiple arguments and it will return all the arguments in array form

function CalculatePrice1(val1,val2,...num){
return num
}
console.log(CalculatePrice1(100,200,500,19,1000,2400));

const user ={
    username:"pallavi",
    age:23
}
function handleobject(adduser){
    console.log(`user name is ${adduser.username} and her age is ${adduser.age}`);
}
// handleobject(user)
// another way we can directly pass object 
handleobject({username:"tiney",age:22})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//  console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));



