/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let next = matrix[0][0];
    for (let i = 0; i < Math.round(matrix.length / 2); i++) { // 1
        for (let j = i; j < matrix[0].length - i - 1; j++) { // 1
            const one = matrix[i][j]; // 4
            const two = matrix[j][matrix[0].length - i - 1]; // 8
            const three = matrix[matrix.length - i - 1][matrix[0].length - j - 1]; // 6
            const four = matrix[matrix.length - j - 1][i]; // 3
            
            matrix[i][j] = four;
            matrix[j][matrix[0].length - i - 1] = one;
            matrix[matrix.length - i - 1][matrix[0].length - j - 1] = two;
            matrix[matrix.length - j - 1][i] = three;
        }
    }
};

// [0][0]
// => [0][matrix[0].length - 1]
// => [matrix.length - 1][matrix[0].length - 1]
// => [matrix.length - 1][0]

// [0][1]
// => [1][matrix[0].length - 1]
// => [matrix.length - 1][matrix[0].length - 2]
// => [matrix.length - 2][0]

// Math.floor(matrix.length / 2)
