// Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

// A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

// Input: A String representing the board. 
// Output: 'solved' if the board is valid, 'invalid' if it isn't

// Example input: 
// "735814296\n\
// 896275314\n\
// 214963857\n\
// 589427163\n\
// 362189745\n\
// 471356982\n\
// 923541678\n\
// 648792531\n\
// 157638429"

function sudokuCheck(board) {
  let newBoard = board.split('\n').map(line => 
    line.split('').map(digit => 
      +digit
    )
  )
  for (let row = 0; row < 9; row++) {
    if(isComplete(newBoard[row]))
      return 'invalid'
  }
  for (let col = 0; col < 9; col++) {
    if(isComplete(newBoard.map(row => row[col])))
      return 'invalid'
  }
  for (let col = 0; col < 9; col++) {
    for (let row = 0; row < 9; row++) {
      let row1 = newBoard[row].splice(0, 3)
      let row2 = newBoard[row + 1].splice(0, 3)
      let row3 = newBoard[row + 2].splice(0, 3)
      if(isComplete([...row1, ...row2, ...row3]))
        return 'invalid'
    }
  }
  return 'solved'
}

let isComplete = (arr) => {
  return arr.length !== 9 ||
  arr.reduce((a, b) => a + b, 0) !== 45 ||
  arr.indexOf("5") !== arr.lastIndexOf("5")
}

// let isPassing = (numbers) => {
//   let sorted = numbers.slice().sort((a, b) => a - b)
//   for (let i = 0; i < sorted.length; i++) {
//     if (sorted[i] !== i+1) 
//       return false
//   }
//   return true
// }

// let hCheck = (board) => board.every(isSorted)

// let vCheck = (board) => board.

// console.log(sudokuCheck("735814296\n\896275314\n\214963857\n\589427163\n\362189745\n\471356982\n\923541678\n\648792531\n\157638429"))