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
    const N = +lines[0];
    const infos = lines.slice(1).map((line) => line.split(" ").map(Number));
    infos.unshift(undefined);
    solution(N, infos);
    process.exit();
  });

function solution(N, infos) {
  const dp = new Array(N + 2).fill(0); // N일에 받을 수 있는 금액의 최대값
  for (let i = 1; i <= N; i++) {
    const next = i + infos[i][0];
    if (next > N + 1) continue;
    for (let j = next; j <= N + 1; j++) {
      dp[j] = Math.max(dp[j], dp[i] + infos[i][1]);
    }
  }
  console.log(Math.max(...dp));
}
