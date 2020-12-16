# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        #  2->2
        dummy = curr = ListNode() # 0
        # curr == 0
        curr.next = head # 0->null
        while curr.next and curr.next.next: # 2, 2
            foundDup = False
            while curr.next.next and curr.next.val == curr.next.next.val: # 2, 2
                foundDup = True
                curr.next = curr.next.next
            if foundDup: curr.next = curr.next.next
            else: curr = curr.next
        return dummy.next
