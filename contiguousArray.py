from collections import defaultdict

class Solution:
    def findMaxLength(self, nums: List[int], counts = None) -> int:
        if not counts:
            counts = defaultdict(int)
            for n in nums:
                counts[n] += 1

        if counts[0] == 0 or counts[1] == 0: return 0

        # l = len(nums)
        print(counts)
        i, j = 0, len(nums) - 1
        while i < j:
            if counts[0] == counts[1]: return len(nums[i:(j+1)])
            if nums[i] != nums[j]:
                if counts[0] > counts[1]:
                    if nums[i] == 0: i += 1
                    else: j -= 1
                    counts[0] -= 1
                elif counts[0] < counts[1]:
                    if nums[i] == 1: i += 1
                    else: j -= 1
                    counts[1] -= 1
            else:
                counts[nums[i]] -= 1
                return max(self.findMaxLength(nums[(i + 1):(j + 1)], counts), self.findMaxLength(nums[i:j], counts))
            # l -= 1