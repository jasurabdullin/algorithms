
// Given a string, return the character that is most commonly used in the string.

// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Solution #1

const maxChar = (string) => {
    // map characters in the string into an object where the key is the character 
    // and the value is the number of times it occurs in the string
    const characters = mapString();
    return getMaxCharacter(characters);
};

const mapString = (string) => {
    const characters = {};
    for (let character of string) {
        characters[character] = characters[character] + 1 || 1;
    }
    return characters;
};

const getMaxCharacter = (characters) => {
    let max = 0;
    let maxCharacter = '';
    for (let character in characters) {
        if (characters[character] > max) {
            max = characters[character];
            maxCharacter = character;
        }
    }
    return maxCharacter;
};

module.exports = maxChar;