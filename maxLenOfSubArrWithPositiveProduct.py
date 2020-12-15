 def getMaxLen(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # [-7,-10,-7,21,20,-12,-34,26,2]
        n = len(nums) # 9
        dp = [0] * 2 # [0, 1]

        if nums[0] > 0:
            dp[0] = 1
        
        if nums[0] < 0:
            dp[1] = 1
            
        res = dp[0] # 0
        
        for i in range(1, n):
            cur = nums[i] # -10
            tmp = [0] * 2 # [0, 1]
            if cur > 0:
                tmp[0] = dp[0] + 1
                if dp[1] > 0:
                    tmp[1] = max(tmp[1], dp[1] + 1)
            elif cur < 0: # 
                tmp[1] = dp[0] + 1
                if dp[1] > 0:
                    tmp[0] = max(tmp[0], dp[1] + 1)
            dp = tmp
            res = max(res, dp[0])
            
        return res

class Solution:
    def getMaxLen(self, nums: List[int]) -> int:
    # [-7,-10,-7,21,20,-12,-34,26,2]
        ans = pos = neg = 0 # 5, 8, 9
        for x in nums: # 5
            if x > 0: pos, neg = 1 + pos, 1 + neg if neg else 0
            elif x < 0: pos, neg = 1 + neg if neg else 0, 1 + pos
            else: pos = neg = 0 # reset 
            ans = max(ans, pos)
        return ans 



# class Solution:
#     def getMaxLen(self, nums: List[int], firstRun=True) -> int:
#         subArrs = []
#         if firstRun:
#             subArr = []
#             for num in nums:
#                 if num != 0:
#                     subArr.append(num)
#                 else:
#                     if subArr:
#                         subArrs.append(subArr)
#                         subArr = []
#             if subArr: subArrs.append(subArr)
#             lens = []
#             for arr in subArrs:
#                 lens.append(self.getMaxLen(arr, False))
#             if not lens: return 0
#             return max(lens)
#         if len(nums) == 1 and nums[0] < 0: return 0
#         i, j = 0, len(nums) - 1 # 4, 4
#         negs = set([])
#         while i < j:
#             l, r = nums[i], nums[j] # 2, -6
#             if l > 0 and r > 0:
#                 i += 1
#                 j -= 1
#             elif l < 0 and r < 0:
#                 negs.add(i)
#                 negs.add(j)
#                 i += 1
#                 j -= 1
#             elif l < 0:
#                 negs.add(i)
#                 j -= 1
#             else: # r < 0
#                 negs.add(j)
#                 i += 1
#         if i == j and nums[i] < 0: negs.add(i)
#         if i > j or len(negs) % 2 == 0: return len(nums)
#         else:
#             if len(negs) > 2:
#                 return max(len(nums[:(i + 1)]), len(nums[i:]))
#             else:
#                 return max(len(nums[:(i)]), len(nums[(i+1):]))                

        
#         # else: you return whichever half is longer if i/j is negative ??
        
        
# [9, 8, -2, 1, 4, 13, -5, 10, 4, -3,  9,  2, 13,  2]
# [0, 1,  2, 3, 4,  5,  6,  7, 8,  9, 10, 11, 12, 13]

