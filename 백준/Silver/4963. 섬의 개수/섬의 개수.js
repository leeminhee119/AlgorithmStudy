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
  let curIdx = 0;
  const counts = [];
  while (curIdx < input.length) {
    const [w, h] = input[curIdx].split(" ").map(Number);
    if (w === 0 && h === 0) break;
    const graph = Array.from({ length: h }, () => new Array());
    for (let i = 0; i <= h - 1; i++) {
      const curLine = input[i + curIdx + 1];
      graph[i] = [...curLine.split(" ")];
    }
    const visited = Array.from({ length: h }, () => new Array(w).fill(false));
    let count = 0;
    for (let x = 0; x < graph.length; x++) {
      for (let y = 0; y < graph[x].length; y++) {
        if (graph[x][y] === "1" && !visited[x][y]) {
          dfs(graph, [x, y], visited);
          count++;
        }
      }
    }
    counts.push(count);
    curIdx += h + 1;
  }
  console.log(counts.join("\n"));
}

function dfs(graph, start, visited) {
  const dx = [1, -1, 0, 0, 1, -1, -1, 1];
  const dy = [0, 0, -1, 1, 1, -1, 1, -1];
  const stack = [start];
  const [x, y] = start;
  visited[x][y] = true;
  while (stack.length) {
    const [x, y] = stack.pop();
    for (let i = 0; i < dx.length; i++) {
      const nextX = x + dx[i];
      const nextY = y + dy[i];
      if (
        nextX >= 0 &&
        nextX < graph.length &&
        nextY >= 0 &&
        nextY < graph[0].length &&
        graph[nextX][nextY] === "1" &&
        !visited[nextX][nextY]
      ) {
        stack.push([nextX, nextY]);
        visited[nextX][nextY] = true;
      }
    }
  }
}
