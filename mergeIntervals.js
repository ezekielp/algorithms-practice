// https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// Example 1:

const example1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
// Output: [[1, 6], [8, 10], [15, 18]]
// Explanation: Since intervals[1, 3] and[2, 6] overlaps, merge them into[1, 6].
//     Example 2:

const example2 = [[1, 4], [4, 5]];
// Output: [[1, 5]]
// Explanation: Intervals[1, 4] and[4, 5] are considered overlapping.

const example3 = [[1, 4], [0, 4]]; // [[0, 4]]
const example4 = [[1, 4], [0, 1]]; // [[0, 4]]
const example5 = [[1, 4], [0, 0]]; // [[0, 0], [1, 4]]
const example6 = [[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]]; // [[1, 10]]

// Input
// [[2, 3], [4, 6], [5, 7], [3, 4]]
// Output
// [[3, 7], [2, 3]]
// Expected
// [[2, 7]]

var merge = function(intervals) {
    
    if (intervals.length < 2) return intervals;

    let largestInterval = intervals[0];
    let largestIntervalIdx = 0;
    intervals.forEach((interval, idx) => {
        if (interval[1] - interval[0] > largestInterval[1] - largestInterval[0]) {
            largestInterval = interval;
            largestIntervalIdx = idx;
        };
    });

    intervals = intervals.slice(0, largestIntervalIdx).concat(intervals.slice(largestIntervalIdx + 1));
    let mergedIntervals = [largestInterval];

    for (let i = 0; i < intervals.length; i++) {
        let currentInterval = intervals[i];

        let j = 0;
        let foundAnIntervalToMergeWith = false;
        while (j < mergedIntervals.length) {
            let mergedInterval = mergedIntervals[j];

            if (
                (currentInterval[0] <= mergedInterval[1]
                    && currentInterval[1] >= mergedInterval[0])) {
                mergedIntervals[j][1] = Math.max(currentInterval[1], mergedInterval[1]);
                mergedIntervals[j][0] = Math.min(mergedInterval[0], currentInterval[0]);
                foundAnIntervalToMergeWith = true;
                j = mergedIntervals.length;
            }

            j++;
        }

        if (!foundAnIntervalToMergeWith) {
            mergedIntervals.push(currentInterval);
        }

    }

    return mergedIntervals;

};

console.log(merge(example1));
console.log(merge(example2));
console.log(merge(example3));
console.log(merge(example4));
console.log(merge(example5));
console.log(merge(example6));
