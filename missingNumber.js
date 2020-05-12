/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const dp = new Array(nums.length + 1);
    dp.fill(false);

    for (let i = 0; i < nums.length; i++) {
        dp[nums[i]] = true;
    }

    return dp.findIndex(el => el === false);
    
};

console.log(missingNumber([3,0,1]));