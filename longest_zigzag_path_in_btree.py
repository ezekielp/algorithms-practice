class Solution:
    
    def __init__(self):
        self.maxCount = 0
    
    def longestZigZag(self, root: TreeNode) -> int:
        self.dfs(root, 0, None)
        return self.maxCount
        
    def dfs(self, root: TreeNode, currCount, prev):
        if not root: return
        if prev != None:
            currCount += 1
            if currCount > self.maxCount:
                self.maxCount = currCount
        if prev == None:
            self.dfs(root.left, 0, 'L')
            self.dfs(root.right, 0, 'R')
        elif prev == 'R':
            self.dfs(root.left, currCount, 'L')
            self.dfs(root.right, 0, 'R')
        elif prev == 'L':
            self.dfs(root.left, 0, 'L')
            self.dfs(root.right, currCount, 'R')