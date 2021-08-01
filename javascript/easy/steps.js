// Write a function that accepts a positive number N.
// The function should console log a step shape with N levels using the # character.  
// Make sure the step has spaces on the right hand side.

// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution #1 - Iteration

const steps = (number) => {
    // from 0 to N, create an empty string variable named 'stair'
        // if the current column is equal to or less than the current row, add a '#' to 'stair'
        // else add a space to 'stair'
    // console.log(stair)

    for (let row = 0; row < number; row++) {
        let stair = '';

        for (let column = 0; column < number; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }

        console.log(stair)
    }
};


// Solution #2 - Recursion

const steps = (number, row = 0, stair = '') => {
    // case when all work is completed
    if (number === row) return;

    // case when the recursion is at the end of the row
    if (number === stair.length) {
        console.log(stair)
        return steps(number, row +1);
    };

    // case when stair string is still being built
    (stair.length <= row) ?  stair += '#' : stair += ' ';

    steps(number, row, stair);
};

const printnNumber = (number) => {

};

module.exports = steps;