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
  const costs = Array.from({ length: N + 1 }, () => new Array(N + 1));
  input.slice(1).forEach((row, rowIndex) => {
    const newRow = "0 ".concat(row);
    costs[rowIndex + 1] = newRow.split(" ").map(Number);
  });

  let minCost = 10000000000;

  function backtrack(curIdx, start, total, visited) {
    if (total > minCost) {
      return;
    }
    if (visited.length === N) {
      total += costs[curIdx][start];
      if (total < minCost && costs[curIdx][start]) {
        minCost = total;
      }
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (visited.includes(i)) {
        continue;
      }
      if (costs[curIdx][i] === 0) {
        continue;
      }
      visited.push(i);
      backtrack(i, start, total + costs[curIdx][i], visited);
      visited.pop();
    }
  }

  for (let i = 1; i <= N; i++) {
    const visited = [];
    visited.push(i);
    backtrack(i, i, 0, visited);
  }

  console.log(minCost);
}
