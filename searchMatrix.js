/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false;

    const memo = [];
    for (let i = 0; i < matrix.length; i++) {
        memo.push([]);
        for (let j = 0; j < matrix[0].length; j++) {
            memo[i].push(null);
        }
    }

    const queue = [];
    
    let row = Math.floor(matrix.length / 2);
    let col = Math.floor(matrix[0].length / 2);
    queue.push([row, col]);
    
    while (queue.length) {
        const coordinates = queue.shift();
        row = coordinates[0];
        col = coordinates[1];
        const val = matrix[row][col];
        
        if (target === val) return true;
        memo[row][col] = true;
    
        if (target < val) {
            const nextUp = [Math.floor(row / 2), col];
            const nextLeft = [row, Math.floor(col / 2)];
            const nextDiagonalLeft = [Math.floor(row / 2), Math.floor(col / 2)];

            [nextUp, nextLeft, nextDiagonalLeft].forEach(coords => {
                if (memo[coords[0]][coords[1]] === null) {
                    memo[coords[0]][coords[1]] = true;
                    queue.push(coords);
                }
            });
        } else {
            const nextDown = [Math.floor((matrix.length + row) / 2), col];
            const nextRight = [row, Math.floor((matrix[0].length + col) / 2)];
            const nextDiagonalRight = [Math.floor((matrix.length + row) / 2), Math.floor((matrix[0].length + col) / 2)];
            
            [nextDown, nextRight, nextDiagonalRight].forEach(coords => {
                if (memo[coords[0]][coords[1]] === null) {
                    memo[coords[0]][coords[1]] = true;
                    queue.push(coords);
                }
            })
        }


    }

    return false;

};

const exampleMatrix1 = [
	[1, 4, 7, 11, 15],
	[2, 5, 8, 12, 19],
	[3, 6, 9, 16, 22],
	[10, 13, 14, 17, 24],
	[18, 21, 23, 26, 30],
];

const exampleMatrix2 = [[5], [6]];

const exampleMatrix3 = [
	[5, 8, 11, 11, 12, 12, 14, 14, 19],
	[9, 9, 14, 17, 17, 19, 21, 26, 27],
	[12, 15, 15, 21, 21, 26, 30, 35, 36],
	[17, 17, 20, 25, 28, 30, 32, 35, 39],
	[20, 21, 22, 29, 30, 32, 34, 36, 43],
	[24, 24, 25, 31, 36, 40, 40, 43, 45],
	[28, 31, 32, 36, 36, 45, 49, 53, 56],
	[29, 33, 36, 39, 40, 50, 54, 57, 57],
	[34, 36, 37, 41, 42, 53, 55, 58, 59],
	[37, 40, 42, 44, 47, 53, 56, 58, 62],
];

// console.log(searchMatrix(exampleMatrix1, 5));
// console.log(searchMatrix(exampleMatrix1, 20));
// console.log(searchMatrix(exampleMatrix2, 5));
console.log(searchMatrix(exampleMatrix3, 22));

