# @param {Character[][]} matrix
# @return {Integer}
def maximal_square(matrix)
    
    dp = Array.new(matrix.length) { Array.new(matrix[0].length, 0) }
    max = 0
    
    matrix.each_with_index do |row, r|
        row.each_with_index do |col, c|
            if col == "1"
                if c > 0 && r > 0
                    if matrix[r][c - 1] == "1" && matrix[r - 1][c] == "1"
                        dp[r][c] = [dp[r - 1][c - 1], dp[r][c - 1], dp[r - 1][c]].min + 1
                    else
                        dp[r][c] = 1
                    end
                else
                    dp[r][c] = 1
                end
                
                max = [max, dp[r][c]].max
            end
        end
    end
    
    max * max
end

example1 = [
    ["0","0","0","1"],
    ["1","1","0","1"],
    ["1","1","1","1"],
    ["0","1","1","1"],
    ["0","1","1","1"]
]
    
    

























#     memo = Array.new(matrix.length) { Array.new(matrix[0].length, false) }
#     hash = {}
    
#     i = 0
#     while i < matrix.length
#        j = 0
#         while j < matrix[0].length
#             if !memo[i][j] && matrix[i][j] == 1
                
#                 m = i
#                 len = 0
#                 while m < matrix.length && matrix[m][j] == 1
#                    memo[m][j] = true
#                     len += 1
#                     m += 1
#                 end
                
#                 if !hash[i]
#                     hash[i] = {}
#                     while len
#                     hash[i][len]
#                 else
#                 end
                
#             end
                
#             j += 1
#         end

#         i += 1
#     end
    
#     max = 0

    
# def maximal_square(matrix)
#     @memo = Array.new(matrix.length) { Array.new(matrix[0].length, false) }
#     max = 0
    
#     m = 0
#     while m < matrix.length
#        n = 0
#         while n < matrix[0].length
#            if matrix[m][n] == 1 && !@memo[m][n]
#                i = m
#                j = n
#                while i < matrix.length && j < matrix[0].length && matrix[i][j] == 1 && !@memo[i][j]
#                     i += 1
#                     j += 1
#            end
#                area = square_area(matrix, m, n, i, j)
#                max = area if area > max
                   
#             n += 1
#         end
        
#         m += 1
#     end
    
#     max
    
# end

# def square_area(matrix, m, n, i, j)

#     r = m
#     c = n
    
#     while r < i
#         while c < j
#             if (matrix[r][c] != 1)
                
#                 _r = m
#                 _c = n
#                 while _r <= r
#                     @memo[_r][c] = true
#                     _r += 1
#                 end
                
#                 while _c <= c
#                     @memo[r][_c] = true
#                     _c += 1
#                 end
                
#                 return 0
#             end
            
#             c += 1
#         end
#         r += 1
#     end
    
#     (i - m) ** 2
    
# end
    
