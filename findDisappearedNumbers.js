// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// Input: [-4, -3, -2, -7, 8, 2, -3, -1];

// Output: [5, 6];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    
    let numStillNotInPlace = true;
    // let i = 0;
    let currentNum = nums[0];
    let nextNum = currentNum;

    while (numStillNotInPlace) {
        numStillNotInPlace = false;
        currentNum = nextNum; // 3
        if (currentNum !== nums[currentNum - 1]) {
            numStillNotInPlace = true;
            // i = currentNum - 1; // 3
            nextNum = nums[currentNum - 1] // 3
            nums[currentNum - 1] = currentNum; // [0, 3, 2, 4, 8, 2, 7, 1]
            nums[currentNum] = 0;
        };
    }
    
    
};