# @param {Integer[]} a
# @param {Integer[][]} queries
# @return {Integer[]}
def sum_even_after_queries(a, queries)
  even_vals = Hash.new { |h, k| h[k] = 0 }
  
  a.each do |val|
      if val.even?
          even_vals[val] += 1
      end
  end
  
  result = []
  running_sum = even_vals.keys.reduce(0) do |acc, key|
      acc += (key * even_vals[key])
  end
  
  queries.each do |q|
      if even_vals[a[q[1]]] > 0
          even_vals[a[q[1]]] -= 1
          running_sum -= a[q[1]]
      end
      
      a[q[1]] += q[0]
      
      if a[q[1]].even?
          even_vals[a[q[1]]] += 1
          running_sum += a[q[1]]
      end
      result << running_sum
  end
  
  result
end

