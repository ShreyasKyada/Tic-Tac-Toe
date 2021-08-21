let gridContainer = document.getElementsByClassName('grid-container-square')[0];
let DOMGrid = document.getElementsByClassName('grid')[0];
let totalWidth = (gridContainer.clientWidth) - 5;

// let grid = localStorage.getItem('grid');
grid = '3X3';
if (grid.charAt(1) === '0')
    grid = parseInt('10');
else if (grid.charAt(1) === '1')
    grid = parseInt('11');
else
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
let symbol = 'O';
let i,j;

alignSymbol = (x, y) => {
    if (visited[x][y] == 0) {
        let s = gridMatrix[x][y];
        // s.style.fontFamily = "Varela Round, sans-serif";
        s.firstChild.classList.add('down-anim');
        if (symbol === 'O') {
            s.firstChild.innerHTML = "O";
            s.firstChild.classList.add('i1');
            symbol = 'X';
            visited[x][y] = 1;
            // checkWin(x, y);
        }
        else {
            s.firstChild.innerHTML = "X";
            s.firstChild.classList.add('i2');
            symbol = 'O';
            visited[x][y] = 2;
            // checkWin(x, y);
        }
        if (s.firstChild.classList.contains('down-anim')) {
            s.firstChild.style.transform = 'translateY(' + 0 + 'px)';
        }
    }
};

let x, y;
for (let i = 0; i < grid; i++) {
    for (let j = 0; j < grid; j++) {
        let span = document.createElement('span');
        let p = document.createElement('p');
        p.style.height = h + 'px';
        p.style.width = h + 'px';
        p.style.transform = 'translateY(' + (-h) + 'px)';
        p.classList.add('grid-p');
        span.style.width = h + 'px';
        span.style.height = h + 'px';
        span.classList.add('grid-square');
        span.style.fontSize = fSize + 'px';
        span.appendChild(p);
        gridMatrix[i][j] = span;
        gridMatrix[i][j].onclick = function () {
            x = i;
            y = j;
            alignSymbol(x, y);
        }
        DOMGrid.appendChild(gridMatrix[i][j]);
    }
}