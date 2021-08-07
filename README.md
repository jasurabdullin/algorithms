# Algorithms
My personal repo for all algorithms that I haved learned and solved 🎉

## Big 'O' Notation

> O(n) --> Linear
> O(1) --> Constant
> O(n<sup>2</sup>) --> Quadratic

## Common Types of Runtimes

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
