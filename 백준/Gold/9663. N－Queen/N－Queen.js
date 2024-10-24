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
  const n = +lines[0];
  // 행마다 하나씩

  // 열만 저장
  const occ = new Array(n);

  let answer = 0;

  function backtrack(x) {
    if (x === n) {
      answer++;
      return;
    }
    for (let i = 0; i < n; i++) {
      occ[x] = i;
      if (!promising(x)) continue;
      backtrack(x + 1);
    }
  }

  function promising(x) {
    // 위의 행들을 체크해서 x행에 둬도 되는지 확인 (경로 안 겹치는지)
    for (let i = 0; i < x; i++) {
      if (occ[x] === occ[i] || x - i === Math.abs(occ[i] - occ[x])) {
        return false;
      }
    }
    return true;
  }

  backtrack(0);
  console.log(answer);
}
