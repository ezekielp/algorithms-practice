/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

let board =
    [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ]

const ex1 = "ABCCED" // return true.
const ex2 = "SEE" // return true.
const ex3 = "ABCB" // return false.
// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.

var exist = function(board, word) {

    let usedPositionsInSingleDFS = new Set();

    let foundIt = false;

    const dfs = (i, j, k) => {
        let up = [i - 1, j];
        let right = [i, j + 1];
        let down = [i + 1, j];
        let left = [i, j - 1];
        [up, right, down, left].forEach(coords => {
            let m = coords[0];
            let n = coords[1];
            if (!usedPositionsInSingleDFS.has(`#${m}#${n}`)) {
                usedPositionsInSingleDFS.add(`#${m}#${n}`);
                if (board[m] && board[m][n] === word[k]) {
                    if (k === word.length - 1) {
                        foundIt = true
                        return;
                    };
                    // console.log(word[k]);
                    dfs(m, n, k + 1);
                }
            }
        })
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let currentCell = board[i][j];
            if (currentCell === word[0]) {
                dfs(i, j, 1);
                if (foundIt) return true;
            }
        }
    }

    return false;

};

console.log(exist(board, ex1));
console.log(exist(board, ex2));
console.log(exist(board, ex3));

