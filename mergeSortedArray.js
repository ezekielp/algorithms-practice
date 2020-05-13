/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const copyOfNums1 = nums1.slice(0, m);
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < m && j < n) {
        if (copyOfNums1[i] < nums2[j]) {
            nums1[k] = copyOfNums1[i];
            i++;
        } else {
            nums1[k] = nums2[j];
            j++;
        }
        k++;
    }

    while (k < nums1.length) {
        if (j === n) {
            nums1[k] = copyOfNums1[i];
            i++;
        } else {
            nums1[k] = nums2[j];
            j++;
        }
        k++;
    }
};

// [2, 3, 4]
// []
// [1, 1, 2] => k === 3
