class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0 or (x % 10 == 0 and x != 0):
            return False
        
        digits = []
        dummy_x = x
        while dummy_x > 0:
            digit = 0
            while dummy_x % 10 != 0:
                dummy_x -= 1
                digit += 1
            digits.append(digit)
            dummy_x /= 10
        
        dummy_x_2 = x
        multiplier = 1
        for digit in digits[::-1]:
            dummy_x_2 -= (digit * multiplier)
            multiplier *= 10
        
        return dummy_x_2 == 0
        
        
        
        
        # return str(x) == str(x)[::-1]