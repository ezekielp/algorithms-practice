// https://leetcode.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function (s, nums) {
    let smallestIntervalLen = Infinity;
    // let smallestInterval = null;

	let i = 0;
	let j = 1;

	while (j <= nums.length && i <= j) {
		let currentSubArr = nums.slice(i, j);
		let currentSubArrSum = sumOfArray(currentSubArr);
		let currentIntervalSize = j - i;
		if (currentSubArrSum >= s && currentIntervalSize < smallestIntervalLen) {
            smallestIntervalLen = currentIntervalSize;
            // smallestInterval = currentSubArr;
            // console.log(smallestInterval);
        }
        
        if (i === j || currentSubArrSum < s) {
			j++;
		} else {
            i++;
        }
    }
    
    smallestIntervalLen = smallestIntervalLen === Infinity ? 0 : smallestIntervalLen;
    return smallestIntervalLen;
};

const sumOfArray = arr => {
    if (arr.length === 0) return 0;
    return arr.reduce((acc, val) => acc + val);
};

const exampleArr1 = [2, 3, 1, 2, 4, 3];
const exampleSum1 = 7;

console.log(minSubArrayLen(exampleSum1, exampleArr1));