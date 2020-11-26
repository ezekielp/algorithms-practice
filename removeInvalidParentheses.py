from collections import deque

class Solution:
    def removeInvalidParentheses(self, s: str) -> List[str]:
        forwards = []
        backwards = []
        stack = deque([])
        
        for i in range(len(s)):
            char = s[i]
            pair = [char, i]
            if char == '(':
                forwards.append(i)
                stack.append(pair)
            elif char == ')':
                backwards.append(i)
                if len(stack) == 0 or stack[-1][0] == ')':
                    stack.append(pair)
                else:
                    stack.pop()
                        
        results = set([s])
        while len(stack) > 0:
            if stack[0][0] == '(':
                result = ""
                while len(stack) > 0:
                    for i in range(len(s)):
                        if stack[0][1] == i:
                            stack.popleft()
                        else:
                            result += s[i]
                return [result]
            
            prelim_res = list(results)
            new_res = []
            pair = stack.popleft()
    
    def replaceParens(self, results, stack):
        if len(stack) == 0: return results
        if stack[0][0] == '(':
            
    
            
        
        
        
        
        
        # (()())))
        # (()()))
        # ((())))
        # (()()))
        # (()())
        # ((()))
        
        
        
        
        