/** Array Quadruplet
 * Given an unsorted array of integers arr and a number s, write a function
 * findArrayQuadruplet that finds all four numbers(quadruplet) in arr that sum
 * up to s. Your function should return an array of these numbers in an ascending
 * order. If such a quadruplet doesn't exist, return an empty array.
 *
 * Note that there may be more than one quadruplet in arr whose sum is s.
 * You're asked to return the first one you encounter (considering the results are
 * sorted).
 *
 * Explain and code the most efficient solution possible, and analyze its time and
 * space complexities.
 *
 * EXAMPLE
 * Input: arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20
 * Output: [0, 4, 7, 9]
 *
 * The oredered quadruplet (7, 4, 0 9) whose sum is 20.
 * Notice that there are two other quadruplets whose sum is 20:
 * (7, 9, 1, 3) and (2, 4, 9, 5), but again you're asked to return
 * the just one quadruplet (in an ascending order).
 */

const findArrayQuadruplet = (arr, s) => {
  const n = arr.length;
  if (n < 4) {
    return [];
  }
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i <= n - 4; i++) {
    for (let j = i + 1; j <= n - 3; j++) {
      const find = s - (arr[i] + arr[j]);
      let low = j + 1;
      let high = n - 1;
      while (low < high) {
        if (arr[low] + arr[high] > find) high--;
        else if (arr[low] + arr[high] < find) low++;
        else return [arr[i], arr[j], arr[low], arr[high]];
      }
    }
  }
  return [];
};


console.log(findArrayQuadruplet([], 12), []);
console.log(findArrayQuadruplet([4, 4, 4], 12), []);
console.log(findArrayQuadruplet([4, 4, 4, 2], 16), []);
console.log(findArrayQuadruplet([4, 4, 4, 2], 16), []);
console.log(findArrayQuadruplet([4, 4, 4, 4], 16), [4, 4, 4, 4]);
console.log(findArrayQuadruplet([2, 7, 4, 0, 9, 5, 1, 3], 20), [0, 4, 7, 9]);
console.log(findArrayQuadruplet([2, 7, 4, 0, 9, 5, 1, 3], 120), []);
console.log(findArrayQuadruplet([1, 2, 3, 4, 5, 9, 19, 12, 12, 19], 40), [4, 5, 12, 19]);
