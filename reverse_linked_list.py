class Solution:
    def reverseList(self, head: ListNode) -> ListNode: # 1-2-3-None
        current = head # val = 1, next = 2-3-None
        tail = None # None
        while current: # next = 3-None
            temp = current.next # temp: val = 3, next = None
            current.next = tail # current: val = 2, next = 1-None
            tail = current # tail: val = 2, next = 1-None
            current = temp # current: val = 3, next = None
        return tail

        # tail = None
        # current = head
        # while current != None:
        #     tempNext = current.next
        #     current.next = tail
        #     tail = current
        #     current = tempNext
        
        # return tail
