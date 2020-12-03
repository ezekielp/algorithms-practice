# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

7
4 15
1 6

class Solution(object):
    pre = -float('inf') # 7
    res = float('inf') # 1

    def minDiffInBST(self, root):
        if root.left:
            self.minDiffInBST(root.left)
        self.res = min(self.res, root.val - self.pre)
        self.pre = root.val
        if root.right:
            self.minDiffInBST(root.right)
        return self.res



from collections import deque

class Solution:
    def minDiffInBST(self, root: TreeNode) -> int:
        queue = deque([root])
        nxt = root
        while nxt.left:
            nxt = nxt.left
            queue.appendleft(nxt)
            
        inOrder = []
        while queue:
            nxt = queue.popleft()
            inOrder.append(nxt.val)
            if nxt.right:
                
                queue.appendleft()
        
        
        