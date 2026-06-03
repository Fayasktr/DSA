# Prefix Trie vs Suffix Trie

## 1. What is a Prefix Trie?
A Prefix Trie (or simply a Trie) stores a set of strings such that common **prefixes** share the same nodes. It is used to quickly search for prefixes of words, autocomplete, or check if a complete string exists in the dataset.
- **Example**: Inserting "apple" creates the path `a -> p -> p -> l -> e`. If you insert "app", it shares the `a -> p -> p` nodes.

## 2. What is a Suffix Trie?
A Suffix Trie is a Trie that stores all the **suffixes** of a single string (or a set of strings). 
- **How to construct**: To create a Suffix Trie for the word `"banana"`, you insert all of its suffixes into a standard Trie:
  - `"banana"`
  - `"anana"`
  - `"nana"`
  - `"ana"`
  - `"na"`
  - `"a"`

## 3. Why use a Suffix Trie?
While a Prefix Trie is great for finding if a word *starts* with a certain substring, it is terrible at finding if a word *contains* a certain substring.
A Suffix Trie allows you to search for any **substring** of the original text very efficiently.
- If a substring exists in the text, it must be the **prefix of some suffix** of the text. Because a Suffix Trie stores all suffixes and allows fast prefix lookups, checking if a substring exists becomes an **O(M)** operation, where M is the length of the substring.

## 4. Prefix Trie vs Suffix Trie
| Feature | Prefix Trie | Suffix Trie |
|---------|-------------|-------------|
| **Data Stored** | A set of independent strings | All suffixes of a given string |
| **Primary Use Case**| Autocomplete, Prefix matching, Spell checkers | Substring search, Pattern matching |
| **Construction Time**| O(Total length of all strings) | O(N²) for naive, O(N) using Ukkonen's algorithm |
| **Space Complexity**| O(Total length of all strings) | O(N²) worst case (often compressed into a Suffix Tree to achieve O(N) space) |

## 5. Suffix Trie vs Suffix Tree
A standard Suffix Trie takes O(N²) space, which is impractical for long strings (like DNA sequences or large documents). 
A **Suffix Tree** is a compressed version of a Suffix Trie where paths with single children are merged into a single edge. This reduces the space complexity to **O(N)**.
