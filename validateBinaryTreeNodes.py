class Solution:
    def __init__(self):
        self.visited = [] # [2, 1, 0, 3]
        # self.valid = True
        
    def validateBinaryTreeNodes(self, n: int, leftChild: List[int], rightChild: List[int]) -> bool:
        inDegree = [0] * n # [1, 1, 0, 1]
        for i in range(len(leftChild)):
            l, r = leftChild[i], rightChild[i]
            if l != -1:
                inDegree[l] += 1
            if r != -1:
                inDegree[r] += 1
        root = None # 2
        for i in range(len(inDegree)):
            if inDegree[i] == 0:
                if root != None: return False
                root = i
            elif inDegree[i] > 1:
                return False
        if root == None: return False
        self.dfs(root, leftChild, rightChild)
        return len(self.visited) == n
    
    def dfs(self, idx, leftChild, rightChild):
        self.visited.append(idx)
        if leftChild[idx] != -1:
            self.dfs(leftChild[idx], leftChild, rightChild)
        if rightChild[idx] != -1:
            self.dfs(rightChild[idx], leftChild, rightChild)
        
        
        # left = list(filter(lambda x: x != -1, leftChild))
        # right = list(filter(lambda x: x != -1, rightChild))
        # return len(left + right) == n - 1
        
        
        # self.dfs(0, leftChild, rightChild)
        # if len(self.visited) != n:
        #     self.valid = False
        # return self.valid
        
    # def dfs(self, idx, leftChild, rightChild):
        # if idx in self.visited: 
        #     self.valid = False
        #     return
        # self.visited.add(idx)
        # if not leftChild: return
        # if leftChild[0] != -1:
        #     self.dfs(leftChild[0], leftChild[1:], rightChild[1:])
        # if rightChild[0] != -1:
        #     self.dfs(rightChild[0], leftChild[2:], rightChild[2:])
        
        
# { 0: [1, 2], 1: [], 2: [3], 3: []  }
# { 0: [1, 2], 1: [3], 2: [3], 3: [] }
# { 0: [1, 2] }
#
#
#
#
#
#
#
#
#
#
#

        
        
        
        
        
        
        
        
        
        