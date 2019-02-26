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

/** Jump Game II
 * Assuming you can always reach the last index, your goal is the reach the last index in the minimum number
 * of jumps.
 *
 * EXAMPLE
 * Input: [2,3,1,1,4]
 * Output: 2
 * The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to
 * the last index.
 */

const canJump2 = arr => {
  let currMax = 0;
  let nJumps = 0;
  let i = 0;
  const n = arr.length;

  while (currMax < n - 1) {
    const lastMax = currMax;
    for (; i <= lastMax; i++) {
      currMax = Math.max(currMax, i + arr[i]);
    }
    nJumps++;
    if (lastMax === currMax) {
      return -1;
    }
  }
  return nJumps;
};

console.log(canJump2([2, 3, 1, 1, 4]));
console.log(canJump2([5, 2, 1, 1, 4]));
