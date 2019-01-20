/**  Word Tree
 * Given an array of words, return a binary Node.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addChild (word) {
    // localeCompare only works on letters
    if (this.value.localeCompare(word) >= 0) {
      if (this.left === null) {
        this.left = new Node(word);
      } else {
        this.left.addChild(word);
      }
    } else if (this.right === null) {
      this.right = new Node(word);
    } else {
      this.right.addChild(word);
    }
  }
}


// Amortized Time Complexity: n log n
const search = (array) => {
  array.sort();
  const mid = Math.floor((array.length - 1) / 2);
  const root = new Node(array[mid]);

  for (let i = 0; i < array.length; i++) {
    if (i !== mid) {
      root.addChild(array[i]);
    }
  }
  return root;
};

console.log(search(['hello', 'world', 'bye', 'apple', 'cat', 'dentist']));
