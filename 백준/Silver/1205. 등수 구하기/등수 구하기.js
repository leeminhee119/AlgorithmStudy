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
  const [N, newScore, P] = lines[0].split(" ").map(Number);

  // N이 0이라면 무조건 1이다.
  if (N === 0) {
    console.log(1);
    return;
  }

  const sortedScores = lines[1].split(" ").map(Number);

  // 점수들 개수가 P이상이고, newScore가 가장 낮거나 같다면 -1
  if (N >= P && newScore <= sortedScores[N - 1]) {
    console.log(-1);
    return;
  }

  // 점수들이 newScore 이상이라면 continue하며 자리를 찾는다.
  let index = 0;
  for (let i = 0; i < N; i++) {
    if (sortedScores[i] >= newScore) {
      index++;
      continue;
    }
    break;
  }

  // 만약 이전 순서 점수가 동일하다면, 자기 자리에서 동일한 개수만큼 빼야 등수다.
  if (sortedScores[index - 1] === newScore) {
    const startIdx = sortedScores.indexOf(newScore);
    const countSame = index - startIdx;
    index -= countSame;
  }
  console.log(index + 1);
}
