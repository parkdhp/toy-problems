/** Find Peak Element
 * A peak element is an element that is greater than its neighbors. Given an input array
 * nums, where num[i] != nums[i+1], find a peak element and return its index. The array
 * may contain multiple peaks, in that case return the index to any one of the peaks is
 * fine. You may imagine that nums[01] = nums[n] = -Infinity
 *
 * Your solution should be in logarithmic time complexity.
 *
 * EXAMPLE
 * Input: nums = [1,2,3,1]
 * Output: 2
 * Explanation: 3 is a peak element and your function should return the index number 2
 *
 * Input: nums = [1,2,1,3,5,6,4]
 * Output: 1 or 5
 * Explanation: Your function can return either index number 1 where the peak element
 * is 2, or index number 5 where the peak element is 6.
 */

// Linear Scan
// Time Complexity: O(n)
// Space Complexity: O(1)
const findPeakElement = (arr) => {
  if (arr.length < 3) {
    return null;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return i;
    }
  }
  return null;
};

// Recursive Binary Approach
// Time Complexity: O(log n)
// Space Complexity: O(log n)
const findPeakElement2 = (arr) => {
  const recurse = (arr2, left, right) => {
    const mid = Math.floor((left + right) / 2);
    if (left === right) {
      return left;
    }
    if (arr2[mid] > arr2[mid + 1]) {
      return recurse(arr2, left, mid);
    }
    return recurse(arr2, mid + 1, right);
  };
  return recurse(arr, 0, arr.length - 1);
};

// Iterative Binary Search
// Time Complexity: O(log n)
// Space Complexity: O(log n)
const findPeakElement3 = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

const nums = [1, 2, 3, 1];
const nums2 = [1, 2, 1, 3, 5, 6, 4];

console.log(findPeakElement(nums));
console.log(findPeakElement(nums2));
console.log(findPeakElement2(nums));
console.log(findPeakElement2(nums2));
console.log(findPeakElement3(nums));
console.log(findPeakElement3(nums2));
