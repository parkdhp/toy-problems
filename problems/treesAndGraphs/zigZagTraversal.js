/** Zig Zag Tree Traversal
 * Write a function to print ZigZag order traversal of a binary tree.
 * For the below binary tree the zigzag order traversal:
 *
 * EXAMPLE
 * Input: given binary tree [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * Output: return its zigzag level order traversal as:
 * [
 *   [3],
 *   [20,9],
 *   [15,7]
 * ]
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const printZigZagTraversal = (root) => {
  if (!root) {
    return [];
  }
  const result = [];
  let level = [];
  let stack1 = [root];
  let stack2 = [];
  let flag = true;
  while (stack1.length > 0) {
    const node = stack1.pop();
    const { left, right } = node;

    level.push(node.val);

    if (flag) {
      if (left)stack2.push(left);
      if (right)stack2.push(right);
    } else {
      if (right) stack2.push(right);
      if (left) stack2.push(left);
    }

    if (stack1.length === 0) {
      result.push(level);
      flag = !flag;
      stack1 = stack2;
      stack2 = [];
      level = [];
    }
  }
  return result;
};


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(7);
root.left.right = new Node(6);
root.right.left = new Node(5);
root.right.right = new Node(4);
console.log(printZigZagTraversal(root));
