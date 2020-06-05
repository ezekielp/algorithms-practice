class MedianFinder

=begin
    initialize your data structure here.
=end
    def initialize()
        @left = []
        @right = []
    end


=begin
    :type num: Integer
    :rtype: Void
=end
    def add_num(num)
        if @left.empty?
            @left << num
        elsif @right.empty?
            if @left[0] > num
                @right << @left.pop
                @left << num
            else
                @right << num
            end
        else
            if num <= @left[0]
                heapify(@left, num)
            elsif num >= @right[0]
                heapify(@right, num)
            else
                if @left.length > @right.length
                    heapify(@right, num)
                else
                    heapify(@left, num)
                end
            end

            if @left.length > @right.length + 1
                left_top = delete_top(@left)
                heapify(@right, left_top)
            elsif @right.length > @left.length + 1
                right_top = delete_top(@right)
                heapify(@left, right_top)
            end
        end
    end


=begin
    :rtype: Float
=end
    def find_median()
        p @left
        p @right
        if @left.length > @right.length
            return @left[0]
        elsif @right.length > @left.length
            return @right[0]
        else
            return (@right[0] + @left[0]) / 2.0
        end
    end

    def heapify(side, num)
        side << num
        current_i = side.length - 1
        parent_i = (current_i - 1) / 2
        current = side[current_i]
        parent = side[parent_i]

        if side == @left
            while current > parent
                side[current_i], side[parent_i] = side[parent_i], side[current_i]
                current_i = parent_i
                parent_i = [(current_i - 1) / 2), 0].max
                current = side[current_i]
                parent = side[parent_i]
            end
        else
            while current < parent
                side[current_i], side[parent_i] = side[parent_i], side[current_i]
                current_i = parent_i
                parent_i = [(current_i - 1) / 2), 0].max
                current = side[current_i]
                parent = side[parent_i]
            end
        end
    end

    def delete_top(side)
        prev_top = side.shift

        parent_i = 0
        child1_i = (parent_i * 2) + 1
        child2_i = (parent_i * 2) + 2
        parent = side[parent_i]
        child1 = side[child1_i]
        child2 = side[child2_i]

        if side == @left
            while child1 && child1 > parent || child2 && child2 > parent
                if child1 && child2 && child1 > parent && child2 > parent
                    if child1 > child2
                        side[parent_i], side[child1_i] = side[child1_i], side[parent_i]
                        parent_i = child1_i
                    else
                        side[parent_i], side[child2_i] = side[child2_i], side[parent_i]
                        parent_i = child2_i
                    end
                elsif child1 && child1 > parent
                    side[parent_i], side[child1_i] = side[child1_i], side[parent_i]
                    parent_i = child1_i
                elsif child2 && child2 > parent
                    side[parent_i], side[child2_i] = side[child2_i], side[parent_i]
                    parent_i = child2_i
                end

                child1_i = (parent_i * 2) + 1
                child2_i = (parent_i * 2) + 2
                parent = side[parent_i]
                child1 = side[child1_i]
                child2 = side[child2_i]
            end
        else
            while child1 && child1 < parent || child2 && child2 < parent
                if child1 && child2 && child1 < parent && child2 < parent
                    if child1 < child2
                        side[parent_i], side[child1_i] = side[child1_i], side[parent_i]
                        parent_i = child1_i
                    else
                        side[parent_i], side[child2_i] = side[child2_i], side[parent_i]
                        parent_i = child2_i
                    end
                elsif child1 && child1 < parent
                    side[parent_i], side[child1_i] = side[child1_i], side[parent_i]
                    parent_i = child1_i
                elsif child2 && child2 < parent
                    side[parent_i], side[child2_i] = side[child2_i], side[parent_i]
                    parent_i = child2_i
                end

                child1_i = (parent_i * 2) + 1
                child2_i = (parent_i * 2) + 2
                parent = side[parent_i]
                child1 = side[child1_i]
                child2 = side[child2_i]
            end
        end

        prev_top
    end

end

# ["MedianFinder","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian"]
# [[],[-1],[],[-2],[],[-3],[],[-4],[],[-5],[]]

mf = MedianFinder.new()
mf.add_num(-1)
p mf.findMedian()
mf.addNum(-2)
p mf.findMedian()
mf.addNum(-3)
p mf.findMedian()
mf.addNum(-4)
p mf.findMedian()
mf.addNum(-5)
p mf.findMedian()


# (i - 1) / 2

# (i * 2) + 1
# (i * 2) + 2

# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder.new()
# obj.add_num(num)
# param_2 = obj.find_median()



# you have a left side and right side
# and each side is a priority queue — one a min heap, the other a max heap
# if they're the same length, you take top of each and average them
# if they're different length by one, you take the top of the longer one
# if they get out of whack by more than one, you pop off the top 
# of the longer one, put it on the other side


# [1, 4, 5, 6] [7, 9, 10, 12]








[null,null,78,null,46.00000,null,50,null,35.00000,null,20,null,17.00000,null,20,null,17.00000,null,14,null,17.00000,null,20,null,22.50000,null,25,null,27.00000,null,25,null,22.50000,null,25,null,24.00000,null,25,null,27.00000,null,25,null,27.00000,null,29,null,29.00000,null,29,null,27.00000,null,29,null,27.00000,null,29,null,29.00000,null,29,null,29.00000,null,29,null,29.00000,null,29,null,29.00000,null,29,null,29.00000,null,29,null,29.00000,null,29,null,29.00000,null,29,null,29.00000,null,29,null,29.00000,null,29,null,29.00000,null,29,null,29.00000,null,29,null,29.00000,null,29,null,29.00000,null,29,null,29.00000,null,29,null,29.00000,null,29,null,30.00000,null,31,null,33.00000,null,31,null,30.00000,null,31,null,30.00000,null,29,null,30.00000,null,29,null,29.00000,null,29,null,29.00000,null,29,null,29.00000,null,29,null,29.00000,null,29,null,29.00000,null,29,null,29.00000,null,29]


[null,null,78.00000,null,46.00000,null,50.00000,null,35.00000,null,20.00000,null,17.00000,null,20.00000,null,17.00000,null,14.00000,null,17.00000,null,20.00000,null,22.50000,null,25.00000,null,27.00000,null,25.00000,null,22.50000,null,25.00000,null,24.00000,null,25.00000,null,27.00000,null,25.00000,null,27.00000,null,29.00000,null,29.00000,null,29.00000,null,27.00000,null,29.00000,null,27.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,30.00000,null,31.00000,null,32.00000,null,31.00000,null,30.00000,null,31.00000,null,30.00000,null,29.00000,null,30.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000]







[33.00000,null,29.00000,null,29,null,29.00000,null,29]

[32.00000,null,29.00000,null,29.00000,null,29.00000,null,29.00000]
