def is_possible(nums)
  nums_left = Hash.new { |h, k| h[k] = 0 }
  end_in = Hash.new { |h, k| h[k] = 0 }
  
  nums.each { |num| nums_left[num] += 1 }
  
  nums.each do |num|
      next if nums_left[num] == 0
      nums_left[num] -= 1
      
      if end_in[num - 1] > 0
          end_in[num - 1] -= 1
          end_in[num] += 1
      elsif nums_left[num + 1] > 0 && nums_left[num + 2] > 0
          nums_left[num + 1] -= 1
          nums_left[num + 2] -= 1
          end_in[num + 2] += 1
      else
          return false
      end
  end
  
  true
end