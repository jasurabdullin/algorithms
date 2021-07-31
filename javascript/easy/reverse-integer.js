// Given an integer, return an integer that is the reverse ordering of numbers.

// --- Examples
//   reverseInteger(15) === 51
//   reverseInteger(981) === 189
//   reverseInteger(500) === 5
//   reverseInteger(-15) === -51
//   reverseInteger(-90) === -9

const reverseInteger = (number) => {
    // transform the number into a string with .toString()
    // turn string into array
    // call .reverse() on the array and join it back into string
    // parse reversed string to integer and return the result
    const reversedString = number.toString().split('').reverse().join('');
    
    // Option 1 - if statement that checks for negative values
    // return number > 0 ? parseInt(reversedString) * -1 : parseInt(reversedString);
    
    // Option 2 - use Math.sign() to check for negative values
    return parseInt(reversedString) * Math.sign(number); 
};

module.exports = reverseInteger;