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

  // 버리고, 아래에 깔고, 버리고, ... 반복
  // 1, 2, 3, ..., N
  // start 인덱스를 플래그로 두기 -> push 만 하면된다. O(1)

  const arr = Array.from({ length: N + 1 }, (_, i) => i);
  let startIdx = 1;
  let cnt = 0;
  while (startIdx < arr.length - 1) {
    cnt++;
    if (cnt % 2 === 0) {
      arr.push(arr[startIdx]);
    }
    startIdx++;
  }
  console.log(arr[startIdx]);
}
