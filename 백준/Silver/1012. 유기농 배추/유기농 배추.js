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
  const T = Number(input[0]);
  const inputs = input.slice(1).map((row) => row.split(" ").map(Number));
  for (let cycle = 0; cycle < T; cycle++) {
    const [M, N, K] = inputs.shift();
    const graph = Array.from({ length: N }, () => new Array(M).fill(0));
    for (let i = 0; i < K; i++) {
      const [x, y] = inputs.shift();
      graph[y][x] = 1;
    }

    let cnt = 0;
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < M; x++) {
        if (graph[y][x] === 1) {
          dfs([x, y], graph, N, M);
          cnt++;
        }
      }
    }
    console.log(cnt);
  }

  function dfs(start, graph, N, M) {
    const [cx, cy] = start;
    graph[cy][cx] = 0;
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    for (let i = 0; i < dx.length; i++) {
      const [nx, ny] = [cx + dx[i], cy + dy[i]];
      if (nx < 0 || ny < 0 || nx >= M || ny >= N || graph[ny][nx] === 0) {
        continue;
      }
      graph[ny][nx] = 0;
      dfs([nx, ny], graph, N, M);
    }
  }
}
