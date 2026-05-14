# Quick Sort

Quick Sort is a sorting algorithm used to arrange elements in ascending or descending order.

It follows the **divide and conquer** technique.

That means:

1. Divide the array into smaller parts.
2. Sort those smaller parts.
3. Combine the result.

## Main Idea

Quick Sort chooses one element as a **pivot**.

Then it places:

- smaller elements on the left side of the pivot
- greater elements on the right side of the pivot

- but better is choose a randome one for the pivot, because of the 

After that, the same process is repeated for the left and right parts of the array.

## Example

Array:

```js
[5, 3, 8, 4, 2]
```

Choose `5` as the pivot.

Now compare other elements with `5`:

- `3` is smaller than `5`
- `8` is greater than `5`
- `4` is smaller than `5`
- `2` is smaller than `5`

So we can divide it like this:

```js
left  = [3, 4, 2]
pivot = 5
right = [8]
```

Now sort the left side `[3, 4, 2]` using the same method.

Finally:

```js
[2, 3, 4] + [5] + [8]
```

Sorted array:

```js
[2, 3, 4, 5, 8]
```

## Algorithm Steps

1. Pick a pivot element from the array.
2. Create two parts:
   - left part for elements smaller than the pivot
   - right part for elements greater than the pivot
3. Apply Quick Sort again on the left part.
4. Apply Quick Sort again on the right part.
5. Join left part, pivot, and right part.

## JavaScript Code

```js
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 3, 8, 4, 2]));
```

Output:

```js
[2, 3, 4, 5, 8]
```

## Base Case

The base case is:

```js
if (arr.length <= 1) {
  return arr;
}
```

Why?

Because an array with `0` or `1` element is already sorted.

Examples:

```js
[]
[7]
```

No need to sort them.

## Time Complexity

| Case | Time Complexity |
| --- | --- |
| Best Case | O(n log n) |
| Average Case | O(n log n) |
| Worst Case | O(n^2) |

## Why Worst Case Happens

Worst case happens when the pivot is always the smallest or largest element.

Example:

```js
[1, 2, 3, 4, 5]
```

If we always choose the first element as pivot, the array does not divide equally.

This makes Quick Sort slower.

## Space Complexity

For the beginner version above:

```txt
O(n)
```

Because we are creating extra `left` and `right` arrays.

## Important Points

- Quick Sort uses recursion.
- It works by selecting a pivot.
- Elements smaller than pivot go left.
- Elements greater than pivot go right.
- It is usually very fast in practice.
- Bad pivot selection can make it slow.

## Common Mistakes

- Forgetting the base case.
- Including the pivot again inside the loop.
- Not returning the final sorted array.
- Thinking Quick Sort always has `O(n log n)` time complexity.
- Getting confused between Quick Sort and Merge Sort.

## Quick Sort vs Merge Sort

| Quick Sort | Merge Sort |
| --- | --- |
| Uses pivot | Divides array into two halves |
| Usually faster in practice | Very stable and predictable |
| Worst case is O(n^2) | Worst case is O(n log n) |
| Can be done in-place | Usually needs extra space |

## Simple Definition

Quick Sort is a sorting algorithm that picks a pivot, places smaller values on the left and bigger values on the right, then repeats the same process until the whole array is sorted.
