# Heap Sort

## 1. What is Heap Sort?
Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure. It divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest (or smallest) element and moving that to the sorted region.

## 2. How it works
Heap sort consists of two main phases:
1. **Phase 1: Build a Heap (O(N))**
   - We transform the unsorted array into a **Max-Heap** (if we want to sort in ascending order) or a **Min-Heap** (if we want descending order).
   - We do this by calling the `heapifyDown` operation starting from the last internal node up to the root node.

2. **Phase 2: Extract and Sort (O(N log N))**
   - The largest element in the Max-Heap is always at the root (index 0).
   - We swap the root with the last element in the heap, effectively placing the largest element at its correct sorted position at the end of the array.
   - We reduce the logical size of the heap by 1 (ignoring the sorted element at the end).
   - We then call `heapifyDown` on the new root to restore the Max-Heap property.
   - We repeat this process until the heap size is 1.

## 3. Complexity Analysis
- **Time Complexity**: 
  - Building the heap takes O(N) time.
  - Extracting elements and heapifying takes O(N log N) time.
  - Overall Time Complexity: **O(N log N)** in Best, Average, and Worst cases.
- **Space Complexity**: **O(1)**. Heap sort is an **in-place** sorting algorithm. No extra memory is required.

## 4. Stability
Heap sort is **not a stable sort**. Relative order of equal elements is not preserved, as the tree structure can reorder duplicate elements when swapping the root with the last element and heapifying.

## 5. Heap Sort vs Quick Sort vs Merge Sort
- **Quick Sort**: Usually faster in practice (better cache locality), but has O(N²) worst-case time complexity and O(log N) space complexity.
- **Merge Sort**: Stable sort, O(N log N) worst-case time, but requires O(N) extra space.
- **Heap Sort**: O(N log N) worst-case time, O(1) space, but usually slower than Quick Sort in practice and is not stable. Used heavily in embedded systems where strict O(1) space and guaranteed O(N log N) time are required.
