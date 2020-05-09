/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Output: [0, 0, 1, 1, 2, 2]

var sortColors = function(nums) {

    let i = 0;
    let numOfTwos = 0;

    while (i < nums.length - numOfTwos) {
        let currentNum = nums[i];

        if (currentNum === 0 && i > 0) {
            if (i === nums.length - 1) {
                nums.unshift(nums.pop());
            } else {
                nums = [0].concat(nums.slice(0, i)).concat(nums.slice(i + 1));
            }
        } else if (currentNum === 2 && i < nums.length - 1) {
            if (i === 0) {
                nums.push(nums.shift());
            } else {
                nums = nums.slice(0, i).concat(nums.slice(i + 1)).concat([2]);
            }
            numOfTwos++;
        } else {
            i++;
        }
    }

    // console.log(nums);
    return nums;
    
};

const arr = [2, 0, 2, 1, 1, 0];

console.log(sortColors(arr));

// red = 2
// white = 4
// blue = 3

// [0, 0, 1, 1, 2, 2];

// def sortColors(self, nums):
// red, white, blue = 0, 0, len(nums) - 1

// while white <= blue:
//     if nums[white] == 0:
//         nums[red], nums[white] = nums[white], nums[red]
// white += 1
// red += 1
// elif nums[white] == 1:
// white += 1
//         else:
// nums[white], nums[blue] = nums[blue], nums[white]
// blue -= 1




// let i = 0;

// while (i < nums.length) {
//     let currentNum = nums[i];
//     console.log(i);
//     if (i === nums.length - 1 && nums[i] === 2) {
//         return;
//     };

//     if (currentNum === 0 && i > 0) {
//         if (i === nums.length - 1) {
//             nums.unshift(nums.pop());
//         } else {
//             nums = [0].concat(nums.slice(0, i)).concat(nums.slice(i + 1));
//         }
//     } else if (currentNum === 2 && i < nums.length - 1) {
//         if (i === 0) {
//             nums.push(nums.shift());
//         } else {
//             nums = nums.slice(0, i).concat(nums.slice(i + 1)).concat([2]);
//         }
//     } else {
//         i++;
//     }
// }