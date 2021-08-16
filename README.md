# Algorithms
My personal repo for all algorithms that I haved learned and solved 🎉

## Big 'O' Notation

- O(n) --> Linear | n
- O(1) --> Constant | 1
- O(n<sup>2</sup>) --> Quadratic | n<sup>2</sup>

## Common Types of Runtimes

> Runtime complexity describes the performance of an algorithm. How much more processing power/time is required to run your alogorithm if we double the inputs?

### Constant Time | _1_

> No matter how many elements we are working with, the algorithm/operation will always take the same amount of time

### Logarithmic Time | _log(n)_

> Doubling the number of elements you are iterating over does not double the amount of work
> Always assume that searching operations are log(n)

### Linear Time | _n_

> Iterating through all elements in a collection of data
> If you see a loop spanning from 0 to Array.length, you probably have _n_, or "linear" time

### Quasilinear Time | _n * log(n)_

> Doubling the number of elements you are iterating over does not double the amount of work
> Increasing the input by one increases the time it takes the complete the operation by one plus a little bit of time
> Always assume that **most** sorting operations are n*log(n)

### Quadratic Time | _n<sup>2</sup>_

> Every element in a collection has to be compared to every other element

### Exponential Time | _2<sup>n</sup>_

> If you add a **single** element to a collection, the proccessing power required doubles

## Identifying Runtime Complexity

- Iterating with a simple `for` loop through a single collection? --> Probably O(n) (linear)
- Iterating through hald a collection? --> Still O(n). There are no constants in runtime (linear)
- Iterating through two **different** collections with separate `for` loops? --> O(n + m)
- Two nested `for` loops iterating over the **same** collection? --> O(n<sup>2</sup>) (quadratic)
- Two nested `for` loops iterating over the **different** collections? --> O(n<sup>m</sup>)
- Sorting? --> O(n*log(n))
- Searching a sorted array? --> O(log(n))

## Memoization
> Store the arguments of each function call along with the result. If the function is called again, with the <em>same arguments</em>, return the precomputed result, rather than running the function again.