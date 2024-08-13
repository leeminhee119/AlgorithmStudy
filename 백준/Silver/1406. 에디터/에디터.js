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
  const str = lines[0];
  const N = str.length; // 문자열의 길이 100,000
  const M = +lines[1]; // 명령어의 개수 (commands.length) 500,000
  const commands = lines.slice(2);

  // 정방향의 스택 하나, 역방향의 스택 하나 (마지막에 거꾸로 붙이면 된다.)
  // 왼쪽의 스택의 길이가 곧 커서의 위치

  const leftStack = [...str];
  const rightStack = [];

  commands.forEach((command) => {
    switch (command[0]) {
      case "L":
        if (leftStack.length === 0) return;
        const left = leftStack.pop();
        rightStack.push(left);
        return;
      case "D":
        if (rightStack.length === 0) return;
        const right = rightStack.pop();
        leftStack.push(right);
        return;
      case "B":
        if (leftStack.length === 0) return;
        leftStack.pop();
        return;
      case "P":
        leftStack.push(command[2]);
        return;
    }
  });

  console.log(leftStack.join("") + rightStack.reverse().join(""));
}
