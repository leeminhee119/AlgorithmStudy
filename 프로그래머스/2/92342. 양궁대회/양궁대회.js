function solution(n, info) {
    let answer = Array(11).fill(0);
    let maxCount = 0;
    
    function dfs(aCnt, rCnt, usedShots, point, arr) {
        if (usedShots > n) {
            return;
        }
        
        if (point > 10) {
            let diff = rCnt - aCnt;
            if (diff > maxCount) {
                arr[10] = n - usedShots;
                maxCount = diff;
                answer = arr;
            }
            return;
        }
        
        if (usedShots < n) {
            let current = [...arr];
            current[10 - point] = info[10 - point] + 1;
            dfs(aCnt, rCnt + point, usedShots + current[10 - point], point + 1, current);
        }
        if (info[10 - point] > 0) {
            dfs(aCnt + point, rCnt, usedShots, point + 1, arr);
        } else {
            dfs(aCnt, rCnt, usedShots, point + 1, arr);
        }
    }
    
    dfs(0, 0, 0, 0, answer);
    
    return maxCount <= 0 ? [-1] : answer;
}