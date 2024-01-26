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
  const [N, M] = input[0].split(" ").map(Number);
  const city = input.slice(1).map((str) => str.split(" ").map(Number));
  const chicken = [];
  const house = [];
  city.forEach((row, rowIndex) => {
    row.forEach((item, colIndex) => {
      if (item === 2) {
        chicken.push([rowIndex, colIndex]);
      }
      if (item === 1) {
        house.push([rowIndex, colIndex]);
      }
    });
  });

  let minTotalDistance = Infinity;

  function getMinDistance(check) {
    let sum = 0;
    house.forEach(([hx, hy]) => {
      let min = Infinity;
      chicken.forEach(([cx, cy], chIndex) => {
        if (check[chIndex]) {
          min = Math.min(min, Math.abs(hx - cx) + Math.abs(hy - cy));
        }
      });
      sum += min;
    });
    return sum;
  }

  const check = new Array(chicken.length).fill(false);

  function dfs(idx, cnt) {
    if (cnt === M) {
      minTotalDistance = Math.min(minTotalDistance, getMinDistance(check));
      return;
    }
    for (let i = idx; i < chicken.length; i++) {
      if (check[i] === true) continue;
      check[i] = true;
      dfs(i, cnt + 1);
      check[i] = false;
    }
  }

  dfs(0, 0);

  console.log(minTotalDistance);
}
