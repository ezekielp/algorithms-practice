from collections import deque

class Solution:
    def minInsertions(self, s: str) -> int:
        stack = deque() # []
        # 'O' -> '(', ')'
        # 'W' -> ')', ')'
        # ')'
        # '('
        for p in s:
            if len(stack) == 0:
                stack.append(p)
            else:
                if p == ')':
                    if stack[-1] == 'O':
                        stack.pop()
                    elif stack[-1] == 'W':
                        stack.append(p)
                    elif stack[-1] == ')':
                        stack.pop()
                        stack.append('W')
                    elif stack[-1] == '(':
                        stack.pop()
                        stack.append('O')
                else: # p == '('
                    stack.append(p)
        count = 0
        for c in stack:
            if c == 'O' or c == 'W':
                count += 1
            else: # c == ')' or c == '('
                count += 2
        
        return count
        
        
        
        
        