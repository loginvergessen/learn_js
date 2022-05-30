/*
Title:  Paths in the Grid
Link:   https://www.codeabbey.com/index/task_view/paths-in-the-grid
*/

output(pathsInTheGrid(input()));

function pathsInTheGrid(field) {

    const fieldParameter = field
                        .split(' ')
                        .map(str => Number(str));
    const numberOfRows = fieldParameter[0];
    const numberOfColumns = fieldParameter[1];

    const grid = new Array(numberOfRows).fill(0).map(() => new Array(numberOfColumns).fill(0));

    for (let i = 0; i < numberOfRows; i++) {
        const row = input()
                        .split(' ')
                        .map(str => str.replace("+", 0))
                        .map(str => str.replace("$", 0))
                        .map(str => str.replace("@", 0))
                        .map(str => str.replace("X", 1));
        for (let j = 0; j < numberOfColumns; j++) {
            grid[i][j] = row[j];
        }
    }
    return uniquePathsRecursive(grid);
}

function uniquePathHelper(i, j, rows, columns, grid) {
    if (i == rows || j == columns)
      return 0;

    if (grid[i][j] == 1)
      return 0;
     
    if (i == rows - 1 && j == columns - 1)
      return 1;
 
    return  uniquePathHelper(i + 1, j, rows, columns, grid) + uniquePathHelper(i, j+1, rows, columns, grid);
}
 
function uniquePathsRecursive(grid){
    let rows = grid.length;
    let columns = grid[0].length;
    return uniquePathHelper(0, 0, rows, columns, grid);
}