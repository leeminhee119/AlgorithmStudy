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
  const records = lines.slice(1);

  // 1. 백준 문제는 제일 마지막에, 문제 번호가 작은 순서대로
  // 2. 나머지는 길이가 짧은 순으로
  // 3. 길이가 같다면 사전 순으로

  const [bojs, others] = records.reduce(
    ([bojs, others], cur) => {
      if (
        cur.startsWith("boj.kr/") &&
        cur.split("/")[1] == +cur.split("/")[1]
      ) {
        bojs.push(cur);
      } else {
        others.push(cur);
      }
      return [bojs, others];
    },
    Array.from({ length: 2 }, () => new Array())
  );

  bojs.sort((a, b) => Number(a.split("/")[1]) - Number(b.split("/")[1]));
  others.sort();
  others.sort((a, b) => a.length - b.length);

  others.forEach((other) => {
    console.log(other);
  });
  bojs.forEach((boj) => {
    console.log(boj);
  });
}
