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
  const sequence = lines[1];

  // 햄버거를 먹을 수 있는 사람의 최대 수
  // 거리가 K까지의 햄버거만 먹을 수 있음

  // 사람마다 먹을 수 있는 햄버거들 중 가장 왼쪽 애부터 먹는다.

  let answer = 0;
  const eaten = Array.from({ length: N }, () => false);
  for (let i = 0; i < N; i++) {
    if (sequence[i] === "H") continue;
    for (let j = Math.max(i - K, 0); j <= i + K && j < N; j++) {
      if (sequence[j] === "P" || eaten[j]) continue;
      eaten[j] = true;
      answer++;
      break;
    }
  }
  console.log(answer);
}
