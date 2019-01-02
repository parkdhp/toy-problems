/** Paint Fill
 * Implement the "paint fill" function that one might see on many image editing programs.
 * That is, given a screen (represented by a two-dimensional array of colors), a point,
 * and a new color, fill in the surrounding area until the color changes from the original
 * color.
 */

const withinBounds = (point, screen) => {
  let [row, col] = point;
  const rowHeight = screen.length;
  const colWidth = screen[0].length;
  return row >= 0 && row < rowHeight && col >= 0 && col < colWidth;
}

const fillPaint = (screen, point, color) => {
  let [row, col] = point;
  let currColor = screen[row][col];

  if (withinBounds(point, screen) && screen[row][col] !== color) {
    screen[row][col] = color;

    if (withinBounds([row + 1, col], screen) && screen[row + 1][col] === currColor) {
      fillPaint(screen, [row + 1, col], color);
    }

    if (withinBounds([row + 1, col + 1], screen) && screen[row + 1][col + 1] === currColor) {
      fillPaint(screen, [row + 1, col + 1], color);
    }
    
    if (withinBounds([row + 1, col - 1], screen) && screen[row + 1][col - 1] === currColor) {
      fillPaint(screen, [row + 1, col - 1], color);
    }

    if (withinBounds([row, col + 1], screen) && screen[row][col + 1] === currColor) {
      fillPaint(screen, [row, col + 1], color);
    }

    if (withinBounds([row, col - 1], screen) && screen[row][col - 1] === currColor) {
      fillPaint(screen, [row, col - 1], color);
    }

    if (withinBounds([row, col - 1], screen) && screen[row][col - 1] === currColor) {
      fillPaint(screen, [row, col - 1], color);
    }

    if (withinBounds([row - 1, col], screen) && screen[row - 1][col] === currColor) {
      fillPaint(screen, [row - 1, col], color);
    }

    if (withinBounds([row - 1, col + 1], screen) && screen[row - 1][col + 1] === currColor) {
      fillPaint(screen, [row - 1, col + 1], color);
    }

    if (withinBounds([row - 1, col - 1], screen) && screen[row - 1][col - 1] === currColor) {
      fillPaint(screen, [row - 1, col - 1], color);
    }
  }
  return screen;
}

const screen = [
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0],
]

console.log(fillPaint(screen, [0, 1], 'red'));
console.log(fillPaint(screen, [0, 3], 'blue'));
console.log(fillPaint(screen, [0, 7], 'green'));
