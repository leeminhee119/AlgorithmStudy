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
  const [N, M] = lines[0].split(" ").map(Number); // 점 N개, 선분 M개
  const positions = lines[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const seonbuns = lines.slice(2).map((line) => line.split(" ").map(Number));

  seonbuns.forEach(([s, e]) => {
    const si = binSearch(0, N - 1, s);
    const ei = binSearch(0, N - 1, e);
    if (positions[ei] === e) {
      console.log(ei - si + 1);
    } else {
      console.log(ei - si);
    }
  });

  function binSearch(si, ei, target) {
    if (si > ei) {
      return si;
    }
    const mi = Math.floor((si + ei) / 2);
    if (positions[mi] < target) {
      return binSearch(mi + 1, ei, target);
    } else {
      return binSearch(si, mi - 1, target);
    }
  }
}
