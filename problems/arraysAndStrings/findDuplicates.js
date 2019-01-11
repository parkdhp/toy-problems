/** Find The Duplicates
 * Given two sorted arrays arr1 and arr2 of passport numbers, implement
 * a function findDuplicates that returns an array of all passport numbers
 * that are both in arr1 and arr2. Note that the output array should be
 * sorted in ascending order.
 *
 * Let N and M be the lengths of arr1 and arr2, respectively. Solve for
 * two cases and analyze the time & space complexities of your solutions:
 * M ~= N - the array lengths are approximately the same M >> N - arr2 is
 * much bigger than arr1.
 *
 * EXAMPLE
 * Input: arr1 = [1,2,3,5,6,7], arr2 = [3,6,7,8,20]
 * Output: [3,6,7] --since only these value are both in arr1 and arr2
 */

// Time Complexity: O(N + M)
// Space Complexity: O(N) in worst case scenario where elements of arr1 === elements of arr2
function findDuplicates(arr1, arr2) {
  const output = [];
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] === arr2[pointer2]) {
      output.push(arr1[pointer1]);
      pointer1++;
      pointer2++;
    } else if (arr1[pointer1] > arr2[pointer2]) {
      pointer2++;
    } else {
      pointer1++;
    }
  }
  return output;
}

const list1 = [1, 2, 3, 5, 6, 7];
const list2 = [3, 6, 7, 8, 20];
console.log(findDuplicates(list1, list2));
