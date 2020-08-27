# @param {Integer[]} nums
# @return {Integer}
def max_product(nums, possible_zero = true)
  return nil if nums.empty?
  
  if possible_zero
      sub_arrs = []
      sub_arr = []
      has_zero = false
      i = 0
      while i < nums.length
          if nums[i] == 0
              has_zero = true
              if !sub_arr.empty?
                  sub_arrs << sub_arr
                  sub_arr = []
              end
          else
              sub_arr << nums[i]
          end
          
          i += 1
      end

      sub_arrs << sub_arr unless sub_arr.empty?

      max_that_isnt_zero = sub_arrs.map { |arr| max_product(arr, false) }.max
      return 0 if !max_that_isnt_zero

      if has_zero
        return [0, max_that_isnt_zero].max
      else
        return max_that_isnt_zero
      end
  end

  max = nums.first
  current = nums.first
  
  i = 1
  while i < nums.length
      current *= nums[i]
      max = current if current > max
      
      i += 1
  end
  
  current = nums.last
  max = current if current > max
  
  i = nums.length - 2
  while i >= 0
      current *= nums[i]
      max = current if current > max
      
      i -= 1
  end
  
  max
  
end


max_product([0, 2, -4, 0, 4, 7, 3, 0, 9, 0])
max_product([2, 3, -2, 4, 0])

[0, 2, -8, 0, 4, 28, 84, 0, 9, 0]
[]

# [-3,0,1,-2]
# [-3, 0, 1, 5, 8, -2]





# [3,  -4,   2,   1, -1,   5,   -2]
# [3, -12, -24, -24, 24, 120, -240]
#
# [   3,  -4,  2,  1, -1,  5,  -2]
# [-240, -80, 20, 10, 10, -10, -2]
#
# 
#
# 