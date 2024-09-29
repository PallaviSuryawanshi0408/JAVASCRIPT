// const tinderUser = new Object() //--constructor object singleton

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

 console.log(tinderUser);

 const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3===obj1); //true because all the values of obj2 source is coping to obj1 which is target
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);
//https://www.freecodecamp.org/news/clone-an-object-in-javascript/  
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
]
console.log(users[1].id);
console.log(tinderUser);

console.log(Object.keys(tinderUser));//all three keys values and entries return value in an array form
console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
/*----------------------*/
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
//destructuring of object values 
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);
/**********************api json***********/
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
