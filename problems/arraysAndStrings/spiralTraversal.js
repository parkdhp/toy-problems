/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

const spiralTraversal = matrix => {
  let spiral = [];
  let firstRow = 0, lastRow = matrix.length-1, firstCol = 0, lastCol = matrix[0].length-1;
  while(firstRow <= lastRow && firstCol <= lastCol) {
    for (let i = firstCol; i <= lastCol; i++) {
      spiral.push(matrix[firstRow][i]);
    }
    firstRow++;
    for (let j = firstRow; j <= lastRow; j++) {
      spiral.push(matrix[j][lastCol]);
    }
    lastCol--;
    if (firstRow <= lastRow) {
      for (let k = lastCol; k >= firstCol; k--) {
        spiral.push(matrix[lastRow][k]);
      }
      lastRow--;
    }
    if (firstCol <= lastCol) {
      for (let m = lastRow; m >= firstRow; m--) {
        spiral.push(matrix[m][firstCol]);
      }
      firstCol++;
    }
  }
  return spiral
};