// Note: Study about Type Coercion in JS
// due to this avoid invalid conversions, here are some examples/...

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);                      //output: true
// console.log("02" > 1);                     //output: true                 

//because of Type coercion in JavaScript

console.log(null > 0);                        //false
console.log(null == 0);                       //false
console.log(null >= 0);                       //true                  //working of >= is diffrent due to type coercion in JS

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);




//! What is the difference between == and === operators in JavaScript❓
//? The equality == operator is a comparison operator that compares two values and returns true if they are equal. The strict equality === operator is also a comparison operator, but it compares two values and returns true only if they are equal and of the same type.
// ex.
// let num1 = 1;
// let num2 = "1";

// if (num1 === num2) {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }
