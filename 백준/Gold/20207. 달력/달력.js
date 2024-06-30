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
  const N = +lines[0];
  const schedules = lines.slice(1).map((line) => line.split(" ").map(Number));

  const calendar = schedules.reduce((arr, [s, e]) => {
    for (let i = s; i <= e; i++) {
      arr[i]++;
    }
    return arr;
  }, new Array(366).fill(0));

  let answer = 0;
  const visited = new Array(366).fill(false);

  function getArea(start, width, height) {
    if (!calendar[start]) {
      return width * height;
    }
    visited[start] = true;
    return getArea(start + 1, width + 1, Math.max(height, calendar[start]));
  }

  for (let i = 1; i <= 365; i++) {
    if (visited[i]) continue;
    if (!calendar[i]) continue;
    answer += getArea(i, 0, 0);
  }
  console.log(answer);
}
