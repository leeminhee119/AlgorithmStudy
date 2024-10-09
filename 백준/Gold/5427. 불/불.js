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
  const T = +lines[0];
  let index = 1;
  for (let i = 0; i < T; i++) {
    const [w, h] = lines[index].split(" ").map(Number);
    const building = lines
      .slice(index + 1, index + h + 1)
      .map((line) => line.split(""));
    index += h + 1;

    // 불이 큐에 먼저 있어야 '이제 불이 붙으려는 칸'을 피할 수 있음
    function bfs(starts) {
      const dx = [-1, 1, 0, 0];
      const dy = [0, 0, -1, 1];

      const queue = starts;
      let head = 0;
      while (queue[head]) {
        const [x, y] = queue[head++];
        for (let i = 0; i < 4; i++) {
          const [nx, ny] = [x + dx[i], y + dy[i]];

          if (nx < 0 || ny < 0 || nx >= h || ny >= w) {
            if (building[x][y] !== "*") {
              return building[x][y] + 1;
            }
            continue;
          }

          if (building[nx][ny] !== ".") {
            continue;
          }

          if (building[x][y] === "*") {
            building[nx][ny] = "*";
          } else {
            // 상근이 이동
            building[nx][ny] = building[x][y] + 1;
          }
          queue.push([nx, ny]);
        }
      }
      return false;
    }

    const starts = [];
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (building[i][j] === "*" || building[i][j] === "@") {
          starts.push([i, j]);
        }
      }
    }
    const person = starts.findIndex(([x, y]) => building[x][y] === "@");

    // 불을 먼저 이동시키기 위해 시작 위치를 끝으로 이동
    const [[px, py]] = starts.splice(person, 1);
    building[px][py] = 0;
    starts.push([px, py]);

    const ans = bfs(starts);
    console.log(ans ? ans : "IMPOSSIBLE");
  }
}
