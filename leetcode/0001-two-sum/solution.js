/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indices=[];
    let j=1;
    let i=0;
    while(i<nums.length-1)
    {
        while(j<nums.length)
        {
            if(nums[i]+nums[j]==target)
            {
                indices.push(i);
                indices.push(j);
            }
             j++;
        }
       i++;
       j=i+1; 
    }
    
      return indices
};
