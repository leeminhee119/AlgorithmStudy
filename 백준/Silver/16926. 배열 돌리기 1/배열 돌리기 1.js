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
  const [N, M, R] = input[0].split(" ").map(Number);
  const graph = input.slice(1).map((str) => str.split(" ").map(Number));
  function rotate(graph, count) {
    if (count === R) return graph;
    const newGraph = Array.from({ length: N }, () => new Array(M));
    for (let layer = 0; layer < Math.floor(Math.min(N, M) / 2); layer++) {
      for (let col = layer; col < M - layer; col++) {
        if (col === M - layer - 1) {
          newGraph[layer][col] = graph[layer + 1][col];
          break;
        }
        newGraph[layer][col] = graph[layer][col + 1];
      }
      for (let row = layer + 1; row < N - layer - 1; row++) {
        newGraph[row][M - layer - 1] = graph[row + 1][M - layer - 1];
      }
      for (let col = M - layer - 1; col >= layer; col--) {
        if (col === layer) {
          newGraph[N - layer - 1][col] = graph[N - layer - 2][col];
          break;
        }
        newGraph[N - layer - 1][col] = graph[N - layer - 1][col - 1];
      }
      for (let row = N - layer - 1; row > layer; row--) {
        newGraph[row][layer] = graph[row - 1][layer];
      }
    }
    return rotate(newGraph, count + 1);
  }

  const result = rotate(graph, 0);
  console.log(result.map((row) => row.join(" ")).join("\n"));
}
