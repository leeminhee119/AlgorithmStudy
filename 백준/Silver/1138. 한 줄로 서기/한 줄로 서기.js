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
  const cntTaller = lines[1].split(" ").map(Number);
  const heights = Array.from({ length: N }, (_, i) => i);

  // 자신의 왼쪽에 더 큰 사람이 몇 명인지
  // 1, 2, 3, 4 -> 0, 0, 0, 0
  // 2, 1, 3, 4 -> 1, 0, 0, 0 (1이 왼쪽에 1칸)
  // 2, 3, 1, 4 -> 2, 0, 0, 0 (1이 왼쪽에 2칸)
  // 3, 2, 1, 4 -> 2, 1, 0, 0 (2가 왼쪽에 1칸, 1이 왼쪽에 2칸)

  // 2, 1, 1, 0 <- 1이 왼쪽에 빈칸 2칸, 2가 왼쪽에 빈칸 1칸, 3이 왼쪽에 빈칸 1칸

  const line = new Array(N);
  cntTaller.forEach((cnt, index) => {
    const height = index + 1;
    let cntEmpty = 0;
    for (let i = 0; i < N; i++) {
      if (cntEmpty === cnt && line[i] === undefined) {
        line[i] = height;
        break;
      } else if (line[i] === undefined) {
        cntEmpty++;
      }
    }
  });
  console.log(line.join(" "));
}
