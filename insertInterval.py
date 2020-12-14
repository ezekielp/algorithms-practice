# [[5, 8], [12, 18]] // [1, 3] // [10, 11] // [20, 24] // [3, 28] // [4, 15] // [6, 14]

def insert(self, intervals, newInterval): # [4, 15]
    res, n = [], newInterval # [], [4, 18]
    for index, i in enumerate(intervals): # 1, [12, 18]
        if i.end < n.start:
            res.append(i)
        elif n.end < i.start:
            res.append(n)
            return res+intervals[index:]  # can return earlier
        else:  # overlap case
            n.start = min(n.start, i.start)
            n.end = max(n.end, i.end)
    res.append(n)
    return res



class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        if not intervals: return [newInterval]
        left = self.bisearch(intervals, newInterval[0], 'l')
        right = self.bisearch(intervals, newInterval[1], 'r')
        newLeft = newRight = None
        if left[1] == 'merge':
            newLeft = intervals[left[0]][0]
        else:
            newLeft = newInterval[0]
        
        
    def bisearch(self, intervals, target, side):
        lo, hi = 0, len(intervals) - 1
        while lo != hi:
            mid = (hi + lo) // 2
            interval = intervals[mid]
            if target == interval[0] or target == interval[1] or (target > interval[0] and target < interval[1]):
                lo, hi = mid, mid
            else:
                if target < interval[0]: hi = mid - 1
                elif: target > interval[1]: lo = mid
            
        i = intervals[lo]
        if target == i[0] or target == i[1] or (target > i[0] and target < i[1]):
            return (lo, 'merge')
        else:
            # if side == 'l':
            if target < i[0]: return (lo, 'insert_before')
            elif target > i[1]: return (lo, 'insert_after')
            # else: # side == 'r'
                
                
                
                
# [[5, 8]] // [1, 3] // [10, 21]
