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
  const answer = [];
  const str = input[0];
  const bombStr = input[1];
  let idx = 0;
  for (let i = 0; i < str.length; i++) {
    if (bombStr[bombStr.length - 1] !== str[i]) {
      answer.push(str[i]);
      idx++;
      continue;
    }
    let isEqual = true;
    const temp = [];
    for (let j = bombStr.length - 2; j >= 0; j--) {
      const char = answer.pop();
      temp.push(char);
      if (bombStr[j] !== char) {
        isEqual = false;
        break;
      }
    }
    if (!isEqual) {
      while (temp.length) {
        answer.push(temp.pop());
      }
      answer.push(str[i]);
    }
  }
  console.log(answer.length ? answer.join("") : "FRULA");
}
