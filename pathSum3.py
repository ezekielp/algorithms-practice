# You are given a binary tree in which each node contains an integer value.

# Find the number of paths that sum to a given value.

# The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

# The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

#       10
#      /  \
#     5   -3
#    / \    \
#   3   2   11
#  / \   \
# 3  -2   1

# Return 3. The paths that sum to 8 are:

# 1.  5 -> 3
# 2.  5 -> 2 -> 1
# 3. -3 -> 11

class Solution:
    def __init__(self):
        self.count = 0 # ++

    def pathSum(self, root: TreeNode, sum: int) -> int: # 10
        self.dfs(root, sum)
        return self.count

    def dfs(self, root, target): # 11
        if not root: return 0
        left1 = root.val + self.pathSum(root.left, sum) # 10 +  // -3 + // 11 + 0
        left2 = self.pathSum(root.left, sum) # // 11
        right1 = root.val + self.pathSum(root.right, sum) # 18 + // 8 //
        right2 = self.pathSum(root.right, sum) # // 11
        
        for s in [left1, left2, right1, right2]:
            if s == target: self.count += 1

        return root.val
        # return self.count


#       10
#      /  \
#     5   -3
#    / \    \
#   3   2   11
#  / \   \
# 3  -2   1

        # return a sum at the end
        
        # test if current node.val + pathSum() == 8
        # AND test if pathSum() == 8



    # def someMethod(self, someParam=None)
        








