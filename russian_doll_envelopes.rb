# @param {Integer[][]} envelopes
# @return {Integer}
def max_envelopes(envelopes)
    return 0 if envelopes.empty?

    sorted = envelopes.sort_by { |e| [e[0], -e[1]] }
    dp = Array.new(sorted.length, 0)
    
    i = 0
    while i < sorted.length
        max = 0
        j = i - 1
        while j >= 0
            if sorted[i][0] > sorted[j][0] && sorted[i][1] > sorted[j][1] && dp[j] > max
                max = dp[j]
            end
            
            j -= 1
        end
        
        dp[i] = max + 1
        i += 1
    end
    
    dp.max
end

# I think it's some trick where you sort the height in descending order?
# after sorting the width in ascending order





















def max_envelopes(envelopes)
    return 0 if envelopes.empty?
    return 1 if envelopes.length == 1
    
    sorted_by_w = envelopes.sort_by { |e| [e[0], e[1]] }
    sorted_by_h = envelopes.sort_by { |e| [e[1], e[0]] }
    
    count_by_w = 1
    last_by_w = sorted_by_w.shift

    until sorted_by_w.empty?
        lowest_sum = Float::INFINITY
        lowest_pair_idx = nil
        i = 0
        while i < sorted_by_w.length
            curr = sorted_by_w[i]
            if curr[0] <= last_by_w[0] || curr[1] <= last_by_w[1]
                sorted_by_w[i] = nil
            else
                curr_sum = curr[0] - last_by_w[0] + curr[1] - last_by_w[1]
                if curr_sum < lowest_sum
                    lowest_sum = curr_sum
                    lowest_pair_idx = i
                end
            end
            i += 1
        end
        if lowest_pair_idx
            count_by_w += 1
            last_by_w = sorted_by_w[lowest_pair_idx]
            sorted_by_w[lowest_pair_idx] = nil
        end
        sorted_by_w = sorted_by_w.compact
    end
    
    count_by_h = 1
    last_by_h = sorted_by_h.shift

    until sorted_by_h.empty?
        lowest_sum = Float::INFINITY
        lowest_pair_idx = nil
        i = 0
        while i < sorted_by_h.length
            curr = sorted_by_h[i]
            if curr[0] <= last_by_h[0] || curr[1] <= last_by_h[1]
                sorted_by_h[i] = nil
            else
                curr_sum = curr[0] - last_by_h[0] + curr[1] - last_by_h[1]
                if curr_sum < lowest_sum
                    lowest_sum = curr_sum
                    lowest_pair_idx = i
                end
            end
            i += 1
        end
        if lowest_pair_idx
            count_by_h += 1
            last_by_h = sorted_by_h[lowest_pair_idx]
            sorted_by_h[lowest_pair_idx] = nil
        end
        sorted_by_h = sorted_by_h.compact
    end
    
    [count_by_w, count_by_h].max
end

# [[1, 2], [8, 3], [4, 4], [5, 5], [6, 6], [7, 7]]

# [[1, 3], [4, 2], [5, 5], [3, 6], [8, 4], [2, 10], [4, 1], [6, 9], [3, 2]]

# [[1, 3], [2, 10], [3, 2], [3, 6], [4, 1], [4, 2], [5, 5], [6, 9], [8, 4]]
# [[4, 1], [3, 2], [4, 2], [1, 3], [8, 4], [5, 5], [3, 6], [6, 9], [2, 10]]
# [[1, 3], [3, 6], [6, 9]]
# [[3, 2], [5, 5], [6, 9]]



# [[4, 1], [5, 5], [6, 9]]

# [[1, 3], [3, 6], [6, 9]]




# [[10, 1], [1, 11], [2, 12], [3, 13], [4, 14], [2, 10], [4, 1], [6, 9], [3, 2]]
# [[1, 11], [2, 12], [2, 10], [3, 13], [3, 2], [4, 14], [4, 1], [6, 9], [10, 1]]
# [1, 2, 1, 3, 1, 4, 2]
# [[1, 1], [1, 5], [2, 2]]


# [[], [], [], [], [], [], [], [], [], []]

#    1. 2. 3. 4. 5. 6. 7. 8  9. 10
# 1  O, O, O, X, O, O, O, O, O, O
# 2  O, O, X, X, O, O, O, O, O, O
# 3  X, O, O, O, O, O, O, O, O, O
# 4  O, O, O, O, O, O, O, X, O, O
# 5  O, O, O, O, X, O, O, O, O, O
# 6  O, O, X, O, O, O, O, O, O, O
# 7  O, O, O, O, O, O, O, O, O, O
# 8  O, O, O, O, O, O, O, O, O, O
# 9  O, O, O, O, O, X, O, O, O, O
# 10 O, X, O, O, O, O, O, O, O, O
#

#    1. 2. 3. 4. 5. 6. 7. 8  9. 10
# 1  0, 0, 0, 1, 1, 1, 1, 1, 1, 1
# 2  0, 0, 0, 1, 1, 1, 1, 1, 1, 1
# 3  1, 1, 1, 1, 1, 1, 1, 1, 1, 1
# 4  1, 1, 1, 1, 1, 1, 1, 2, 2, 2
# 5  1, 1, 1, 1, 2, 2, 2, 2, 2, 2
# 6  1, 1, 2, 2, 2, 2, 2, 2, 2, 2
# 7  1, 1, 2, 2, 2, 2, 2, 2, 2, 2
# 8  1, 1, 2, 2, 2, 2, 2, 2, 2, 2
# 9  1, 1, 2, 2, 2, 3, 3, 3, 3, 3
# 10 1, 2, 2, 2, 2, 3, 3, 3, 3, 3
#

