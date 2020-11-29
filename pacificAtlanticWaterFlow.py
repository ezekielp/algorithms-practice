class Solution:
    def pacificAtlantic(self, matrix):
        pacific = self.fillInMatrix(matrix)
        # print(pacific)
        inverted = self.invertMatrix(matrix)
        atlantic = self.fillInMatrix(inverted)
        invertedAtlantic = self.invertMatrix(atlantic)
        # print(atlantic)
        results = []
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if pacific[i][j] and invertedAtlantic[i][j]:
                    results.append([i, j])
        return results
        
    def fillInMatrix(self, matrix):
        toFill = []
        for row in range(len(matrix)):
            toFill.append([False] * len(matrix[0]))
        for i in range(len(toFill)):
            for j in range(len(toFill[0])):
                if i == 0 or j == 0:
                    toFill[i][j] = True
                else:
                    if (matrix[i][j] >= matrix[i - 1][j] and toFill[i - 1][j]) or (matrix[i][j] >= matrix[i][j - 1] and toFill[i][j - 1]):
                        toFill[i][j] = True
        return toFill
    
    def invertMatrix(self, matrix):
        inverted = []
        for row in range(len(matrix)):
            inverted.append([None] * len(matrix[0]))
        m = len(matrix) - 1
        for i in range(len(inverted)):
            n = len(matrix[0]) - 1
            for j in range(len(inverted[0])):
                # print(i, j, m, n)
                inverted[i][j] = matrix[m][n]
                # print(inverted)
                n -= 1
            m -= 1
        return inverted
