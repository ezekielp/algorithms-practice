# @param {Integer[]} nums
# @return {Integer}

def first_missing_positive(nums)
    i = 0
    j = nums[0]
    while i < nums.length 
        nxt = nums[j - 1] && j > 0 ? nums[j - 1] : nil
        if nxt && j != nxt && j <= nums.length && j > 0 # 
            nums[j - 1] = j
            j = nxt
        else
            i += 1
            j = nums[i]
        end
    end
    
    nums.each_with_index do |n,i|
        return i + 1 if n != i + 1
    end
    
    nums.length + 1
    
end



