require 'set'

def last_stone_weight_ii(stones) # [2,7,4,1,8,1]
    dp = Set.new([0]) # { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23 }
    # { 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1, 1, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23 }
    # [T, F, T, F, F, F, T, T, T, F, T, F]
    sum_of_array = stones.reduce(:+) # 23
    stones.each do |stone|
        new_dp = Set.new([]) # {  }
        dp.each do |sum|
            new_dp.add(stone + sum)
        end
        dp = dp.merge(new_dp)
    end
    mapped = dp.map do |num|
        (sum_of_array - num - num).abs
    end
    mapped.min
end





# def last_stone_weight_ii(stones)
#     sorted = stones.sort

#     until sorted.length <= 1
#         max_diff = nil
#         start_idx = nil
#         i = 0
#         while i < sorted.length - 1
#             curr = sorted[i]
#             nxt = sorted[i + 1]
#             if !max_diff || (nxt - curr > max_diff)
#                 start_idx = i
#                 max_diff = nxt - curr
#             end
#             i += 1
#         end
#         sorted = insert(start_idx, num, sorted)
#     end
    
#     sorted.empty? ? 0 : sorted[0]
# end

# def insert(idx, num, stones)
#     stones.delete_at(idx)
#     stones.delete_at(idx)
#     i = 0
#     while i < stones.length
#         prev = stones[i - 1]
#         curr = stones[i]
#         if i == 0
#             if num <= curr
#                 stones.unshift(num)
#                 return stones
#             end
#         else
#             if num >= prev && num <= curr
#                 return stones[0..(i - 1)] + [num] + stones[i..-1]
#             end
#         end
#     end
#     stones << num
#     stones
# end