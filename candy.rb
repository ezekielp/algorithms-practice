# @param {Integer[]} ratings
# @return {Integer}
def candy(ratings)
    res = Array.new(ratings.length, 0)
    
    queue = []
    
    ratings.each_with_index do |r, i|
        if (i == 0 || ratings[i - 1] >= r) && (i == ratings.length - 1 || r <= ratings[i + 1])
            res[i] = 1
            queue << i - 1 if i > 0 && res[i - 1] == 0
            queue << i + 1 if i < ratings.length - 1
        end
    end
    
    p res
    p queue
    until queue.empty?
        nxt = queue.shift
        if res[nxt] == 0
            if nxt == 0 || nxt == ratings.length - 1 || res[nxt - 1] == res[nxt + 1]
                if ratings[nxt + 1]
                    res[nxt] = res[nxt + 1] + 1
                else
                    res[nxt] = res[nxt - 1] + 1
                end
            elsif nxt > 0 && ratings[nxt - 1] > ratings[nxt]
                j = nxt
                while j > 0 && ratings[j - 1] > ratings[j]
                    res[j] = res[j + 1] + 1
                    j -= 1
                end
            elsif nxt < ratings.length - 1 && ratings[nxt + 1] > ratings[nxt]
                k = nxt
                while k < ratings.length - 1 && ratings[k + 1] > ratings[k]
                    res[k] = res[k - 1] + 1
                    k += 1
                end
            end
        end
    end
    
    res.reduce(:+)
        
end

new_example = [1,2,87,87,87,2,1]
# [1, 2, 3, 1, 3, 2, 1]
candy(new_example)


# [5, 3, 7, 4, 3, 2, 5, 6, 10, 2, 4, 6]
# [0, 1, 0, 0, 0, 1, 0, 0,  0, 1, 0, 0]

# [2, 1, 4, 3, 2, 1, 2, 3,  4, 1, 2, 3]

# [4, 4, 6, 5, 5, 5, 3, 3, 1, 1, 1, 9]
# [1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0]


# [4, 4, 6, 5, 5, 5, 2, 3, 1, 1, 1, 9]
# [1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2]

# [1, 2, 2]




