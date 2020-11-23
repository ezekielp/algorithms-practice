# @param {String[]} words
# @param {String} order
# @return {Boolean}
def is_alien_sorted(words, order)
    i = 0
    chars = order.split('')
    while i < words.length - 1
        j = i + 1
        while j < words.length
            w1, w2 = words[i], words[j]
            m = n = 0
            sorted = false
            while m < w1.length && n < w2.length && !sorted
                if chars.find_index(w1[m]) > chars.find_index(w2[n])
                    return false
                elsif chars.find_index(w1[m]) == chars.find_index(w2[n])
                    m += 1
                    n += 1
                else
                    sorted = true
                end
            end

            if sorted
                j = words.length
            else
                return false if w1.length > w2.length
            end
            
            j += 1
        end
        
        i += 1
    end
    true
end