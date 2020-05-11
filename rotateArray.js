/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const numRotations = k % nums.length;

    for (let i = 0; i < numRotations; i++) {
        nums.unshift(nums.pop());
    }

    console.log(nums);
    // const sliceIdx = nums.length - (k % nums.length);
    // nums = nums.slice(sliceIdx).concat(nums.slice(0, sliceIdx));
    // console.log(nums);
};

console.log(rotate([1,2,3,4,5,6,7], 3));
