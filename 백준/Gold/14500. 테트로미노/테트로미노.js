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
  const graph = input.slice(1).map((row) => row.split(" ").map(Number));
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let maxSum = 0;

  function dfs(start, cnt, visited, curSum) {
    if (cnt === 4) {
      maxSum = Math.max(maxSum, curSum);
      return;
    }
    const [x, y] = start;

    for (let i = 0; i < dx.length; i++) {
      const [nX, nY] = [x + dx[i], y + dy[i]];
      if (nX < 0 || nY < 0 || nX >= N || nY >= M) {
        continue;
      }
      if (visited[nX][nY]) {
        continue;
      }
      if (cnt === 2) {
        visited[nX][nY] = true;
        dfs([x, y], cnt + 1, visited, curSum + graph[nX][nY]);
        visited[nX][nY] = false;
      }
      visited[nX][nY] = true;
      dfs([nX, nY], cnt + 1, visited, curSum + graph[nX][nY]);
      visited[nX][nY] = false;
    }
  }

  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      visited[i][j] = true;
      dfs([i, j], 0, visited, 0);
      visited[i][j] = false;
    }
  }
  console.log(maxSum);
}
