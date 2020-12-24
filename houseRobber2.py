class Solution:
    def rob(self, nums: List[int]) -> int:
        # [1, 3, 2, 5, 1,  2,  7,  5,  3,  4,  9,  3]
        # [1, 3, 100, 5, 1,    2,  7,  5,  3,  4,  9,  100]
        # [99, 98, 100, 5, 1,    2,  7,  5,  3,  4,  9,  100]
        # [1, 3, 101, 8, 102,  0,  0,  0,  0,  0,  0,  0]
        # [T, F,   T, F,   T,  F,  F,  F,  F,  F,  F,  F]
        dp = [0] * len(nums)
        # [1, 3, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0]
        dp2 = [False] * len(nums)
        # [T, F, F, F, F,  F,  F,  F,  F,  F,  F,  F]
        maxTwoAway = (0, 0) # val, idx # (1, T)
        maxOneAway = (0, 0) # val, idx # (3, F)
        for i, n in enumerate(nums): # 0, 1
            if i == 0:
                dp[0] = n
                dp2[0] = True
                maxTwoAway = (n, True)
            elif i == 1:
                dp[1] = n
                maxOneAway = (n, False)
            elif i == len(nums) - 1:
                if maxTwoAway[1]:
                    allowedMax = 0
                    for j in range(i):
                        if not dp2[j] and dp[j] > allowedMax:
                            allowedMax = dp[j]
                    dp[i] = n + allowedMax
                else:
                    dp[i] = n + maxTwoAway[0]
            else:
                dp[i] = n + maxTwoAway[0]
                dp2[i] = maxTwoAway[1]
                temp = maxTwoAway
                if maxOneAway[0] > maxOneAway[1]:
                    maxTwoAway = maxOneAway
                maxOneAway = (dp[i], dp2[i])
        return max(dp)
                
        
        
        
        
# [2, 3, 2]

# [1, 2, 4, 3]
        
    
# [1, 3, 2, 5, 1,  2,  7,  5,  3,  4,  9,  3]
# [1, 3, 3, 8, 4, 10, 15, 15, 18, 19, 27, 22]
# 9 + 3 + 7 + 5 + 3 == 27

    