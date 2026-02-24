class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        if len(nums) == 0:
            return -1
        right = len(nums) - 1
        left = 0
        while left <= right:
            med_index = (left+right)//2
            if nums[med_index] == target:
                return med_index
            elif nums[med_index] > target:
                right = med_index - 1
            else:
                left = med_index + 1 
        return - 1              

        
