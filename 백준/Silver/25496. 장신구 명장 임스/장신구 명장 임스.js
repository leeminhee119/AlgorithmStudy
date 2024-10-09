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
  // 피로도 한도 200
  // 만들 수 있는 장신구의 최대 개수
  const [P, N] = lines[0].split(" ").map(Number);
  const neededPs = lines[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let diffP = 200 - P;
  let curIdx = 0;
  let count = 0;
  while (diffP > 0 && curIdx < N) {
    diffP -= neededPs[curIdx];
    curIdx++;
    count++;
  }
  console.log(count);
}
