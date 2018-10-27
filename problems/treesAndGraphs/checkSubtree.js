/**Check Subtree
 * T1 and T2 are two very large binary trees, with T1 much bigger than T2. Create an algorithm to determine
 * if T2 is a subtree of T1.
 * A tree T2 is a subtree of T1 if there exists a node in T1 such that the subtree of n is identical to T2.
 * That is, if you cut off the tree at node n, the two trees would be identical.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  isSubtree(tree2) {
    if (checkSubtree(this, tree2)) {
      return true;
    } else {
      var answer = false;
      if (this.left !== null) {
        answer = answer || this.left.isSubtree(tree2);
      }
      if (this.right !== null) {
        answer = answer || this.right.isSubtree(tree2);
      }
      return answer;
    }
  }
}

const checkSubtree = (tree1, tree2) => {
  let output = tree1.value === tree2.value;
  if (!output) return output;
  if (tree1.left && tree2.left) {
    output = output && checkSubtree(tree1.left, tree2.left);
  } else if ((!tree1.left && tree2.left) || (tree1.left && !tree2.left)) {
    output = output && false;
  }

  if (tree1.right && tree2.right) {
    output = output && checkSubtree(tree1.right, tree2.right);
  } else if ((!tree1.right && tree2.right) || (tree1.right && !tree2.right)) {
    output = output && false;
  }
  return output;
}