class Solution:
    def mostCompetitive(self, nums: List[int], k: int) -> List[int]:
        if k == 0: return []
        if k == 1: return [min(nums)]
        res = []
        numsLeft = len(nums)
        for n in nums:
            if not res:
                res.append(n)
            else:
                if n < res[-1]:
                    i = self.biSearch(res, n)
                    if i + 1 + numsLeft >= k:
                        res = res[:i] + [n]
                else:
                    if len(res) < k: # and k - len(res) == numsLeft:
                        res.append(n)
                        # res = res[:i] + [n] + res[(i+1):-1]
            numsLeft -= 1
        return res
                
    def biSearch(self, res, n): # 4
        lo, hi = 0, len(res) - 1 # 3, 3
        while lo != hi:
            mid = (hi + lo) // 2 # 3 ## 5
            if n >= res[mid]:
                lo = mid + 1
            else:
                hi = mid
        return lo
            
