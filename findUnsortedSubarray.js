// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */

//  Input: [2, 6, 4, 8, 10, 9, 15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

var findUnsortedSubarray = function(nums) {
    
    let unsortedStartingIdx = 0;
    
    while (nums[unsortedStartingIdx] <= nums[unsortedStartingIdx + 1]) {
        unsortedStartingIdx++;
    }

    if (unsortedStartingIdx === nums.length - 1) return 0;
    
    let highestNumInUnsortedWindow = nums[unsortedStartingIdx];
    let endingUnsortedWindowIdx = unsortedStartingIdx + 1;
    let i = unsortedStartingIdx;

    while (i < nums.length - 1) {
        if (nums[i] > nums[i + 1]) {
            highestNumInUnsortedWindow = nums[i];
            let j = i - 1;
            if (nums[j] === nums[i]) {
                while (nums[j] === nums[i]) {
                    j--;
                }
                if (j + 1 < unsortedStartingIdx) {
                    unsortedStartingIdx = j + 1;
                }
            }
            while (nums[i + 1] !== undefined && nums[i + 1] < highestNumInUnsortedWindow) {
                i++;
            }
            endingUnsortedWindowIdx = i;
        } else {
            i++;
        }
    }    

    return endingUnsortedWindowIdx - unsortedStartingIdx + 1;

};

const example1 = [2, 6, 4, 8, 10, 9, 15]; // 5
const example2 = [2, 2, 2, 2]; // 0
const example3 = [9, 8, 7, 6, 5, 4, 3]; // 7
const example4 = [1, 2, 3, 4]; // 0
const example5 = [2, 1]; // 2
const example6 = [1, 3, 2, 2, 2]; // 4
const example7 = [1, 3, 2, 3, 3]; // 2
const example8 = [2, 3, 3, 2, 4]; // 3
const example9 = [1, 2, 4, 5, 3]; // 3

// console.log(findUnsortedSubarray(example1));
// console.log(findUnsortedSubarray(example2));
// console.log(findUnsortedSubarray(example3));
// console.log(findUnsortedSubarray(example4));
// console.log(findUnsortedSubarray(example5));
// console.log(findUnsortedSubarray(example6));
// console.log(findUnsortedSubarray(example7));
// console.log(findUnsortedSubarray(example8));
console.log(findUnsortedSubarray(example9));

// Track whether nums[i + 1] is A) bigger than nums[i]
// (in which case it need to be included in window)
// and B) whether it's bigger than the highest number in the unsorted window
// (in which case it doesn't need to be included in the window)

// Multiple unsorted windows mean they need to be consolidated and be
// a single window, right? 
