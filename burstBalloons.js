// https://leetcode.com/problems/burst-balloons/

/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: [3, 1, 5, 8]
// Output: 167
// Explanation: nums = [3, 1, 5, 8]-- > [3, 5, 8]-- > [3, 8]-- > [8]-- > []
// coins = 3 * 1 * 5 + 3 * 5 * 8 + 1 * 3 * 8 + 1 * 8 * 1   = 167

var maxCoins = function(nums) {
    
    let maxSum = 0;
    
    const burstBalloons = (nums, currentSum = 0) => {
        if (nums.length === 1) {
            let totalSum = nums[0] + currentSum;
            if (totalSum > maxSum) maxSum = totalSum;
            return;
        };
        
        for (let i = 0; i < nums.length; i++) {
            let prev = nums[i - 1] === undefined ? 1 : nums[i - 1];
            let current = nums[i];
            let next = nums[i + 1] === undefined ? 1 : nums[i + 1];
            let product = prev * current * next;
            
            let nextNums = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
            burstBalloons(nextNums, currentSum + product);
        }
    }
    
    burstBalloons(nums);
    return maxSum;
    
};

console.log(maxCoins([3, 1, 5, 8]));