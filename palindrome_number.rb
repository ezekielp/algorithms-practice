# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
    return true if x == 0
    return false if x < 0 || x % 10 == 0
    
    x_copy = x
    digits = [] # [4, 8, 5, 8, 4]
    multiplicants = [] # [1, 10, 100, 1000, 10000]
    
    divisor = 1
    while (x_copy / divisor) > 0
        divisor *= 10
    end
    divisor /= 10
    
    while x_copy > 0
        multiplicants.unshift(divisor)
        new_digit = x_copy / divisor
        digits << new_digit
        
        x_copy -= (new_digit * divisor)
        divisor /= 10
    end
    
    new_x_copy = x
    multiplicants.each_with_index do |m, i|
        new_x_copy -= (digits[i] * m)
    end
    
    new_x_copy == 0
    
end
