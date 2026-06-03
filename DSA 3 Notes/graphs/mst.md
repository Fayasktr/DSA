# Minimum Spanning Tree (MST)

## 1. What is a Spanning Tree?
Given an undirected and connected graph, a Spanning Tree is a subgraph that is a tree (i.e., has no cycles) and includes all the vertices of the original graph.
If a graph has `V` vertices, every spanning tree will have exactly `V - 1` edges.

## 2. What is a Minimum Spanning Tree (MST)?
In a weighted graph, there can be multiple spanning trees. A Minimum Spanning Tree (MST) is the spanning tree whose sum of edge weights is the minimum possible compared to all other spanning trees.

## 3. Why do we need MST?
MST is extremely useful in network design. 
- **Applications**: 
  - Designing telecommunications networks (laying cable to connect cities with minimum wire).
  - Electrical grid planning.
  - Computer network routing.
  - Approximations for NP-hard problems like the Traveling Salesperson Problem (TSP).

## 4. Algorithms to find MST
There are two popular greedy algorithms to find the Minimum Spanning Tree of a graph:

### A. Kruskal's Algorithm
Kruskal's algorithm builds the MST by sorting all edges by weight and adding them one by one, provided they do not form a cycle.
**Steps**:
1. Sort all the edges in non-decreasing order of their weight.
2. Initialize an empty MST.
3. Iterate through the sorted edges. For each edge, check if adding it to the MST forms a cycle (using a Disjoint Set / Union-Find data structure).
4. If it doesn't form a cycle, add it to the MST. If it does, discard it.
5. Repeat until the MST has exactly `V - 1` edges.
- **Time Complexity**: **O(E log E)** or **O(E log V)** (due to sorting edges).

### B. Prim's Algorithm
Prim's algorithm builds the MST by starting with a single vertex and continually adding the minimum weight edge that connects a vertex inside the growing MST to a vertex outside it.
**Steps**:
1. Initialize a Min-Heap (Priority Queue) and a `visited` array.
2. Choose any starting vertex, mark it visited, and add all its adjacent edges to the Min-Heap.
3. While the Min-Heap is not empty and the MST has fewer than `V - 1` edges:
   - Extract the edge with the minimum weight.
   - If the destination vertex of this edge is already visited, discard the edge.
   - Otherwise, add the edge to the MST, mark the destination vertex as visited, and add all its adjacent edges to the Min-Heap.
- **Time Complexity**: **O((V + E) log V)** using an adjacency list and a Min-Heap.

## 5. Kruskal's vs Prim's
- **Kruskal's** operates on edges, sorting them globally. Better for **sparse graphs** (few edges).
- **Prim's** operates on vertices, expanding outward from a single point. Better for **dense graphs** (many edges).
