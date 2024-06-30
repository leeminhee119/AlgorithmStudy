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
  const calendar = new Array(366).fill(0);
  input
    .slice(1)
    .map((str) => str.split(" ").map(Number))
    .forEach(([start, end]) => {
      for (let i = start; i <= end; i++) {
        calendar[i] += 1;
      }
    });
  let answer = 0;
  let temp = [];
  calendar.slice(1).forEach((row) => {
    if (row) {
      temp.push(row);
    } else if (row === 0 && temp.length) {
      answer += temp.length * Math.max(...temp);
      temp = [];
    }
  });
  if (temp.length) {
    answer += temp.length * Math.max(...temp);
  }
  console.log(answer);
}
