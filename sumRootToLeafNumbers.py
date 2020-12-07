# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: TreeNode) -> int:
        if not root: return 0
        result = 0 # 40 + 495 + 491
        curr = [(root, str(root.val))] # [(9, '49'), (0, '40')]
        while curr: # True
            nxt = [] # [(5, '495'), (1, '491')]
            for el in curr:
                node, num = el # 4, '4'
                l, r = node.left, node.right
                if l:
                    nxt.append((l, num + str(l.val)))
                if r:
                    nxt.append((r, num + str(r.val)))
                if not l and not r:
                    result += int(num)
            curr = nxt
        for el in curr:
            result += int(el[1])
        return result