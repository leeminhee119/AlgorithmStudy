function solution(n) {
    const dp = new Array(n + 1);
    let f = 0;
    while (f <= n) {
        f++;
        if (f <= 2) {
            dp[f] = f;
            continue;
        }
        dp[f] = (dp[f - 1] + dp[f - 2]) % 1000000007;
    }
    return dp[n];
}