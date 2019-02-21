/** Jump Game
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 *
 * EXAMPLE
 * Input: [2,3,1,1,4]
 * Output: true
 * Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 * Input: [3,2,1,0,4]
 * Output: false
 * You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible
 * to reach the last index.
 */

const canJump = arr => {
  let numLeft = arr[0];
  for (let i = 0; i < arr.length; i++) {
    numLeft--;
    if (numLeft < 0) {
      return false;
    }
    numLeft = Math.max(arr[i], numLeft);
  }
  return numLeft >= 0;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
