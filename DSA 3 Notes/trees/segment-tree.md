# Segment Tree

## 1. What is a Segment Tree?
A Segment Tree is a versatile data structure used mostly for answering range queries over an array effectively, while still allowing for fast updates to the array elements. It is usually implemented as a binary tree, where each node represents an interval (or segment) of the array.

## 2. Why use Segment Trees?
If you have an array and need to perform multiple queries of the form "Find the sum/minimum/maximum from index L to R", a naive approach takes O(N) per query. If the array doesn't change, we can use Prefix Sum arrays to answer sum queries in O(1). However, if we also need to **update** elements (e.g., "Change value at index `i` to `x`"), updating a Prefix Sum array takes O(N).
A Segment Tree allows both Range Queries and Point Updates in **O(log N)** time.

## 3. Structure of a Segment Tree
- **Leaf Nodes**: Represent individual elements of the array.
- **Internal Nodes**: Represent the merged result (sum, min, max, etc.) of their children. For example, if a node represents the interval `[L, R]`, its left child represents `[L, mid]` and its right child represents `[mid+1, R]`.
- The root represents the entire array interval `[0, N-1]`.

## 4. Key Operations
- **Build**: Constructing the tree from the initial array. Takes **O(N)** time using a bottom-up recursive approach.
- **Point Update**: Updating an element at index `i`. We traverse down to the leaf representing `i`, update its value, and then recalculate the values of its ancestors as we return from the recursion. Takes **O(log N)** time.
- **Range Query**: Finding the answer for an interval `[L, R]`. We traverse the tree, and for each node representing an interval `[start, end]`:
  - If `[start, end]` is completely inside `[L, R]`, we return the node's value.
  - If `[start, end]` is completely outside `[L, R]`, we return a default value (e.g., 0 for sum, infinity for min).
  - If it partially overlaps, we recursively query both children and combine their results. Takes **O(log N)** time.

## 5. Segment Tree vs Binary Indexed Tree (Fenwick Tree)
Both solve similar problems (range queries with point updates in O(log N)).
- **Fenwick Tree** is easier to code and uses less memory (strictly O(N)), but is mostly restricted to cumulative queries (like Sum, XOR).
- **Segment Tree** is larger (requires O(4N) space) and slightly more complex but is far more flexible. It can easily handle Min, Max, Range Updates (using Lazy Propagation), and more complex associative functions.
