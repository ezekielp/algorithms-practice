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
def remove_zero_sum_sublists(head)
    index_to_running_sum_hash = {}
    running_sum_to_index_hash = {}
    
    earliest_index_so_far = nil
    indices_for_slicing = []
    zero_index = nil
    
    i = 0
    j = 0
    dummy = head
    sum = 0
    while dummy
        sum += dummy.val
        if sum == 0
            # index_to_running_sum_hash = {}
            running_sum_to_index_hash = {}
            earliest_index_so_far = nil
            indices_for_slicing = []
            zero_index = j
            i = 0
        else
            # index_to_running_sum_hash[i] = sum
            earlier_idx = running_sum_to_index_hash[sum]
            if earlier_idx
                if !earliest_index_so_far || earlier_idx < earliest_index_so_far
                    earliest_index_so_far = earlier_idx
                    indices_for_slicing = [earlier_idx, i]
                end
            else
                running_sum_to_index_hash[sum] = i
            end
            
            i += 1
        end

        j += 1
        dummy = dummy.next
    end
    
    res = head
    if zero_index
        k = 0
        until k > zero_index
            res = res.next
            k += 1
        end
    end
    
    dummy_res_head = ListNode.new(0)
    dummy_res_head.next = res
    dummy_head = dummy_res_head.next
    unless indices_for_slicing.empty?
        p = 0
        until p = indices_for_slicing[0]
            dummy_head = dummy_head.next
            p += 1
        end
        right_side = dummy_head
        until p = indices_for_slicing[1]
            right_side = right_side.next
            p += 1
        end
        dummy_head.next = right_side.next
    end
    
    dummy_res_head.next
    
end

# running_sum = 1, 3, 0, 3, 4
# running_sum = 1, 3, 6, 3, 7
# running_sum = 1, 3, 6, 3, 1

# [4, -2, 3, -7, 2, -1, -3, 5]
# running_sum = 4, 2, 5, -2, 0, -1, -4, 1


# [4, -2, 3, -7, 3, 3, -1, -3, 1]
# running_sum = 4, 2, 5, -2, 1, 4, 3, 0, 1


# running_sum = 1, 5, 3, 6, -1, 2, 5, 4, 1


# [4, 2, -2, 2, -2, 2, -2]
# running_sum = 4, 6, 4, 6, 4, 6, 4

