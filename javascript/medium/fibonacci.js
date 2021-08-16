// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two.
// For example, the sequence [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series.

// Example:
//   fib(4) === 3

// Solution #1: Iteration
// Runtime Complexity: Linear --> For every increase in N, we have to calculate one additonal number

// const fibonacci = (number) => {
        // initialize an array to store fibonacci sequence starting with 0 and 1
//     const fibArray = [0 ,1];
        // iterate until a given 'number' where i = 2
//     for (let i = 2; i <= number; i++) {
            // get the last two numbers in the fibonacci array
//         const lastNumber = fibArray[i - 1];
//         const secondLastNumber = fibArray[i - 2];
            // add the sum of the last two numbers from the current fibArray into the fibArray 
//         fibArray.push(lastNumber + secondLastNumber);
//     }
        // return the fibonacci number at the given N index
//     return fibArray[number];
// };

// Solution #2: Recursion
// Runtime Complexity: Exponential Time

// const fibonacci = (number) => {
//     if (number < 2) return number;
//     return fibonacci(number - 1) + fibonacci(number - 2);
// };

// Solution #3: Recursion with Memoization
// Runtime Complexity: Exponential Time

const memoize = (func) => {
    const cache = {};

    return function(...args) {
        if (cache[args]) return cache[args];
        
        const result = func.apply(this, args);
        cache[args] = result;
        return result;
    };
};

const fibonacci = (number) => {
    if (number < 2) return number;
    return fibonacci(number - 1) + fibonacci(number - 2);
};

const fibonacci = memoize(fibonacci);

module.exports = fibonacci;