// Given an array and chunk size, divide the array into many subarrays where each subarray is of length size

// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// Solution #1

// const chunk = (array, size) => {
//     // store chunked arrays in an empty variable called chunkedArray
//     // for each element in the unchunked/original array, retrieve the last element in chunkedArray
//     // if the last element does not exist OR if its length is equal to chunk size, push a new chunk into chunkedArray with the current element
//     // otherwise, add the current element into the chunk
//     const chunkedArray = [];

//     for (let element of array) {
//         const lastElement = chunkedArray[chunkedArray.length - 1];
//         if( (!lastElement || lastElement.length === size)) {
//             chunkedArray.push([element])
//         } else {
//             lastElement.push(element)
//         }
//     }
//     return chunkedArray;
// };

// Solution #2

const chunk = (array, size) => {
    // create an empty array called chunkedArray
    // create 'index' start at 0
    // while index is less than array.length(), push a slice of length 'size' from 'array' in to chunkedArray and add size to index

    let index = 0;
    const chunkedArray = [];

    while (index < array.length) {
        chunkedArray.push(array.slice(index, index + size));
        index += size;
    }

    return chunkedArray;
};

module.exports = chunk;