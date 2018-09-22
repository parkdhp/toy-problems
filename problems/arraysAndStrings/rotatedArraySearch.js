/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

// var rotatedArraySearch = function (rotated, target) {
//   if(rotated.length === 0) return null;
//   let pivot = findPivot(rotated)
//   if(pivot > 0 && target >= rotated[0] && target <= rotated[pivot - 1]) {
//     return binarySearch(rotated, 0, pivot-1, target)
//   } else {
//     return binarySearch(rotated, pivot, rotated.length-1, target)
//   }
// };

// const findPivot = (arr) => {
//   let s = 0, e = arr.length - 1;
//   while (s <= e) {
//     m = Math.floor(s + e) / 2;
//     if(arr[m] > arr[m + 1]) return m + 1
//     else if(arr[s] <= arr[m]) s = m + 1;
//     else e = m - 1;
//   }
// }

// const binarySearch = (arr, s, e, n) => {
//   while (s <= e) {
//     let m = Math.floor(s + e) / 2;
//     if(arr[m] === n) return m
//     else if(n < arr[m]) e = m - 1
//     else s = m + 1
//   }
//   return null
// }


const rotatedArraySearch = (array, target) => {
  //initialize range
  let start = 0, end = array.length - 1;
  //while a range exists
  while(start <= end) {
    //calculate middle index
    let middle = Math.floor((end + start) / 2)
    //if middle-item is tareget, return middle
    if(array[middle] === target) return middle;
    if(array[start] <= array[middle]) {
      if(array[start] <= target && target < array[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    } else {
      if(array[middle] < target && target <= array[end]) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
  }
  return null;
}