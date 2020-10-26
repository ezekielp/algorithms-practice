class Solution:
    def firstUniqChar(self, s: str) -> int:
        charCounts = {}
        
        for i in range(len(s)):
            currChar = s[i]
            if currChar in charCounts:
                charCounts[currChar] += 1
            else:
                charCounts[currChar] = 1
        
        for i in range(len(s)):
            currChar = s[i]
            if charCounts[currChar] == 1:
                return i
        
        return -1