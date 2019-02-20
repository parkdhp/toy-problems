/** Maximum Depth of Binary Tree
 * Given a binary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the longest path from the root node
 * down to the farthest leaf node.
 *
 * EXAMPLE
 * Input: binary tree [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * Output: 3
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const maxDepth = root => {
  const recurse = (root, level) => {
    if (!root) return 0;
    if (!root.right && !root.left) return level;
    if (root.right && root.left) {
      return Math.max(
        recurse(root.right, level + 1),
        recurse(root.left, level + 1)
      );
    } else if (root.right) {
      return recurse(root.right, level + 1);
    } else {
      return recurse(root.left, level + 1);
    }
  };
  return recurse(root, 1);
};

const root = new Node(3);
const branch1 = new Node(9);
const branch2 = new Node(20);
const branch2a = new Node(15);
const branch2b = new Node(7);
root.left = branch1;
root.right = branch2;
branch2.left = branch2a;
branch2.right = branch2b;

console.log(maxDepth(root), 3);
