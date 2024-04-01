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
  const N = +input[0];
  const M = +input[1];
  const costs = input
    .slice(2)
    .map((str) => str.split(" ").map(Number))
    .sort((a, b) => a[2] - b[2]);
  const parents = Array.from({ length: N }, (_, i) => i);
  let answer = 0;

  for (let i = 0; i < costs.length; i++) {
    const [x, y, cost] = costs[i];
    if (UnionFind(x, y, parents)) {
      answer += cost;
    }
  }

  function findParent(x, parents) {
    if (x === parents[x]) return x;
    return findParent(parents[x], parents);
  }

  function UnionFind(x, y, parents) {
    const [px, py] = [findParent(x, parents), findParent(y, parents)];
    if (px === py) return false;
    if (px < py) {
      parents[py] = px;
    } else {
      parents[px] = py;
    }
    return true;
  }

  console.log(answer);
}
