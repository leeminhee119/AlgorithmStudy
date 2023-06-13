// 칸이 n개인 경우, 칸이 n-2개였을 때의 방법에서 2칸만 더 가면 되고, 칸이 n-1개였을 때의 방법에서 1칸만 더 가면 됩니다.
// 즉, 두 방법의 개수를 합한 만큼이 n칸의 끝에 도달하는 방법입니다.
// -> dp로 풀 수 있습니다.
// dp
function solution(n) {
    const dp = new Array(n).fill(1234567);
    dp[1] = 1;
    dp[2] = 2; // 1 1, 2
    
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
        console.log('dp[i]',i, dp[i])
    }
    return dp[n];
}
