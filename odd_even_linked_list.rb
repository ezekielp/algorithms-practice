# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}

class ListNode
    attr_accessor :val, :next
    def initialize(val = 0, _next = nil)
        @val = val
        @next = _next
    end
end

example_head = ListNode.new(1)
example_head.next = ListNode.new(2)
example_head.next.next = ListNode.new(3)
example_head.next.next.next = ListNode.new(4)
example_head.next.next.next.next = ListNode.new(5)

def odd_even_list(head) # 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> NULL
    return nil if !head # 1 -> 3 -> 2 -> 4
    return head if !head.next
    return head if !head.next.next
    
    odd = true
    
    odd_tail = head # 1
    even_head = head.next # 2
    even_tail = nil # 2
    current_node = head.next.next # 3
    
    while current_node.next
        puts "odd_tail: #{odd_tail}"
        puts "even_head: #{even_head}"
        puts "even_tail: #{even_tail}"
        puts "current_node: #{current_node}"

        if odd # true
            if !even_tail
                even_tail = current_node.next
                even_head.next = even_tail
            else
                even_tail.next = current_node.next # 2 -> 4 -> ...
            end
            odd_tail.next = current_node # 1 -> 3
            odd_tail.next.next = even_head #
            current_node = even_tail.next #
            odd = false
        else
            even_tail.next = current_node #
            even_tail = even_tail.next
            current_node = current_node.next #
            odd = true
        end
    end
    
    head
    
end



#     pre_node_to_switch_out = head # 3
#     dummy_node_head = head.next
#     current_dummy = dummy_node_head
#     current_node = head.next #2
#     while current_node #2

#         while i < count # 2
#             return head if !current_node.next
#             current_node = current_node.next # 5
#             if i % 2 == 1
#                 current_dummy.next = current_node
#                 current_dummy = current_dummy.next
#             end

#             i += 1
#         end
#         current_dummy.next = current_node.next # 2 -> 6 ...
#         pre_node_to_switch_out.next = current_node # 1 -> 3 -> 5 -> ...
#         current_node.next = dummy_node_head # 5 -> 2
#         pre_node_to_switch_out = current_node # 5
#         current_node = current_dummy.next # 2

#         count += 1
#         i = 0
#     end
    
#     head