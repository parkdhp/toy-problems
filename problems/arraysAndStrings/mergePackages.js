/** Merging 2 Packages
 * Given a package with a weight limit limit and an array arr of item weights,
 * implement a function getIndicesOfItemWeights that finds two items whose sum
 * of weights equals the weight limit limit. Your function should return a pair
 * [i, j] of the indices of the item weights, ordered such that i > j. If such
 * a pair doesn’t exist, return an empty array.
 * Analyze the time and space complexities of your solution.
 *
 * EXAMPLE
 * Input:  arr = [4, 6, 10, 15, 16],  lim = 21
 * Output: [3, 1]
 *
 * Constraints:
 * [time limit] 5000ms
 * [input] array.integer arr
 * 0 ≤ arr.length ≤ 100
 * [input] integer limit
 * [output] array.integer
 */

// brute force approach
// time complexity: O(n^2)
// space complexity: O(1)
const getIndicesOfItemWeights = (arr, limit) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[i] + arr[j] === limit) {
        return [i, j];
      }
    }
  }
  return [];
};

// time optimization approach
// time complexity: O(n)
// space complexity: O(n)
const getIndicesOfItemWeights2 = (arr, limit) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    const complementIdx = obj[limit - val];
    if (complementIdx !== undefined) {
      return [i, complementIdx];
    } else {
      obj[val] = i;
    }
  }
  return [];
};

console.log(getIndicesOfItemWeights([4, 6, 10, 15, 16], 21));
console.log(getIndicesOfItemWeights2([4, 6, 10, 15, 16], 21));
