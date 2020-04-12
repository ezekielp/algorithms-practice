// https://leetcode.com/problems/longest-mountain-in-array/

/**
 * @param {number[]} A
 * @return {number}
 */
// var longestMountain = function(A) {
//     let longestLength = 0;
//     let i = 0;
//     let j = 1;
//     let startingNum = A[i];
//     let endingNum = A[j];
//     let goingUp = null;
//     let startOfCurrentMountainIdx = i;
//     let upslope = null;
//     while (j < A.length && endingNum < startingNum) {
//         i++;
//         j++;
//         startingNum = A[i];
// 		endingNum = A[j];
//         startOfCurrentMountainIdx = i;
//     }
//     goingUp = true;
//     while (j < A.length) {
//         if (goingUp) {
//             if (endingNum > startingNum) {
//                 j++;
//                 i++;
//             } else {
//                 if (j - 1 > 1) {
//                     goingUp = false;
//                     upslope = j - startOfCurrentMountainIdx;
//                 } else {
//                     i++;
//                     j++;
//                     startOfCurrentMountainIdx = i;
//                 }
//             }
//         } else { // goingDown
//             console.log("hello");
//             if (A[j] > A[i]) {
//                 let currentLength = j - startOfCurrentMountainIdx;
//                 if (currentLength >= 3 && currentLength > longestLength) {
//                     console.log("hello");
//                     longestLength = currentLength;
//                 }
//                 i = j - 1;
//                 goingUp = true;
//                 startOfCurrentMountainIdx = i;
//             } else {
//                 j++;
//                 i++;
//             }
//         }
//     }

//     if (upslope && !goingUp && (j - startOfCurrentMountainIdx) > longestLength && (j - startOfCurrentMountainIdx) > 3) {
//         longestLength = j - startOfCurrentMountainIdx;
//     }
//     return longestLength;
    
// };

const longestMountain = A => {
    let risingSlope = [];
    let fallingSlope = [];
    let longestLength = 0;

    let i = 0;
    while (i < A.length - 1) {
        let currentNum = A[i];
        let nextNum = A[i + 1];
        if (nextNum < currentNum) {
            if (risingSlope.length > 0) {
                fallingSlope.push(currentNum);
            }
        } else if (nextNum > currentNum) {
            if (fallingSlope.length > 0) {
                let currentLength = risingSlope.length + fallingSlope.length + 1;
                if (currentLength > 2 && currentLength > longestLength) {
                    longestLength = currentLength;
                }
                risingSlope = [];
                fallingSlope = [];
            }
            risingSlope.push(currentNum);
        } else { // (nextNum === currentNum)
            let currentLength = risingSlope.length + fallingSlope.length + 1;
            if (currentLength > 2 && currentLength > longestLength) {
                longestLength = currentLength;
            }
            risingSlope = [];
            fallingSlope = [];
        }
        i++;
    }

    let currentLength = risingSlope.length + fallingSlope.length + 1;
    if (risingSlope.length > 0 && fallingSlope.length > 0 && currentLength > 2 && currentLength > longestLength) {
        longestLength = currentLength;
    }
    return longestLength;

}

const example1 = [2, 1, 4, 7, 3, 2, 5]; // 5
const example2 = [2, 2, 2]; // 0
const example3 = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0]; // 11 
const example4 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; // 0
const example5 = [3, 3, 1]; // 0
const example6 = [0, 0, 1, 0, 0, 1, 1, 1, 1, 1]; // 3

console.log(longestMountain(example1));
console.log(longestMountain(example2));
console.log(longestMountain(example3));
console.log(longestMountain(example4));
console.log(longestMountain(example5));
console.log(longestMountain(example6));

