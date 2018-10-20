/**Validate BST
 * Implement a function to check if a binary tree is a binary search tree.
 */

const validateBST = (tree) => {
  const recurse = (currTree, stackArr) => {
    for (let i = 0; i < stackArr.length; i++) {
      if (stackArr[i].side === 'left' && currTree.value > stackArr[i].node.value) {
        return false;
      } else if (stackArr[i].side === 'right' && currTree.value < stackArr[i].node.value) {
        return false;
      }
    }
    let left = currTree.left === null ? true : recurse(currTree.left, [...stackArr, {node:currTree, side: 'left'}]);
    let right = currTree.right === null ? true : recurse(currTree.right, [...stackArr, {node:currTree, side: 'right'}]);
    return true && left && right;
  }
  return recurse(tree, []);
}