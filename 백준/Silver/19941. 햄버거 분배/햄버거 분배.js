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
  const [N, K] = lines[0].split(" ").map(Number);
  const bench = lines[1].split("");

  // 먹을 수 있는 햄버거들 중 최대한 왼쪽꺼를 먹어야
  // 다음 사람도 햄버거를 먹을 수 있는 확률이 높아진다.

  let count = 0;
  for (let i = 0; i < N; i++) {
    if (bench[i] !== "P") {
      continue;
    }
    const start = i - K;
    const end = i + K;
    for (let j = start; j <= end; j++) {
      if (j >= N) break;
      if (bench[j] === "H") {
        bench[j] = 0;
        count++;
        break;
      }
    }
  }

  console.log(count);
}
