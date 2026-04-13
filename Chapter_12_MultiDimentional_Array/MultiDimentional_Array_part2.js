let grid = [
    [12, 20, 30],
    [40, 50, 60],
    [70, 80, 90, 87]
];
//access
console.log(grid);
console.log(grid [0] [1]);

//modify
grid [1][1] = 23;
console.log(grid [1] [1]);
console.log(grid);

//length
console.log(grid.length);  //row length
console.log(grid[0].length);  //column length
console.log(grid[2].length);

//last element
console.log(grid[grid.length - 1] [grid[0].length - 1]);
//console.log(grid[grid[0].length - 1])