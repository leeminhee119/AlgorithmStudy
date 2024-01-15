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
  const [M, N, K] = input[0].split(" ").map(Number);
  const graph = Array.from({ length: M }, () => new Array(N).fill(0));
  input.slice(1).forEach((lineStr, lineIdx) => {
    const [sx, sy, ex, ey] = lineStr.split(" ").map(Number);
    for (let x = sx; x < ex; x++) {
      for (let y = sy; y < ey; y++) {
        graph[y][x] = -1;
      }
    }
  });
  const counts = [];
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (graph[y][x] === 1 || graph[y][x] === -1) {
        continue;
      }
      counts.push(dfs(graph, [x, y]));
    }
  }
  console.log(counts.length);
  console.log(counts.sort((a, b) => a - b).join(" "));
}

function dfs(graph, start) {
  const stack = [start];
  const [x, y] = start;
  graph[y][x] = 1;
  let count = 1;
  while (stack.length) {
    const [x, y] = stack.pop();
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= graph[0].length || ny >= graph.length) {
        continue;
      }
      if (graph[ny][nx] === 1 || graph[ny][nx] === -1) {
        continue;
      }
      graph[ny][nx] = 1;
      stack.push([nx, ny]);
      count++;
    }
  }
  return count;
}
