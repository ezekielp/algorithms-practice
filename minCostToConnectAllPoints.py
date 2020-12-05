from collections import defaultdict

class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        if len(points) == 1: return 0
        # [[2,-3],[-17,-8],[13,8],[-17,-15]]
        
        graph = defaultdict(dict)
        # { # 22 + 24 + 7
        #   0: { 1: 24, 2: 22, 3: 37 }
        #   1: { 0: 24, 2: 30, 3: 7 }
        #   2: { 0: 22, 1: 30, 3: 53 }
        #   3: { 0: 37, 1: 7, 2: 53 }
        # }
        for i in range(len(points)): # 0
            for j in range(len(points)): # 1
                if j < i:
                    graph[i][j] = graph[j][i]
                elif j > i:
                    a, b = points[i], points[j]
                    graph[i][j] = abs(a[0] - b[0]) + abs(a[1] - b[1])

        visited = set([]) # { 0, 1, 2, 3 }
        minCost = 0 # 20
        while len(visited) < len(points):
            for p1 in graph: # 4
                if p1 not in visited: # True
                    cost, nxt = float('inf'), None # inf, None
                    for p2 in graph[p1]: # 
                        if graph[p1][p2] < cost:
                            cost, nxt = graph[p1][p2], p2
                    minCost += cost
                    visited.add(nxt)
                visited.add(p1)
                
        # curr = 0 #
            # for p1 in graph: # 0
            # if nxt not in visited: # True
            # cost, nxt = float('inf'), None # 4,
            # cost, nxt = float('inf'), None # 3, 3
            # for p in graph[curr]:
            #     if graph[curr][p] < cost && p not in visited:
            #         cost, nxt = graph[curr][p], p
            # minCost += cost
            # visited.add(curr)
            # curr = nxt
                
        return minCost
    
    
    
    
    
    