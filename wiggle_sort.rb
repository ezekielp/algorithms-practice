# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def wiggle_sort(nums)
    median = find_median(nums, nums.length / 2)
    
    left = []
    right = []
    middle = []

    nums.each do |n|
        if n < median
            left << n
        elsif n > median
            right << n
        else
            middle << n
        end
    end
    
    semi_sorted = left + middle + right
    
    i = 0
    while i < nums.length
        if i % 2 == 0
            nums[i] = semi_sorted.shift
        else
            nums[i] = semi_sorted.pop
        end
        i += 1
    end
        
end

def find_median(nums, target) # [1, 5, 1, 1, 6, 4]
    pivot = [nums[0]] # [1]
    left = [] # [5]
    right = [] # []
    
    i = 1
    while i < nums.length
        n = nums[i] # 5
        if n < pivot[0]
            left << n
        elsif n == pivot[0]
            pivot << n
        else
            right << n
        end
        i += 1
    end
    
    l_len = left.length
    r_len = right.length
    
    if (l_len - r_len).abs <= pivot.length
        return pivot[0]
    elsif left.length > target
        find_median(left, target)
    else
        find_median(right, target - left.length)
    end
    
end

# find median, then create two halves and you're done?

# [1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 9]



