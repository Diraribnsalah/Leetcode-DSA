/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
     let left = 0;
     let right = nums.length - 1;
     while (left < right) {
           let midIndex = Math.floor((left + right)/2);
           if (nums[midIndex] < nums[midIndex +1]) {
               left = midIndex + 1;
           }
           else {
             right = midIndex;
           } 
     }
     return left;
};
