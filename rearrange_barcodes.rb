# @param {Integer[]} barcodes
# @return {Integer[]}
def rearrange_barcodes(barcodes)
    hash = Hash.new(0)
    
    barcodes.each do |bc|
        hash[bc] += 1
    end
    
    
    
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


