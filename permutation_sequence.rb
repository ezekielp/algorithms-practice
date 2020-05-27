# @param {Integer} n
# @param {Integer} k
# @return {String}
def get_permutation(n, k)
    initial_arr = (1..n).to_a
    
    fact = initial_arr.reduce(:*)
    
    permute(initial_arr, k - 1, fact).join
    
end

# [2]
def permute(arr, k, fact) # [1,2, 3], 5, 6
    return arr if arr.length == 1 || k == 0
    
    combo_max = fact / arr.length # 2
    i = k / combo_max # 2
    new_k = k - (i * combo_max) # 0
    
    nxt = arr.delete_at(i) # [3]
    [nxt] + permute(arr, new_k, combo_max) # 
    
end

# [1, 2, 3, 4]
# k_max = 24
# there will be k_max / n[-1] combos starting with a particular num
# then that num / n[-2] combos starting with another num
# etc

# k_max = 24 => k_max / 4 == 6
# k = 9 
# k / 6 == 1 -> num == 2 (i == 1) -> new n = [1, 3, 4]
# k % 6 == 3 -> new_k = 3
# recurse

# k_max = 6 => k_max / 3 == 2
# k = 3
# k / 2 == 1 -> num == 4 (i == 1) -> new n = [1, 4]
# k % 2 == 1 -> new_k = 1

# k_max = 2 => k_max / 2 == 1
# k = 1
# k / 1 -> num == 1 (i == 1) -> new n = [1]
# k % 1 == 0 -> return new_n


