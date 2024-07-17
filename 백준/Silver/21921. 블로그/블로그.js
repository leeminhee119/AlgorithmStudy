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
  const [N, X] = lines[0].split(" ").map(Number);
  const visitorCnt = lines[1].split(" ").map(Number);

  let start = 0;
  let end = X;
  let curSum = visitorCnt.slice(start, end).reduce((acc, cur) => acc + cur, 0);
  let maxSum = curSum;
  let maxCnt = 1;
  while (end < N) {
    curSum -= visitorCnt[start++];
    curSum += visitorCnt[end++];
    if (curSum === maxSum) {
      maxCnt++;
    } else if (curSum > maxSum) {
      maxCnt = 1;
      maxSum = curSum;
    }
  }

  if (maxSum === 0) {
    console.log("SAD");
    return;
  }

  console.log(maxSum);
  console.log(maxCnt);
}
