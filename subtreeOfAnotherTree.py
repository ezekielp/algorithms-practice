# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        # self.checked = set([])
        self.check = True
    
    def isSubtree(self, s: TreeNode, t: TreeNode) -> bool:
        level = [s] # [3]
        while level:
            newLevel = []
            for node in level: # 3
                self.dfs(node, t) # 3, 4
                if self.check: return True
                self.check = True
                if node.left:
                    newLevel.append(node.left)
                if node.right:
                    newLevel.append(node.right)
            level = newLevel
        return False
        
        
    def dfs(self, node, t):
        # if s in self.checked: return
        # self.checked.add(s)
        if not node and not t: return
        if (not node and t) or (node and not t) or node.val != t.val:
            self.check = False
            return
        self.dfs(node.left, t.left)
        self.dfs(node.right, t.right)
        