/**First Common Ancestor
 * Design an algorithm and write code to find the first common ancestor
 * of two nodes in a binary tree. Avoid storing additional nodes in a 
 * data structure. NOTE: This is not necessarily a binary search tree.
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
  isAncestor(node) {
    if (this === node) return true;
    let left = false,
      right = false;
    if (this.left) {
      left = this.left.isAncestor(node)
    }
    if(this.right) {
      right = this.right.isAncestor(node)
    }
    return left || right;
  }
}

const firstCommonAncestor = (node1, node2) => {
  let currNode = node1;
  while (!currNode.isAncestor(node2)) {
    currNode = currNode.parent
  }
  return currNode.value;
}