# AVL Tree

## 1. What is an AVL Tree?
An AVL (Adelson-Velsky and Landis) tree is a self-balancing Binary Search Tree (BST). In an AVL tree, the heights of the two child subtrees of any node differ by at most one. If at any time they differ by more than one, rebalancing is done to restore this property.

## 2. Why do we need AVL Trees?
In a standard BST, if elements are inserted in a sorted or nearly sorted order, the tree becomes skewed (degenerate), resembling a linked list. This degrades the time complexity of operations (Search, Insert, Delete) from O(log N) to O(N). AVL trees enforce strict balancing, ensuring that the height remains O(log N) and all operations take O(log N) time in the worst case.

## 3. Balance Factor
The balance factor of a node in an AVL tree is calculated as:
**Balance Factor = Height(Left Subtree) - Height(Right Subtree)**

For an AVL tree to be balanced, the balance factor of every node must be `-1`, `0`, or `1`.

## 4. Rotations in AVL Trees
When an insertion or deletion causes the balance factor of a node to become less than -1 or greater than 1, rotations are performed to restore the balance. There are four types of rotations:

### Single Rotations
- **Left Rotation (LL Rotation)**: Used when the right subtree is excessively heavy (inserted into the right child of the right subtree).
- **Right Rotation (RR Rotation)**: Used when the left subtree is excessively heavy (inserted into the left child of the left subtree).

### Double Rotations
- **Left-Right Rotation (LR Rotation)**: Used when a node is inserted into the right child of the left subtree. It consists of a Left Rotation on the child followed by a Right Rotation on the parent.
- **Right-Left Rotation (RL Rotation)**: Used when a node is inserted into the left child of the right subtree. It consists of a Right Rotation on the child followed by a Left Rotation on the parent.

## 5. AVL Tree vs Standard BST
| Feature | Standard BST | AVL Tree |
|---------|--------------|----------|
| **Balance** | Can be unbalanced/skewed | Strictly balanced |
| **Worst-case Time Complexity** | O(N) | O(log N) |
| **Rotations** | None | Requires rotations on insert/delete |
| **Use case** | When data is random | When frequent searches are needed |

## 6. Time Complexity
- **Search**: O(log N)
- **Insertion**: O(log N) (may require O(1) rotations)
- **Deletion**: O(log N) (may require O(log N) rotations up the tree)
- **Space Complexity**: O(N) for storing nodes and balance factor/height at each node.
