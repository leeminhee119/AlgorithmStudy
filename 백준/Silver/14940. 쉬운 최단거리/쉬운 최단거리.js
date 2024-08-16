const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

readline
  .on("line", function (line) {
    lines.push(line);
  })
  .on("close", function () {
    solution(lines);
    process.exit();
  });

function solution(lines) {
  const [n, m] = lines[0].split(" ").map(Number);
  const graph = lines.slice(1).map((line) => line.split(" ").map(Number));
  // 지점 ~ 지점 사이의 거리는 곧 최소 거리
  // bfs
  let destination;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 2) {
        destination = [i, j];
      }
    }
  }

  const queue = [destination];
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const distances = Array.from({ length: n }, () => new Array(m).fill(0));
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < dx.length; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx === destination[0] && ny === destination[1]) {
        continue;
      }
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        continue;
      }
      if (graph[nx][ny] === 0 || distances[nx][ny]) {
        continue;
      }
      distances[nx][ny] = distances[x][y] + 1;
      queue.push([nx, ny]);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === destination[0] && j === destination[1]) continue;
      if (distances[i][j] === 0 && graph[i][j] !== 0) {
        distances[i][j] = -1;
      }
    }
  }

  console.log(distances.map((row) => row.join(" ")).join("\n"));
}
