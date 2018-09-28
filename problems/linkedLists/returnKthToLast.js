/**Return Kth to Last
 * Implement an alogirthm to find the kth to last element of a single linked list
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  addToTail (value) {
    if(!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      let temp = this.tail;
      this.tail = new Node(value);
      temp.next = this.tail;
    }
    this.length++;
  }
}

//non-recursive method
//time complexity: O(n)
//space complexity: O(1)
const returnKthToLast = (LL, k) => {
  let currN = LL.head, count = 0
  while(count !== LL.length - k) {
    currN = currN.next;
    count++;
  }
  return currN.value;
}

//iterative method
//time complexity: O(n)
//space compelxity: O(1)
const returnKthToLast2 = (LL, k) => {
  let p1 = LL.head, p2= LL.head;
  for (let i = 0; i < k; i++) {
    p1 = p1.next;
  }
  while(p1) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2;
}