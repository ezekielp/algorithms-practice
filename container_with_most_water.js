// https://leetcode.com/problems/container-with-most-water/


/*
@param {number[]} height
@return {number}
*/

let testHeights = [2, 3, 10, 5, 7, 8, 9];

const maxArea = heights => {
    let endIdx = heights.length - 1;
    let largestArea = 0;

    while (endIdx > 0) {

        for (let startIdx = 0; startIdx < endIdx; startIdx++) {
            let startingHeight = heights[startIdx];
            let endingHeight = heights[endIdx];

            let height = Math.min(startingHeight, endingHeight);
            let width = endIdx - startIdx;

            if ((height * width) > largestArea) {
                largestArea = height * width;
            } 
        }

        endIdx = endIdx - 1;
    }    

    return largestArea;
};

console.log(maxArea(testHeights));

// const maxArea = heights => {
//     let startIdx = 0;
//     let endIdx = heights.length - 1;
//     let incrementStartIdxNext = true;
//     let largestArea = 0;

//     while (startIdx < endIdx) {
//         let startingHeight = heights[startIdx];
//         let endingHeight = heights[endIdx];

//         let height = Math.min(startingHeight, endingHeight);
//         let width = endIdx - startIdx;

//         if ((height * width) > largestArea) {
//             largestArea = height * width;
//         } 

//         if (incrementStartIdxNext) {
//             startIdx = startIdx + 1;
//             incrementStartIdxNext = false;
//         } else {
//             endIdx = endIdx - 1;
//             incrementStartIdxNext = true;
//         }
//     }

//     return largestArea;
// };

