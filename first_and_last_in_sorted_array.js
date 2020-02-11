// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/


/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [5, 7, 7, 8, 8, 10];
let target = 8;

const searchRange = (nums, target) => {
    let startNumRange = [0, nums.length - 1];
    let startNumFound = false;
    let startIdx = Math.floor(nums.length / 2);

    while (!startNumFound && startNumRange.length > 0) {
        let currentStartIdx = startNumRange[0];
        let currentEndIdx = startNumRange[1];
        let currentRange = nums.slice(currentStartIdx, currentEndIdx);

        let numToCheck = currentRange[startIdx];
        if (numToCheck === target) {
            startNumFound = true;
        } else if (numToCheck < target) {
            startNumRange[1] = Math.floor()
        } else {
            startNumRange[0] = Math.floor()
        }
    }


 

};



