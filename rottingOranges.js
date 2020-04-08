// https://leetcode.com/problems/rotting-oranges/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let numMinutes = 0;
    let hasAtLeastOneFreshOrange = false;
    let hasAtLeastOneRottenOrange = false;
    let previousState = grid.map(row => row.map(cell => cell));
    let newState = grid.map(row => row.map(cell => cell));

    grid.forEach(row => {
        row.forEach(cell => {
            if (cell === 1) {
                hasAtLeastOneFreshOrange = true;
            } else if (cell === 2) {
                hasAtLeastOneRottenOrange = true;
            }
        });
    });

    while (hasAtLeastOneFreshOrange && hasAtLeastOneRottenOrange) {
        hasAtLeastOneFreshOrange = false;
        hasAtLeastOneRottenOrange = false;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                const currentOrange = previousState[i][j];
                const top = previousState[i - 1] ? previousState[i - 1][j] : undefined;
                const bottom = previousState[i + 1] ? previousState[i + 1][j] : undefined;
                const adjacentSpots = [top, previousState[i][j + 1], bottom, previousState[i][j - 1]];

                if (currentOrange === 1) {
                    hasAtLeastOneFreshOrange = true;
                    adjacentSpots.forEach(spot => {
                        if (spot === 2) {
                            newState[i][j] = 2;
                        }
                    })
                } else if (currentOrange === 2) {
                    hasAtLeastOneRottenOrange = true;
                }

            }

        }

        if (!hasAtLeastOneRottenOrange) return -1;

        let atLeastOneOrangeRotted = false;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (previousState[i][j] !== newState[i][j]) {
                    atLeastOneOrangeRotted = true;
                }
            }
        }
        if (!atLeastOneOrangeRotted && hasAtLeastOneFreshOrange) {
            return -1;
        }
        console.log(newState);
        previousState = newState.map(row => row.map(cell => cell));
        numMinutes++;
    }

    return numMinutes;
};

const example1 = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]; // 4
const example2 = [[2, 1, 1], [0, 1, 1], [1, 0, 1]]; // -1
const example3 = [[0, 2]]; // 0
const example4 = [[0]]; // 0

console.log(orangesRotting(example1));
// console.log(orangesRotting(example2));
// console.log(orangesRotting(example3));
// console.log(orangesRotting(example4));

// initiate numMinutes = 0
// if all oranges are rotten, return numMinutes
// if a fresh orange has only blank spots adjacent to it, return -1