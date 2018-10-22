/**Successor
 * Write an algorithm to find the "next" node (i.e, in-order successor) of a given node in a
 * binary search tree. You may assume that each node has a link to its parent.
 */

class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

const successor = (node) => {
  let successor;
  if (node.right) {
    successor = node.right;
    while (successor.left) {
      successor = successor.left;
    }
  } else if (node.parent && !successor) {
    let currNode = node;
    while(currNode.parent && !successor) {
      if(currNode.parent.left === currNode) {
        successor = currNode.parent;
      }
      currNode = currNode.parent;
    }
  }
  return successor;
}