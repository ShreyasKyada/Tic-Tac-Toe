let player = 2, opponent = 1;

function isWin(b) {
    // Checking for Rows for X or O victory.
    for (let row = 0; row < 3; row++) {
        if (b[row][0] == b[row][1] && b[row][1] == b[row][2]) {
            // return 1;
            if (b[row][0] == player)
                return 1;
            else if (b[row][0] == opponent)
                return -1;
        }
    }
    // Checking for Columns for X or O victory.
    for (let col = 0; col < 3; col++) {
        if (b[0][col] == b[1][col] && b[1][col] == b[2][col]) {
            // return 1;
            if (b[0][col] == player)
                return 1;
            else if (b[0][col] == opponent)
                return -1;
        }
    }
    // Checking for Diagonals for X or O victory.
    if (b[0][0] == b[1][1] && b[1][1] == b[2][2]) {
        // return 1;
        if (b[0][0] == player)
            return 1;
        else if (b[0][0] == opponent)
            return -1;
    }
    if (b[0][2] == b[1][1] && b[1][1] == b[2][0]) {
        // return 1;
        if (b[0][2] == player)
            return 1;
        else if (b[0][2] == opponent)
            return -1;
    }
    // Else if none of them have
    // won then return 0
    return 0;
}
function isMovesLeft(board) {
    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            if (board[i][j] == '_')
                return true;

    return false;
}
function minimax(visited, depth, clickLoc, isMaximizing) {
    let win = isWin(visited);
    if (win) {
        if (visited[clickLoc.i][clickLoc.j] == 1) {
            return -10;
        } else if (visited[clickLoc.i][clickLoc.j] == 2) {
            return 10;
        } else {
            return 0;
        }
    }
    // if (win == 10)
    //     return win;
    // else if (win == -10)
    //     return win;
    // else if (isMovesLeft(visited) == false)
    //     return 0;

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (visited[i][j] == 0) {
                    visited[i][j] = 2;
                    clickLoc = { i, j };
                    let score = minimax(visited, depth + 1, clickLoc, false);
                    visited[i][j] = 0;
                    bestScore = Math.max(score, bestScore);
                }
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (visited[i][j] == 0) {
                    visited[i][j] = 1;
                    clickLoc = { i, j };
                    let score = minimax(visited, depth + 1, clickLoc, true);
                    visited[i][j] = 0;
                    bestScore = Math.min(score, bestScore);
                }
            }
        }
        return bestScore;
    }
}

function bestMove(visited) {
    let bestScore = -Infinity;
    let move;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (visited[i][j] == 0) {
                visited[i][j] = 2;
                clickLoc = { i, j };
                let score = minimax(visited, 0, clickLoc, false);
                visited[i][j] = 0;
                if (score > bestScore) {
                    bestScore = score;
                    move = { i, j };
                }
            }
        }
    }
    console.log(move);
}

//Driver code
let visited = [
    [2, 1, 2],
    [0, 1, 2],
    [0, 0, 0]
];

bestMove(visited);

