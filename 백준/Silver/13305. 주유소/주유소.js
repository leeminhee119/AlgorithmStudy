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
  const N = parseInt(input[0]);
  const distances = input[1].split(" ").map(Number);
  const prices = input[2].split(" ").map(Number);
  let answer = 0;
  let i = 0;
  while (i < prices.length - 1) {
    let nextCheapIdx = i + 1;
    while (
      nextCheapIdx < prices.length - 1 &&
      prices[nextCheapIdx] > prices[i]
    ) {
      nextCheapIdx++;
    }
    answer +=
      prices[i] *
      distances.slice(i, nextCheapIdx).reduce((acc, cur) => acc + cur, 0);
    i = nextCheapIdx;
  }
  console.log(answer);
}
