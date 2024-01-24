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
  const N = Number(input[0]);
  const powers = input.slice(1).map((row) => row.split(" ").map(Number));
  let minDiff = 999999999;

  const visited = new Array(N).fill(false); // 팀 구분을 위함
  function dfs(member) {
    if (member === N) {
      let startS = 0;
      let linkS = 0;
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          if (visited[i] && visited[j]) startS += powers[i][j] + powers[j][i];
          if (!visited[i] && !visited[j]) linkS += powers[i][j] + powers[j][i];
        }
      }
      const curDiff = Math.abs(startS - linkS);
      if (curDiff < minDiff) {
        minDiff = curDiff;
      }
      return;
    }
    visited[member] = true;
    dfs(member + 1);
    visited[member] = false;
    dfs(member + 1);
  }

  dfs(0);

  console.log(minDiff);
}
