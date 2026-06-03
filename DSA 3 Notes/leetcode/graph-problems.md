# Common LeetCode Graph Problems

This document contains logic and approaches for some of the most frequently asked graph problems on LeetCode.

## 1. Number of Islands (LeetCode 200)
**Problem**: Given an `m x n` 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
**Approach (DFS / BFS)**:
- Iterate through the entire grid.
- Whenever you encounter a '1' (land), increment the island count.
- Then, perform a DFS or BFS starting from that '1' to explore all connected land. Mark every visited '1' as '0' (or keep a visited set) to avoid counting the same island multiple times.
- Move to the next cell.
- **Time Complexity**: O(m * n)

## 2. Clone Graph (LeetCode 133)
**Problem**: Return a deep copy (clone) of a connected undirected graph.
**Approach (DFS / BFS with HashMap)**:
- Use a HashMap to map original nodes to their cloned counterparts. This prevents infinite loops and ensures we don't clone the same node twice.
- Start DFS from the given node. If the node is already in the map, return its clone.
- If not, create a new clone node and add it to the map.
- Iterate through the neighbors of the original node, recursively clone them, and append them to the clone's neighbor list.
- **Time Complexity**: O(V + E)

## 3. Course Schedule (LeetCode 207)
**Problem**: There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [a, b]` indicates that you must take course `b` first if you want to take course `a`. Return true if you can finish all courses.
**Approach (Cycle Detection in Directed Graph)**:
- This is essentially checking if the graph is a Directed Acyclic Graph (DAG). If there's a cycle, you can never finish the courses.
- Build an adjacency list.
- Use DFS with a `visited` set and a `recursion stack` set to detect cycles.
- Alternatively, use Kahn's Algorithm (Topological Sort using BFS). If the number of processed nodes is less than `numCourses`, there is a cycle.
- **Time Complexity**: O(V + E)

## 4. Word Ladder (LeetCode 127)
**Problem**: Find the length of the shortest transformation sequence from `beginWord` to `endWord`, such that only one letter can be changed at a time and each transformed word must exist in the word list.
**Approach (BFS)**:
- Since we need the *shortest* path, BFS is the correct choice.
- Push the `beginWord` into a queue.
- For every word in the queue, change each character from 'a' to 'z' one by one to find valid neighboring words from the `wordList`.
- If a valid word is found, remove it from the list (to mark as visited) and enqueue it.
- If we reach the `endWord`, return the level (number of steps).
- **Time Complexity**: O(M² * N), where M is length of word and N is number of words.
