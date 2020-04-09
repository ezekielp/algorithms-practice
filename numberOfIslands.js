// https://leetcode.com/problems/number-of-islands/
// Given a 2d grid map of '1's(land) and '0's(water), count the number of islands.An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.You may assume all four edges of the grid are all surrounded by water.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

    const cellQueue = [];
    const coordinateSet = new Set();
    let islandCount = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const currentCellValue = grid[i][j];

            if (currentCellValue === "1" && !coordinateSet.has([i, j].toString())) {
                cellQueue.push([i, j]);

                while (cellQueue.length > 0) {
                    const currentCoordinates = cellQueue.shift();
                    coordinateSet.add(currentCoordinates.toString());

                    const neighborValues = viableNeighbors(currentCoordinates, grid);
                    neighborValues.forEach(neighbor => {
                        const neighborVal = neighbor[0];
                        const neighborCoordinates = neighbor[1];
                        if (neighborVal === "1" && !coordinateSet.has(neighborCoordinates.toString())) {
                            coordinateSet.add(neighborCoordinates.toString());
                            cellQueue.push(neighborCoordinates);
                        }
                    })
                }
                islandCount++;
            }
        }
    }

    return islandCount;

};

const viableNeighbors = (coordinates, grid) => {
    const [r, c] = coordinates;
    const topVal = grid[r - 1] !== undefined ? grid[r - 1][c] : undefined;
    const topCoordinates = [r - 1, c];
    const rightVal = grid[r][c + 1];
    const rightCoordinates = [r, c + 1];
    const bottomVal = grid[r + 1] !== undefined ? grid[r + 1][c] : undefined;
    const bottomCoordinates = [r + 1, c];
    const leftVal = grid[r][c - 1];
    const leftCoordinates = [r, c - 1];
    return [[topVal, topCoordinates], [rightVal, rightCoordinates], [bottomVal, bottomCoordinates], [leftVal, leftCoordinates]];
}

const example1 = [
    ["1","1","1",'1','0'],
    ['1',"1","0","1",'0'],
    ["1","1",'0',"0",'0'],
    ["0","0","0","0",'0'],
]; // 1

const example2 = [
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,1],
] // 3

console.log(numIslands(example1));
// console.log(numIslands(example2));

// Output: 1

// BFS for more land on adjacent spots every time you hit land
// Add to a set??
// And at the end of the BFS, increment island counter
// Then keep iterating through the grid, check if coordinate is land
// If it is, check if in set
// If it is, don't do BFS; if it's not, do BFS
// Go until you're hit all coordinates