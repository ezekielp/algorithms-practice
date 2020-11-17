class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        merged = []
        to_merge = sorted(intervals, key=lambda x: x[0])
        while True:
            prev_length = len(to_merge) # 5
            for i1 in to_merge: # i1 = [8, 10]
                if len(merged) == 0:
                    merged.append(i1)
                else:
                    new_merge = False
                    for idx in range(len(merged)): # 0
                        i2 = merged[idx] # [1, 3]
                        if i2[1] >= i1[0]: # or i1[1] >= i2[0]
                            merged[idx] = [min([i1[0], i2[0]]), max([i1[1], i2[1]])]
                            new_merge = True
                            break
                    if not new_merge:
                        merged.append(i1)
            if len(to_merge) == len(merged):
                break
            else:
                to_merge = merged
                merged = []
        return merged
        