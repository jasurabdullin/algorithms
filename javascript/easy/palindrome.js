// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.

// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution #1

// const palindrome = (string) => {
//     // reverse the string into a const called reversedString
//     // directly compare string and reversedString and return the result
//     const reversedString = string.split('').reverse().join('');
//     return string === reversedString;
// };

// Solution #2

const palindrome = (string) => {
    // turn string into array
    // use .every() helper method on array and return the result
    return string.split('').every((character, index) => character === string[string.length - index - 1]);
};

module.exports = palindrome;