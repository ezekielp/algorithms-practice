class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        dp = [[None] * len(grid[0])] * len(grid)
        for i in range(len(grid)): # 0
            for j in range(len(grid[0])): # 1
                if i == 0 and j == 0:
                    dp[i][j] = grid[i][j] #
                elif i == 0:
                    dp[i][j] = grid[i][j] + dp[i][j - 1]
                elif j == 0:
                    dp[i][j] = grid[i][j] + dp[i - 1][j]
                else:
                    dp[i][j] = grid[i][j] + min(dp[i][j - 1], dp[i - 1][j])
        return dp[-1][-1]
