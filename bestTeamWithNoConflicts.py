def bestTeamScore(self, scores: List[int], ages: List[int]) -> int:
    n = len(scores) # 4
    players = [[a, s] for a, s in zip(ages, scores)]
    players.sort(reverse = True)
    # [(10, 3), (9, 2), (8, 1), (1, 5)]
    
    ans = 0 # 5
    dp = [0]*n # [3, 5, 6, 5]
    
    for i in range(n): # 3
        score = players[i][1] # 5
        dp[i] = score
        for j in range(i): # 0
            if players[j][1] >= players[i][1]: # 1 >= 5
                dp[i] = max(dp[i], dp[j] + score) # dp[2] = max(4, 5 + 1)
        ans = max(ans, dp[i])
    
    return ans



class Solution:
    def bestTeamScore(self, scores: List[int], ages: List[int]) -> int:
      
        max_scores=[0]*(max(ages)+1)
        # [0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        
        # [(5, 1), (3, 10), (2, 9), (1, 8)]
        for score, age in sorted(zip(scores, ages)): max_scores[age] = score + max(max_scores[:age + 1])
            # 5 + 

        return max(max_scores)

    
    

class Solution:
    def __init__(self):
        self.allScores = []
    
    def bestTeamScore(self, scores: List[int], ages: List[int]) -> int:
        zippedScores = list(zip(ages, scores))
        sortedZippedScores = sorted(zippedScores, lambda s: (s[0], s[1]))
        self.dfs(sortedZippedScores)
        
    def dfs(self, scores): [(6, 4), (7, 5), (8, 9), (9, 2), (10, 3)]
        prev = None
        total = 0
        for i, s in enumerate(scores):
        # for s in scores:
            if not prev:
                total += s[1]
                prev = s
            else:
                if s[0] == prev[0]:
                    if s[1] > prev[1]:
                        self.allScores.append(total + self.dfs(scores))
                else:
                    
        
        
        
# [5, 5, 4, 6, 2, 10, 5, 14]
# [1, 1, 2, 2, 3,  3, 4,  4]

# [10, 16, ]

# [5, 5, 6, 10, 14]
# [4, 10, 5, 14]
# [2, 10, 5, 14]


# [6, 7, 8, 9, 10]
# [4, 5, 1, 2, 3]

# [1, 1, 2, 2, 2, 2]
# [4, 5, 5, 5, 5, 5]
