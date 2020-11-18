class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): return False
        countS = {}
        countT = {}
        for i in range(len(s)):
            countS[s[i]] = 1 if s[i] not in countS else countS[s[i]] + 1
            countT[t[i]] = 1 if t[i] not in countT else countT[t[i]] + 1
        for char in countS:
            if char not in countT or countT[char] != countS[char]:
                return False
        return True            
            