// Given a string, return a new string with the reversed order of characters

// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution #1

// const reverse = (string) => {
//     // turn string into an array
//     // call .reverse() on the array
//     // join the array back into a string
//     // return the result
//     return string.split('').reverse().join('');
// };

// Solution #2
// Runtime Complexity:
    // - each additional character = one step through one loop
    // - this would be 'N', which is "linear" runtime

// const reverse = (string) => {
//     // create an empty string called reversedString
//     // for each character in the provided string, take the character and add it to the start of reversedString
//     // return the variable reversedString
//     let reversedString = '';
//     for (let character of string) {
//         reversedString = character + reversedString;
//     }
//     return reversedString;
// };

// Solution #3

const reverse = (string) => {
    // turn string into array with .split()
    // user .reduce() helper method on array
    // return the result
    return string.split('').reduce((reversedString, character) => character + reversedString, '');
};  


module.exports = reverse;