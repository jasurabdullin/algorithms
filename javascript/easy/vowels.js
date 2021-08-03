// Write a function that returns the number of vowels used in a string.  Vowels are the characters 'a', 'e' 'i', 'o', and 'u'.

// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution #1

const vowels = (string) => {
    const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    return string.split('').filter(character => vowelsArray.includes(character)).length;
};

// Solution #2 - RegExp

// const vowels = (string) => {
//     return string.match(/[aeiou]/gi)?.length || 0;
// };

module.exports = vowels;