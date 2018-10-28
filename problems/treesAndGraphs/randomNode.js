/**Random Node
 * You are implementing a binary tree class from which, in enqueueition to
 * insert, find, and delete, has a method getRandomNode() which returns
 * a random node from the tree. All nodes should be equally likely to
 * be chosen. Design and implement an algorithm for getRandomNode.
 */


const Queue = require('../stacksAndQueues/queue');

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if (this.value === undefined) {
      this.value = value;
    } else if (value < this.value) {
      if (this.left === null) {
        this.left = new BinaryTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinaryTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }
  find(value) {
    if (value === this.value) {
      return this;
    } else {
      if (value < this.value) {
        if (this.left === null) {
          return null;
        } else {
          this.left.find(value);
        }
      } else {
        if (this.right === null) {
          return null;
        } else {
          this.right.find(value);
        }
      }
    }
  }
  rebuild() {
    if (this.left === null && this.right === null) {
      return null;
    }
    let newBt = new BinaryTree(),
      q = new Queue();
    if (this.left !== null) {
      q.enqueue(this.left);
    }
    if (this.right !== null) {
      q.enqueue(this.right);
    }
    let node;
    while (!q.isEmpty) {
      node = q.dequeue();
      newBt.insert(node.value);
      if (node.left !== null) {
        q.enqueue(node.left);
      }
      if (this.right !== null) {
        q.enqueue(node.right);
      }
    }
    return newBt;
  }
  delete(value) {
    if (value === this.value) {
      let reb = this.rebuild();
      this.value = reb.value;
      this.left = reb.left;
      this.right = reb.right;
    } else {
      let q = new Queue();
      let built = false;
      let node;
      q.enqueue(this);
      while (!q.isEmpty() && !built) {
        node = q.dequeue();
        if (node.left !== null) {
          if (node.left.value === value) {
            node.left = node.left.rebuild();
            built = true;
          } else {
            q.enqueue(node.left);
          }
        }
        if (node.right !== null) {
          if (node.right.value === value) {
            node.right = node.right.rebuild();
            built = true;
          } else {
            q.enqueue(node.right);
          }
        }
      }
      if (!built) {
        return null;
      }
    }
  }
  count() {
    let q = new Queue(),
      node,
      count = 0;
    q.enqueue(this);
    while (!q.isEmpty()) {
      node = q.dequeue();
      count++;
      if (node.left !== null) {
        q.enqueue(node.left);
      }
      if (node.right !== null) {
        q.enqueue(node.right);
      }
    }
    return count;
  }
  iterateToN(n) {
    let q = new Queue(),
      node,
      count = 0;
    q.enqueue(this);
    while (!q.isEmpty()) {
      node = q.dequeue();
      count++;
      if (count === n) {
        return node;
      }
      if (node.left !== null) {
        q.enqueue(node.left);
      }
      if (node.right !== null) {
        q.enqueue(node.right);
      }
    }
    return undefined;
  }
  getRandomNode() {
    let count = this.count();
    let random = Math.floor(Math.random() * count) + 1;
    return this.iterateToN(random);
  }
}

var bt = new BinaryTree();
bt.insert(4);
bt.insert(2);
bt.insert(6);
bt.insert(1);
bt.insert(3);
bt.insert(5);
bt.insert(7);
console.log(bt);
bt.delete(5);
console.log(bt);
var counts = {};
var randomnum;
for (var i = 0; i < 100000; i++) {
  randomnum = bt.getRandomNode().value;
  if (counts[randomnum] === undefined) {
    counts[randomnum] = 1;
  } else {
    counts[randomnum]++;
  }
}
for (var num in counts) {
  console.log(`${num}: ${counts[num] / 100000}%`); // random enough
}