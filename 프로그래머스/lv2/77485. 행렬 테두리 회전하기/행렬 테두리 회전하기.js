function cycle(board, query) {
    const newBoard = board.map(row => [...row]); // 배열의 깊은복사
    let [x1, y1, x2, y2] = query;
    x1--;
    y1--;
    x2--;
    y2--;
    let minValue = board[x1][y1]; // 초기화
    
    for (let y = y1; y < y2; y++) {
        newBoard[x1][y + 1] = board[x1][y]
        if (board[x1][y] < minValue) minValue = board[x1][y]
    }
    for (let x = x1; x < x2; x++) {
        newBoard[x + 1][y2] = board[x][y2]
        if (board[x][y2] < minValue) minValue = board[x][y2]
    }
    for (let y = y2; y > y1; y--) {
        newBoard[x2][y - 1] = board[x2][y]
        if (board[x2][y] < minValue) minValue = board[x2][y]
    }
    for (let x = x2; x > x1; x--) {
        newBoard[x - 1][y1] = board[x][y1]
        if (board[x][y1] < minValue) minValue = board[x][y1]
    }
    return [newBoard, minValue]; // 회전 후의 행렬을 반환
}

function solution(rows, columns, queries) {
    // 행렬 생성
    let board = Array
                        .from(Array(rows), () => new Array(columns).fill(0))
                        .map((row, rowIdx) => row.map((_, col) => rowIdx * columns + (col + 1) ))
    const result = [];
    queries.forEach((query) => {
        const [newBoard, minValue] = cycle(board, query);
        result.push(minValue);
        board = newBoard.map(row => [...row]);
    });
    return result;
}