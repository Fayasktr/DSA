# Shortest Path in Graphs

## 1. Shortest Path in Unweighted Graphs
In an unweighted graph (where all edges have the same weight or cost, usually considered 1), the shortest path between two vertices is simply the path with the minimum number of edges.
- **Algorithm Used**: **Breadth-First Search (BFS)**.
- **Why BFS?**: BFS traverses the graph level by level. When it first reaches the destination node from the source node, it guarantees that the path taken is the shortest possible path in terms of the number of edges.
- **Complexity**: Time Complexity is O(V + E), and Space Complexity is O(V).

## 2. Shortest Path in Weighted Graphs
In a weighted graph, edges have different costs or distances associated with them. The shortest path is the path where the sum of the edge weights is minimized. BFS cannot be used here because the path with fewer edges might have a higher total weight than a path with more edges.
- **Algorithm Used**: **Dijkstra's Algorithm**.

## 3. Dijkstra's Algorithm
Dijkstra's algorithm finds the shortest path from a single source node to all other nodes in a weighted graph.
**Note**: Dijkstra's algorithm does **not** work if the graph contains **negative weight edges** (for that, we use the Bellman-Ford algorithm).

### Implementation Details:
- Uses a **Priority Queue (Min-Heap)** to constantly fetch the node with the current shortest known distance.
- Maintains a `distances` array (initialized to infinity for all nodes except the source, which is 0).

### Algorithm Steps:
1. Initialize distances: `dist[source] = 0`, all other `dist[v] = Infinity`.
2. Insert `(0, source)` into the Min-Heap.
3. While the Min-Heap is not empty:
   - Extract the node `u` with the minimum distance `d`.
   - Iterate over all adjacent neighbors `v` of `u`:
     - Calculate new distance `new_dist = dist[u] + weight(u, v)`.
     - If `new_dist < dist[v]`, update `dist[v] = new_dist` and push `(new_dist, v)` to the Min-Heap.
4. The `distances` array will now contain the shortest paths from the source to every other node.

### Complexity:
- **Time Complexity**: **O((V + E) log V)** using an adjacency list and a Min-Heap.
- **Space Complexity**: **O(V)** for distances and Priority Queue.
