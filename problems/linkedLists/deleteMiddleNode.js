/**Delete Middle Node
 * Implement an algorithm to delete a node in the middle 
 * i.e., any node but the first and the last node, not necessarily the exact middle
 * of a signly linked list, given only access to that node.
 * 
 * EXAMPLE
 * Input: the node c from the linked list a -> b -> c -> d -> e -> f
 * Output: nothing is returned but the new linked list looks like a -> b -> d -> e -> f
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
  }
  addToTail(value) {
    let newTail = new Node(value);
    if(!this.head) {
      this.head = newTail;
    }
    if(this.tail) {
      this.tail.next = newTail;
    }
    this.tail = newTail;
  }
}
const deleteMiddleNode = (node) => {
  if (!node || !node.next) {
    return false; //fail case
  }
  let next = node.next;
  node.value = next.value;
  node. next = next.next;
}