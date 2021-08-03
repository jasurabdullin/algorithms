// Write a function that accepts a positive number N.
// The function should console log a pyramid shape with N levels using the # character.  
// Make sure the pyramid has spaces on both the left *and* right hand sides

// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Solution #1 - Iteration

// const pyramid = (number) => {
    // iterate from 0 to 'number' of rows
    // create an empty string 'level'
    // from 0 to X columns, if the column should have a #, add a '#' to 'level'
    // else, add a space to 'level'
    // console.log(level)
    
    // const midPoint = Math.floor((2 * number - 1) / 2);
    
    // for (let row = 0; row < number; row++) {
    //     let level = '';

    //     for (let column = 0; column < 2 * number - 1; column++) {
    //         if (midPoint - row <= column && midPoint + row >= column) {
    //             level += '#';
    //         } else {
    //             level += ' ';
    //         }
    //     }
    //     console.log(level);
    // }
// };

// Solution #2 - Recursion

const pyramid = (number, row = 0, level = '') => {

    const midPoint = Math.floor((2 * number - 1) / 2);

    // case when all work is completed
    if (row === number) return;

    // case when the recursion is at the end of the row
    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(number, row + 1);
    }

    // case when stair string is still being built

    let addedValue;
    // 
    if (midPoint - row <= level.length && midPoint + row >= level.length) {
        addedValue = '#'
    } else {
        addedValue = ' ';
    }

    pyramid(number, row, level + addedValue);
};


module.exports = pyramid;