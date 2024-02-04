function solution(land) {
    const N = land.length;
    const dp = Array.from({length: N}, () => new Array(4));
    for (let i = 0; i < 4; i++) {
        dp[0][i] = land[0][i];
    }
    for (let i = 1; i < N; i++) {
        for (let j = 0; j < 4; j++) {
            dp[i][j] = Math.max(...dp[i - 1].filter((_, idx) => idx !== j)) + land[i][j];
        }
    }
    return Math.max(...dp[N - 1]);
}