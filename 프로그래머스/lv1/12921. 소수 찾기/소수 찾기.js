function isSosu(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function solution(n) {
    dp = Array(n+1).fill(true).fill(false, 0, 2)
    for (let i = 2; i * i <= n; i++) {
        if (dp[i]) {
            for (let j = i * i; j <= n; j += i) {
                dp[j] = false;
            }
        }
    }
    return dp.reduce((acc, cur) => cur ? acc + 1 : acc, 0)
}