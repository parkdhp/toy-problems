/** Towers of Hanoi
 * In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of different sizes
 * which can slide onto any tower. The puzzle starts with disks sorted in ascending order of size
 * from top to bottom (i.e, each disk sits on top of an even larger one). You have the following
 * constrains:
 *  (1) Only one disk can be moved at a time.
 *  (2) A disk is slid off the top of one tower onto another tower.
 *  (3) A disk cannot be placed on top of a smaller disk.
 * Write a program to move the disks from the first tower to the last using stacks.
 */

class TowersOfHanoi {
  constructor(n) {
    this.first = [];
    this.second = [];
    this.third = [];
    for (let i = n; i > 0; i--) {
      this.first.push(i);
    }
  }

  move(start, mid, dest, depth) {
    if (depth === 0) {
      return null;
    } else if (depth === 1) {
      dest.push(start.pop());
    } else {
      let currDepth = depth;
      let shortTower;
      let placePiece;
      if (depth % 2 === 0) {
        shortTower = mid;
        placePiece = dest;
      } else {
        shortTower = dest;
        placePiece = mid;
      }
      let shortTowerDepth = 0;
      shortTower.push(start.pop());
      shortTowerDepth++;
      currDepth--;
      let towerSwap1;
      let towerSwap2;
      while (currDepth > 0) {
        placePiece.push(start.pop());
        currDepth--;
        this.move(shortTower, start, placePiece, shortTowerDepth);
        shortTowerDepth++;
        towerSwap1 = shortTower;
        towerSwap2 = placePiece;
        shortTower = towerSwap2;
        placePiece = towerSwap1;
      }
    }
  }
}

let th = new TowersOfHanoi(5);
console.log(th);
th.move(th.first, th.second, th.third, th.first.length);
console.log(th);

let th2 = new TowersOfHanoi(6);
console.log(th2);
th.move(th2.first, th2.second, th2.third, th2.first.length);
console.log(th2);
