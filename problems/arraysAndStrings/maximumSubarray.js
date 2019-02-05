/** Maximum Subarray
 * Given an integer array nums, find the contiguous subarry (containing at leat one
 * number) which has the largest sum and return its sum.
 *
 * EXAMPLE:
 * Input: [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4, -1, 2, 1] has the largest sum = 6
 */

const maximumSubarray = (arr) => {
  let currMax = -Infinity;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    currMax = Math.max(0, currMax + arr[i]);
    max = Math.max(max, currMax);
  }
  return max;
};

console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
