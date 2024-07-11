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
  const states = lines[1].split(" ").map(Number);
  states.unshift(undefined);
  const S = +lines[2];
  const students = lines.slice(3).map((line) => line.split(" ").map(Number));

  function toggle(i) {
    states[i] = states[i] === 0 ? 1 : 0;
  }

  students.forEach(([sex, num]) => {
    if (sex === 1) {
      for (let i = 1; i * num <= N; i++) {
        toggle(num * i);
      }
    } else {
      let cnt = 0;
      for (let i = 1; num - i >= 1 && num - i <= N; i++) {
        if (states[num - i] !== states[num + i]) {
          break;
        }
        cnt = i;
      }
      for (let j = num - cnt; j <= num + cnt; j++) {
        toggle(j);
      }
    }
  });

  const answerLines = states
    .reduce((acc, state, index) => {
      if (index === 0) return acc;
      if ((index - 1) % 20 === 0) {
        acc.push(state);
      } else {
        acc[acc.length - 1] = acc[acc.length - 1] + " " + state;
      }
      return acc;
    }, [])
    .join("\n");

  console.log(answerLines);
}
