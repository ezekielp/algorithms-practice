# From an App Academy HackerRank challenge
def efficientJanitor(weight)
  
  sorted = weight.sort
  bag_count = 0
  
  i = 0
  j = sorted.length - 1
  
  while i < j
    heavy = sorted[j]
    light = sorted[i]
    combined = heavy + light
  
    if combined <= 3.00
      if combined == 3.00
        bag_count += 1
        i += 1
        j -= 1
      else
        while combined <= 3.00 && i < j
          i += 1
          combined += sorted[i]
        end
        j -= 1
        bag_count += 1
      end  
    else
      bag_count += 1
      j -= 1
    end  
  end
  
  i == j ? bag_count + 1 : bag_count
end