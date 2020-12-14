from collections import deque
class Solution:
    def uniquePathsWithObstacles(self, b):
        if not b or not b[0] or b[0][0] or b[~0][~0]: return 0
        m, n = len(b), len(b[0])
        if m == 1 and n == 1: return 1
        d = {}

        def df(x, y):
            if (x, y) in d: return d[(x,y)]
            if x == m or y == n or b[x][y] == 1: return 0
            if x == m - 1 and y == n - 1: return 1
            d[(x,y)] = df(x, y + 1) + df(x + 1, y)
            return d[(x, y)]

        return df(0, 1) + df(1, 0)
    
    
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        if obstacleGrid[0][0] == 1: return 0
        numPaths = 0 # 0
        queue = deque([(0, 0)]) # [[1, 2], [2, 1]]
        rowEnd, colEnd = len(obstacleGrid) - 1, len(obstacleGrid[0]) - 1
        # 2, 2
        while queue: # True
            r, c = queue.popleft()
            if r == rowEnd and c == colEnd:
                numPaths += 1
            else:
                if c < colEnd and obstacleGrid[r][c + 1] != 1:
                    queue.append((r, c + 1))
                if r < rowEnd and obstacleGrid[r + 1][c] != 1:
                    queue.append((r + 1, c))
        return numPaths
