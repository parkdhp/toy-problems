/** 3 Sum
 * Given an array nums of n integers, are ther elements a, b, c in nums such that a + b + c = 0? Find
 * all unique triplets in the array which gives the sum of zero.
 *
 * Note:
 * The solution set must not contain duplicate triplets.
 *
 * EXAMPLE
 * Input: [-1, 0, 1, 2, -1, -4];
 * Output: [[-1, 0, 1]
 *          [-1, -1, 2]]
 */

const threeSum = nums => {
  const result = [];
  if (nums.length < 3) {
    return result;
  }
  nums.sort((a, b) => (a > b ? 1 : -1));
  const len = nums.length;

  for (let i = 0; i < len - 2; i++) {}
};
