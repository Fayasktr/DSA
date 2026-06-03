# Red-Black Tree

## 1. What is a Red-Black Tree?
A Red-Black Tree is a self-balancing Binary Search Tree (BST) where every node follows specific rules (properties) related to a "color" (red or black) assigned to it. These properties ensure that the tree remains approximately balanced, guaranteeing that the longest path from the root to a leaf is no more than twice as long as the shortest path. This guarantees O(log N) time for search, insert, and delete operations.

## 2. Properties of Red-Black Tree
A Red-Black Tree must satisfy the following conditions:
1. **Node Color**: Every node is either Red or Black.
2. **Root Property**: The root of the tree is always Black.
3. **Leaf Property**: All leaves (NIL or null nodes) are considered Black.
4. **Red Property**: If a node is Red, then both its children must be Black. (No two adjacent Red nodes are allowed on any path).
5. **Black Depth Property**: Every path from a node to its descendant NULL nodes must contain the same number of Black nodes.

## 3. Why Red-Black Trees instead of AVL?
While AVL trees are strictly balanced, meaning they provide slightly faster O(log N) lookup times, they require more frequent rotations during insertion and deletion.
Red-Black trees are slightly less rigidly balanced, allowing for fewer rotations during insertions and deletions. Thus, Red-Black trees are generally preferred for write-heavy applications, while AVL trees are better for read-heavy operations. Map and Set implementations in C++ STL and Java's TreeMap typically use Red-Black trees.

## 4. Rebalancing Techniques
When a new node is inserted (initially colored Red) or a node is deleted, the Red-Black properties might be violated. To restore them, we use:
- **Recoloring**: Changing the color of the nodes.
- **Rotations**: Left or Right rotations (similar to AVL trees) to adjust the tree structure without violating BST properties.

## 5. Time Complexity
- **Search**: O(log N)
- **Insertion**: O(log N)
- **Deletion**: O(log N)
- **Space Complexity**: O(N)
