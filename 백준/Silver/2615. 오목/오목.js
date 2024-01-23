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
  const graph = input.map((rowStr) => rowStr.split(" ").map(Number));
  const dx = [-1, 1, 1, 0];
  const dy = [1, 0, 1, 1];
  let isOver = false;

  function isContinued(nx, ny, number) {
    if (nx >= 0 && ny >= 0 && nx < 19 && ny < 19 && graph[nx][ny] === number) {
      return true;
    }
    return false;
  }

  function check(x, y, number) {
    for (let i = 0; i < dx.length; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      let cnt = 1;
      while (true) {
        if (!isContinued(nx, ny, number)) {
          break;
        }
        cnt++;
        nx = nx + dx[i];
        ny = ny + dy[i];
      }
      if (cnt === 5) {
        const px = x - dx[i];
        const py = y - dy[i];
        if (isContinued(px, py, number)) {
          break;
        }
        console.log(number);
        console.log(x + 1, y + 1);
        isOver = true;
        return;
      }
    }
  }

  for (let i = 0; i < 19; i++) {
    for (let j = 0; j < 19; j++) {
      if (isOver) {
        return;
      }
      if (graph[i][j]) {
        check(i, j, graph[i][j]);
      }
    }
  }
  console.log(0);
}
