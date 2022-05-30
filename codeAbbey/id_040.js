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
    return uniquePathsDynamic(grid);
}

function uniquePathsDynamic(grid) {
    const rows = grid.length;
    const columns = grid[0].length;

    grid[0][0] = 1;
    
    for (let j = 1; j < columns; j++) {
        if (grid[0][j] == 0)
            grid[0][j] = grid[0][j - 1];
        else
            grid[0][j] = 0;
    }
 
    for (let i = 1; i < rows; i++) {
        if (grid[i][0] == 0)
            grid[i][0] = grid[i - 1][0];
        else
            grid[i][0] = 0;
    }
 
   for (let i = 1; i < rows; i++) {
      for (let j = 1; j < columns; j++) {
            if (grid[i][j] == 0)
                grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
            else
                grid[i][j] = 0;
      }
   }
    return grid[rows - 1][columns - 1];
}