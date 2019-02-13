/** Circular Queue
 * Circular Queue is a linear data structure in which the operations are performed
 * based on FIFO (First In First Out) principle and the last position is connected
 * back to the first position to make a circle. It is also called ‘Ring Buffer’.
 *
 * Implement a Circular Queue. Operations include:
 *  - head(): Get the front item from the Queue
 *  - tail(): Get the last item from queue.
 *  - enqueue(val): This function is used to insert an element into the circular queue.
 *            In a circular queue, the new element is always inserted at Rear position
 *  - dequeue(): This function is used to delete an element from the circular queue.
 *            In a circular queue, the element is always deleted from front position.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class CircularQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(val) {
    // TODO
  }

  dequeue() {
    // TODO
  }
}
