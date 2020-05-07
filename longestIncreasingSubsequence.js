/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function(nums) {
    if (!nums.length) return 0;

    let dp = new Array(nums.length);
    dp.fill(1);

    for (let i = 0; i < nums.length; i++) {

        let currentMax = dp[i];
        for (let j = i - 1; j >= 0; j--) {
            if (nums[j] < nums[i]) {
                if (dp[j] + dp[i] > currentMax) {
                    currentMax = dp[j] + dp[i];
                }
            }
        }
        dp[i] = currentMax;
    }
    
    return (Math.max(...dp));
             
};

//     let longestLength = 0;
    
//     for (let i = 0; i < nums.length; i++) {
//         let startingNum = nums[i];
//         let currentNum = startingNum;
//         let currentLength = 1;

//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] > currentNum) {
//                 currentLength++;
//                 currentNum = nums[j];
//             }
//         }
        
//         if (currentLength > longestLength) longestLength = currentLength;
//     }
    
//     return longestLength;