# @param {Integer[][]} matrix
# @param {Integer} k
# @return {Integer}
def kth_smallest(matrix, k)
    start = matrix[0][0]
    last = matrix[-1][-1]

    while start < last
        middle = (start + last) / 2
        num_els_less_or_eq_to_middle = 0
        largest_num_less_or_eq_to_middle = start
        smallest_num_greater_than_middle = last

        matrix.each do |row|
            row.each do |num|
                if num <= middle
                    num_els_less_or_eq_to_middle += 1
                    if num > largest_num_less_or_eq_to_middle
                        largest_num_less_or_eq_to_middle = num
                    end
                else
                    if num < smallest_num_greater_than_middle
                        smallest_num_greater_than_middle = num
                    end
                end
            end
        end

        if num_els_less_or_eq_to_middle == k
            return smallest_num_greater_than_middle
        elsif num_els_less_or_eq_to_middle < k
            start = smallest_num_greater_than_middle
        elsif num_els_less_or_eq_to_middle > k
            last = largest_num_less_or_eq_to_middle
        end
    end

    start
end


matrix1 = [[1,2],[3,3]]
k1 = 3

