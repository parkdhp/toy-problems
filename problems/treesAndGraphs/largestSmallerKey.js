/** Largest Smaller BST Key
 * Given a root of a Binary Search Tree (BST) and a number num, implement an efficient function
 * findLargestSmallerKey that finds the largest key in the tree that is smaller than num. If
 * such a number doesn’t exist, return -1. Assume that all keys in the tree are nonnegative.
 */

/** *******************************************************
 * CODE INSTRUCTIONS:                                    *
 * 1) The method findLargestSmallerKey you're            *
 *    asked to implement is located at line 26.          *
 * 2) Use the helper code below to implement it.         *
 * 3) In a nutshell, the helper code allows you to       *
 *    to build a Binary Search Tree.                     *
 ******************************************************** */

// Constructor to create a new Node
function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

// Constructor to create a new BST
function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.findLargestSmallerKey = function(num) {
  let largestSmaller = 0;
  if (this.root.key < num) {
    largestSmaller = this.root.key;
  }
  const recurse = node => {
    if (node.left) {
      if (node.left.key < num && largestSmaller < node.left.key) {
        largestSmaller = node.left.key;
      }
      recurse(node.left, largestSmaller);
    }
    if (node.right) {
      if (node.right.key < num && largestSmaller < node.right.key) {
        largestSmaller = node.right.key;
      }
      recurse(node.right, largestSmaller);
    }
  };
  recurse(this.root, 0);
  return largestSmaller;
};

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {
  const { root } = this;

  // 1. If the tree is empty, create the root
  if (!root) {
    this.root = new Node(key);
    return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert the new node
  let currentNode = root;
  const newNode = new Node(key);

  while (currentNode !== null) {
    if (key < currentNode.key) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else if (!currentNode.right) {
      currentNode.right = newNode;
      newNode.parent = currentNode;
      break;
    } else {
      currentNode = currentNode.right;
    }
  }
};

/** *******************************************
 * Driver program to test above function     *
 ******************************************** */

// Create a Binary Search Tree
const bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

const result = bst.findLargestSmallerKey(17);

console.log(`Largest smaller number is ${result}`);
