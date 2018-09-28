/**Remove Dups
 * Write code to remove duplicates from an unsorted linked list.
 * FOLLOW UP
 * How would you solve this problem if a temporary buffer is not allowed?
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToTail (value) {
    if (this.tail === null) {
      this.tail = new Node(value);
      this.head = this.tail;
    } else {
      let temp = this.tail;
      this.tail = new Node(value);
      temp.next = this.tail;
    }
  }
}

//time complexity: O(n)
//space complexity: O(n)
const removeDups = (linkedList) => {
  let currN = linkedList.head, prev, storage = {};
  while(currN) {
    if(storage[currN.value]) {
      prev.next = currN.next;
    } else {
      storage[currN.value] = true;
      prev = currN;
    }
    currN = currN.next;
  }
  return linkedList;
}

//no buffer method
//time complexity: O(n^2)
//space complexity: O(1)
const removeDups2 = (linkedList) => {
  let currN = linkedList.head;
  while(currN) {
    let runner = currN;
    while(runner.next) {
      if(runner.next.value === currN.value) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    currN = currN.next;
  }
}


let LL = new LinkedList();
LL.addToTail(5);
LL.addToTail(2);
LL.addToTail(5);
LL.addToTail(2);
LL.addToTail(2);

removeDups2(LL);
LL;
