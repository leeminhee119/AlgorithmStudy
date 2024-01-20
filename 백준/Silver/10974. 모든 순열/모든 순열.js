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
  const n = Number(input[0]);
  const numArr = [];
  for (let i = 1; i <= n; i++) {
    numArr.push(i);
  }
  function permutation(arr, r) {
    const result = [];
    if (r === 1) {
      return arr.map((el) => [el]);
    }
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const per = permutation(rest, r - 1);
      const attached = per.map((el) => [fixed, ...el]);
      result.push(...attached);
    });
    return result;
  }
  const result = permutation(numArr, n);
  console.log(result.map((el) => el.join(" ")).join("\n"));
}
