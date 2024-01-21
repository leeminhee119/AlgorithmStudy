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
  const numbers = input[1].split(" ").map(Number);
  const counts = input[2].split(" ").map(Number);

  let maxSum = -1000000000;
  let minSum = 1000000000;
  function backtrack(curIdx, sum, curCounts) {
    if (curIdx === N - 1) {
      if (sum >= maxSum) {
        maxSum = sum;
      }
      if (sum <= minSum) {
        minSum = sum;
      }
      return;
    }

    for (let i = 0; i < 4; i++) {
      if (curCounts[i] === 0) {
        continue;
      }
      curCounts[i]--;
      switch (i) {
        case 0:
          backtrack(curIdx + 1, sum + numbers[curIdx + 1], curCounts);
          break;
        case 1:
          backtrack(curIdx + 1, sum - numbers[curIdx + 1], curCounts);
          break;
        case 2:
          backtrack(curIdx + 1, sum * numbers[curIdx + 1], curCounts);
          break;
        case 3:
          backtrack(curIdx + 1, parseInt(sum / numbers[curIdx + 1]), curCounts);
          break;
      }

      curCounts[i]++;
    }
  }
  backtrack(0, numbers[0], counts);
  console.log(maxSum ? maxSum : 0);
  console.log(minSum ? minSum : 0);
}
