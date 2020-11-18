class Solution:
    def twoCitySchedCost(self, costs: List[List[int]]) -> int:
        diffs = [] # [[10, 0], [170, 1], [350, 2], [10, 3]]
        for i in range(len(costs)):
            diffs.append([abs(costs[i][0] - costs[i][1]), i])
        sorted_diffs = sorted(diffs, key=lambda el: (el[0], sum(costs[el[1]])), reverse=True)
        # [[350, 2], [170, 1], [10, 3], [10, 0]]
        a = b = 0 # a = 1, b = 1
        n = len(costs) / 2 # 2
        result = 0 # 80
        for diff in sorted_diffs: # [170, 1]
            if a == n:
                result += costs[diff[1]][1]
            elif b == n:
                result += costs[diff[1]][0]
            else:
                smaller = min(costs[diff[1]]) 
                result += smaller
                if smaller == costs[diff[1]][0]:
                    a += 1
                else:
                    b += 1
        return result