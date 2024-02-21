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
  const N = input[0];
  const words = input.slice(1);
  let count = 0;
  words.forEach((word) => {
    const stack = [];
    for (let i = 0; i < word.length; i++) {
      if (!stack.length) {
        stack.push(word[i]);
        continue;
      }
      if (stack[stack.length - 1] !== word[i]) {
        stack.push(word[i])
      } else {
        stack.pop();
      }
    }
    if (stack.length === 0) {
      count++;
    }
  })
  console.log(count)
}