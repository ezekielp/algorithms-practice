/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function (A) {
    let longestSeqCount = 0;

    for (let i = 0; i < A.length - 1; i++) {
        let longestCurrentSeq = 0;
        let currentNumIdx = i;
        let currentNum = A[i];
        let currentRes = findNextFibLikeNum(currentNum, A.slice(currentNumIdx + 1));

        while (currentRes) {
            longestCurrentSeq = longestCurrentSeq === 0 ? 3 : longestCurrentSeq + 1;

            console.log(currentRes);
            currentNumIdx = currentRes;
            currentNum = A[currentRes];
            currentRes = findNextFibLikeNum(currentNum, A.slice(currentNumIdx + 1), A.length);
        }

        if (longestCurrentSeq > longestSeqCount) {
            longestSeqCount = longestCurrentSeq;
        }

    }

    return longestSeqCount;

};

const findNextFibLikeNum = (currentNum, A, arrayLength) => {
    let j = 0;

    while (j < A.length - 1) {
        let nextNum = A[j];

        let k = j + 1;
        while (k < A.length - 1) {
            let thirdNum = A[k];
            if (currentNum + nextNum === thirdNum) {
                return j + 1 + (arrayLength - A.length);
            } else if (currentNum + nextNum < thirdNum) {
                k = A.length;
            }

            k++;
        }

        j++;
    }

    return null;
}

// Example 1:
// Input: [1, 2, 3, 4, 5, 6, 7, 8]
// Output: 5
// Explanation:
// The longest subsequence that is fibonacci - like: [1, 2, 3, 5, 8].

// Example 2:
// Input: [1, 3, 7, 11, 12, 14, 18]
// Output: 3
// Explanation:
// The longest subsequence that is fibonacci - like:
// [1, 11, 12], [3, 11, 14] or[7, 11, 18].

console.log(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8]));