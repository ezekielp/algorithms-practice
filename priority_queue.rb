def heapify(arr)
    @res = []

    arr.each do |n|
        @res << n
        parent_i = (i - 1) / 2
        i = @res.length - 1
        while @res[i] > @res[parent_i]
            @res[parent_i], @res[i] = @res[i], @res[parent_i]
            i = parent_i
            parent_i = (i - 1) / 2
        end
    end

    @res

end

def take_max

    max = @res.shift

    @res.unshift(@res.pop)

    parent_i = 0
    child1_i = (parent_i * 2) + 1
    child2_i = (parent_i * 2) + 2
    par = @res[parent_i]
    c1 = @res[child1_i]
    c2 = @res[child2_i]
    while c1 || c2 && par < c1 || par < c2
        new_parent = [c1, c2].compact.max
        new_parent_i = c1 > c2 ? child1_i : child2_i

        @res[parent_i] = new_parent
        @res[new_parent_i] = par

        parent_i = new_parent_i
        child1_i = (parent_i * 2) + 1
        child2_i = (parent_i * 2) + 2
        par = @res[parent_i]
        c1 = @res[child1_i]
        c2 = @res[child2_i]
    end

    max

end

# [3, 7, 12, 1, 0, 5, 15, 8, 9, 3, 5]

# [0,  1, 2,  3, 4, 5, 6, 7, 8, 9,10]
# [15, 9, 12, 8, 5, 5, 7, 1, 3, 0, 3]

# [12, 9, 7, 8, 5, 5, 3, 1, 3, 0]
# [9, 8, 7, 3, 5, 5, 3, 1, 0]
# [8, 5, 7, 3, 0, 5, 3, 1]


# [0,  1,  2, 3, 4, 5, 6, 7, 8, 9,10]
# [15, 12, 9, 8, 7, 5, 5, 3, 3, 1, 0]

# left_child => i * 2 + 1
# right_child => i * 2 + 2
# parent => i - 1 / 2

