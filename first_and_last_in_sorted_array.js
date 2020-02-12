// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/


/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [5, 7, 7, 8, 8, 10];
let target = 8;

const searchRange = (nums, target) => {
    let midIdx = binarySearch(nums, target);
    if (midIdx === false) return [-1 ,-1];

    let leftSideRange = nums.slice(0, midIdx);
    let leftMost = binarySearch(leftSideRange, target);

    while (leftMost !== false) {
        if (nums[0] === target) {
            leftMost = 0;
            break;
        }
        leftSideRange = leftSideRange.slice(0, leftMost);
        leftMost = binarySearch(leftSideRange, target);
    }

    let rightSideRange = nums.slice(midIdx + 1);
    let rightMost = binarySearch(rightSideRange, target, midIdx);

    while (rightMost !== false) {
        if (nums[nums.length - 1] === target) {
            rightMost = nums.length - 1;
            break;
        }
        rightSideRange = rightSideRange.slice(rightMost + 1);
        rightMost = binarySearch(rightSideRange, target, rightMost);
    }


    
    // let currentStartIdx = startNumRange[0];
    // let currentEndIdx = startNumRange[1];
    // let currentRange = nums.slice(currentStartIdx, currentEndIdx);

    // while (!startNumFound && currentRange.length > 0) {
    //     let numToCheck = currentRange[midIdx];
    //     if (numToCheck === target) {
    //         startNumFound = true;
    //     } else if (numToCheck < target) {
    //         startNumRange[1] = Math.floor((currentEndIdx - currentStartIdx) / 2);
    //     } else {
    //         startNumRange[0] = Math.floor((currentEndIdx - currentStartIdx) / 2);
    //     }
    // }

    // I think you basically should create a helper function that performs the
    // binary search, and I think you need to run it three times — first to get 
    // the "midIdx", then the startIdx, and finally the endIdx

};


const binarySearch = (range, target, idxOffset = 0) => {
    if (range.length === 0) return false;
    // let numFound = false;
    let pivotIdx = Math.floor(range.length / 2);
    let numToCheck = range[pivotIdx];
    let newRange;
    // let currentStartIdx = startNumRange[0];
    // let currentEndIdx = startNumRange[1];
    // let currentRange = nums.slice(currentStartIdx, currentEndIdx);

    if (numToCheck === target) {
        return pivotIdx + idxOffset;
    } else if (target < numToCheck) {
        newRange = range.slice(0, pivotIdx);
        return binarySearch(newRange, target);
    } else {
        newRange = range.slice(pivotIdx + 1);
        return binarySearch(newRange, target, pivotIdx);
    }

    // while (!numFound && range.length > 0) {




        // let numToCheck = currentRange[midIdx];
        // if (numToCheck === target) {
        //     startNumFound = true;
        // } else if (numToCheck < target) {
        //     startNumRange[1] = Math.floor((currentEndIdx - currentStartIdx) / 2);
        // } else {
        //     startNumRange[0] = Math.floor((currentEndIdx - currentStartIdx) / 2);
        // }
    // }
}

