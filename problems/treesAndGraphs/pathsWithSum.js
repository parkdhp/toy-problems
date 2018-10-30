/**Paths with Sum
 * You are given a binary tree in which each node contains an interger value (which might be positive
 * or negative). Design an algorithm to count the number of paths that sum to a given value. The path
 * does not need to start or end at the root of a leaf, but it must go downwards (traveling only from
 * parent nodes to child nodes).
 */

const sumArray = (arr) => {
  return arr.reduce((a, c) => a + c, 0);
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  pathsWithRoot(value, path) {
    let count = 0;
    if (!path) {
      path = [this.value];
    } else {
      path = [...path, this.value]
    }
    if (sumArray(path) === value) {
      count++;
    }
    if (this.left) {
      count += this.left.pathsWithRoot(value, path)
    }
    if (this.right) {
      count += this.right.pathsWithRoot(value, path)
    }
    return count;
  }
  pathsWithSum(value) {
    let count = 0;
    count += this.pathsWithRoot(value);
    if(this.left) {
      count +=this.left.pathsWithRoot(value)
    }
    if(this.right) {
      count+=this.right.pathsWithRoot(value);
    }
    return count;
  }
}