let gridContainer = document.getElementsByClassName('grid-container-square')[0];
let DOMGrid = document.getElementsByClassName('grid')[0];
let totalWidth = (gridContainer.clientWidth) - 5;

// let grid = localStorage.getItem('grid');
grid = '9x9';

grid = parseInt(grid.charAt(0));

let gridMatrix = new Array(grid);
for (let i = 0; i < grid; i++) {
    gridMatrix[i] = new Array(grid);
}

let visited = new Array(grid);
for (let i = 0; i < grid; i++) {
    visited[i] = new Array(grid);
}
for (let i = 0; i < grid; i++)
    for (let j = 0; j < grid; j++)
        visited[i][j] = 0;

let h = totalWidth / grid;
let fSize = h;

for(let i = 0; i < grid; i++) {
    for(let j = 0;j <grid; j++){
        let span = document.createElement('i');
        span.style.width = h + 'px';
        span.style.height = h + 'px';
        span.classList.add('grid-square');
        span.style.fontSize = fSize + 'px';
        gridMatrix[i][j] = span;
        gridMatrix[i][j].onclick = function () {
            x = i;
            y = j;
            alignSymbol(x, y);
        }
        DOMGrid.appendChild(gridMatrix[i][j]);
    }
}