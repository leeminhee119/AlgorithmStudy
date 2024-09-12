function solution(storey) {
    // 각 자리수마다 올라갈지 내려갈지 케이스 나누어 재귀
    
    let minCnt = Infinity;
    function move(num, moveCnt) {
        if (num < 10) {
            if (num > 5) {
                minCnt = Math.min(minCnt, moveCnt + 10 - num + 1);
            } else {
                minCnt = Math.min(minCnt, moveCnt + num);
            }
            return;
        }
        
        const digit = num % 10;
        // 올라가는 경우
        move((num - digit) / 10 + 1, moveCnt + 10 - digit);
        // 내려가는 경우
        move((num - digit) / 10, moveCnt + digit);
    }
    
    move(storey, 0);
    return minCnt;
}