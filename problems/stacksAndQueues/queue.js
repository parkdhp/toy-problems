/**Queue
 * Implement a queue using a linkedList.
 */

class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(val) {
    let node = new LinkedListNode(val);
    if(!this.head) {
      this.head = node;
    }
    if(this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
  }
  dequeue() {
    let output = this.head;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return output !== null ? output.value : null;
  }
  peek() {
    return this.head !== null ? this.head.value : null;
  }
  isEmpty() {
    return this.head === null;
  }
}

module.exports = Queue;