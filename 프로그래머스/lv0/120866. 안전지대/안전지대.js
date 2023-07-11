function solution(board) {
    const dangerSpots = [];
    const directions = [[-1, 1], [0, 1], [1, 1], [-1, 0], [1, 0], [-1, -1], [0, -1], [1, -1]]
    const size = board.length;
    let result = size * size;
    
    for (let row = 0; row < board.length; row++ ) {
        for (let col = 0; col < board[row].length; col++) {
            const spot = board[row][col];
            if (spot === 0) continue;
            else if (spot === 1) {
                result--;
                directions.forEach(direction => {
                    const nrow = row + direction[0]
                    const ncol = col + direction[1]
                    if (nrow < size && nrow >= 0 && ncol < size && ncol >= 0 && !board[nrow][ncol]) {
                        board[nrow][ncol] = 2;
                        result--;
                    }
                })
            }
        }
    }
    return result;
}