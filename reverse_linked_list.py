class Solution:
    def reverseList(self, head: ListNode) -> ListNode: # 1-2-3-None
        tail = None
        current = head
        while current != None:
            tempNext = current.next
            current.next = tail
            tail = current
            current = tempNext
        
        return tail