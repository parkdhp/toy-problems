/** Othello
 * Othello is played as follows: Each Othello piece is white on one side and black on the other.
 * When a piece is surrounded by its opponents on both the left and right sides, or both the top and
 * bottom, it is said to be captured and its color is flipped. On your turn, you must capture at least one
 * of your opponent's pieces. The game ends when either user has no more valid moves. The win is
 * assigned to the person with the most pieces. Implement the object-oriented design for Othello.
 */

class OthelloPiece {
  constructor(color) {
    this.side = color;
  }

  flip() {
    if (this.side === 'white') {
      this.side = 'black';
    } else {
      this.side = 'white';
    }
  }
}

class OthelloBoard {
  constructor(N = 8) {
    if (N % 2 !== 0) {
      throw new Error('Error, board must be of even length');
    }
    this.N = N;
    this.board = this.genBoard(N);
    this.board[N / 2 - 1][N / 2 - 1] = new OthelloPiece('white');
    this.board[N / 2][N / 2] = new OthelloPiece('white');
    this.board[N / 2 - 1][N / 2] = new OthelloPiece('black');
    this.board[N / 2][N / 2 - 1] = new OthelloPiece('black');
  }

  genBoard(N) {
    const board = [];
    for (let i = 0; i < N; i++) {
      const row = [];
      for (let j = 0; j < N; j++) {
        row.push(null);
      }
      board.push(row);
    }
    return board;
  }

  logBoard() {
    for (let i = 0; i < this.N; i++) {
      console.log(this.board[i].map((piece) => {
        return piece !== null ? piece.side : null;
      }));
    }
  }

  placePiece(color, row, col) {
    if (this.board[row][col] !== null) {
      console.log('piece already exists in that place');
    } else if (!this.legalMove(color, row, col)) {
      console.log('this is not a legal move');
    } else {
      this.board[row][col] = new OthelloPiece(color);
      this.flipPieces(color, row, col);
    }
  }

  canFlip(color, row, col, direction) {
    const directionPosition = {
      up: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1],
      upLeft: [-1, -1],
      upRight: [-1, 1],
      downLeft: [1, -1],
      downRight: [1, 1],
    };
    const flipColor = {
      white: 'black',
      black: 'white',
    };
    const movement = directionPosition[direction];
    let currRow = row + movement[0];
    let currCol = col + movement[1];

    if (currRow === this.N || currCol === this.N || currRow === -1 || currCol === -1) {
      return false;
    }
    if (this.board[currRow][currCol] === null || this.board[currRow][currCol].side === color) {
      return false;
    }
    while (this.board[currRow][currCol] !== null && this.board[currRow][currCol].side === flipColor[color]) {
      currRow += movement[0];
      currCol += movement[1];
    }
    return this.board[currRow][currCol] !== null && this.board[currRow][currCol].side === color;
  }

  piecesToFlip(color, row, col) {
    return this.canFlip(color, row, col, 'up')
    || this.canFlip(color, row, col, 'down')
    || this.canFlip(color, row, col, 'left')
    || this.canFlip(color, row, col, 'right')
    || this.canFlip(color, row, col, 'upLeft')
    || this.canFlip(color, row, col, 'upRight')
    || this.canFlip(color, row, col, 'downLeft')
    || this.canFlip(color, row, col, 'downRight');
  }

  legalMove(color, row, col) {
    console.log('checking legal move');
    if (this.board[row][col] !== null) {
      console.log(`${row}, ${col} is already taken`);
    }
    if (!this.piecesToFlip(color, row, col)) {
      console.log(`${row}, ${col} no pieces for ${color} to flip`);
      return false;
    }
    return true;
  }

  flipPiece(color, row, col, direction) {
    const directionPosition = {
      up: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1],
      upLeft: [-1, -1],
      upRight: [-1, 1],
      downLeft: [1, -1],
      downRight: [1, 1],
    };
    const flipColor = {
      white: 'black',
      black: 'white',
    };
    const movement = directionPosition[direction];
    let currRow = row + movement[0];
    let currCol = col + movement[1];
    while (this.board[currRow][currCol].side === flipColor[color]) {
      this.board[currRow][currCol].side = color;
      currRow += movement[0];
      currCol += movement[1];
    }
  }

  flipPieces(color, row, col) {
    if (this.canFlip(color, row, col, 'up')) {
      this.flipPiece(color, row, col, 'up');
    }
    if (this.canFlip(color, row, col, 'down')) {
      this.flipPiece(color, row, col, 'down');
    }
    if (this.canFlip(color, row, col, 'left')) {
      this.flipPiece(color, row, col, 'left');
    }
    if (this.canFlip(color, row, col, 'right')) {
      this.flipPiece(color, row, col, 'right');
    }
    if (this.canFlip(color, row, col, 'upLeft')) {
      this.flipPiece(color, row, col, 'upLeft');
    }
    if (this.canFlip(color, row, col, 'upRight')) {
      this.flipPiece(color, row, col, 'upRight');
    }
    if (this.canFlip(color, row, col, 'downLeft')) {
      this.flipPiece(color, row, col, 'downLeft');
    }
    if (this.canFlip(color, row, col, 'downRight')) {
      this.flipPiece(color, row, col, 'downRight');
    }
  }

  checkScore() {
    const score = {
      black: 0,
      white: 0,
    }
    for (let i = 0; i < this.N; i++) {
      for (let j = 0; j < this.N; j++) {
        if (this.board[i][j] !== null) {
          score[this.board[i][j].side]++;
        }
      }
    }
    console.log(`The score is: \nBlack ${score.black} \nWhite ${score.white}`);
  }
}