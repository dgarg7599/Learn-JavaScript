const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));                                  //fixed to two decimal places

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));                        //give precise value (take digits from left side)

const hundreds = 1000000
console.log(hundreds.toLocaleString()); 
console.log(hundreds.toLocaleString('en-IN'));                                  //numbers are come with commas in output

//! ------------------------------------ Maths --------------------------------------
//* Math Object in JavaScript
//* Math: The Math namespace object contains static properties and methods for mathematical constants and functions.
//* Math works with the Number type. It doesn't work with BigInt.


console.log(Math);                                       //return the type which is object
console.log(Math.abs(-4));                                //returns the absolute value of a number
console.log(Math.round(4.6));                            //Rounds a number to the nearest integer
console.log(Math.ceil(4.2));                              //Returns the value of x rounded up to its nearest integer
console.log(Math.floor(4.9));                            //Returns the value of x rounded down to its nearest integer
console.log(Math.min(4, 3, 6, 8));                     
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());                                  //returns a random number between 0 (inclusive), and 1 (exclusive)
console.log((Math.random()*10) + 1);                       // add 1 to avoid 0.
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


//? Math.trunc(x): Returns the integer part of x:
// const truncValue = Math.trunc(3.7);
// console.log(truncValue);

//todo Math.trunc() and Math.sign() were added to JavaScript 2015 - ES6.
// const truncValue = Math.trunc(-3.7);
// const floorValue = Math.floor(-3.1);
// console.log(truncValue);
// console.log(floorValue);



//todo Notes:
// No matter how many chars are there after decimal, they all will always return only number before the decimal.
// round rounds to the nearest integer.
// floor always rounds down.
// ceil always rounds up.