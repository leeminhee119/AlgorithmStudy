function solution(land) {
    const dp = JSON.parse(JSON.stringify(land));
    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < 4; j++) {
            dp[i][j] = Math.max(...dp[i - 1].filter((_, idx) => idx !== j)) + dp[i][j];
        }
    }
    return Math.max(...dp[land.length - 1]);
}