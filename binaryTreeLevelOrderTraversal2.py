# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque

class Solution:
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        if not root: return []
        result = deque([])
        queue = deque([root]) # [3]
        while queue:
            newQueue = []
            result.appendleft(list(map(lambda n: n.val, queue)))
            for node in queue:
                if node.left:
                    newQueue.append(node.left)
                if node.right:
                    newQueue.append(node.right)
            queue = newQueue
        return result