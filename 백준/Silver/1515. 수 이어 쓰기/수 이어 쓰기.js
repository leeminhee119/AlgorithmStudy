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
  const rest = lines[0].split("").map(Number);
  let cur = 1;
  let idx = 0;
  while (true) {
    if (idx >= rest.length) break;
    const curNums = cur.toString().split("").map(Number);
    for (let i = 0; i < curNums.length; i++) {
      if (idx >= rest.length) break;
      if (curNums[i] === rest[idx]) {
        idx++;
      }
    }
    cur++;
  }
  console.log(cur - 1);
}
