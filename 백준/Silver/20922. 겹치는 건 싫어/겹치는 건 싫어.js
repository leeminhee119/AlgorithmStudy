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
  const numbers = lines[1].split(" ").map(Number);

  let s = 0;
  let e = 0;
  let answer = 0;
  const cntDict = Array.from({ length: 100000 + 1 }, () => 0);
  while (s <= e && e < N) {
    if (cntDict[numbers[e]] + 1 > K) {
      cntDict[numbers[s]]--;
      s++;
      continue;
    }
    answer = Math.max(answer, e - s + 1);
    cntDict[numbers[e]]++;
    e++;
  }

  console.log(answer);
}
