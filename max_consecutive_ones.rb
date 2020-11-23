# @param {Integer[]} nums
# @return {Integer}
def find_max_consecutive_ones(nums)
  result = 0
  i = 0
  while i < nums.length
      count = 0
      while nums[i] == 1
          count += 1
          i += 1
      end
      result = [count, result].max
      i += 1
  end
  result
end