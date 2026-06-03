# Breadth-First Search (BFS) in Graphs

## 1. What is BFS?
Breadth-First Search (BFS) is a graph traversal algorithm that explores all the neighbor vertices at the present depth prior to moving on to the vertices at the next depth level. It effectively explores the graph in a radiating manner from the starting node.

## 2. Implementation Details
- **Data Structure Used**: A **Queue** (FIFO - First In First Out) is used to keep track of the vertices to visit next.
- **Tracking Visits**: Since graphs can have cycles (unlike trees), a `visited` array or set is mandatory to keep track of visited nodes to prevent infinite loops.
- **Starting Point**: A starting node is pushed into the queue and marked as visited. While the queue is not empty, we dequeue a node, process it, and enqueue all its unvisited adjacent nodes, marking them visited.

## 3. Algorithm Steps
1. Initialize an empty queue and a visited set.
2. Choose a starting vertex, mark it as visited, and enqueue it.
3. While the queue is not empty:
   - Dequeue the front vertex `v`.
   - Process `v` (e.g., print it).
   - For each adjacent vertex of `v`:
     - If it is not in the visited set, mark it as visited and enqueue it.

## 4. Time and Space Complexity
- **Time Complexity**: **O(V + E)**, where V is the number of vertices and E is the number of edges. This is because every vertex is enqueued/dequeued exactly once, and every edge is traversed exactly once (or twice in an undirected graph).
- **Space Complexity**: **O(V)**, for storing the `visited` array and the queue. In the worst case, the queue can hold all the vertices.

## 5. Applications of BFS
- **Shortest Path**: Finding the shortest path (in terms of number of edges) between two nodes in an **unweighted graph**.
- **Web Crawlers**: Search engines use BFS to crawl the web, analyzing links level by level.
- **Social Networks**: Finding mutual friends, or finding people within 'k' degrees of separation (like LinkedIn connections).
- **Cycle Detection**: Can be used to check for cycles in an undirected graph.
- **Bipartite Graph Check**: Determining if a graph can be colored with two colors such that no two adjacent nodes have the same color.
