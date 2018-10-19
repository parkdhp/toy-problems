/**Check Balanced
 * Implement a function to check if a binary tree is balanced. For the purposes of this question, a 
 * balanced tree is defined to be a tree such that the heights of the two subtrees of any node never
 * differ by more than one.
 */

const checkBalanced = (tree) => {
  let output = true;
  if (!tree.left && tree.right) {
    if (tree.right.left || tree.right.right) {
      return false;
    }
  }
  if (tree.left && !tree.right) {
    if(tree.left.left || tree.left.right) {
      return false;
    }
  }
  if(tree.left) {
    output = output && checkBalanced(tree.left);
  }
  if(tree.right) {
    output = output && checkBalanced(tree.right);
  }
  return output;
}