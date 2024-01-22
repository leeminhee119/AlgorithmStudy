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
  const prices = input.slice(1).map((rowStr) => rowStr.split(" ").map(Number));
  const garden = Array.from({ length: N }, () => new Array(N).fill(false));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function isFlowerable(x, y) {
    for (let i = 0; i < dx.length; i++) {
      if (garden[x + dx[i]][y + dy[i]] === true) {
        return false;
      }
    }
    return true;
  }

  function flower(x, y, isFlower) {
    garden[x][y] = isFlower;
    for (let i = 0; i < dx.length; i++) {
      garden[x + dx[i]][y + dy[i]] = isFlower;
    }
  }

  function getPrice() {
    let total = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (garden[i][j]) {
          total += prices[i][j];
        }
      }
    }
    return total;
  }

  let minCost = 200 * 5 * 3;

  function dfs(index) {
    if (index === 3) {
      const price = getPrice();
      if (price < minCost) {
        minCost = price;
      }
      return;
    }
    for (let i = 1; i < N - 1; i++) {
      for (let j = 1; j < N - 1; j++) {
        if (isFlowerable(i, j)) {
          flower(i, j, true);
          dfs(index + 1);
          flower(i, j, false);
        }
      }
    }
  }

  dfs(0);
  console.log(minCost);
}
