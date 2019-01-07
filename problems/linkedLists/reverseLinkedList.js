/** Reverse Linked List
 * Reverse a singly linked list.
 *
 * EXAMPLE
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 *
 * A linked list can be reversed either iteratively or recrusively.
 * Could you implement both?
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// Iterative solution
// Time Complexity: O(n)
// Space Complexity: O(1)
const reverseLLIteratively = (head) => {
  let currentNode = head;
  let prev = null;
  while (currentNode !== null) {
    const temp = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = temp;
  }
  return prev;
};

// Recursive solution
// Time Complexity: O(n)
// Space Complexity: O(n) due toi implicit stack space
const reverseLLRecrusively = (head) => {
  if (head === null || head.next === null) return head;
  const prev = reverseLLRecrusively(head.next);
  head.next.next = head;
  head.next = null;
  return prev;
};

const LLNode = new Node(1);
LLNode.next = new Node(2);

console.log('Recursive:', reverseLLRecrusively(LLNode));
console.log('Iterative:', reverseLLIteratively(LLNode));
