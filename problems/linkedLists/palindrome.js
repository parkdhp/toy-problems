/**Palindrome
 * Implement a function to check if a linked list is a palindrome.
 * Input: LL
 * Output: boolean
 * 
 * EXAMPLE
 * Input: 1 -> 2 -> 3 -> 2 -> 1
 * Output: true
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
    this.length = 0;
  }
  addToTail(value) {
    this.length++;
    let newTail = new Node(value);
    if(!this.head) {
      this.head = newTail;
    }
    if(this.tail) {
      this.tail.next = newTail;
    }
    this.tail = newTail;
  }
  addToHead(value) {
    this.length++;
    let newHead = new Node(value);
    if(!this.head) {
      this.head = this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
  }
}

class Stack {
  constructor() {
    this.stack = [];
  }
  push(value) {
    this.stack.push(value);
  }
  pop() {
    return this.stack.pop();
  }
}

//reverse and compare
//time complexity: O(n)
//space complexity: O(n)
const isPalindrome = (LL) => {
  let reversed = reverseAndClone(LL);
  //does not check for deep equality but will pass for the purpose of this toy problem
  return JSON.stringify(LL) === JSON.stringify(reversed);
}

const reverseAndClone = (LL) => {
  let n = new LinkedList();
  let node = LL.head;
  while (node) {
    n.addToHead(node.value);
    node = node.next;
  }
  return n;
}

//iterative approach using a stack
//time compelxity: O(n)
//space complexity: O(n)
const isPalindrome2 = (LL) => {
  let fast = LL.head, slow = LL.head;
  let stack = new Stack();
  while(fast && fast.next) {
    stack.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast) {
    slow = slow.next;
  }
  while(slow) {
    let top = stack.pop();
    if(top != slow.value) {
      return false;
    }
    return true;
  }
}