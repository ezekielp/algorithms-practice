const robotPath = (grid) => {
    let paths = [];

    const gridPathFinder = (grid, x, y, path = []) => {
        let nextCellRight = null;
        let nextCellDown = null;
        if (grid[y] && grid[y][x + 1]) {
            nextCellRight = grid[y][x + 1];
        } else if (grid[y + 1] && grid[y + 1][x]) {
            nextCellDown = grid[y + 1][x];
        }
            
        if (x === grid.length - 1 && y === grid.length - 1) {
            path.push([y, x]);
            return path;
        };
        if ((nextCellRight === 'x' || x === grid.length - 1) && (nextCellDown === 'x' || y === grid.length - 1)) return null;
        if (nextCellRight !== 'x' && x !== grid.length - 1) {
            path.push([y, x]);
            paths.push(gridPathFinder(grid, x + 1, y, path));
        }
        if (nextCellDown !== 'x' && y !== grid.length - 1) {
            path.push([y, x]);
            paths.push(gridPathFinder(grid, x, y + 1, path));
        }
    }

    gridPathFinder(grid, 0, 0);

    console.log(paths);
    return paths;
        
}

let grid = [
    [null, 'x', null, null, null],
    [null, null, null, null, null],
    [null, null, 'x', null, null],
    [null, 'x', null, 'x', null],
    [null, null, null, null, null]
]

let grid2 = [
    [null, 'x', null],
    [null, null, null],
    [null, 'x', null]
]

let grid3 = [
    [null, null, null],
    [null, 'x', null],
    [null, null, null]
]

let path = [];

let failedPoints = {
    '[]': true,
}

getPath(grid3, 2, 2, path, failedPoints); // path.push([2, 2]), return true;
getPath(grid3, 2, 1, path, failedPoints); // path.push([2, 1]), return true;
getPath(grid3, 2, 0, path, failedPoints); // path.push([2, 0]), return true;
getPath(grid3, 2, -1, path, failedPoints); // false;
getPath(grid3, 1, 0, path, failedPoints); // path.push([1, 0]), return true;
getPath(grid3, 1, -1, path, failedPoints); // false;
getPath(grid3, 0, 0, path, failedPoints); // path.push([0, 0]), return true;



getPath(grid2, 2, 2, path, failedPoints); // path.push([2, 2]), return true;
getPath(grid2, 2, 1, path, failedPoints); // false
getPath(grid2, 1, 2, path, failedPoints); // path.push([1, 2]), return true;
getPath(grid2, 1, 1, path, failedPoints); // path.push([1, 1]), return true;
getPath(grid2, 1, 0, path, failedPoints); // path.push([1, 0]), return true;
getPath(grid2, 1, -1, path, failedPoints); // false
getPath(grid2, 0, 0, path, failedPoints); // path.push([0, 0]), return true;
getPath(grid2, 0, 1, path, failedPoints); // false
getPath(grid2, 0, 2, path, failedPoints); // this will end up being false but is not already false — so it is added to failedPoints? 



robotPath(grid);