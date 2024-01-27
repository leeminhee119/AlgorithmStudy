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
  const T = +input.shift();

  function rotate45(graph, n, reverse, cnt, total) {
    if (cnt === total) {
      return graph;
    }
    const copied = JSON.parse(JSON.stringify(graph));
    const mid = (n - 1) / 2;
    for (let i = 0; i < n; i++) {
      const mainDiagonal = reverse ? graph[n - i - 1][n - i - 1] : graph[i][i];
      const vertical = graph[i][mid];
      const subDiagonal = graph[i][n - i - 1];
      const horizontal = reverse ? graph[mid][n - i - 1] : graph[mid][i];
      copied[i].splice(i, 1, reverse ? vertical : horizontal); // 주 대각선
      copied[i].splice(mid, 1, reverse ? subDiagonal : mainDiagonal); // 열
      copied[i].splice(n - i - 1, 1, reverse ? horizontal : vertical); // 부 대각선
      copied[mid].splice(n - i - 1, 1, reverse ? mainDiagonal : subDiagonal); // 행
    }
    return rotate45(copied, n, reverse, cnt + 1, total);
  }

  for (let i = 0; i < T; i++) {
    const [n, d] = input.shift().split(" ").map(Number);
    const graph = [];
    for (let line = 0; line < n; line++) {
      const row = input.shift();
      graph.push(row.split(" ").map(Number));
    }
    const total = parseInt(d / 45);
    const result = rotate45(graph, n, d < 0, 0, Math.abs(total));
    console.log(result.map((row) => row.join(" ")).join("\n"));
  }
}
