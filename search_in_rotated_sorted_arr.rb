# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(nums, target)
    finish_idx = nil # 3
    
    lo = 0
    hi = nums.length - 1
    until lo == hi || finish_idx # [4,5,6,7,0,1,2]
        p lo
        p hi
        mid = hi + lo / 2 # 3
        p mid
        if !nums[mid + 1] || nums[mid] > nums[mid + 1]
            finish_idx = mid
        else
            if nums[hi] > nums[mid]
                hi = mid
            else
                lo = mid + 1
            end
        end
    end
    
    if finish_idx == nums.length - 1
        lo = 0
        hi = finish_idx
    else
        if target >= nums[lo] && target <= nums[finish_idx]
            lo = 0
            hi = finish_idx
        elsif target >= nums[finish_idx + 1] && target <= nums[-1]
            lo = finish_idx + 1
            hi = nums.length - 1
        else
            return -1
        end
    end
    
    until lo == hi
        mid = hi + lo / 2
        if target < nums[mid]
            hi = mid
        else
            lo = mid + 1
        end
    end

    if nums[lo] == target
        return lo
    end
    
    -1
        
end

search([4,5,6,7,0,1,2], 0)











#     return -1 if nums.length == 0
#     return 0 if target == nums[0]
#     pivot = nums.length / 2 
#     start = 0
#     finish = nums.length - 1 
    
#     while start != finish
#         return start if nums[start] == target
#         return finish if nums[finish] == target
#         return pivot if nums[pivot] == target
        
#         if target < nums[pivot]
#             if target < nums[start] && target < nums[finish]
#                 if nums[start] > nums[finish]
#                     start = pivot + 1
#                     pivot = (pivot + finish) / 2
#                     finish = finish - 1
#                 else
#                     start = start + 1
#                     pivot = (pivot + start / 2)
#                     finish = pivot
#                 end
#             else
#                 start = start + 1
#                 pivot = (pivot + start / 2)
#                 finish = pivot
#             end
#         else
#             if target > nums[start] && target > nums[finish]
#                 if nums[start] > nums[finish]
#                     start = start + 1
#                     pivot = (pivot + start / 2)
#                     finish = pivot
#                 else
#                     start = pivot + 1
#                     pivot = (pivot + finish) / 2
#                     finish = finish - 1
#                 end
#             else
#                 start = pivot + 1
#                 pivot = (pivot + finish) / 2
#                 finish = finish - 1
#             end
#         end
#     end
    
#     return -1


# [7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6]

# [0, 1, 2, 3, 4, 5, 6, 7]
# [7, 1, 2, 3, 4, 5, 6, 0]


# if greater than pivot and less than rightPivot => pivot = rightPivot
# if less than pivot and less than rightPivot => pivot = rightPivot 
# if less than pivot and greater than leftPivot => pivot = leftPivot
# if less than pivot and less than leftPivot => pivot = leftPivot 


# maybe check the endpoints instead of the midpoints!
