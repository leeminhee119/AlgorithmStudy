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
  const strings = lines.slice(1).map((line) => line.split(""));
  strings.forEach((string) => {
    let answer = false;
    const stack = [];
    string.forEach((char) => {
      if (char === "(") {
        stack.push(char);
      } else {
        const top = stack[stack.length - 1];
        if (top === "(") {
          stack.pop();
        } else {
          stack.push(char);
        }
      }
    });
    console.log(stack.length ? "NO" : "YES");
  });
}
