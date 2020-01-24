// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {

    if (idx > array.length - 1) return true;

    let leftVal = array[idx * 2];
    let rightVal = array[(idx * 2) + 1];

    if (leftVal === undefined) leftVal = -Infinity;
    if (rightVal === undefined) rightVal = -Infinity;

    if (array[idx] < leftVal || array[idx] < rightVal) {
        return false;
    }

    return isMaxHeap(array, idx + 1);
}


module.exports = {
    isMaxHeap
};