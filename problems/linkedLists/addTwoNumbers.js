/** Add Two Numbers
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * EXAMPLE
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const addTwoNumbers = function(l1, l2) {
  const dummyHead = new ListNode(0);
  let node = dummyHead;
  let carry = 0;
  let a;
  let b;
  let c;
  let val;
  while (l1 || l2) {
    a = l1 ? l1.val : 0;
    b = l2 ? l2.val : 0;
    c = a + b + carry;
    val = c % 10;
    carry = Math.floor(c / 10);
    node.next = new ListNode(val);
    node = node.next;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  return dummyHead.next;
};

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1, l2));
