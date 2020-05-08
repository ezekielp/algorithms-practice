/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

let example1 = [
    [0, -1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
];

var gameOfLife = function(board) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            const top = board[row - 1] ? board[row - 1][col] : undefined;
            const topRight = board[row - 1] ? board[row - 1][col + 1] : undefined;
            const right = board[row][col + 1];
            const downRight = board[row + 1] ? board[row + 1][col + 1] : undefined;
            const down = board[row + 1] ? board[row + 1][col] : undefined;
            const downLeft = board[row + 1] ? board[row + 1][col - 1] : undefined;
            const left = board[row][col - 1];
            const topLeft = board[row - 1] ? board[row - 1][col - 1] : undefined;

            const neighbors = [top, topRight, right, downRight, down, downLeft, left, topLeft];
            
            let sumOfLiveCells = 0; // 2
            
            neighbors.forEach(neighbor => {
                if (neighbor === 1 || neighbor === -1) {
                    sumOfLiveCells++;
                }
            })
            
            if (board[row][col] === 0) {
                if (sumOfLiveCells === 3) {
                    // turn previous 0s that become 1s into 2s for now
                    board[row][col] = 2;
                }
            } else {
                if (sumOfLiveCells < 2 || sumOfLiveCells > 3) {
                    // turn previous 1s that become 0s into -1s for now
                    board[row][col] = -1;
                }
            }            
        }
    }

    for (let m = 0; m < board.length; m++) {
        for (let n = 0; n < board[0].length; n++) {
            let cell = board[m][n];
            if (cell === -1) {
                board[m][n] = 0;
            } else if (cell === 2) {
                board[m][n] = 1;
            }
        }
    }

    // console.log(board);
    
};

example1 = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
];

gameOfLife(example1);
