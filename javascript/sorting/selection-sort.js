// "Prove Me Wrong" algorithm

const selectionSort = (array) => {
    // from i = 0 to < array.length
        // assume the element at i is the least in the array, assign i to "indexOfMin"
        // for j from i + 1 to end of array
            // see if there is an element with lower value
                // if there is, record its index
        // if the index of the current element and the index of the "lowest" element is not the same, swap them
    
    for (let i = 0; i < array.length; i++) {
        let indexOfMin = i;

        for (let j = (i + 1); j < array.length; j++) {
            if (array[j] < array[indexOfMin]) {
                indexOfMin = j;
            }
        }

        if (indexOfMin !== i) {
            let lesser = array[indexOfMin];
            array[indexOfMin] = array[i];
            array[i] = lesser;
        }
    }

    return array;
};