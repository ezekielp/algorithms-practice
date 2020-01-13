function merge(array1, array2) {

    let sorted = [];

    // while (array1[0] !== undefined || array2[0] !== undefined) {
    while (array1.length || array2.length) {
        let el1 = array1.length ? array1[0] : Infinity;
        let el2 = array2.length ? array2[0] : Infinity;

        let next;
        if (el1 < el2) {
        // if (array1[0] < array2[0]) {
            next = array1.shift();
        } else {
            next = array2.shift();
        }

        sorted.push(next);
    }

    return sorted;

}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    };

    let midIdx = Math.floor(array.length / 2);

    let leftSide = array.slice(0, midIdx);
    let rightSide = array.slice(midIdx);

    let sortedLeft = mergeSort(leftSide);
    let sortedRight = mergeSort(rightSide);

    return merge(sortedLeft, sortedRight);
}

module.exports = {
    merge,
    mergeSort
};