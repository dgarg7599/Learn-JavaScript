//* String Properties:

//? length: Property that returns the length of the string (number of characters).

const str = "Hello,    World!";
console.log(str.length);
// including space n all



//* Escape Character

//? Escape Character: In JavaScript, the backslash \ is used as an escape character. It allows you to include special characters in a string.

// Code	   Result	    Description
// \'	    '	        Single quote
// \"	    "	        Double quote
// \\	    \	        Backslash

// let text = "My name is " Divyansh Garg " & I am a Full Stack Developer. ";
let text = "My name is ' Divyansh Garg ' & \\ I am a \"Full Stack \" Developer. ";
// let text = 'My name is " Divyansh Garg " & I am a Full Stack Developer. ';

console.log(text);



//* String Search Methods

//? 2: String Search Methods

//? a:  indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
// syntax
// indexOf(searchString)
// indexOf(searchString, position)

let name = "Divyansh Garg";
// console.log(name.indexOf("garg"));
// The indexOf() method is case sensitive.
console.log(name.indexOf("Garg"));

let strArr = Array.from(name);                       //passing text to Array
console.log(strArr);
let strMap = strArr.map((curElem, index) => `${curElem} - ${index}`);
console.log(strMap);                                          //mapping of currElement to its index



//? b: lastIndexOf() : The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// syntax
// lastIndexOf(searchString)
// lastIndexOf(searchString, position)

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let index = text.indexOf("JavaScript");
// let index = text.lastIndexOf("JavaScript");
// let index = text.lastIndexOf("JavaScript", 40);
// console.log(index);



//? c:  search(): The search() method searches a string for a string (or a regular expression) and returns the position of the match.
//* Returns the index number where the first match is found. Returns -1 if no match is found.

let text2 = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text2.search(/Javascript/i);                                 //when we put i after it, it removes case-sensitivity.
console.log(result);

//*👉 Important Tips:
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).
// They accept the same arguments (parameters), and return the same value



//? match() : Returns an array of the matched values or null if no match is found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.match("Javascript");
// let result = text.match("JavaScript");
//todo here the js converts the normal text into regular expression text.match(/JavaScript/); without the g flag
// let result = text.match(/Javascript/gi);

// console.log(result);

//? matchAll() : Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let matchResult = text.matchAll("javascript");
// let matchResult = text.matchAll("JavaScript");
//todo  here the js converts the normal text into regular expression text.match(/JavaScript/g); also adds the g flag at the end

// console.log(...matchResult);

// for (let item of matchResult) {
//   console.log(item[0]);
// }

// for (let index of matchResult) {
//   console.log(index.index);
// }

// for (let { index } of matchResult) {
//   console.log(index);
// }



//? includes(): Returns true if the string contains the specified value, and false otherwise.
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let includeResult = text.includes(/java/i);
// let includeResult = text.includes("J");
// console.log(includeResult);

// Note: includes() is case sensitive. includes() is an ES6 feature.

//? startsWith(): The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.startsWith("Helcome");
// let result = text.startsWith("Hello");
// console.log(result);

//* start position for the search can be specified
// let result = text.startsWith("welcome", 18);
// let result = text.startsWith("welcome", 17);
// console.log(result);


//? endsWith(): The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.endsWith("welcome");
// let result = text.endsWith("course");
// console.log(result);