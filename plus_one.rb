# @param {Integer[]} digits
# @return {Integer[]}
def plus_one(digits)
  result = digits
  carry = 0 # 0
  i = result.length - 1 # 0
  while i >= 0 # true
      num = result[i] + carry # 1
      if i == result.length - 1
          num += 1
      end
      
      if num > 9
          result[i] = num - 10
          carry = 1
      else
          result[i] = num
          return result
      end
      
      i -= 1
  end
  if carry == 1
      result.unshift(1)
  end
  result
end