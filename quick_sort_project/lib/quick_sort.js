function quickSort(array) {
    if (array.length <= 1) return array;

    let pivot = array[0];
    let leftSide = [];
    let rightSide = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            leftSide.push(array[i]);
        } else {
            rightSide.push(array[i]);
        }
    }

    return quickSort(leftSide).concat(pivot).concat(quickSort(rightSide));


}


module.exports = {
    quickSort
};