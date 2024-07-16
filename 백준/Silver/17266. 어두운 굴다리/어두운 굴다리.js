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
  const M = +lines[1];
  const positions = lines[2].split(" ").map(Number);

  const minHeight = Math.max(positions[0] - 0, N - positions[M - 1]);
  const isLightened = new Array(N - 1).fill(false);
  positions.forEach((pos) => {
    const [start, end] = [pos - minHeight, pos + minHeight];
    for (let i = Math.max(start, 0); i < Math.min(end, N); i++) {
      isLightened[i] = true;
    }
  });

  let maxDist = 0;
  let curDist = 0;
  for (let i = 0; i < N; i++) {
    if (!isLightened[i]) {
      curDist++;
    } else {
      maxDist = Math.max(maxDist, curDist);
      curDist = 0;
    }
  }

  console.log(maxDist > 0 ? minHeight + Math.ceil(maxDist / 2) : minHeight);
}
