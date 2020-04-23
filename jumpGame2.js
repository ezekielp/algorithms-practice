// https://leetcode.com/problems/jump-game-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: [2, 3, 1, 1, 4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2.
// Jump 1 step from index 0 to 1, then 3 steps to the last index.

var jump = function(nums) {

    if (nums.length < 2) return 0;

    let numJumps = 0;
    let i = 0;

    while (i < nums.length) {
        numJumps++;

        if (i + nums[i] >= nums.length - 1) return numJumps;

        let newInterval = nums.slice(i + 1, i + nums[i] + 1);
        
        let mappedInterval = newInterval.map((val, idx) => {
            return [val + idx + i + 1, idx + i + 1];            
        });

        let nextHighestVal = 0;
        let nextSpot;

        mappedInterval.forEach(interval => {
            if (interval[0] > nextHighestVal) {
                nextHighestVal = interval[0];
                nextSpot = interval;
            }
        });

        i = nextSpot[1];
    }

    return numJumps;
};

const example1 = [2, 3, 1, 1, 4];
const example2 = [1, 2, 1, 1, 1];

console.log(jump(example1));
console.log(jump(example2));


// [1, 2, 3].reduce((acc, val) => {
//     console.log(acc);
//     if (val > acc) {
//         return val;
//     } else {
//         return acc;
//     }
// }, 0);


// var jump = function(nums) {
//     let dp = new Array(nums.length);
//     dp.fill(0);
    
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = nums[i]; j > 0; j--) {
//             dp[i + j] = dp[i] + 1;
//             if (dp[nums.length - 1] > 0) {
//                 return dp[nums.length - 1];
//             }
//         }
//     }
    
//     return dp[nums.length - 1]
// };




