/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left=0;
    let right=nums.length-1;
    while(left<=right) {
        let midium=Math.floor((left+right)/2);
        if(nums[midium]===target) {
            return midium;
        } else if(nums[midium]<target) {
            left=midium+1;
        } else {
            right=midium-1;
        }
    }
    return left;
};
