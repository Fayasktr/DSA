# Blind 75 LeetCode Practice Guide

## 1. What is Blind 75?
The "Blind 75" is a highly curated list of 75 LeetCode questions categorized by topic. It was created by an engineering manager to cover all the essential patterns required to ace technical interviews without needing to solve hundreds of redundant problems.

## 2. Key Topics Covered in DSA 3 Context
Focusing on the topics relevant to this module (Trees, Graphs, and Heaps), you should master the following patterns from the Blind 75:

### A. Trees
- **Max Depth of Binary Tree** (Easy): DFS, recursion.
- **Same Tree** (Easy): Tree traversal and comparison.
- **Invert/Flip Binary Tree** (Easy): Recursion, left/right swapping.
- **Binary Tree Level Order Traversal** (Medium): BFS using a Queue.
- **Lowest Common Ancestor of a BST** (Medium): Utilizing BST properties.
- **Validate Binary Search Tree** (Medium): Passing min/max bounds during traversal.
- **Kth Smallest Element in a BST** (Medium): Inorder traversal.

### B. Graphs
- **Clone Graph** (Medium): DFS/BFS with a HashMap to track visited/cloned nodes.
- **Number of Islands** (Medium): Grid-based DFS or BFS.
- **Course Schedule** (Medium): Topological Sort / Cycle Detection in a Directed Graph.
- **Alien Dictionary** (Hard): Advanced Topological Sort.

### C. Heaps
- **Top K Frequent Elements** (Medium): Hash Map + Min-Heap.
- **Merge K Sorted Lists** (Hard): Min-Heap to continuously extract the smallest element across K lists.
- **Find Median from Data Stream** (Hard): Two Heaps (Max-Heap for lower half, Min-Heap for upper half).

## 3. How to Practice
1. **Understand the problem**: Read it carefully and identify the inputs/outputs.
2. **Identify the Pattern**: Is it a graph traversal? A tree recursion problem? Do we need to maintain top elements (Heap)?
3. **Write the brute force approach first**: Mentally or on paper.
4. **Optimize**: Think about time and space complexity.
5. **Implement**: Code the optimal solution.
6. **Learn from solutions**: If you get stuck for more than 30 minutes, watch a YouTube explanation (e.g., NeetCode), completely understand the logic, and then try coding it yourself from scratch without looking at the video.
