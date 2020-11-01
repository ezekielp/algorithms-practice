# @param {Integer[][]} nums
# @return {Integer[]}
def find_diagonal_order(nums)
  order = [] # [1, 2]
  num_count = nums.reduce(0) do |acc, row|
      acc += row.length
  end
  
  i = 0 # 1
  while i < nums.length # true
      nxt = [] # [1]
      m = i # 0
      n = 0 # 0
      while n <= i # true
          nxt << nums[m][n] if nums[m][n]
          
          m -= 1
          n += 1
      end
      
      order += nxt
      i += 1
  end
  
  row = nums.length - 1 # 0
  j = 1 # 2
  # while j < nums[row].length
  until order.length == num_count
      nxt = [] # [2]
      k = row # -1
      l = j # 1
      while k >= 0
          nxt << nums[k][l] if nums[k][l]
          
          k -= 1
          l += 1
      end

      order += nxt
      j += 1
  end
  
  order
end


# [0, 0]
# [1, 0] [0, 1]
# [2, 0] [1, 1] [0, 2]

# [4, 1] [3, 2]








