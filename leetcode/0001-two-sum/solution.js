/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
      const prev_map = new Map();
      for (let index = 0 ; index < nums.length ; index++ ) {
           const diff = target - nums[index] ;
           if (prev_map.has(diff)) {
               return [prev_map.get(diff),index];
           }
           prev_map.set(nums[index],index);
      };
      return [];
};
