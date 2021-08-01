// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.

// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution #1

const capitalize = (string) => {
   return string.split(' ').map(string => (string[0].toUpperCase() + string.slice(1)) ).join(' ');
};

// Solution #2

// const capitalize = (string) => {
//     const words = [];

//     for (let word of string.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }

//     return words.join(' ')
// };

// Solution #3

const capitalize = (string) => {
    let result = string[0].toUpperCase(); // initialze with first character auto capitalized
     for (let i = 1; i < string.length; i++) {
         if (string[i - 1] === '') {
            return string[1].toUpperCase();
         } else {
             result += sring[i];
         }
     }

     return result;
};

module.exports = capitalize;