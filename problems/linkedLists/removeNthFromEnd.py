"""
Remove Nth Node From End of List

Given a linked list, remove the n-th node from the end of the list and return its head.

EXAMPLE
Input: 1 -> 2 -> 3 -> 4 -> 5, and n = 2
Output: 1 -> 2 -> 3 -> 5
"""

class ListNode:
  def __init__(self, val):
    self.val = val
    self.next = None

class Solution:
  def removeNthFromEnd(self, head, n):
    if head is None:
      return None
    
    fast = head
    while n > 0:
      fast = fast.next
      n -= 1

    if fast is None:
      return head.next
    
    slow = head
    while fast and fast.next:
      fast = fast.next
      slow = slow.next
    slow.next = slow.next.next
    return head

def _print_list(head):
  while head:
    print(head.val)
    head = head.next
  print("\n")

if __name__ == '__main__':
  head = ListNode(1)
  node = head
  for i in [2,3,4,5,6,7,8]:
    node.next = ListNode(i)
    node = node.next
  
  _print_list(head)

  s = Solution()
  head = s.removeNthFromEnd(head, 3)

  _print_list(head)