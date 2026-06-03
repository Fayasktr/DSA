# Priority Queue

## 1. What is a Priority Queue?
A Priority Queue is an abstract data type similar to a regular queue or stack, but where each element has a "priority" associated with it. 
- In a regular queue, elements are served on a First-In-First-Out (FIFO) basis.
- In a Priority Queue, an element with high priority is served before an element with low priority. If two elements have the same priority, they are served according to their order in the queue.

## 2. Priority Queue vs Regular Queue
| Feature | Regular Queue | Priority Queue |
|---------|--------------|----------------|
| **Ordering** | FIFO (First-In-First-Out) | Based on Priority |
| **Dequeue** | Removes the oldest element | Removes highest/lowest priority element |
| **Implementation** | Array or Linked List | Array, Linked List, Heap (Best) |

## 3. How to Implement a Priority Queue?
A priority queue can be implemented using several data structures, but **Heaps** are by far the most efficient and common.

| Data Structure | Enqueue Time | Dequeue Time |
|----------------|--------------|--------------|
| Unsorted Array | O(1)         | O(N)         |
| Sorted Array   | O(N)         | O(1)         |
| **Binary Heap**| **O(log N)** | **O(log N)** |
| BST            | O(log N)     | O(log N)     |

Using a **Max-Heap**, the highest priority element is always at the root. We can `peek` at it in O(1) time and extract it in O(log N) time.
Using a **Min-Heap**, the lowest priority element is at the root.

## 4. Applications of Priority Queue
- **Dijkstra’s Shortest Path Algorithm**: Used to fetch the next node with the minimum distance.
- **Prim’s Minimum Spanning Tree Algorithm**: Used to fetch the edge with the minimum weight.
- **Operating Systems**: Task scheduling, where tasks are processed based on priority (e.g., system tasks vs user tasks).
- **Huffman Coding**: Used for data compression.
- **Event-Driven Simulations**: Managing events chronologically.
