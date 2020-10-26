class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set([])
        for val in nums:
            if val in seen:
                return True
            else:
                seen.add(val)
        
        return False