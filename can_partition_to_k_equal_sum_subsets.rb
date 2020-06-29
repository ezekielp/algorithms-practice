# @param {Integer[]} nums
# @param {Integer} k
# @return {Boolean}
def can_partition_k_subsets(nums, k, sorted = false, target_sum = nil)
    unless target_sum
        target_sum = nums.reduce(:+) / (k * 1.0)
        return false unless (target_sum % 1) == 0
    end
    
    nums = nums.sort unless sorted
    
    return false if nums[-1] > target_sum
    
    current_sum = nums[-1]
    nums[-1] = nil
    i = nums.length - 2
    until current_sum == target_sum || i < 0
        if current_sum + nums[i] <= target_sum
            current_sum += nums[i]
            nums[i] = nil
        end
        i -= 1
    end
    
    return false if current_sum != target_sum
    new_nums = nums.compact
    return true if new_nums.empty?
    
    can_partition_k_subsets(new_nums, k, true, target_sum)
    
end

# You can immediately divide the total by k, and if it doesn't divide
# evenly, it's false

# Check if any element is larger than the sum divided by k — if so, false

# Sort them, then DFS starting with the largest numbers ???

# [4, 3, 2, 1, 1, 1], k == 2
# [10, 9, 8, 7, 1, 1]
# [4, 3, 2, 2, 2, 2, 1]

