/**List of Depths
 * Given a binary tree, design an algorithm which creates a linked list of all the nodes
 * at each depth (e.g, if you have a tree with depth D, you'll have D linked lists).
 */

const LinkedList = require('../linkedLists/linkedList');
const Queue = require('../stacksAndQueues/queue');

const listOfDepths = (tree) => {
  let listOfLists = [],
    list = null,
    newNode,
    q = new Queue,
    nextq = new Queue,
    currNode = tree;
  q.enqueue(currNode);
  while (!q.isEmpty()) {
    currNode = q.dequeue();
    newNode = new LinkedList(currNode.value);
    newNode.next = list;
    list = newNode;
    if (currNode.left) {
      nextq.enqueue(currNode.left);
    }
    if (currNode.right) {
      nextq.enqueue(currNode.right);
    }
    if (q.isEmpty()) {
      listOfLists.push(list)
      list = null;
      q = nextq;
      nextq = new Queue;
    }
  }
  return listOfLists;
}
