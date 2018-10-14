const Queue = require('../stacksAndQueues/queue.js');

class BinarySearchTree {
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }
  insert(val) {
    if (val < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(val);
      } else {
        this.left.insert(val);
      }
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(val);
      } else {
        this.right.insert(val);
      }
    }
  }
  printLevelOrder() {
    let level = [],
      q = new Queue,
      nextq = new Queue,
      currNode;
    q.enqueue(this);
    while (!q.isEmpty()) {
      currNode = q.dequeue();
      level.push(currNode.value);
      if (currNode.left) {
        nextq.enqueue(currNode.left);
      }
      if (currNode.right) {
        nextq.enqueue(currNode.right)
      }
      if (q.isEmpty()) {
        console.log(level.join(','));
        level = [];
        q = nextq
        nextq = new Queue;
      }
    }
  }
}

module.exports = BinarySearchTree;