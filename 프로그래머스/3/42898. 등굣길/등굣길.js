function solution(m, n, puddles) {
    const dp = Array.from({length: n}, () => new Array(m).fill(0));
    dp[0][1] = 1;
    dp[1][0] = 1;
    puddles.forEach(([py, px]) => dp[px - 1][py - 1] = -1);
    const dx = [-1, 0];
    const dy = [0, -1];
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (dp[row][col] === -1) continue;
            let cnt = 0;
            for (let i = 0; i < dx.length; i++) {
                const [px, py] = [row + dx[i], col + dy[i]];
                if (px < 0 || py < 0 || px >= n || py >= m) continue;
                if (dp[px][py] === -1) continue;
                cnt += dp[px][py];
            }
            dp[row][col] += cnt % 1000000007;
        }
    }
    return dp[n - 1][m - 1] % 1000000007
}