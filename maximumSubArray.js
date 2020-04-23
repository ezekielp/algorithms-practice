// https://leetcode.com/problems/maximum-subarray/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let i = 0;
    let j = nums.length;
    
    while (i < j) {
        // console.log(i)
        let currentSubArr = nums.slice(i, j);
        console.log(currentSubArr);
        if (sumArr(currentSubArr) > maxSum) {
            maxSum = sumArr(currentSubArr);
        }
        if (nums[i] < nums[j - 1]) {
            i++;
        } else {
            j--;
        }
    }
    
    return maxSum;
};

const sumArr = arr => arr.reduce((acc, el) => acc + el);

const maxSubArray2 = nums => {
    let maxSum = -Infinity;
    let runningSum = 0;

    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];
        if (runningSum > maxSum) {
            maxSum = runningSum;
        }
        if (runningSum < 0) {
            runningSum = 0;
        }
    }

    return maxSum;
}

console.log(maxSubArray2([1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4]));


