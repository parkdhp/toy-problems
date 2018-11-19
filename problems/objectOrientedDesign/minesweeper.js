/** Minesweeper
 * Design and implement a text-based Minsweeper game. Minesweeper is the classic single-player
 * computer game where an NxN grid has B mines(or bombs) hidden across the grid. The remaining
 * cells are either blank or have a number behind them. The numbers reflect the number of bombs
 * in the surrounding eight cells. The user then uncovers a cell. If it is a bomb, the player
 * loses.If it is a number, the number is exposed. If it is a blank cell, this cell and all
 * adjacent blank cells (up to and including the surrounding numberc cells) are exposed. The
 * player wins when all non-bomb cells are exposed. The player cna also flag certain places as
 * potential bombs. This doesn't affect game play, other than to block the user from accidentally
 * clicking a cell that is thought to have a bomb. (Tip for the reader: if you're not familiar
 * with this game, please play a few rounds online first.)
 */

class Minesweeper {
  constructor(N, B) {
    this.board = null;
    this.init(N, B);
  }

  init(N, B) {
    this.board = this.createBoard(N);
    this.insertBombs(B);
    this.computeCells();
    console.log(`Start game`);
  }

  createBoard(N) {
    const board = [];
    for (let i = 0; i < N; i++) {
      board.push([]);
      for (let j = 0; j < N; j++) {
        board[i].push({
          isBomb: false,
          reveal: false,
          display: null
        });
      }
    }
    return board;
  }

  insertBombs(B) {
    let count = 0,
      n = this.board.length,
      row,
      col;
    while (count < B) {
      row = Math.floor(Math.random() * n);
      col = Math.floor(Math.random() * n);
      if (!this.board[row][col].isBomb) {
        this.board[row][col].isBomb = true;
        count++;
      }
    }
  }

  check(row, col) {
    if (this.board[row][col].isBomb) {
      console.log(`${row}, ${col} is a mine`)
      this.printSolution();
    } else {
      this.explore(row, col);
      console.log(`${row}, ${col} is not a mine`)
      this.printBoard();
    }
  }

  explore(row, col) {
    if (this.board[row] !== undefined && this.board[row][col] !== undefined &&
      !this.board[row][col].isBomb && !this.board[row][col].reveal) {
      this.board[row][col].reveal = true;
      if (this.board[row][col].display === 0) {
        this.explore(row - 1, col - 1);
        this.explore(row - 1, col);
        this.explore(row - 1, col + 1);
        this.explore(row, col - 1);
        this.explore(row, col + 1);
        this.explore(row + 1, col - 1);
        this.explore(row + 1, col);
        this.explore(row + 1, col + 1);
      }
    }
  }

  computeCells() {
    let n = this.board.length;
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        this.computeCell(row, col, n);
      }
    }
  }

  computeCell(row, col, n) {
    if (this.board[row][col].isBomb) {
      this.board[row][col].display = '*';
      return;
    }
    let count = 0;
    if (row !== 0) {
      count += this.board[row - 1][col].isBomb ? 1 : 0;
    }
    if (row !== n - 1) {
      count += this.board[row + 1][col].isBomb ? 1 : 0;
    }
    if (col !== 0) {
      count += this.board[row][col - 1].isBomb ? 1 : 0;
    }
    if (col !== n - 1) {
      count += this.board[row][col + 1].isBomb ? 1 : 0;
    }
    if (col !== 0 && row !== 0) {
      count += this.board[row - 1][col - 1].isBomb ? 1 : 0;
    }
    if (row !== 0 && col !== n - 1) {
      count += this.board[row - 1][col + 1].isBomb ? 1 : 0;
    }
    if (row !== n - 1 && col !== 0) {
      count += this.board[row + 1][col - 1].isBomb ? 1 : 0;
    }
    if (row !== n - 1 && col !== n - 1) {
      count += this.board[row + 1][col + 1].isBomb ? 1 : 0;
    }
    this.board[row][col].display = count.toString();
  }

  printSolution() {
    const n = this.board.length;
    for (let i = 0; i < n; i++) {
      console.log(this.board[i].map((cell) => {
        return cell.display;
      }).join('|'));
    }
  }

  printBoard() {
    const n = this.board.length;
    for (let i = 0; i < n; i++) {
      console.log(this.board[i].map((cell) => {
        return cell.reveal ? cell.display : ' ';
      }).join('|'));
    }
  }
}

const ms = new Minesweeper(10, 10);
ms.printSolution();
ms.printBoard();
