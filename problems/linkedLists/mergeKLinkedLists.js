/** Merge K Sorted Lists
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its time
 * complexity.
 *
 * EXAMPLE
 * Input: [
 *         1->4->5,
 *         1->3->4,
 *         2->6
 *        ]
 * Output:  1->1->2->3->4->4->5->6
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Brute force approach to collect all values of nodes
// Sort and iterate over the array to get values
// Create a new sorted linked list and extend it with new nodes
// Time Complexity: O(n log n) -- collecting values O(n), sorting O(n log n), iterating O(n)
// Space Compleixty: O(n) --sorting cost O(n), new linked list O(n)
const mergeKLists = (lists) => {
  const nodes = [];
  const head = new ListNode(0);
  let point = head;
  for (let list of lists) {
    while (list) {
      nodes.push(list.val);
      list = list.next;
    }
  }
  nodes.sort((a, b) => a - b);
  nodes.forEach((node) => {
    point.next = new ListNode(node);
    point = point.next;
  });

  return head.next;
};

const mergeTwoLists = (list1, list2) => {
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  let newList = null;
  if (list1.val > list2.val) {
    newList = new ListNode(list2.val);
    newList.next = mergeTwoLists(list1, list2.next);
  } else {
    newList = new ListNode(list1.val);
    newList.next = mergeTwoLists(list1.next, list2);
  }
  return newList;
};

// Combine and Conquer Method
// Time Complexity: O(kn)
// Space Complexity: O(1)
const mergeKLists2 = (lists, lo = 0, hi = lists.length - 1) => {
  if (lists.length === 0) return null;
  if (lo === hi) return lists[lo];
  const mid = Math.floor((lo + hi) / 2);
  const left = mergeKLists2(lists, lo, mid);
  const right = mergeKLists2(lists, mid + 1, hi);
  return mergeTwoLists(left, right);
};

const list1 = new ListNode(1);
list1.next = new ListNode(4);
list1.next.next = new ListNode(5);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

const list3 = new ListNode(2);
list3.next = new ListNode(6);

const lists = [list1, list2, list3];
console.log(mergeKLists(lists));
console.log(mergeKLists2(lists));
