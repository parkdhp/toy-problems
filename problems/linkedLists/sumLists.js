/**Sum Lists
 * You have two numbers represented by a linked list, where each node contains a single digit.
 * The digits are stored in reverse order, such that the 1's digit is at the head of the list.
 * Write a function that adds the two numbers and returns the sum as a linked list.
 * 
 * EXAMPLE
 * Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295
 * Output: 2 -> 1 -> 9. That is, 912.
 * 
 * FOLLOW UP
 * Suppose the digits are stored in forward order. Repeat the above problem.
 * 
 * EXAMPLE
 * Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295.
 * Output: 9 -> 1 -> 2. That is, 912.
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

//time complexity: O(n)
//space complexity: O(n)
const sumLists = (n1, n2) => {
  let n1string = '', 
      n2string = '', 
      n1Node = n1.head, 
      n2Node = n2.head,
      output = new LinkedList();
  while(n1Node) {
    n1string += n1Node.value;
    n1Node = n1Node.next;
  }
  while(n2Node) {
    n2string += n2Node.value;
    n2Node = n2Node.next;
  }
  (+(n1string
            .split('')
            .reverse()
            .join('')) + 
        +(n2string
            .split('')
            .reverse()
            .join('')))
          .toString()
          .split('')
          .reverse()
          .forEach(e => {
            output.addToTail(e)
          });
  return output;
}

let n1 = new LinkedList();
n1.addToTail(7)
n1.addToTail(1)
n1.addToTail(6)

let n2 = new LinkedList();
n2.addToTail(5)
n2.addToTail(9)
n2.addToTail(2)

console.log(sumLists(n1, n2));