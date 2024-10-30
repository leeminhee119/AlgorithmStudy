function solution(x, y, n) {
    const dp = Array.from({length: y + 1}, () => Infinity);
    
    const operations = [(i) => i + n, (i) => i * 2, (i) => i * 3];
    
    dp[x] = 0;
    let cur = x;
    while (cur < y) {
        for (const op of operations) {
            const next = op(cur);
            dp[next] = Math.min(dp[next], dp[cur] + 1);
        }
        cur++;
    }
    return dp[y] === Infinity ? -1 : dp[y];
}