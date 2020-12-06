# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# [1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,15]
#        1
#    2            3
#  4    5     6      7
# 8 9 10 11  12 13  N N
class Solution:
    def isCompleteTree(self, root: TreeNode) -> bool:
        num = 1 # 
        curr = [root] # 
        while curr: # 
            nxt = [] # 
            for node in curr:
                if node.left:
                    nxt.append(node.left)
                if node.right:
                    nxt.append(node.right)
            if len(nxt) == 0:
                return True
            else: # len(nxt) > 0
                if len(curr) < num: return False
            
            j = 0
            for parent in curr:
                l = nxt[j] if j < len(nxt) else None
                r = nxt[j + 1] if j + 1 < len(nxt) else None
                if l and parent.left != l:
                    return False
                if r and parent.right != r:
                    return False
                j += 2
            
            curr = nxt
            num *= 2
            
        return True