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
  const [N, M] = lines[0].split(" ").map(Number);
  const costs = lines.slice(1).map((line) => line.split(" ").map(Number));

  // 최소한의 비용으로 달까지
  let answer = Infinity;

  function bfs(start, cost) {
    const queue = [[start, undefined, cost]];
    const dx = [1, 1, 1];
    const dy = [-1, 0, 1];

    while (queue.length) {
      const [[x, y], direction, total] = queue.shift();
      // 달에 도착한 경우
      if (x === N - 1) {
        answer = Math.min(answer, total);
      }
      for (let i = 0; i < dx.length; i++) {
        // 연속으로 같은 방향 금지
        if (i === direction) continue;
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx >= N || ny < 0 || ny >= M) continue;
        queue.push([[nx, ny], i, total + costs[nx][ny]]);
      }
    }
  }

  // 지구의 모든 시작점이 후보
  for (let i = 0; i < M; i++) {
    bfs([0, i], costs[0][i]);
  }

  console.log(answer);
}
