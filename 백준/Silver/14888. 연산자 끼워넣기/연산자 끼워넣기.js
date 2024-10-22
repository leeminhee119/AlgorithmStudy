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
  const numbers = lines[1].split(" ").map(Number);
  const counts = lines[2].split(" ").map(Number);
  const operations = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => (a < 0 ? -Math.floor(-a / b) : Math.floor(a / b)),
  ];

  let max = -100000000000;
  let min = 100000000000;
  // 완전 탐색 - O((N - 1)!)
  function backtrack(counts, res, index) {
    if (index === N - 1) {
      max = Math.max(max, res);
      min = Math.min(min, res);
      return;
    }
    for (let i = 0; i < 4; i++) {
      if (counts[i] <= 0) {
        continue;
      }
      const next = operations[i](res, numbers[index + 1]);
      counts[i]--;
      backtrack(counts, next, index + 1);
      counts[i]++;
    }
  }

  backtrack(counts, numbers[0], 0);

  // 결과의 최댓값
  console.log(max ? max : 0);
  // 결과의 최소값
  console.log(min ? min : 0);
}
