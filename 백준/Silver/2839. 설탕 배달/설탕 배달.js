const fs = require("fs");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

function solution(input) {
  const N = Number(input[0]);
  const dp = Array.from({ length: 5000 + 1 }, () => -1);
  dp[3] = 1;
  dp[5] = 1;
  for (let i = 6; i <= N; i++) {
    if (dp[i - 5] > -1 && dp[i - 3] > -1) {
      dp[i] = Math.min(dp[i - 3], dp[i - 5]) + 1;
    } else if (dp[i - 5] > -1) {
      dp[i] = dp[i - 5] + 1;
    } else if (dp[i - 3] > -1) {
      dp[i] = dp[i - 3] + 1;
    }
  }
  console.log(dp[N]);
}
