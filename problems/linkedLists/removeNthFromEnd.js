/** Remove Nth Node From End of List
 * Given a linked list, remove the n-th node from the end of the list and return its head.
 *
 * EXAMPLE
 * Input: 1 -> 2 -> 3 -> 4 -> 5, and n = 2
 * Output: 1 -> 2 -> 3 -> 5
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// one pass, two pointer algorithm - mutates original linked list
// time complexity: O(n)
// space complexity: O(1)
const removeNthFromEnd = (head, n) => {
  if (!head) return null;
  let fast = head;
  if (fast === null) return head.next;

  let slow = head;
  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};

// two pass algorithm
// time complexity: O(2ListNode - n) = O(n)
// space complexity: O(1)
const removeNthFromEnd2 = (listNode, n) => {
  const dummy = new ListNode(0);
  dummy.next = listNode;
  let length = 0;
  let first = listNode;
  while (first != null) {
    length++;
    first = first.next;
  }
  length -= n;
  first = dummy;
  while (length > 0) {
    length--;
    first = first.next;
  }
  first.next = first.next.next;
  return dummy.next;
};

const arr = [2, 3, 4, 5, 6, 7, 8];
const linkedList = new ListNode(1);
let node = linkedList;
for (let i = 0; i < arr.length; i++) {
  node.next = new ListNode(arr[i]);
  node = node.next;
}

console.log(removeNthFromEnd(linkedList, 6));
console.log(removeNthFromEnd2(linkedList, 6));
