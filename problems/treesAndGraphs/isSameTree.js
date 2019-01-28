/** Same Tree
 * Given two binary trees, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
 *
 * EXAMPLE
 * Input:     1        1
 *           / \      / \
 *          2   3    2   3
 * [1,2,3], [1,2,3]
 * Output: true
 *
 * Input:     1        1
 *           /          \
 *          2            2
 * [1,2], [1, null, 2]
 * Output: false
 *
 * Input:     1        1
 *           / \      / \
 *          2   1    1   2
 * [1,2,1], [1,1,2]
 * Output: false
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const isSameTree = (p, q) => {
  if (p === null) return q === null;
  if (q === null) return p === null;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const T1root = new TreeNode(1);
T1root.left = new TreeNode(2);
T1root.right = new TreeNode(3);

const Q1root = new TreeNode(1);
Q1root.left = new TreeNode(2);
Q1root.right = new TreeNode(3);

const T2root = new TreeNode(1);
T2root.left = new TreeNode(2);

const Q2root = new TreeNode(1);
Q2root.right = new TreeNode(2);

const T3root = new TreeNode(1);
T3root.left = new TreeNode(2);
T3root.right = new TreeNode(1);

const Q3root = new TreeNode(1);
Q3root.left = new TreeNode(1);
Q3root.right = new TreeNode(2);


console.log(isSameTree(T1root, Q1root), true);
console.log(isSameTree(T2root, Q2root), false);
console.log(isSameTree(T3root, Q3root), false);
