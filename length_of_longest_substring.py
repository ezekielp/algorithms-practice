class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        max_len = 0 # 0
        i, j = 0, 1 # 1, 5
        indices = {} # {'d': 2, 'v': 1, 'f': 3 }
        while j <= len(s): # 4 <= 4
            if s[j - 1] not in indices: # True
                indices[s[j - 1]] = j - 1
            else:
                curr_len = j - i - 1
                max_len = curr_len if curr_len > max_len else max_len
                indices[s[j - 1]] = j - 1
                i += 1
            j += 1
        if s[i] != s[j - 2]:
            curr_len = j - i - 1
            max_len = curr_len if curr_len > max_len else max_len
        return max_len
        
        
        
        
        # max_len = 0
        # i = 0
        # while i < len(s):
        #     seen = set([])
        #     indices = {}
        #     curr_len = 1
        #     seen.add(s[i])
        #     indices[s[i]] = i
        #     i += 1
        #     while i < len(s) and s[i] not in seen:
        #         curr_len += 1
        #         seen.add(s[i])
        #         indices[s[i]] = i
        #         i += 1
        #     max_len = curr_len if curr_len > max_len else max_len
        #     if i < len(s):
        #         i = indices[s[i]] + 1
        # return max_len