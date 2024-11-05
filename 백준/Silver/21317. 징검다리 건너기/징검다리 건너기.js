const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

readline
  .on("line", function (line) {
    lines.push(line);
  })
  .on("pause", function () {
    solution(lines);
    // process.exit();
    readline.close();
  });

function solution(lines) {
  const N = +lines[0];
  const energies = lines.slice(1).map((line) => line.split(" ").map(Number));
  energies.unshift(undefined); // index 맞추기
  const K = +lines[N];
  const dp = new Array(N + 1).fill(Infinity); // 1번부터 i번까지 이동하는 데 필요한 최소 에너지
  dp[1] = 0;
  if (N === 1) {
    console.log(0);
    return;
  }
  dp[2] = energies[1][0];
  for (let i = 3; i <= N; i++) {
    dp[i] = Math.min(
      dp[i - 1] + energies[i - 1][0],
      dp[i - 2] + energies[i - 2][1]
    );
  }
  let dp2 = [...dp];
  let min = dp2[N];
  for (let i = 4; i <= N; i++) {
    dp2[i] = Math.min(dp2[i], dp2[i - 3] + K);
    for (let j = i + 1; j <= N; j++) {
      dp2[j] = Math.min(dp2[j], dp2[j - 1] + energies[j - 1][0]);
      dp2[j] = Math.min(dp2[j], dp2[j - 2] + energies[j - 2][1]);
    }
    min = Math.min(min, dp2[N]);
    dp2 = [...dp];
  }
  console.log(min);
}
