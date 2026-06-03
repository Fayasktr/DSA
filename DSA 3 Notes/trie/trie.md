# Trie (Prefix Tree)

## 1. What is a Trie?
A Trie (derived from re**trie**val), also known as a Prefix Tree, is a special tree-like data structure used to store associative arrays where the keys are usually strings. Unlike binary search trees, no node in the tree stores the key associated with that node; instead, its position in the tree defines the key with which it is associated. All the descendants of a node have a common prefix of the string associated with that node.

## 2. Structure of a Trie Node
A typical Trie node contains:
- **Children**: An array of pointers (or a Hash Map) to child nodes. For the English alphabet, this is usually an array of size 26.
- **isEndOfWord**: A boolean flag indicating if the current node represents the end of a valid word.

## 3. Advantages of Trie over Hash Map and BST
- **Hash Map**: Hash maps are great for exact matches (O(1) lookups), but they cannot efficiently perform **prefix searches** (e.g., "Find all words starting with 'app'"). Hash maps can also suffer from hash collisions.
- **Binary Search Tree (BST)**: BSTs can do prefix searches, but searching for a string of length `L` takes O(L * log N) time, where N is the number of keys. A Trie takes **O(L)** time.
- **Trie Advantage**: Extremely fast for prefix searching, autocomplete, and dictionary representations. Finding the longest common prefix is also very efficient.

## 4. Disadvantages / Inefficiencies of Trie
- **Memory Consumption**: Tries can be highly inefficient in terms of memory. Every node requires an array of pointers (e.g., 26 pointers for lowercase letters), even if only one child exists. This can lead to a lot of wasted space compared to a Hash Map or BST if words don't share many prefixes. (This issue is mitigated by using Compressed Tries or Radix Trees).

## 5. Operations and Complexity
- **Insertion**: To insert a string of length `L`, we traverse the Trie, adding new nodes for characters that don't exist. Time Complexity: **O(L)**.
- **Search (Exact Match)**: Follow the characters. If you reach the end of the string and `isEndOfWord` is true, it exists. Time Complexity: **O(L)**.
- **Prefix Search**: Follow the characters. If you can trace the entire prefix without hitting null, the prefix exists. Time Complexity: **O(L)**.
- **Deletion**: Requires recursively traversing to the end of the word, setting `isEndOfWord` to false, and then deleting nodes bottom-up only if they have no other children.

## 6. Applications of Trie
- Autocomplete / Word Suggestions in search engines.
- Spell Checkers.
- IP Routing (Longest Prefix Matching).
- Finding the Longest Common Prefix in an array of strings.
- Storing a dictionary of words efficiently for games like Boggle.
