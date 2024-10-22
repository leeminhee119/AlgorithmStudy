function solution(x, y, n) {
    let answer = Infinity;
    
    const operations = [(i) => i + n, (i) => 2 * i, (i) => 3 * i];
    const dp = Array.from({length: y + 1}, () => Infinity);
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