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
    if (this.board[row][col] === null) {
      console.log('piece already exists in that place');
    } else if (!this.legalMove(color, row, col)) {
      console.log('this is not a legal move');
    } else {
      this.board[row][col] = new OthPiece(color);
      this.flipPieces(color, row, col);
    }
  }

}