# @param {String} s
# @param {Integer} k
# @return {Integer}
def longest_substring(s, k)
    return 0 if !s
    
    count_hash = Hash.new(0)
    idx_hash = Hash.new { |h, key| h[key] = [] }
    
    i = 0
    while i < s.length
        curr = s[i]
        count_hash[curr] += 1
        idx_hash[curr] << i
        
        i += 1 
    end

    indices = []
    potentials = 0
    
    count_hash.each_key do |char|
        if count_hash[char] < k
            indices += idx_hash[char]
        else
            potentials += 1
        end
    end
    
    return s.length if indices.empty?
    return 0 if potentials == 0
    
    sorted = indices.sort
    to_try = []
    
    j = 0
    while j < indices.length
        curr = indices[j]
        nxt = sorted[j + 1]
        if j == 0
            to_try << s[0...curr]
        elsif j == sorted.length - 1
            to_try << s[(curr + 1)..-1]
        else
            to_try << s[(curr + 1)...nxt]
        end
        j += 1
    end
    
    options = to_try.map { |str| longest_substring(str, k) }
    
    options.max
end

    
    


#     count_hash = Hash.new(0)
#     idx_hash = Hash.new { |h, k| h[k] = [] }
    
#     i = 0
#     while i < s.length
#         curr = s[i]
#         count_hash[curr] += 1
#         idx_hash[curr] << i
        
#         i += 1 
#     end
    
#     split_s = s.split("")
    
#     j = 0
#     while j < split_s.length
#         curr = s[j]
        
#         if count_hash[curr] >=
        
#         j += 1
#     end
    




#     return 0 if s == ""
    
#     max = 0
    
#     i = 0
#     while i < s.length
#         curr = s[i]
#         count = 1
        
#         j = i + 1
#         while s[j] && s[j] == curr
#             count += 1
#             j += 1
#         end
        
#         if count < k
#             return 
#                 max,
#                 longest_substring(s[j..-1], k)
#             ].max
#         else
#             max += count
#         end
        
#         count = 0
#         i += 1 
#     end
    
#     max