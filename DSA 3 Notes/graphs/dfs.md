# Depth-First Search (DFS) in Graphs

## 1. What is DFS?
Depth-First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It dives deep into a path until it hits a dead end (a node with no unvisited neighbors) and then retraces its steps back (backtracking) to explore other branches.

## 2. Implementation Details
- **Data Structure Used**: A **Stack** (LIFO - Last In First Out) is used for DFS. This can be implemented explicitly using a Stack data structure, or implicitly using the **call stack** via **Recursion**.
- **Tracking Visits**: Just like BFS, a `visited` array or set is crucial to prevent infinite loops due to cycles in the graph.
- **Starting Point**: A starting node is marked as visited. We then recursively call the DFS function on all of its unvisited adjacent nodes.

## 3. Algorithm Steps (Recursive)
1. Initialize a `visited` set.
2. Define a recursive function `dfs(node)`:
   - Mark `node` as visited.
   - Process `node` (e.g., print it).
   - For each adjacent vertex `neighbor` of `node`:
     - If `neighbor` is not visited, call `dfs(neighbor)`.
3. Call `dfs(start_node)`.

## 4. Backtracking in DFS
Backtracking is inherently built into the DFS recursion. When the algorithm reaches a node that has no unvisited neighbors, the recursive function call finishes and returns to the caller. This effectively "steps back" to the previous node to check if *it* has any other unvisited branches to explore.

## 5. Time and Space Complexity
- **Time Complexity**: **O(V + E)**, where V is the number of vertices and E is the number of edges. Each node is visited once, and each edge is evaluated once (or twice in undirected graphs).
- **Space Complexity**: **O(V)**, due to the recursion stack and the `visited` array. In the worst case (a highly skewed graph like a line), the recursion depth can be V.

## 6. DFS vs BFS
- **DFS** uses a Stack (LIFO); **BFS** uses a Queue (FIFO).
- **DFS** goes deep; **BFS** goes wide.
- **DFS** is better for exploring all possible paths (mazes, puzzles); **BFS** is better for finding the shortest path on unweighted graphs.

## 7. Applications of DFS
- **Topological Sorting**: Finding a linear ordering of vertices in a Directed Acyclic Graph (DAG) (e.g., for task scheduling, resolving dependencies).
- **Cycle Detection**: Very effective for detecting cycles in both directed and undirected graphs by keeping track of the recursion stack.
- **Finding Connected Components**: Identifying isolated subgraphs within a disconnected graph.
- **Solving Mazes / Puzzles**: DFS explores paths and backtracks when it hits dead ends, making it ideal for games and maze solving.
