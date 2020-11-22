# @param {String} s
# @param {Integer} k
# @return {String}
def remove_duplicates(s, k) # 'deeedbbcccbdaa', 3
  stack = [] # [{c: 'd', streak: 1}, ]
  # streak = 0
  i = 0 #
  while i < s.length # 0 < 14
      char = s[i] # 'e'
      if stack.empty? # true
          stack << { c: char, streak: 1 }
      else
          if stack[-1][:c] == char
              if stack[-1][:streak] == k - 1
                  stack.pop
              else
                  stack[-1][:streak] += 1
              end
          else
              stack << { c: char, streak: 1 }
          end
      end
      
      
      
#         stack << char
#         j = stack.length - 2 #
#         # count = 1 #
#         if char == stack[j]
#             streak += 1
#         end
#         if streak == k
          
#         end
      
#         while count < k && j >= 0 && char == stack[j]
#             j -= 1
#             count += 1
#         end
#         if count == k
#             count.times { stack.pop }
#         end
      
      i += 1
  end
  
  # stack.join('')
  stack.map { |hash| hash[:c] * hash[:streak] }.join('')
end

