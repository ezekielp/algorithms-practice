import heapq

class Solution:
    def minimumEffortPath(self, heights: List[List[int]]) -> int:
        if len(heights) == 1 and len(heights[0]) == 1:
            return 0

        visited = set((0, 0))
        # { (0, 0), (0, 1),  }
        heap = [] # [(2, (1, 0))]
        prev = heights[0][0] # 2
        if len(heights) > 1: heap.append((abs(prev - heights[1][0]), (1, 0)))
        if len(heights[0]) > 1: heap.append((abs(prev - heights[0][1]), (0, 1)))
        heapq.heapify(heap)
        maxHeight = heap[0][0]
        
        while heap[0][1] != (len(heights) - 1, len(heights[0]) - 1):
            val, nxt = heapq.heappop(heap) # 1, (0, 1)
            maxHeight = max(maxHeight, val)
            visited.add(nxt)
            r, c = nxt # 0, 1
            prev = heights[r][c]
            top = (r - 1, c) if r > 0 else None
            right = (r, c + 1) if c < len(heights[0]) - 1 else None
            bottom = (r + 1, c) if r < len(heights) - 1 else None
            left = (r, c - 1) if c > 0 else None
            for crds in [top, right, bottom, left]:
                if crds and crds not in visited:
                    r2, c2 = crds
                    heapq.heappush(heap, (abs(prev - heights[r2][c2]), crds))
        
        return max(maxHeight, heap[0][0])
        