/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

const binarySearch = (array, target, start, end) => {
  start = start || 0;
  end = end || array.length;
  if(start === end) {
    return null;
  }
  let mid = Math.floor((end - start) / 2) + start;

  if(array[mid] === target) {
    return mid;
  } else if (target > array[mid]) {
    return binarySearch(array, target, mid, end)
  } else {
    return binarySearch(array, target, start, mid);
  }
}