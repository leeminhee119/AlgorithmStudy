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
  // Enter와 Enter 사이에서
  // 고유한 닉네임의 개수

  let answer = 0;
  const inputs = lines.slice(1);
  const userGroups = inputs.reduce((acc, cur) => {
    if (cur === "ENTER") {
      acc.push(new Array());
    } else {
      acc[acc.length - 1].push(cur);
    }
    return acc;
  }, new Array());

  userGroups.forEach((group) => {
    const set = new Set(group);
    answer += set.size;
  });

  console.log(answer);
}
