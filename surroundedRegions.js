/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let memo = [];
    for (let i = 0; i < board.length; i++) {
        memo.push([]);
        for (let j = 0; j < board[0].length; j++) {
            memo[i].push(false);
        }
    }
    
    let checked = new Set();
    let shouldBeFlipped = true;

    const dfs = (m, n) => {
        if (memo[m][n]) return;
        memo[m][n] = true;
        const top = [m - 1, n];
        const right = [m, n + 1];
        const bottom = [m + 1, n];
        const left = [m, n - 1];
        const current = [m, n];

        checked.add(current.join("#"));
        if (m === 0 || n === 0 || m === board.length - 1 || n === board[0].length - 1) {
            console.log(`[${m}, ${n}`);
            shouldBeFlipped = false;
        }

        [top, right, bottom, left].forEach(coords => {
            const row = coords[0];
            const col = coords[1];
            if (board[row] && board[row][col] === 'O') {
                checked.add(coords.join("#"));
                if (row === 0 || col === 0 || row === board.length - 1 || col === board[0].length - 1) {
                    console.log(`[${m}, ${n}`);
                    shouldBeFlipped = false;
                }
                dfs(row, col);
            }
        })
    }

    for (let m = 1; m < board.length - 1; m++) {
        for (let n = 1; n < board[0].length - 1; n++) {
            if (board[m][n] === 'O') {
                dfs(m, n);
                if (shouldBeFlipped) {
                    checked.forEach(joinedCoords => {
                        const coords = joinedCoords.split("#");
                        const row = coords[0];
                        const col = coords[1];
                        board[row][col] = 'X';
                    })
                }
                checked = new Set();
                shouldBeFlipped = true;
            }            
        }
    }

    console.log(board);

};

const example1 = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
]


const example2 = [
    ["X", "O", "X", "O", "X", "O"], 
    ["O", "X", "O", "X", "O", "X"], 
    ["X", "O", "X", "O", "X", "O"], 
    ["O", "X", "O", "X", "O", "X"]
];

const solution2 = [
    ["X", "O", "X", "O", "X", "O"], 
    ["O", "X", "X", "X", "X", "X"], 
    ["X", "X", "X", "X", "X", "O"], 
    ["O", "X", "O", "X", "O", "X"]
];

// solve(example1);
solve(example2);
