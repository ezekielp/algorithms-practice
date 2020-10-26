from collections import deque
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        seen = []
        for row in grid:
            seen.append([False] * len(grid[0]))
        islandCount = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if not seen[i][j] and grid[i][j] == "1":
                    islandCount += 1
                    seen = self.bfs((i, j), grid, seen)
        return islandCount
                    
    
    def bfs(self, coords: tuple, grid: List[List[str]], seen: List[List[bool]]):
        queue = deque()
        queue.append(coords)
        while len(queue) > 0:
            i, j = queue.popleft()
            seen[i][j] = True
            left = (i, j - 1) if j > 0 else None
            top = (i - 1, j) if i > 0 else None
            right = (i, j + 1) if j < len(grid[0]) - 1 else None
            bottom = (i + 1, j) if i < len(grid) - 1 else None
            for cs in [left, top, right, bottom]:
                if cs:
                    m, n = cs
                    if not seen[m][n] and grid[m][n] == "1":
                        queue.append(cs)
                    seen[m][n] = True
        return seen
