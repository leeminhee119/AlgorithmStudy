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
  const [N, K] = lines[0].split(" ").map(Number);
  const infos = lines.slice(1).map((line) => line.split(" ").map(Number));
  infos.sort((a, b) => b[3] - a[3]);
  infos.sort((a, b) => b[2] - a[2]);
  infos.sort((a, b) => b[1] - a[1]);
  const index = infos.findIndex(([countryNo, , ,]) => countryNo === K);
  let countEqual = 0;
  for (let i = index - 1; i >= 0; i--) {
    if (
      infos[i][1] !== infos[index][1] ||
      infos[i][2] !== infos[index][2] ||
      infos[i][3] !== infos[index][3]
    ) {
      break;
    }
    countEqual++;
  }
  console.log(index + 1 - countEqual);
}
