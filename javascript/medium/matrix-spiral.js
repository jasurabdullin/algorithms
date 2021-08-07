// Write a function that accepts an integer N and returns a NxN spiral matrix.

// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

const matrix = (number) => {
    // repeat for other two sides
    
    // create a variable "spiral" as an empty array of arrays
    const spiral = [];
    
    // create counter variable, starting at 1
    let counter = 1;
    
    let startColumn = 0;
    let endColumn = number - 1;
    let startRow = 0;
    let endRow = number - 1;
    
    
    for (let i = 0; i < number; i++) {
        spiral.push([])
    }
    
    // start where startRow = 0
    // while (startColumn <= endColumn) && (startRow <= endRow)
    while (startColumn <= endColumn && startRow <= endRow) {
        // top/first row
        // loop from start_colum to endColumn 
        for (let i = startColumn; i <= endColumn; i++) {
            //at spiral[startRow][i] assign counter variable
            spiral[startRow][i] = counter;
            // increment counter
            counter++;
        }
        // increment startRow
        startRow++;
        
        // right column
        // loop from startRow to endRow
        for (let i = startRow; i <= endRow; i++) {
            // at results[i][endColumn] assign counter variable
            spiral[i][endColumn] = counter;
            // increment counter
            counter++;
        }
        // decrement end column
        endColumn--;

        // bottom row
        // decrement end row
        for (let i = endColumn; i >= startRow; i--) {
            spiral[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // start column

        for (let i = endRow; i >= startRow; i--) {
            spiral[i][startColumn] = counter;
            counter++;
        }
        startColumn++;

        return spiral;
    }
};

module.exports = matrix;