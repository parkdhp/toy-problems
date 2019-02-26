/** Robot in a Grid
 * Imagine a robot sitting on the upper left corner of grid with r rows and c columns.
 * The robot can only move in two directions, right and down, but certain cells are
 * "off limits" such that the robot cannot step on them. Design an algorithm to find a
 * path for the robot from the top left to the bottom right.
 */

// I: 2d matrix
// O: an array of coordinates
// Recursive function calls to find the last step

const robotPaths = grid => {
  const endRow = grid.length - 1;
  const endCol = grid[0].length - 1;
  const paths = [];
  const recurse = (row, col, path) => {
    if (row === endRow && col === endCol) {
      paths.push([...path, [endRow, endCol]]);
    }
    if (row <= endRow && col <= endCol) {
      if (row < endRow && grid[row + 1][col]) {
        recurse(row + 1, col, [...path, [row, col]]);
      }
      if (col < endCol && grid[row][col + 1]) {
        recurse(row, col + 1, [...path, [row, col]]);
      }
    }
  };
  recurse(0, 0, []);
  return paths;
};

const grid = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

console.log(robotPaths(grid));

/** Unique Paths
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 * The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 * How many possible unique paths are there?
 *
 * Example 1:
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation:
 * From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down
 * 2. Right -> Down -> Right
 * 3. Down -> Right -> Right
 *
 * Example 2:
 * Input: m = 7, n = 3
 * Output: 28
 */

// iterative solution
const uniquePaths = (m, n) => {
  const matrix = new Array(m - 1).fill(new Array(n).fill(0));

  for (let i = 0; i < matrix.length; i++) {
    matrix[i][n - 1] = 1;
  }

  matrix.push(new Array(m).fill(1));
  let row = matrix.length - 2;
  let col = matrix[0].length - 2;

  while (row >= 0 && col >= 0) {
    matrix[row][col] = matrix[row][col + 1] + matrix[row + 1][col];
    col--;
    if (col < 0) {
      col = matrix[0].length - 2;
      row--;
    }
    // if (row < 0) {
    //   col--;
    // }
  }
  return matrix[0][0];
};

const uniquePaths2 = (m, n) => {
  const currentRow = new Array(n);

  for (let i = 0; i < n; i++) {
    currentRow[i] = 1;
  }
  for (let row = 1; row < m; row++) {
    for (let i = 1; i < n; i++) {
      currentRow[i] += currentRow[i - 1];
    }
  }
  return currentRow[n - 1];
};

console.log(uniquePaths(7, 3));

// recursive solution
const nPaths = (m, n) => {
  if (m === 1 || n === 1) return 1;
  return nPaths(m - 1, n) + nPaths(m, n - 1);
};

console.log(nPaths(7, 3));
