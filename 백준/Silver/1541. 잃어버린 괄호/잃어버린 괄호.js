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
  let total = 0;
  const chunks = input[0].split("-");
  chunks.forEach((equation, index) => {
    const numbers = equation.split("+");
    const sum = numbers.map(Number).reduce((acc, cur) => acc + cur, 0);
    if (index === 0) {
      total = sum;
    } else {
      total -= sum;
    }
  });
  console.log(total);
}
