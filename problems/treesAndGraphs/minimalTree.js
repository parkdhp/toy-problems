/**Minimal Tree
 * Given a sorted (increasing order) array with unique integer elements, write an
 * algorithm to create a binary search tree with minimal height.
 */

const Queue = require('../stacksAndQueues/queue');
const BST = require('./binarySearchTree');

const minimalTree = (array) => {
  let tree = new BST,
    queue = new Queue,
    currArr,
    floor = Math.floor;
  queue.enqueue(array);
  while(!queue.isEmpty()) {
    currArr = queue.dequeue();
    tree.insert(currArr[floor(currArr.length/2)]);
    if(currArr.slice(0, floor(currArr.length/2)).length > 0) {
      queue.enqueue(currArr.slice(0, floor(currArr.length/2)));
    }
    if(currArr.slice(floor(currArr.length/2)+1).length > 0) {
      queue.enqueue(currArr.slice(floor(currArr.length/2)+1));
    }
  }
  return tree;
}