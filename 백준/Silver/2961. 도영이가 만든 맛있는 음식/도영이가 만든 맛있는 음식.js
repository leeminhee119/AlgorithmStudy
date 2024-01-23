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
  const ingredients = input.slice(1).map((str) => str.split(" ").map(Number));

  let minDiff = 1000000000;

  function combination(arr, r) {
    const result = [];
    if (r === 1) {
      return arr.map((el) => [el]);
    }
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(index + 1)];
      const comb = combination(rest, r - 1);
      const attached = comb.map((el) => [fixed, ...el]);
      result.push(...attached);
    });
    return result;
  }

  for (let i = 0; i < N; i++) {
    const combinations = combination(ingredients, i + 1);
    combinations.forEach((comb) => {
      const [S, B] = comb.reduce((acc, cur) => {
        const [S, B] = acc;
        return [S * cur[0], B + cur[1]];
      });
      const curDiff = Math.abs(S - B);
      if (curDiff < minDiff) {
        minDiff = curDiff;
      }
    });
  }
  console.log(minDiff);
}
