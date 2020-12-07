# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.trees = []
    
    def generateTrees(self, n: int) -> List[TreeNode]:
        if n == 0: return []
        # if n == 1: return [TreeNode(1)]
        # perms = []
        # count = n - 1
        # while count:
        #     if count 
        # root = TreeNode(1)
        self.dfs(n, n - 1) #
        return self.trees #
        
    def dfs(self, n, curr, perms = ''):
        # 3, 0, 'b'
        # 3, 0, 'rr'
        # 3, 0, 'rl'
        # 3, 0, 'lr'
        # 3, 0, 'll'
        # [equiTri, ]
        if not curr:
            dummy = root = TreeNode(n) # 3, 3
            count = n - 1 # 2
            i = 0 # 0
            while count:
                if perms[i] == 'r':
                    root.right = TreeNode(count)
                    root = root.right
                    count -= 1
                elif perms[i] == 'l':
                    root.left = TreeNode(count)
                    root = root.left
                    count -= 1
                else: # perms[i] == 'b'
                    root.left = TreeNode(count)
                    root.right = TreeNode(count - 1)
                    count -= 2
                i += 1
            self.trees.append(dummy)
            return
        if curr >= 2:
            self.dfs(n, curr - 2, perms + 'b')
        self.dfs(n, curr - 1, perms + 'r')
        self.dfs(n, curr - 1, perms + 'l')
        
        # 3, 2, ''
        # 3, 1, 'r'
        # 3, 1, 'l'

        
        
            
                
        # if n > 2:
        #     nxt.left = TreeNode(n)
        #     self.dfs(n - 1, root, nxt.left)
        #     nxt.left = None
        #     nxt.right = TreeNode(n)
        #     self.dfs(n - 1, root, nxt.right)
        #     nxt.left = TreeNode(n - 1)
        #     self.dfs(n - 2, root, nxt.left)
        #     self.dfs(n - 2, root, nxt.right)
        # elif n == 2:
        #     nxt.left = TreeNode(n) # l = 2
        #     self.dfs(n - 1, root, nxt.left) # 1, 3, 2
        #     nxt.left = None
        #     nxt.right = TreeNode(n) # r = 2
        #     self.dfs(n - 1, root, nxt.right) # 1, 3, 2
        #     nxt.left = TreeNode(n - 1)
        #     self.trees.append(root)
        # else: # n == 1
        #     nxt.left = TreeNode(n) # l = 1
        #     self.trees.append(root)
        #     nxt.left = None
        #     nxt.right = TreeNode(n)
        #     self.trees.append(root)
        