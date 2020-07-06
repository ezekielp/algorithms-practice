# @param {Integer[]} nums
# @return {Integer}
def find_peak_element(nums)
    lo = 0
    hi = nums.length - 1
    
    until hi == lo
        mid = (lo + hi) / 2
        
        if mid > 0 && nums[mid - 1] > nums[mid]
            hi = mid - 1
        elsif mid < nums.length - 1 && nums[mid + 1] > nums[mid]
            lo = mid + 1
        else
            return mid
        end
        
    end
    
    hi
    
end
