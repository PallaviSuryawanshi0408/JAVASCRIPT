// singleton
// Object.create //--constructor method-- /*when object is created with cunstroctor method always use singleton but not in literals*/

// object literals
const mySym = Symbol("key1")

const Myobj={
    Name:"Pallavi",
    "Full Name":"pallavi suryawanshi",
    Age:23,
    Email:"pallavisuryawanshi0408@gmail.com",
    LoggedInDays:["monday","friday"],
    IslogIn:true,
    // mySym: "mykey1" //will give the write value but typeof this symbol will change as string
    [mySym]: "mykey1"
}

//way to access obj values 
console.log(Myobj.Name); //not always refer this one because in some cases it doesn't recognize the datatype

console.log(Myobj.Full Name);//it can give error
console.log(Myobj["Full Name"]);//right way

//how can you access symbol in obj
console.log(typeof Myobj.mySym);
console.log(Myobj[mySym]);
console.log(typeof Myobj[mySym]);

Myobj.Email = "pallavi@gmail.com"
console.log(Myobj);
//freezing the object
/* Object.freeze(Myobj)
Myobj.Email ="suyryawanshipallavi@gmail.com"
console.log(Myobj);*/
//adding funtion to object
Myobj.greeting = function(){
    console.log("Hello JS user");
}
// console.log(Myobj.greeting);
console.log(Myobj.greeting());//to access methods
Myobj.greetingTwo = function(){
    console.log(`Hello JS user, ${this.Name}`);
}
console.log(Myobj.greetingTwo());
