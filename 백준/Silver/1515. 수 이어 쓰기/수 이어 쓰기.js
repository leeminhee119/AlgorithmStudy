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
  // 1부터 N까지 차례대로

  // 남은 숫자
  const digits = lines[0].split("");

  // N 중에 최솟값

  let pointer = 0; // points to digit
  let number = "1";

  while (pointer < digits.length) {
    let j = 0;
    while (j < number.length && pointer < digits.length) {
      if (number[j] === digits[pointer]) {
        pointer++;
      }
      j++;
    }
    number = (parseInt(number) + 1).toString();
  }
  console.log(parseInt(number) - 1);
}
