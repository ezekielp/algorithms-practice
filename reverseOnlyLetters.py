from collections import deque

class Solution:
    def reverseOnlyLetters(self, S: str) -> str:
        chars = []
        indices = deque()
        for i in range(len(S)):
            code = ord(S[i])
            if (code >= 65 and code <= 90) or (code >= 97 and code <= 122):
                chars.append(S[i])
            else:
                indices.append(i)
        
        result = ""
        for j in range(len(S)):
            if len(indices) > 0 and indices[0] == j:
                result += S[j]
                indices.popleft()
            else:
                result += chars.pop()
        return result