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
  end = end || array.length - 1;
  if (start > end) {
    return null;
  }
  const mid = Math.floor((end - start) / 2) + start;
  console.log(mid);
  console.log(start);
  console.log(end);

  if (array[mid] === target) {
    return mid;
  }
  if (array[mid] > target) {
    return binarySearch(array, target, start, mid - 1);
  }
  return binarySearch(array, target, mid + 1, end);
};

console.log(binarySearch([1, 2, 3, 4, 5], 4) === 3);
console.log(binarySearch([1, 2, 3, 4, 5], 8));
