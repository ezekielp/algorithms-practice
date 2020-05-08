/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: [2, 3, -2, 4]
// Output: 6
// Explanation: [2, 3] has the largest product 6.

var maxProduct = function(nums) {

    let i = 0;
    let j = 0;
    let largestProduct = getProduct(nums); // 6
    let foundOneNegative = false;

    while (j <= nums.length) { // 2
        if (nums[j] === 0) {
            j++;
            i = j;
        } else if (nums[j] < 0) {
            if (foundOneNegative) {
                foundOneNegative = false;
                j++;
                i = Math.max(0, i - 1);
            } else {
                foundOneNegative = true;
                j++;
                i = j;
            }
        } else {
            j++;
        }
        console.log(nums.slice(i, j));
        if (i !== j) {
            const currentProduct = getProduct(nums.slice(i, j)); // -2
            if (currentProduct > largestProduct) largestProduct = currentProduct;
        }
    }


    return largestProduct;
};

const getProduct = nums => nums.reduce((acc, val) => acc * val);

const exampleNums1 = [2, 3, -2, 4];
const exampleNums2 = [-2, 0, -1];
const exampleNums3 = [2, -3, 6, 2, 4, 7, -3, 1, 7, 2, -10];
const exampleNums4 = [-4, -3];
const exampleNums5 = [0, 2];
const exampleNums6 = [3, -1, 4];

// use an array to hold any negative numbers found in window
// if there's an even number of them at any given time, include them in the product
// also partition at zero


console.log(maxProduct(exampleNums1));
console.log(maxProduct(exampleNums2));
console.log(maxProduct(exampleNums4));
console.log(maxProduct(exampleNums5));
console.log(maxProduct(exampleNums6));



// let i = 0;
// let j = nums.length - 1;
// let largestProduct = getProduct(nums);

// while (i <= j) {
//     let currentProduct = getProduct(nums.slice(i, j + 1));
//     if (currentProduct > largestProduct) largestProduct = currentProduct;

//     if (nums[i] < nums[j]) {
//         i++;
//     } else {
//         j--;
//     }
// }

// return largestProduct;



// while (i < nums.length && j < nums.length) {
//     let currentNums;

//     if (nums[j] < 0) {
//         negativeNums.push(nums[j]);
//         j++;
//         i = j;
//         currentNums = nums.slice(i, j);
//         if (negativeNums.length % 2 === 0) {
//             negativeNums.forEach(num => {
//                 currentNums.push(num);
//             })
//         }
//     } else if (nums[j] === 0) {
//         j++;
//         i = j;
//         currentNums = [0];
//     } else {
//         j++;
//         currentNums = nums.slice(i, j);
//     }

//     currentProduct = getProduct(currentNums);

// }