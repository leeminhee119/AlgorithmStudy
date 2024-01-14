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
  const N = parseInt(input[0]);
  const graph = input.slice(1).map((strLine) => strLine.split(""));
  let countNeg = 0;
  let countPos = 0;
  const visitedPos = Array.from({ length: N }, () => new Array(N).fill(false));
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (!visitedPos[x][y]) {
        dfs(graph, [x, y], visitedPos, true);
        countPos++;
      }
    }
  }
  const visitedNeg = Array.from({ length: N }, () => new Array(N).fill(false));
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (!visitedNeg[x][y]) {
        dfs(graph, [x, y], visitedNeg, false);
        countNeg++;
      }
    }
  }
  console.log(countNeg, countPos);
}

function dfs(graph, start, visited, positive) {
  const stack = [start];
  const [x, y] = start;
  visited[x][y] = true;
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, -1, 1];
  const curColor = graph[x][y];
  while (stack.length) {
    const [x, y] = stack.pop();
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= 0 &&
        nx < graph.length &&
        ny >= 0 &&
        ny < graph.length &&
        !visited[nx][ny]
      ) {
        const nextColor = graph[nx][ny];
        let sameColor = nextColor === curColor;
        if (positive) {
          if (curColor === "R" || curColor === "G") {
            if (nextColor === "R" || nextColor === "G") {
              sameColor = true;
            }
          }
        }
        if (sameColor) {
          stack.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }
}
