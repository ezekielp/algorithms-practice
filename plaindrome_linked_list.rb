# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {Boolean}
def is_palindrome(head)
    return true if !head
    
    reversed_head = ListNode.new(0)
    reversed_head.next = ListNode.new(head.val)

    current = head.next
    while current
        old_next = reversed_head.next
        new_next = ListNode.new(current.val)
        reversed_head.next = new_next
        reversed_head.next.next = old_next
        current = current.next
    end
    
    forward = head
    reversed = reversed_head.next
    while forward
        return false unless forward.val == reversed.val
        forward = forward.next
        reversed = reversed.next
    end
    
    true
end
