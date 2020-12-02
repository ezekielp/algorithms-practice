# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.maxDepth = 0
        self.balanced = True
    
    def isBalanced(self, root: TreeNode) -> bool:
        if root is None: return True
        self.getMaxDepth(root)
        self.dfs(root)
        return self.balanced
    
    def getMaxDepth(self, root, depth = 1):
        if root.left is None and root.right is None:
            self.maxDepth = max(depth, self.maxDepth)
        else:
            if root.left is not None:
                self.getMaxDepth(root.left, depth + 1)
            if root.right is not None:
                self.getMaxDepth(root.right, depth + 1)
        
    def dfs(self, root, depth = 1):
        # 2, 2 // 3, 3 // 3, 3
        if not self.balanced: return
        if root.left is None and root.right is None:
            if depth < self.maxDepth - 1:
                self.balanced = False
        else:
            if root.left is not None:
                self.dfs(root.left, depth + 1)
            if root.right is not None:
                self.dfs(root.right, depth + 1)
                
                