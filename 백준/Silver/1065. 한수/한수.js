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
  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (isHansu(i)) count++;
  }
  function isHansu(number) {
    if (number < 10) return true;
    const digits = number.toString().split("").map(Number);
    const diff = digits[1] - digits[0];
    let idx = 1;
    while (idx < digits.length - 1) {
      if (digits[idx + 1] - digits[idx] !== diff) {
        return false;
      }
      idx++;
    }
    return true;
  }
  console.log(count);
}
