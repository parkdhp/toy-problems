/**Zero Matrix
 * Write an algorithm such that if an element in an MxN array matrix is 0, its entire row and column are set to 0
 */

const zeroMatrix = (matrix) => {
  let copy = copyArray(matrix)
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if(matrix[row][col] === 0) {
        nullifyRow(copy, row);
        nullifyCol(copy, col);
      }
    }
  }
  return copy;
}

const nullifyRow = (matrix, row) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[row][i] = 0
  }
}

const nullifyCol = (matrix, col) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0
  }
}

const copyArray = (matrix) => {
  let copy = []
  matrix.forEach((row, index) => {
    row.forEach(e => {
      copy[index] = copy[index] || []
      copy[index].push(e)
    })
  })
  return copy
}