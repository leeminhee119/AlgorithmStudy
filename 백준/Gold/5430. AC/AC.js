const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

function solution(input) {
  const T = Number(input[0]);
  for (let i = 1; i < 3 * T; i += 3) {
    const p = input[i].split("");
    const n = input[i + 1];
    const numbers =
      n > 0 ? input[i + 2].slice(1, -1).split(",").map(Number) : [];
    let isReversed = false;
    let isError = false;
    let startIdx = 0;
    let endIdx = numbers.length - 1;
    for (let j = 0; j < p.length; j++) {
      const command = p[j];
      if (command === "R") {
        isReversed = !isReversed;
      } else {
        if (endIdx < startIdx) {
          isError = true;
          break;
        }
        if (isReversed) {
          endIdx--;
        } else {
          startIdx++;
        }
      }
    }
    if (isError) {
      console.log("error");
    } else {
      if (isReversed) {
        console.log(
          "[" +
            numbers
              .slice(startIdx, endIdx + 1)
              .reverse()
              .join(",") +
            "]"
        );
      } else {
        console.log("[" + numbers.slice(startIdx, endIdx + 1).join(",") + "]");
      }
    }
  }
}
