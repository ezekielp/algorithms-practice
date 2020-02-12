// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/


/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [0, 0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6];
let target = 4;

const searchRange = (nums, target) => {
    let midIdx = binarySearch(nums, target);
    if (midIdx === false) return [-1 ,-1];
    console.log(`midIdx: ${midIdx}`);

    let leftSideRange = nums.slice(0, midIdx);
    let leftMost = binarySearch(leftSideRange, target);
    let newLeftMost;
    if (nums[0] === target) {
        leftMost = 0;
        newLeftMost = false;
    }

    while (newLeftMost !== false) {
        leftSideRange = leftSideRange.slice(0, leftMost);
        newLeftMost = binarySearch(leftSideRange, target);
        if (newLeftMost) {
            leftMost = newLeftMost;
        }
    }
    console.log(`leftMost: ${leftMost}`);
    
    let rightSideRange = nums.slice(midIdx + 1);
    let rightMost = binarySearch(rightSideRange, target, midIdx + 1);
    let newRightMost;
    if (nums[nums.length - 1] === target) {
        rightMost = nums.length - 1;
        newRightMost = false;
    }
    
    while (newRightMost !== false) {
        rightSideRange = rightSideRange.slice(rightMost + 1);
        newRightMost = binarySearch(rightSideRange, target, rightMost + 1);
        if (newRightMost) {
            rightMost = newRightMost;
        }
    }
    console.log(`rightMost: ${rightMost}`);
    
    if (leftMost === false) {
        leftMost = midIdx;
    }
    
    if (rightMost === false) {
        rightMost = midIdx;
    }

    return [leftMost, rightMost];
    
    // I think you basically should create a helper function that performs the
    // binary search, and I think you need to run it three times — first to get 
    // the "midIdx", then the startIdx, and finally the endIdx

};

const binarySearch = (range, target, idxOffset = 0) => {
    if (range.length === 0) return false;
    let pivotIdx = Math.floor(range.length / 2);
    let numToCheck = range[pivotIdx];
    let newRange;

    if (numToCheck === target) {
        return pivotIdx + idxOffset;
    } else if (target < numToCheck) {
        newRange = range.slice(0, pivotIdx);
        return binarySearch(newRange, target, idxOffset);
    } else {
        newRange = range.slice(pivotIdx + 1);
        return binarySearch(newRange, target, idxOffset + pivotIdx + 1);
    }

}

console.log(searchRange(nums, target));