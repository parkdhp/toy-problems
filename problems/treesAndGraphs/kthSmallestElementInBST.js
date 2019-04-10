// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

/* Kth Smallest Element in a BST
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.
Example 1:
Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:
Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently?
How would you optimize the kthSmallest routine?
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// recursive method
// time complexity: O(n log n)
// space complexity: O(n)
const findKthSmallest = (tree, k) => {
  if (!tree) {
    throw new Error('Tree does not exist');
  }
  const res = [];

  const recurse = (tree) => {
    if (tree.left) {
      recurse(tree.left);
    }
    if (tree.right) {
      recurse(tree.right);
    }
    res.push(tree.value);
  };
  recurse(tree);
  res.sort((a, b) => a - b);
  return res[k - 1];
};

const tree = new Node(5);
tree.left = new Node(3);
tree.right = new Node(7);
tree.left.left = new Node(2);
tree.left.right = new Node(4);
tree.right.left = new Node(6);
tree.right.right = new Node(8);

console.log(findKthSmallest(tree, 1));
