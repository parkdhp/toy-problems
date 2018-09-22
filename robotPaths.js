/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

let makeBoard = n => {
  let board = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

let robotPaths = (n, board, i, j) => {
  i = i || 0
  j = j || 0
  board = board || makeBoard(n)
  if(!(i >= 0 && i < n && j >= 0 && j < n) || board.hasBeenVisited(i, j)) return 0
  if(i  === n-1 && j === n-1) return 1
  board.togglePiece(i, j)
  let output = robotPaths(n, board, i +1, j) + robotPaths(n, board, i-1, j) + robotPaths(n, board, i, j+1) + robotPaths(n, board, i, j-1)
  board.togglePiece(i, j);
  return output;
};