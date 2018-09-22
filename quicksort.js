/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */
var isSorted = (array) => {
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

let quicksort = function (array) {
  for (var i = 0; i < array.length; i++) {
    let smaller = [];
    let bigger = [];
    let pivot = array[i];
    for (var j = 0; j < array.length; j++) {
      if (array[j] < pivot) {
        smaller.push(array[j])
      }
      if (array[j] > pivot) {
        bigger.push(array[j])
      }
    }
    smaller.push(pivot);
    if (!isSorted(smaller)) {
      smaller = quicksort(smaller)
    }
    if (!isSorted(bigger)) {
      bigger = quicksort(bigger);
    }
    array = [...smaller, ...bigger]
  }

  return array;
}