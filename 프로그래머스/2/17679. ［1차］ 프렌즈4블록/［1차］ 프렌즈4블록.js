function solution(m, n, board) {
    board = board.map(row => row.split(''));
    while (true) {
        const breaks = [];
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const char = board[i][j];
                if (char && char === board[i + 1][j] && char === board[i + 1][j + 1] && char === board[i][j + 1]) {
                    breaks.push([i, j]);
                    breaks.push([i + 1, j]);
                    breaks.push([i + 1, j + 1]);
                    breaks.push([i, j + 1]);
                }
            }
        }
        if (!breaks.length) {
            return board.flat().filter(char => !char).length;
        }
        breaks.forEach(([i, j]) => {
            board[i][j] = 0;
        })
        for (j = 0; j < n; j++) {
            for (i = m - 1; i >= 1; i--) {
                for (k = i - 1; k >= 0 && !board[i][j]; k--) {
                    if (board[k][j]) {
                        board[i][j] = board[k][j];
                        board[k][j] = 0;
                    }
                }
            }
        }
    }
}