    def combinationSum4(self, nums, target):
        nums, combs = sorted(nums), [1] + [0] * (target)
        # nums = [1, 2, 3]
        # combs = [1, 1, 2, 4, 0]
        for i in range(target + 1): # 3
            for num in nums: # 2
                if num  > i: break
                combs[i] += combs[i - num]
        return combs[target]



from collections import defaultdict

class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
        combos = [[] for _ in range(target + 1)]
        for num in nums: # 
            if num <= target:
                combos[num].append([num])
            i = 1 # 
            while i + num <= target: #
                currCombos = combos[i] #
                for combo in currCombos: #
                    combos[i + num].append(combo + [num])
                i += 1
        
        result = 0
        for combo in combos[target]: # [1, 1, 1, 1]
            counts = defaultdict(int) # { 1: 4 }
            for num in combo:
                counts[num] += 1
            denominator = 1
            for key in counts:
                denomMultiplicant = 1
                for n in range(counts[key]):
                    denomMultiplicant *= (n + 1)
                denominator *= denomMultiplicant
            numerator = 1
            for n in range(len(combo)):
                numerator *= (n + 1)
            result += (numerator // denominator)
        return result