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
  const [M, N] = lines[0].split(" ").map(Number); // 가로 M, 세로 N
  const tomatoes = lines.slice(1).map((line) => line.split(" ").map(Number));

  function bfs(starts) {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    const queue = starts;
    let day = 0;
    let head = 0;
    while (queue[head]) {
      const [x, y] = queue[head++];
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || nx >= N || ny >= M) {
          continue;
        }
        if (tomatoes[nx][ny] !== 0) {
          continue;
        }
        tomatoes[nx][ny] = tomatoes[x][y] + 1;
        day = Math.max(day, tomatoes[nx][ny]);
        queue.push([nx, ny]);
      }
    }
    return day;
  }

  const starts = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (tomatoes[i][j] === 1) {
        starts.push([i, j]);
      }
    }
  }
  const ans = bfs(starts);
  if (!tomatoes.every((row) => row.every((cell) => cell !== 0)))
    console.log(-1);
  else console.log(ans ? ans - 1 : 0);
}
