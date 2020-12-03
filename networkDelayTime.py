# [[1, 2, 1], [2, 3, 2], [1, 3, 4]]
# N = 3, K = 1


class Solution:
    def networkDelayTime(self, times: List[List[int]], N: int, K: int) -> int:
        weight = collections.defaultdict(dict)
        # {1: {2: 1, 3: 4}, 2: {3: 2}}
        for u, v, w in times:
            weight[u][v] = w
        heap = [(0, K)] # [(3, 3)]
        dist = {} # {1: 0, 2: 1, 3: 3}
        while heap:
            time, u = heapq.heappop(heap) # 3, 3
            if u not in dist:
                dist[u] = time
                for v in weight[u]: # 
                    heapq.heappush(heap, (dist[u] + weight[u][v], v))
        return max(dist.values()) if len(dist) == N else -1

    
    

class Solution:
    def networkDelayTime(self, times: List[List[int]], N: int, K: int) -> int:
        dist = [float("inf") for _ in range(N)]
        # [0, 1, 3]
        dist[K-1] = 0
        for _ in range(N-1): # 0
            for u, v, w in times: # 1, 3, 4
                if dist[u-1] + w < dist[v-1]: # 
                    dist[v-1] = dist[u-1] + w
        return max(dist) if max(dist) < float("inf") else -1














from collections import deque

class Solution:
    def networkDelayTime(self, times: List[List[int]], N: int, K: int) -> int:
        visited = set([K]) #
        graph = {} #
        for time in times:
            node, edge = time[0], (time[1], time[2])
            if node not in graph:
                graph[node] = [edge]
            else:
                graph[node].append(edge)
        
        if K not in graph: return -1

        maxWeight = 0
        queue = deque(graph[K])
        while len(visited) < N and len(queue) > 0:
            nxt, weight = queue.popleft() # 
            if nxt not in visited:
                visited.add(nxt)
                maxWeight = max(weight, maxWeight)
                if len(visited) == N:
                    return maxWeight
                if nxt in graph:
                    mapped = map(lambda x: (x[0], x[1] + weight), graph[nxt])
                    queue += mapped
        
        return -1