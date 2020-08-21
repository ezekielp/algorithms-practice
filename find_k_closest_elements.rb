# @param {Integer[]} arr
# @param {Integer} k
# @param {Integer} x
# @return {Integer[]}

#     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
arr = [0, 0, 1, 2, 3, 3, 4, 7, 7, 8]
k = 3
x = 5

def find_closest_elements(arr, k, x)
  i = 0
  until arr[i] >= x || i == arr.length - 1
      i += 1
  end
  
  if i > 0 && ((arr[i] - x) >= (x - arr[i - 1]))
      i -= 1
  end
  
  if i == 0
      return arr.take(k)
  elsif i == arr.length - 1
      return arr.drop(arr.length - k)
  else
      res = [arr[i]]
      j = i - 1
      m = i + 1
      until res.length == k || j < 0 || m == arr.length
          if (x - arr[j]) <= (arr[m] - x)
              res.unshift(arr[j])
              j -= 1
          else
              res << arr[m]
              m += 1
          end
      end

      if j < 0
          until res.length == k
              res << arr[m]
              m += 1
          end
      elsif m == arr.length
          until res.length == k
              res.unshift(arr[j])
              j -= 1
          end
      end
      
      return res
  end
end

p find_closest_elements(arr, k, x)