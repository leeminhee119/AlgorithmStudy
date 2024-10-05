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
  const scores = lines.slice(1).map((line) => line.split(" ").map(Number));
  // 1. 남은일수가 적은 애부터
  // 2. 점수가 큰 애부터
  // 남은 일수가 같은 과제가 여러 개인 경우?
  // 남은일수마다 과제를 할당한 days 배열
  const days = Array.from({ length: 1000 });
  scores
    .sort((a, b) => b[1] - a[1])
    .forEach(([d, w]) => {
      // days[d]에 원소가 이미 있다면, days[d - i]가 비어있는 곳에 삽입
      let i = 0;
      while (days[d - i]) {
        i++;
      }
      days[d - i] = w;
    });

  console.log(days.slice(1).reduce((acc, cur) => (cur ? acc + cur : acc), 0));
}
