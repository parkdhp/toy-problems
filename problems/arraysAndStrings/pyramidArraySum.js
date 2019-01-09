/** Sum of Pyramid Array
 * given numbers in the form of a traingle, by starting at the top of the triangle
 * and moving to adjacent numbers on the row below, find the maximum total from top
 * to bottom.
 *
 * EXAMPLE
 * Input: [
 *              [3],
 *            [7, 4],
 *          [2, 4, 6],
 *         [8, 5, 9, 3]
 *        ]
 * Output: 23
 *
 */


const pyramidArraySum = (matrix) => {
  let maxSum = -Infinity;
  const arrLen = matrix.length - 1;
  const recurse = (currSum, currRow, currCol) => {
    if (currRow === arrLen) {
      currSum += matrix[currRow][currCol];
      if (maxSum < currSum) {
        maxSum = currSum;
      }
      return;
    }
    if (currRow === 0) {
      recurse(currSum, 1, 0);
      recurse(currSum, 1, 1);
      return;
    }
    recurse(currSum + matrix[currRow][currCol], currRow + 1, currCol);
    recurse(currSum + matrix[currRow][currCol], currRow + 1, currCol + 1);
  };
  recurse(matrix[0][0], 0, 0);
  return maxSum;
};


const matrix = [
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]
];
console.log(pyramidArraySum(matrix), 23);

const matrix2 = [
  [1],
  [2, 3],
  [4, 5, 6],
  [7, 8, 9, 10],
];
console.log(pyramidArraySum(matrix2), 20);
