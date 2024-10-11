const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

readline
  .on("line", function (line) {
    lines.push(line);
  })
  .on("close", function () {
    solution(lines);
    process.exit();
  });

function solution(lines) {
  const N = +lines[0];
  // 5킬로그램을 더 많이 가져가야 유리
  // dp[N] = dp[N - 5] + 1;
  const dp = Array.from({ length: N + 1 }, () => -1);
  dp[3] = 1;
  dp[5] = 1;

  for (let i = 6; i <= N; i++) {
    if (dp[i - 5] === -1) {
      if (dp[i - 3] === -1) {
        continue;
      }
      dp[i] = dp[i - 3] + 1;
      continue;
    }
    dp[i] = dp[i - 5] + 1;
  }
  console.log(dp[N]);
}
