# Complexity Analysis & Big O Notation

## 1. What is Big O Notation?
Big O notation is used in computer science to describe the performance or complexity of an algorithm. It specifically describes the **worst-case scenario**, giving the upper bound on the time (or space) required by an algorithm in terms of the input size `N`.

## 2. Common Time Complexities
Ordered from fastest to slowest:
1. **O(1) - Constant Time**: The operation takes the same amount of time regardless of the input size. Example: Accessing an element in an array by index, pushing/popping from a stack, accessing a hash map element.
2. **O(log N) - Logarithmic Time**: The algorithm halves the data set in each step. Example: Binary Search, searching in a Binary Search Tree (BST), inserting into a Heap. (Logarithmic functions grow very slowly, making them highly efficient for large data).
3. **O(N) - Linear Time**: The running time increases directly in proportion to the input size. Example: Traversing an array, linear search.
4. **O(N log N) - Linearithmic Time**: A combination of linear and logarithmic time. Commonly seen in the best comparison-based sorting algorithms. Example: Merge Sort, Heap Sort, Quick Sort (average case).
5. **O(N²) - Quadratic Time**: The running time is proportional to the square of the input size. Usually involves nested loops over the data. Example: Bubble Sort, Insertion Sort, Selection Sort.
6. **O(2^N) - Exponential Time**: The time doubles with each addition to the input size. Typically occurs in algorithms that solve a problem by recursively solving two smaller problems. Example: Naive recursive calculation of Fibonacci sequence.
7. **O(N!) - Factorial Time**: The time grows factorially. Extremely slow. Example: Generating all permutations of an array, Traveling Salesperson Problem via brute force.

## 3. Best vs Average vs Worst Case
- **Best Case (Big Omega - Ω)**: The minimum time required (e.g., finding an element at the first index in linear search is O(1)).
- **Average Case (Big Theta - Θ)**: The expected time required across all possible inputs.
- **Worst Case (Big O - O)**: The maximum time required (e.g., the element is at the very end of the array, taking O(N)). Big O is the industry standard because it guarantees the algorithm won't take longer than this bound.

## 4. Space Complexity
Space complexity measures the total amount of memory that an algorithm needs to run, as a function of the input size `N`.
- **Auxiliary Space**: The extra or temporary space used by the algorithm (excluding the space taken by the inputs).
- Space complexity is particularly important in recursive functions due to the memory consumed by the **call stack**. E.g., DFS on a skewed tree uses O(N) space on the call stack.

## 5. Removing Constants
When calculating Big O, we drop constants and lower-order terms because as `N` approaches infinity, they become insignificant.
- `O(2N)` becomes `O(N)`
- `O(N² + 5N + 100)` becomes `O(N²)`
