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

function isSquare(number) {
  if (parseInt(Math.sqrt(number)) === Math.sqrt(number)) {
    return true;
  }
  return false;
}

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const graph = input.slice(1).map((str) => str.split("").map(Number));

  let maxSquare = -1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      for (let dx = -N; dx < N; dx++) {
        for (let dy = -M; dy < M; dy++) {
          let number = "";
          let [x, y] = [i, j]; // 복사해두기
          while (x >= 0 && x < N && y >= 0 && y < M) {
            number += graph[x][y];
            if (dx === 0 && dy === 0) {
              break;
            }
            if (isSquare(+number)) {
              maxSquare = Math.max(maxSquare, +number);
            }
            x += dx;
            y += dy;
          }
        }
      }
    }
  }

  console.log(maxSquare);
}
