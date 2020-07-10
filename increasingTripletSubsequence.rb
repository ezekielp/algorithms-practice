# @param {Integer[]} nums
# @return {Boolean}

def increasing_triplet(nums)

    lo = nil # 1
    mid = nil # 2
    
    nums.each do |n|
        if !lo # lo is nil, so set it to the first n
            lo = n
        else # lo is not nil
            if !mid # mid is nil, so check what to do with n
                if n > lo
                    mid = n
                else
                    lo = n
                end
            else # lo and mid have values
                if n > mid # you've found three in a row — return true
                    return true
                else # n is less than or equal to mid
                    if n < lo # if n is less than lo
                        lo = n
                    elsif n > lo # if n is actually greater than lo — not just equal
                        mid = n
                    end
                end
            end
        end
    end
    
    false
    
end


































def increasing_triplet(nums)

    lo = 0
    hi = nums.length - 1
    checked_lo = false

    while lo < hi
        if nums[lo] + 1 < nums[hi] && lo + 1 < hi
            if nums[lo + 1] > nums[lo] && nums[lo + 1] < nums[hi]
                || nums[hi - 1] > nums[lo] && nums[hi - 1] < nums[hi]
                return true
            else
                hi -= 1
            end
        else
            if checked_lo
                hi -= 1
            else
                lo += 1
            end
        end

        if lo == hi && checked_lo == false
            checked_lo = true
            lo = 0
            hi = nums.length - 1
        end

    end

    false
    
end

# TRY SLIDING WINDOW!

# [2, 1, 5, 0, 4, 6]

# [1, 1, 2, 1, 2, 3]

# [7, 4, 9, 2, 9, 10, 14, 8, 1, 5]

# [1, 1, 2, 1, 2, 1, 2, 1, 2]
    
# [9, 8, 7, 6, 5, 4, 5, 3, 2, 1]




# if min == nil, give it a value
# if nums[i] < min, make it the new min -- BUT WAIT THEN YOU miss out on potential
# if min != nil, mid == nil, and nums[i] > min => mid = nums[i]
# if 


# [9, 10, 0, 11]

def increasing_triplet(nums)
    dp = Array.new(nums.length, 1)
    
    i = 1
    while i < nums.length
        dp[i] += dp[i - 1] if nums[i] > nums[i - 1]
        
        return true if dp[i] == 3
        i += 1
    end
    
    max = nil
    j = nums.length - 1

    while j >= 0
        if max != nil && nums[j] < max
            return true
        end
        
        if dp[j] == 2
            if max == nil
                max = nums[j - 1]
            else
                if nums[j - 1] > max
                    max = nums[j - 1]
                end
            end
        end
        
        j -= 1
        
    end
    
    false
    
end


