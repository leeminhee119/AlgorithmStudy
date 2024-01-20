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
  const [N, S] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);
  let count = 0;

  function backtrack(index, total) {
    if (total === S) {
      count++;
    }
    if (index === N - 1) {
      return;
    }
    for (let i = index + 1; i < N; i++) {
      backtrack(i, total + numbers[i]);
    }
  }

  for (let i = 0; i < N; i++) {
    backtrack(i, numbers[i]);
  }
  console.log(count);
}
