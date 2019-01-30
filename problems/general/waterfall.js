/** Waterfall
 * Given n non-negative integers a1, a2, ..., an, where each represents a point
 * at coordinate (i, ai). n vertical lines are drawn such that the two endpoints
 * of line i is at 9i, ai) and (i, 0). Find two lines, which together with x-axis
 * forms a container, such that the container contains the most water.
 *
 * EXAMPLE
 * Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
 * Output: 49
 */

// Time Complexity: O(n)
// Space Complexity: O(1)
const findWaterContainer = (arr) => {
  let totalWater = 0;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    totalWater = Math.max(totalWater, Math.min(arr[left], arr[right]) * (right - left));
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return totalWater;
};

const terrain = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(findWaterContainer(terrain), 49);
