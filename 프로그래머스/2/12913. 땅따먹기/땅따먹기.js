function solution(land) {
    const rows = land.length;
    const dp = Array.from({length: rows}, () => new Array(4));
    for (let i = 0; i < 4; i++) {
        dp[0][i] = land[0][i];
    }
    for (let row = 1; row < rows; row++) {
        for (let col = 0; col < 4; col++) {
            const prevMax = dp[row - 1].reduce((acc, cur, i) => {
                if (i === col) return acc;
                return cur > acc ? cur : acc;
            }, -1);
            dp[row][col] = prevMax + land[row][col];
        }
    }
    return dp[rows - 1].reduce((acc, cur) => cur > acc ? cur : acc, dp[rows - 1][0]);
}