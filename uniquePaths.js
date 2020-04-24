// https://leetcode.com/problems/unique-paths/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top - left corner, there are a total of 3 ways to reach the bottom - right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right

[
    [0, 1, 1, 1, 1, 1, 1],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 3, 6, 10, 15, 21, 28],
]

// Input: m = 7, n = 3
// Output: 28

var uniquePaths = function(m, n) {
    let numPaths = 0;

    const findPath = (i, j) => {
        if (i === m && j === n) {
            numPaths++;
            return;
        };
        if (i === m) {
            findPath(i, j + 1);
        } else if (j === n) {
            findPath(i + 1, j)
        } else {
            findPath(i, j + 1);
            findPath(i + 1, j);
        }

    }

    findPath(1, 1);
    return numPaths;    
};

console.log(uniquePaths(3, 4));
// console.log(uniquePaths(7, 3));


