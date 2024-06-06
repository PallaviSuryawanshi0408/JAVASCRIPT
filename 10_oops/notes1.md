## js have classes ?
Yes, JavaScript does have classes. This feature was introduced with the ECMAScript 2015 specification (often referred to as ES6). However, it's important to note that JavaScript is primarily a prototype-based language, and its classes are primarily syntactic sugar over existing prototype-based inheritance mechanisms. In other words, it provides a more familiar syntax for developers coming from class-based languages such as Java or C++, but under the hood, it works somewhat differently.
## OOP
Object Oriented programming is a programming style that is associated with the concept of Class, Objects and various other concepts revolving around these two, like Inheritance, Polymorphism, Abstraction, Encapsulation etc.to achieve modular programming we use OOps concept.

## Basic OOPS pillers
OBJECT
CLASS
ENCAPSULATION
POLYMORPHYSIM
INHERITENCE
ABSTRACTION

## Objects:-
Objects are the basic unit of OOP. They are instances of class, which have data members and uses various member functions to perform tasks.Or we can say an object is an entity which has two things state and behaviour .An object stores its state in feild or in variables and exposes its behaviour through method.
## object literals
Object literals in JavaScript provide a convenient and readable way to create objects. 
// Creating an object using object literals
const person = {
  name: 'Alice',
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};
// Accessing object properties
console.log(person.name); // Output: Alice
console.log(person.age);  // Output: 30
// Calling the method
person.greet(); // Output: Hello, my name is Alice and I am 30 years old.

can also use shorthand property names and methods in object literals, which is a feature introduced in ES6:


const name = 'Bob';
const age = 25;
const person = {
  name, // Shorthand property name (equivalent to name: name)
  age,  // Shorthand property name (equivalent to age: age)
  greet() { // Shorthand method (equivalent to greet: function() {...})
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};
person.greet(); // Output: Hello, my name is Bob and I am 25 years old.

## object literals are perfect for quick, single-instance objects with unique properties, while constructor functions are better suited for creating multiple instances of objects with shared properties and methods.

## constructor function
 In JavaScript, a constructor function is used to create objects and set their properties and methods. 

 // Constructor function for creating a 'Person' object
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
}
// Creating a new instance of 'Person'
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);
// Using the 'greet' method
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.

## The new keyword in JavaScript is used to create an instance of an object that is defined by a constructor function.

##instence of keyword

## Class:-
Class can also be defined as user defined data type but it also contains functions in it. So, class is basically a blueprint for object. It declare & defines what data variables the object will have and what operations can be performed on the class's object.
