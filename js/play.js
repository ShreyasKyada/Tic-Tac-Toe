let gridContainer = document.getElementsByClassName('grid-container-square')[0];
let DOMGrid = document.getElementsByClassName('grid')[0];
let line = document.getElementsByClassName('line')[0];
let totalWidth = (gridContainer.clientWidth) - 5;
let noSymbol = 4;

// let grid = localStorage.getItem('grid');
grid = '6x6';
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
let i, j;

function positionCalculate(max1) {
    let topLeftArray;
    topLeftArray = [(max1[0] * h) + (h / 2 ), (max1[1] * h) + (h / 2), (noSymbol - 1) * h];
    return topLeftArray;
}

function checkWin(x, y) {
    let count = 1;
    let max1;
    let max2;

    //up
    let xx = x - 1;
    let yy = y;
    for (let i = 1; i < noSymbol; i++) {
        if (xx < 0) {
            break;
        }
        if (visited[xx][yy] === visited[x][y]) {
            count++;
            xx--;
        }
        else {
            break;
        }
    }
    max1 = [xx + 1, y];
    if (count === noSymbol) {
        let topLeftArray = positionCalculate(max1);
        line.style.top = topLeftArray[0] + "px";
        line.style.left = topLeftArray[1] + "px";
        line.style.height = topLeftArray[2] + "px";
        if(visited[x][y] == 1){
            line.classList.add('blue');
        }
        else {
            line.classList.add('red');
        }
        console.log(max1 + " " + max2);
        console.log("win up");
        return;
    }

    // down
    xx = x + 1;
    yy = y;
    for (let i = 1; i < noSymbol; i++) {
        if (count == noSymbol || xx > grid - 1) {
            break;
        }
        if (visited[xx][yy] === visited[x][y]) {
            count++;
            xx++;
        }
        else {
            break;
        }
    }
    // max2 = [xx - 1, y];
    if (count === noSymbol) {
        let topLeftArray = positionCalculate(max1);
        line.style.top = topLeftArray[0] + "px";
        line.style.left = topLeftArray[1] + "px";
        line.style.height = topLeftArray[2] + "px";
        if(visited[x][y] == 1){
            line.classList.add('blue');
        }
        else {
            line.classList.add('red');
        }
        // console.log(max1 + " " + max2);
        console.log("win down");
        return;
    }

    //left
    count = 1;
    xx = x;
    yy = y - 1;
    for (let i = 1; i < noSymbol; i++) {
        if (yy < 0) {
            break;
        }
        if (visited[xx][yy] === visited[x][y]) {
            yy--;
            count++;
        }
        else {
            break;
        }
    }
    if (count == noSymbol) {
        console.log("win left");
        return;
    }

    //right
    xx = x;
    yy = y + 1;
    for (let i = 1; i < noSymbol; i++) {
        if (count == noSymbol || yy > grid - 1) {
            break;
        }
        if (visited[xx][yy] === visited[x][y]) {
            count++;
            yy++;
        }
        else {
            break;
        }
    }
    if (count == noSymbol) {
        console.log("win right");
        return;
    }

    //backword slash up win \ 
    count = 1;
    xx = x - 1;
    yy = y - 1;
    for (let i = 1; i < noSymbol; i++) {
        if (xx < 0 || yy < 0) {
            break;
        }
        if (visited[xx][yy] === visited[x][y]) {
            count++;
            xx--;
            yy--;
        }
        else {
            break;
        }
    }
    if (count === noSymbol) {
        console.log("backword slash up win");
        return;
    }

    //backword slash down win \ 
    xx = x + 1;
    yy = y + 1;
    for (let i = 1; i < noSymbol; i++) {
        if (count == noSymbol || xx > grid - 1 || yy > grid - 1) {
            break;
        }
        if (visited[xx][yy] === visited[x][y]) {
            count++;
            xx++;
            yy++;
        }
        else {
            break;
        }
    }
    if (count === noSymbol) {
        console.log("backword slash down win");
        return;
    }

    //forward slash up win /
    count = 1;
    xx = x - 1;
    yy = y + 1;
    for (let i = 1; i < noSymbol; i++) {
        if (xx < 0 || yy > grid - 1) {
            break;
        }
        if (visited[xx][yy] === visited[x][y]) {
            count++;
            xx--;
            yy++;
        }
        else {
            break;
        }
    }
    if (count === noSymbol) {
        console.log("forward slash up win");
        return;
    }

    //forward slash down win /
    xx = x + 1;
    yy = y - 1;
    for (let i = 1; i < noSymbol; i++) {
        if (xx > grid - 1 || yy < 0) {
            break;
        }
        if (visited[xx][yy] === visited[x][y]) {
            count++;
            xx++;
            yy--;
        }
        else {
            break;
        }
    }
    if (count === noSymbol) {
        console.log("forward slash down win");
        return;
    }
};

alignSymbol = (x, y) => {
    if (visited[x][y] == 0) {
        let s = gridMatrix[x][y];
        s.firstChild.classList.add('down-anim');
        if (symbol === 'O') {
            s.firstChild.innerHTML = "O";
            s.firstChild.classList.add('i1');
            symbol = 'X';
            visited[x][y] = 1;
            checkWin(x, y);
        }
        else {
            s.firstChild.innerHTML = "X";
            s.firstChild.classList.add('i2');
            symbol = 'O';
            visited[x][y] = 2;
            checkWin(x, y);
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