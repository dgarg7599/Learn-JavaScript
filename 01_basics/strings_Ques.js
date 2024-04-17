// * =========================================
//* //! Interview Questions
//* =========================================

//! 1: Write a JavaScript function that prints the letters 'a' through 'z' in the console. You should use a loop to iterate through the letters and print each one on a new line.

console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));

for (let char = 97; char <= 122; char++) {
  console.log(String.fromCharCode(char));
}



//! 2: Write a function to count the number of vowels in a string?

const countVowels = (str) => {
  const vowels = "aeiou";
  let count = 0;
  for (let char of str) {
    console.log(char);
   console.log(str.includes(char));
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};
  console.log(checkAllVowelPresentOrNot("my name u is vinod @  thapa"));
console.log(countVowels("Hello a i o u world"));



//! 3: Write a function to check if all the vowels presents in a string or not?

const checkAllVowelPresentOrNot = (str) => {
  const vowels = "aeiou";
  for (let char of vowels) {
    console.log(char);
    console.log(str.includes(char));
    if (!str.includes(char)) {
      return false;
    }
  }
  return true;
};

console.log(checkAllVowelPresentOrNot("my name u is vinod @  thapa"));



//! 4: Write a JavaScript function to check if the given sting is Pangram or not?

const pangramChecker = (str) => {
    let inputArr = str.toLowerCase().split("");
    console.log(inputArr);
    // console.log("z".charCodeAt());
    const values = inputArr.filter(
      (curElem) =>
        curElem.charCodeAt() >= "a".charCodeAt() &&
        curElem.charCodeAt() <= "z".charCodeAt()
    );
    // console.log(values);
  
    return new Set(values).size === 26;
  
    // return [...new Set(values)].length === 26;
  };
  
  console.log(pangramChecker("The quick  @ brown fox jumps ove the lazy dog"));