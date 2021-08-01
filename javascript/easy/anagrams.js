// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation.  
// Consider capital letters to be the same as lower case

// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const regExp = /[^\w]/g;

// const anagrams = (stringA, stringB) => {
//     const stringAMap = createCharacterMap(stringA);
//     const stringBMap = createCharacterMap(stringB);

//     // first check if the string maps are the same size 
//     if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length) return false;
    

//     for (let character in stringAMap) {
//         // check if the number of times a given character occurs in stringAMap is actually not equal to the number of occurences in stringBMap
//         // this tells us that the strings are not actually anagrams as the character counts are not the same
//         if (stringAMap[character] !== stringBMap[character]) {
//             return false;
//         }
//     }

//     return true;

// };

// const createCharacterMap = (string) => {
//     const characterMap = {};

//     for (let character of string.replace(regExp, '').toLowerCase()) {
//         characterMap[character] = characterMap[character] + 1 || 1;
//     }

//     return characterMap;
// };


const anagrams = (stringA, stringB) => {
    // remove spaces and punctions, lower case both strings, and sort the strings
    // compare the two formatted strings and return the results
    const formattedStringA = formatString(stringA);
    const formattedStringB = formatString(stringB);
    return formattedStringA === formattedStringB;
};

const formatString = string => {
    // replace spaces and punctuiations, lower case the string, transform to array, sort the array, tranform back to string, then return the value
    return string.replace(regExp, '').toLowerCase().split('').sort().join();
};


module.exports = anagrams;