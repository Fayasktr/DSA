# Autocomplete Feature using a Trie

## 1. Concept of Autocomplete
Autocomplete (or Auto-suggestion) is a feature that predicts the rest of a word a user is typing. Search engines (like Google), code editors, and mobile keyboards use this heavily. The **Trie (Prefix Tree)** is the ideal data structure for implementing this feature because it natively groups words that share the same prefix.

## 2. How to Implement Autocomplete using a Trie
Implementing autocomplete involves two main steps:
1. **Traverse to the Prefix**: Trace down the Trie using the characters of the prefix the user has typed. If the prefix does not exist in the Trie, return an empty list (no suggestions).
2. **DFS to find all words**: Once the node corresponding to the last character of the prefix is found, perform a Depth-First Search (DFS) from that node to find all descendant nodes where `isEndOfWord` is true.

## 3. Algorithm Steps
1. **Initialize `results` array**.
2. **Find the Prefix Node**:
   - Start at the root.
   - For each character in the prefix, move to the corresponding child node.
   - If a child node doesn't exist, return `results` (empty).
3. **Helper DFS Function (`dfs(currentNode, currentPrefix)`)**:
   - If `currentNode.isEndOfWord` is true, push `currentPrefix` to `results`.
   - Iterate through all possible children (e.g., 'a' to 'z').
   - For every existing child, call `dfs(childNode, currentPrefix + char)`.
4. Call `dfs(prefixNode, prefix)`.
5. Return the `results` array.

## 4. Example
If a Trie contains: `["car", "card", "cart", "cat", "dog"]`
And the user types: `"car"`
1. The search navigates `c` -> `a` -> `r`.
2. From node `r`, `isEndOfWord` is true, so `"car"` is added to results.
3. DFS continues from `r`. It finds child `d` (`isEndOfWord` is true) -> adds `"card"`.
4. It finds child `t` (`isEndOfWord` is true) -> adds `"cart"`.
5. Results returned: `["car", "card", "cart"]`.

## 5. Complexity
- **Time Complexity to reach prefix**: **O(P)** where P is the length of the prefix.
- **Time Complexity to find suggestions**: **O(V + E)** where V is the number of nodes and E is the number of edges in the subtree under the prefix node.
- **Space Complexity**: **O(K * L)** where K is the number of suggestions and L is the average length of the words to store the results.
