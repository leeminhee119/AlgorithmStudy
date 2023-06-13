function check(queen, row) {
    for (let i = 0; i < row; i++) { // 이전 row까지 겹치는 열이 있거나, 대각선에 위치하고 있는지 살핀다.
        if (queen[i] == queen[row] || Math.abs(queen[i] - queen[row]) == row - i) {
            return false; // 이전 row와 대각선 또는 세로에 위치한 경우 퀸을 둘 수 없다.
        }
    }
    return true;
}

function search(queen, row) { // 행마다 퀸을 둘 수 있는지 살핍니다.
    const n = queen.length;
    let count = 0;
    
    if (row == n) return 1; // 마지막 row까지 통과됐다면 1을 count에 더하게 된다.
    
    for (let col = 0; col < n; col++) {
        queen[row] = col; //row행의 col열에 퀸 둬본다.
        if (check(queen, row)) { // 퀸을 둘 수 있다면
            count += search(queen, row + 1); // 다음 row
        } // 퀸을 둘 수 없다면 다음 col에 퀸을 둬본다.
    }
    return count;
}

function solution(n) {
    const answer = search(new Array(n).fill(0), 0); // 0행부터 시작
    return answer;
}