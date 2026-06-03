# Cycle Detection in Graphs

## 1. What is a Cycle in a Graph?
A cycle in a graph is a path that starts and ends at the same vertex, passing through at least one other vertex, and with no repeated edges or vertices other than the start and end vertex.

## 2. Detecting Cycles in an Undirected Graph
In an undirected graph, a cycle exists if we encounter a visited node during our traversal that is **not the direct parent** of the current node.
### Using DFS:
- Keep track of the `visited` array and the `parent` of the current node.
- Start DFS from any unvisited node.
- For each neighbor of the current node:
  - If the neighbor is unvisited, recursively call DFS, passing the current node as the `parent`.
  - If the neighbor is already visited AND it is **not equal to the parent**, a cycle is detected!

### Using BFS:
- Use a Queue to store pairs of `(current_node, parent_node)`.
- Mark the starting node as visited and push `(start_node, -1)` into the Queue.
- While the Queue is not empty:
  - Pop `(node, parent)`.
  - For each neighbor of `node`:
    - If it's unvisited, mark it visited and push `(neighbor, node)` to the Queue.
    - If it's visited AND it is **not equal to `parent`**, a cycle is detected!

## 3. Detecting Cycles in a Directed Graph
In a directed graph, the logic is slightly different because a node being visited again does not necessarily mean a cycle (it could be a cross edge). We need to check if we encounter a node that is currently in the **same recursion stack** (i.e., we are currently exploring its descendants).

### Using DFS:
- Keep track of two arrays: `visited` and `recStack` (recursion stack).
- During DFS on a node:
  - Mark it as visited AND add it to the `recStack`.
  - Traverse all its neighbors.
  - If a neighbor is not visited, recursively call DFS.
  - If a neighbor is already in `recStack`, a cycle is detected! (This means we found a back edge pointing to an ancestor currently being explored).
  - After exploring all neighbors, remove the current node from `recStack` (backtracking).

### Using Kahn's Algorithm (BFS-based Topological Sort):
- A Directed Acyclic Graph (DAG) can be topologically sorted. If a graph has a cycle, topological sorting is impossible.
- Compute the in-degree of all vertices.
- Enqueue all vertices with in-degree 0.
- Keep a `count` of visited nodes. Dequeue, increment `count`, and decrease the in-degree of its neighbors. If a neighbor's in-degree becomes 0, enqueue it.
- If `count` at the end is less than the total number of vertices (V), the graph contains a cycle.

## 4. Time and Space Complexity
For both directed and undirected graphs using BFS/DFS:
- **Time Complexity**: **O(V + E)**
- **Space Complexity**: **O(V)** for maintaining the visited, recursion stack, or queue.
