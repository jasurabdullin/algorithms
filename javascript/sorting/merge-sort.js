
const mergeSort = (array) => {
    if (array.length === 1) return array;

    const center = Math.floor(array.length / 2);
    const left = array.slice(0, center);
    const right = array.slice(center);

    return merge(mergeSort(left), mergeSort(right));
};

// function of the merge function is to take two separate sorted arrays and merge them together into one sorted array
const merge = (left, right) => {
    // create "results" array
    // while there are still elements in both arrays
        // if the first element the left half is less than first in right half
            // "shift" the element from left into the "results" array
        // else, "shift" the element from right into the "results" array
    // take everything from the array that still has stuff in it and put it in results
    const results = [];
    while(left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift())
        }
    }

    return [...results, ...left, ...right];
};