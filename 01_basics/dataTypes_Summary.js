//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);                     //false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "divyansh",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");
}

// functions are also stored in variables in JS.

console.log(typeof anotherId);

// typeOf null ==> object

// https://262.ecma-international.org/5.1/#sec-11.4.3






/*
JavaScript is a dynamically typed language.
This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it.
You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

*/







// ---------- Some Questions ---------------

// console.log(typeof ("5" - 3));                         //output: number

// console.log(2 < 12 < 5);                    //output: True        (consider first =>  2<12 => true, its value is considered as 1. Then, 1<5 which is true that’s why output is true).

// console.log("20" + 10 + 10);              //output: 201010      (string + number gives string).







// ----------------------------------------------------------------------
// Stack Memory(Primitive), HeapMemory(Non-Primitive).

let myName = "divyansh garg";
let anotherName = myName;
anotherName = "dgarg";                                                       // myName doesn't change, it is in stack memory.

console.log(myName);
console.log(anotherName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;                                           //Both change because refers to same object and it is stored in heap memory.
userTwo.email = "divyansh@google.com";

console.log(userOne.email);
console.log(userTwo.email);



// 

