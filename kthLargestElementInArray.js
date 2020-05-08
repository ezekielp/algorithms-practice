/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Input: [6, 2, 1, 3, 5, 4, 7, 8] and k = 4
// Output: 5
// pivot = 6
// LS = [2, 1, 3, 4, 5]
// RS = [7, 8]

var findKthLargest = function(nums, k) {

    let leftSide = [];
    let rightSide = [];
    let pivot;

    while (leftSide.length <= Math.floor(nums.length / 4) || rightSide.length <= Math.floor(nums.length / 4)) {
        const pivotIdx = getRandomInt(nums.length);
        pivot = nums[pivotIdx];
        leftSide = [];
        rightSide = [];

        for (let i = 0; i < nums.length; i++) {
            if (i !== pivotIdx) {
                if (nums[i] <= pivot) {
                    leftSide.push(nums[i]);
                } else {
                    rightSide.push(nums[i]);
                }
            }
        }

        if (rightSide.length === k - 1) return pivot;

    }

    if (rightSide.length >= k) return findKthLargest(rightSide, k);

    return findKthLargest(leftSide, k - rightSide.length - 1);
    
};

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const exampleNums1 = [3, 2, 1, 5, 6, 4];
const exampleK1 = 2;
const exampleNums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const exampleK2 = 4;

console.log(findKthLargest(exampleNums1, exampleK1));
console.log(findKthLargest(exampleNums2, exampleK2));





    // nums.slice(1).forEach(num => {
    //     if (num <= pivot) {
    //         leftSide.push(num);
    //     } else {
    //         rightSide.push(num);
    //     }
    // });














// // k = 2
// // order = idx4 in array (array.length - k)
// // pivot = 3

// // leftSide = [2, 1]
// // rightSide = [5, 6, 4]

// var findKthLargest = function(nums, k) {
//     if (k === nums.length) return nums[0];
    
//     let pivot = nums[0];
//     let leftSide = [];
//     let rightSide = [];
    
//     for (let i = 1; i < nums.length; i++) {
//         let currentVal = nums[i];
//         if (currentVal < pivot) {
//             leftSide.push(currentVal);
//         } else {
//             rightSide.push(currentVal);
//         }
//     }
    
//     let targetIdx = nums.length - k;
    
//     if (targetIdx === leftSide.length)
    
// };