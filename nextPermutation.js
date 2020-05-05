// https://leetcode.com/problems/next-permutation/

var nextPermutation = function(nums) {

    let i = nums.length - 1;
    while (i > 0) {
        if (nums[i] <= nums[i - 1]) {
            i--;
        } else {
            break;
        }
    }

    if (i === 0) {
        nums.reverse();
        console.log(nums);
        return;
    } 
    
    let idxToSwitchOut = i - 1;
    let numToSwitchOut = nums[idxToSwitchOut];
    let idxToSwitchIn = null;
    nums.slice(idxToSwitchOut + 1).forEach((el, idx) => {
        if (el > numToSwitchOut) {
            if (idxToSwitchIn === null) {
                idxToSwitchIn = idx + idxToSwitchOut + 1;
            } else {
                if (el < nums[idxToSwitchIn]) {
                    idxToSwitchIn = idx + idxToSwitchOut + 1;
                }
            }
        }
    });

    nums[idxToSwitchOut] = nums[idxToSwitchIn];
    nums[idxToSwitchIn] = numToSwitchOut;

    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let j = idxToSwitchOut + 1; j < nums.length - 1; j++) {
            console.log("hello");
            if (nums[j] > nums[j + 1]) {
                sorted = false;
                let biggerNum = nums[j];
                let smallerNum = nums[j + 1];
                nums[j] = smallerNum;
                nums[j + 1] = biggerNum;
            }
        }
    }
    console.log(nums);
}

const example1 = [4,7,6,2,1];
const example2 = [3,2,1];
const example3 = [1,1];
const example4 = [1,3,2];

// nextPermutation(example1);
// nextPermutation(example2);
// nextPermutation(example3);
nextPermutation(example4);

