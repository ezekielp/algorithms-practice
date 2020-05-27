# Input:  words[] = {"baa", "abcd", "abca", "cab", "cad"}
# Output: Order of characters is 'b', 'd', 'a', 'c'
# Note that words are sorted and in the given language "baa" 
# comes before "abcd", therefore 'b' is before 'a' in output.
# Similarly we can find other orders.

# Input:  words[] = {"caa", "aaa", "aab"}
# Output: Order of characters is 'c', 'a', 'b'


# {"a": 0}
# {"d": 0}
# {"c": 0}
# {"b": 0}

# ["b", "d", "a", "c"]

# {
#   "b": ["a", "d"],
#   "d": ["a"],
#   "a": ["c"]
#   
# 
#   ["c", "a", "b"]
# 
#   "c": ["a"],
#   "a": ["b"]
# 
# 
# 
# 
# 
# }




def find_order(dict)
    seen = Set.new([])
    res = []

    i = 0
    while i < dict.length - 1
        w1 = dict[i]
        w2 = dict[i + 1]

        j = 0
        c1 = w1[j]
        c2 = w2[j]
        while c1 && c2 && c1 == c2
            j +=1
        end

        if c1 && c2
            if seen.empty?
                seen.add(c1)
                seen.add(c2)
                res << c1
                res << c2
            else
                if seen.include?(c1)

                elsif seen.include?(c2)
                end
            end
        end

        i += 1
    end


    res

end


