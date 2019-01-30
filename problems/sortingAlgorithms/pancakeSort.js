/** Pancake Sort
 * Given an array of integers arr:
 * Write a function flip(arr, k) that reverses the order of the first k elements in the array arr.
 * Write a function pancakeSort(arr) that sorts and returns the input array. You are allowed to use only the function flip you wrote in the first step in order to make changes in the array.
 *
 * EXAMPLE
 * input:  arr = [1, 5, 4, 3, 2]
 * output: [1, 2, 3, 4, 5]
 */

const flip = (arr, k) => {
  for (let i = 0; i <= Math.floor(k / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[k - i];
    arr[k - i] = temp;
  }
  return arr;
};

const pancakeSort = arr => {
  let highestIndex = 0;
  let currIndex = 0;
  while (currIndex < arr.length - 1) {
    for (let i = 0; i < arr.length - currIndex; i++) {
      if (arr[i] > arr[highestIndex]) {
        highestIndex = i;
      }
    }
    flip(arr, highestIndex);
    flip(arr, arr.length - currIndex - 1);
    currIndex += 1;
    highestIndex = 0;
  }
  return arr;
};

console.log(pancakeSort([4, 5, 1, 9, 0]));
console.log(pancakeSort([1]));
console.log(pancakeSort([1, 2]));
console.log(pancakeSort([1, 3, 1]));
console.log(pancakeSort([3, 1, 2, 4, 6, 5]));
console.log(pancakeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(
  pancakeSort([
    10,
    9,
    8,
    6,
    7,
    5,
    4,
    3,
    2,
    1,
    9,
    10,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1,
  ])
);
