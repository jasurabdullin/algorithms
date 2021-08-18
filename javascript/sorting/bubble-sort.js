
// Quick Description: The purpose of a bubble sort is to find the largest element in the array and move to the end of the array
const bubbleSort = (array) => {
    // from i=0 < array.length
    // from j = 0 to (array.length - i)
    // if the element at j is greater than j+1
    // swap elements at j and j+1

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - i - 1); j++) {
            if (array[j] > array[j + 1]) {
                const lesser = array[j + 1];
                array[j + 1] = array[j];
                array[j] = lesser;
            }
        }
    }

    return array;
};