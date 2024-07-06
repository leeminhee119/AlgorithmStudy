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
  const infos = lines.slice(1).map((line) => line.split(" ").map(Number));
  const orders = [];
  infos.forEach(([w, h], index) => {
    let cntBigger = 0;
    for (let i = 0; i < N; i++) {
      if (i === index) continue;
      if (infos[i][0] > w && infos[i][1] > h) {
        cntBigger++;
      }
    }
    orders.push(cntBigger + 1);
  });
  console.log(orders.join(" "));
}
