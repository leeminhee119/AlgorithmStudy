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
  const A = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let maxLength = 2;

  if (N >= 3) {
    for (let start = 0; start < A.length - 2; start++) {
      let end = start + 2;
      while (end <= A.length - 1) {
        if (A[start] + A[start + 1] > A[end]) {
          maxLength = Math.max(maxLength, end - start + 1);
          end++;
        } else {
          break;
        }
      }
    }
    console.log(maxLength);
  } else {
    console.log(A.length);
  }
}
