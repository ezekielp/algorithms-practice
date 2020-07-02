# @param {Integer[]} barcodes
# @return {Integer[]}
def rearrange_barcodes(barcodes)
    hash = Hash.new(0)
    
    barcodes.each do |bc|
        hash[bc] += 1
    end

    most_frequent = hash.keys.reduce do |acc, el|
        hash[el] > hash[acc] ? el : acc
    end
    
    keys = Set.new(hash.keys)
    
    res = Array.new(barcodes.length, nil)
    curr_el = most_frequent
    evens_done = false
    odds_done = false
    
    until evens_done && odds_done
        i = evens_done ? 1 : 0
        while i < res.length
            if hash[curr_el] > 0
                res[i] = curr_el
                hash[curr_el] -= 1
                i += 2
            else
                keys.delete(curr_el)
                curr_el = keys.first
            end
        end
        
        if !evens_done
            evens_done = true
        else
            odds_done = true
        end
    end
    
    res
    
end




# def rearrange_barcodes(barcodes)
#     hash = Hash.new(0)
    
#     barcodes.each do |bc|
#         hash[bc] += 1
#     end
    
#     sorted = hash.keys.sort_by { |k| hash[k] }.reverse
    
#     res = [] # [7, 4]
#     i = 0 # 1
    
#     until sorted.empty?
#         res << sorted[i]
#         hash[sorted[i]] -= 1
#         if hash[sorted[i]] == 0
#             sorted.delete_at(i)
#             i = 0
#         else
#             if i == 0
#                 i += 1
#             else
#                 if hash[sorted[i - 1]] >= hash[sorted[i]]
#             end
#         end

#     end
    
#     res
# end


