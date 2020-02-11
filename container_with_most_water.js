// https://leetcode.com/problems/container-with-most-water/


/*
@param {number[]} height
@return {number}
*/

let testHeights = [1, 8, 6, 2, 5, 4, 8, 3, 7];


const maxArea = heights => {
    let startIdx = 0;
    let endIdx = heights.length - 1;
    let incrementStartIdxNext = true;
    let largestAreaSoFar = 0;

    while (startIdx < endIdx) {
        let startingHeight = heights[startIdx];
        let endingHeight = heights[endIdx];

        let height = Math.min(startingHeight, endingHeight);
        let width = endingHeight - startingHeight;

        if ((height * width) > largestAreaSoFar) {
            largestAreaSoFar = height * width;
        } 

        if (incrementStartIdxNext) {
            incrementStartIdxNext = false;
        } else {
            incrementStartIdxNext = true;
        }
    }
};

