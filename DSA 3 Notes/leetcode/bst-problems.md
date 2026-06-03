# Common LeetCode Tree and BST Problems

This document summarizes the approach for essential Tree and BST problems.

## 1. Validate Binary Search Tree (LeetCode 98)
**Problem**: Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).
**Approach**:
- A naive approach of just checking if `left < root < right` for every node fails, because the *entire* left subtree must be less than the root, and the *entire* right subtree must be greater.
- **Optimal (Recursive with bounds)**:
  - Create a helper function `isValid(node, min_val, max_val)`.
  - At each node, check if `min_val < node.val < max_val`. If not, return false.
  - Recursively call for the left child: `isValid(node.left, min_val, node.val)`.
  - Recursively call for the right child: `isValid(node.right, node.val, max_val)`.
- **Time Complexity**: O(N)

## 2. Kth Smallest Element in a BST (LeetCode 230)
**Problem**: Given the `root` of a binary search tree, and an integer `k`, return the `k`th smallest value (1-indexed) of all the values of the nodes in the tree.
**Approach**:
- We know that an **Inorder Traversal** (Left, Root, Right) of a BST visits the nodes in strictly increasing order.
- **Recursive**: Perform an inorder traversal and keep a counter. When the counter reaches `k`, record the value and return.
- **Iterative**: Use a Stack. Traverse down to the leftmost node, pushing nodes to the stack. Pop from the stack, decrement `k`. If `k == 0`, return the popped value. Otherwise, move to the right child and repeat.
- **Time Complexity**: O(H + K), where H is the height of the tree.

## 3. Binary Tree Level Order Traversal (LeetCode 102)
**Problem**: Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
**Approach (BFS)**:
- Use a Queue. Initialize it with the root node.
- While the queue is not empty:
  - Determine the number of nodes at the current level (`size = queue.length`).
  - Loop `size` times:
    - Dequeue a node, add its value to a temporary level array.
    - If it has a left child, enqueue it.
    - If it has a right child, enqueue it.
  - Add the temporary level array to the final results list.
- **Time Complexity**: O(N)

## 4. Lowest Common Ancestor of a BST (LeetCode 235)
**Problem**: Given a BST, find the lowest common ancestor (LCA) node of two given nodes `p` and `q`.
**Approach**:
- Use the BST property: left descendants are smaller, right descendants are larger.
- Start at the root.
- If both `p.val` and `q.val` are less than the root's value, the LCA must be in the left subtree. Move `root = root.left`.
- If both are greater, the LCA is in the right subtree. Move `root = root.right`.
- If they split (one is smaller, one is larger) or one matches the root, the current root is the LCA.
- **Time Complexity**: O(H)

## 5. Range Sum of BST (LeetCode 938)
**Problem**: Given the `root` of a BST and two integers `low` and `high`, return the sum of values of all nodes with a value in the inclusive range `[low, high]`.
**Approach**:
- Traverse the tree.
- If the current node's value is between `low` and `high`, add it to the sum.
- Optimization: 
  - If `node.val > low`, we should search the left subtree.
  - If `node.val < high`, we should search the right subtree.
- **Time Complexity**: O(N) in worst case, O(H) average.
