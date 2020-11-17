class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        # [4, 3, 2, 4, 8, 2, 3, 1]
        for i in range(len(nums)): # 0
            num = nums[i] # 7
            idx = num - 1 # 
            while nums[idx] != idx + 1: # 3 != 7
                old_idx = idx # 6
                idx = nums[num - 1] - 1 # 2
                nums[old_idx] = num # idx3 -> 4
                num = idx + 1 # 7
        for i in range(len(nums)):
            if nums[i] == i + 1:
                nums[i] = None
            else:
                nums[i] = i + 1
        return [num for num in nums if num is not None]
            
        
        
        
        
        
        # seen = set([])
        # for num in nums:
        #     seen.add(num)
        # result = []
        # for i in range(len(nums)):
        #     if i + 1 not in seen:
        #         result.append(i + 1)
        # return result