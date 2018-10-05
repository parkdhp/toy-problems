/**Intersection
 * Given two (singly) linked lists, determine if the two lists intersect.
 * Return the intersecting node. Note that the intersection is defined
 * based on reference, not value. That is, if the kth node of the first
 * linked list is the exact same node (by reference) as the jth node of
 * the second linked list, then they are intersecting.
 * 
 * EXAMPLE
 * Input: 1 -> 2 -> 3 -> 4 -> 5
 *                 ^
 *        A -> B  /
 * Output: Node { value: 3, next: Node { value: 4, next: ...}
 */

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
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

const intersection = (l1, l2) => {
  let node1 = l1.head,
      node2 = l2.head;
  while(node1) {
    while(node2) {
      if(node1 === node2) {
        return node1;
      }
      node2 = node2.next;
    }
    node1 = node1.next;
  }
  return false;
}

let x = new LinkedList()
x.addToTail(1)
x.addToTail(2)
x.addToTail(3)
x.addToTail(4)
x.addToTail(5)
let y = new LinkedList()
y.addToTail('A')
y.addToTail('B')
y.tail.next = x.head.next.next;


console.log(intersection(x, y));