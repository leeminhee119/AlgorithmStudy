const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

function solution(input) {
  const N = Number(input[0]);
  const bars = input.slice(1).map((row) => row.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);
  const stack = [];
  let total = 0;
  for (let i = 0; i < N; i++) {
    const [curL, curH] = bars[i];
    if (stack.length && curH > stack[0][1]) {
      total += (curL - stack[0][0]) * stack[0][1];
      while (stack.length && curH >= stack[0][1]) {
        stack.pop();
      }
    }
    stack.push(bars[i]);
  }
  while (stack.length) {
    const cur = stack.pop();
    if (!stack.length) {
      total += cur[1];
      break;
    }
    while (stack.length && cur[1] > stack[stack.length - 1][1]) {
      stack.pop();
    }
    total += (cur[0] - stack[stack.length - 1][0]) * cur[1];
  }
  console.log(total)
}