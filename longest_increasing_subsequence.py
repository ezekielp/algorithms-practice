from bisect import bisect_left

class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        sequence = [] # [3, 8, 9]
        for num in nums:
            if len(sequence) == 0 or sequence[-1] < num:
                sequence.append(num)
            elif sequence[-1] > num:
                i = bisect_left(sequence, num) # 0
                if len(sequence) == 1:
                    sequence[i] = num
                elif i > 0 or i < len(sequence) - 1 and sequence[i + 1] != num:
                    sequence[i] = num
        return len(sequence)