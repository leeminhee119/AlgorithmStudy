const fs = require("fs");
const path = "dev/stdin";

const readline = require("readline").createInterface({
  input: fs.createReadStream(path),
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line);
    if (input.length === 3) {
      readline.close();
    }
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

function solution(input) {
  const [N, K] = input[0].split(" ").map(Number);
  let sArr = input[1].split(" ").map(Number);
  const dArr = input[2].split(" ").map(Number);
  const pArr = [];

  for (let i = 0; i < K; i++) {
    sArr.forEach((num, idx) => {
      pArr[dArr[idx] - 1] = num;
    });
    sArr = [...pArr];
  }
  console.log(sArr.join(" "));
}
