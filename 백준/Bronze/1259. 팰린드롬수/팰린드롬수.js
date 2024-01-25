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
  input.pop();
  for (let i = 0; i < input.length; i++) {
    const reversed = input[i].split("").reverse().join("");
    console.log(reversed === input[i] ? "yes" : "no");
  }
}
