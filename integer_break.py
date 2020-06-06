"""
Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

Example 1:

Input: 2
Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.
Example 2:

Input: 10
Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
Note: You may assume that n is not less than 2 and not larger than 58.
"""

# 23
# 5 * 5 * 5 * 5 * 3 = 1875
# 4 * 4 * 4 * 4 * 4 * 3 = 3072
# 6 * 6 * 6 * 5 = 1080

# import math

# You never need a factor greater than or equal to 4.
# Explain: If an optimal product contains a factor f >= 4, then you can replace it with factors 2 and f-2 without losing optimality, as 2*(f-2) = 2f-4 >= f.

# class Solution(object):
#   def integerBreak(self, n):
#     """
#     :type n: int
#     :rtype: int
#     """
#     square_root = math.sqrt(n)
#     rounded_sqrt = math.floor(square_root)
#     diff = n - (rounded_sqrt ** 2)

#     count = 0
#     sum_so_far = 0
#     nums = []
#     while sum_so_far < n - diff:
#       count += 1
#       sum_so_far += rounded_sqrt
#       nums.append(rounded_sqrt)

#     nums.append(diff)
#     return nums.reduce()


# variable = math.sqrt(10)
# print(math.floor(variable))
