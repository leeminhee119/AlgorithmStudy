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
  const S = [...lines[0]].map(Number);

  // 0 절반, 1 절반 제거한 문자열 S'

  const cntChars = S.reduce(
    (acc, cur) => {
      acc[cur]++;
      return acc;
    },
    [0, 0]
  );

  // 1은 앞에서부터 지운다
  // 0은 뒤에서부터 지운다
  const validS = new Array(S.length).fill(true);
  let cnt0 = cntChars[0];
  let cnt1 = cntChars[1];
  for (let i = 0; i < S.length; i++) {
    if (cntChars[1] / 2 < cnt1 && S[i] === 1) {
      validS[i] = false;
      cnt1--;
    }
  }
  for (let i = S.length - 1; i >= 0; i--) {
    if (cntChars[0] / 2 < cnt0 && S[i] === 0) {
      validS[i] = false;
      cnt0--;
    }
  }

  console.log(S.filter((_, i) => validS[i]).join(""));
}
