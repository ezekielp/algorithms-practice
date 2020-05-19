# @param {Integer[][]} grid
# @return {Integer}
def min_path_sum(grid)
    dp = Array.new(grid.length)
    dp.each_with_index do |na, idx|
        dp[idx] = Array.new(grid[0].length, 0)
    end

    row = 0
    col = 1
    dp[0][0] = grid[0][0]
    
    while row < grid.length
        while col < grid[0].length
            if row == 0
                dp[row][col] = dp[row][col - 1] + grid[row][col]
            elsif col == 0
                dp[row][col] = dp[row - 1][col] + grid[row][col]
            else
                dp[row][col] = grid[row][col] + [dp[row - 1][col], dp[row][col - 1]].min
            end

            col += 1
        end

        col = 0
        row += 1
    end

    return dp[-1][-1]
    
end

#     def dfs(row, col, sum)
#         # return if dp[row][col]
#         return if row > grid.length || col > grid[0].length
        
#         new_sum = sum + grid[row][col]
#         # dp[row][col] = true
        
#         if row == grid.length - 1 && col == grid[0].length && new_sum < min_sum
#             min_sum = new_sum
#         end
        
#         dfs(row + 1, col, new_sum)
#         dfs(row, col + 1, new_sum)
#     end

# def min_path_sum(grid, row = 0, col = 0, sum = 0, min_sum = Float::INFINITY)
#     # dp = Array.new(grid.length)
#     # dp.each_with_index do |na, idx|
#     #     dp[idx] = Array.new(grid[0].length, false)
#     # end
    
#     return if row > grid.length - 1 || col > grid[0].length - 1

#     new_sum = sum + grid[row][col]
#     # dp[row][col] = true

#     if row == grid.length - 1 && col == grid[0].length && new_sum < min_sum
#         min_sum = new_sum
#     end

#     min_path_sum(grid, row + 1, col, new_sum, min_sum)
#     min_path_sum(grid, row, col + 1, new_sum, min_sum)
    
#     min_sum
    
# end

#     return Float::INFINITY if row > grid.length - 1 || col > grid[0].length - 1
#     return Float::INFINITY if dp[row][col]
    
#     new_sum = sum + grid[row][col]
#     dp[row][col] = true

#     if row == grid.length - 1 && col == grid[0].length - 1
#         return new_sum
#     end

#     [min_path_sum(grid, row + 1, col, new_sum, dp), min_path_sum(grid, row, col + 1, new_sum, dp)].min