/** Robot in a Grid
 * Imagine a robot sitting on the upper left corner of grid with r rows and c columns.
 * The robot can only move in two directions, right and down, but certain cells are
 * "off limits" such that the robot cannot step on them. Design an algorithm to find a
 * path for the robot from the top left to the bottom right.
 */

// I: 2d matrix
// O: an array of coordinates
// Recursive function calls to find the last step

const robotPaths = (grid) => {
  let endRow = grid.length - 1;
  let endCol = grid[0].length - 1;
  let paths = [];
  let recurse = (row, col, path) => {
    if (row === endRow && col === endCol) {

      paths.push([...path, [endRow, endCol]]);
    }
    if(row <= endRow && col <= endCol) {
      if(row < endRow && grid[row+1][col]) {
        recurse(row +1, col, [...path, [row, col]]);
      }
      if(col < endCol && grid[row][col + 1]) {
        recurse(row, col + 1, [...path, [row, col]]);
      }
    }
  }
  recurse(0, 0, []);
  return paths;
}

let grid = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
]

console.log(robotPaths(grid));