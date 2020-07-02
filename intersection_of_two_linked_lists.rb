# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} headA
# @param {ListNode} headB
# @return {ListNode}
def getIntersectionNode(headA, headB)
    return nil unless headA && headB

    a_len, b_len = get_length(headA), get_length(headB)
    count = (a_len - b_len).abs
    longer, shorter = nil
    
    if count > 0
        longer = a_len > b_len ? headA : headB
        shorter = a_len < b_len ? headA : headB

        until count == 0
            longer = longer.next
            count -= 1
        end
    else
        longer, shorter = headA, headB
    end
    
    while longer && shorter
        return longer if longer == shorter
        longer = longer.next
        shorter = shorter.next
    end
    
    nil
    
end

def get_length(list)
    len = 0
    curr = list
    while curr
        len += 1
        curr = curr.next
    end
    len
end