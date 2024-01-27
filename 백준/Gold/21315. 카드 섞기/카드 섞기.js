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
  const N = Number(input[0]);
  const result = input[1].split(" ").map(Number);
  const origin = Array.from({ length: N }, (_, i) => i + 1);

  function shuffle(arr, k) {
    const newArr = [...arr];
    if (k === 0) {
      return [arr[1], arr[0]];
    }
    const result = [];
    const temp = [];
    for (let i = 0; i < 2 ** k; i++) {
      const target = newArr.pop();
      temp.unshift(target);
    }
    while (newArr.length) {
      const front = newArr.pop();
      result.unshift(front);
    }
    const sm = shuffle(temp, k - 1);
    while (sm.length) {
      const target = sm.pop();
      result.unshift(target);
    }
    return result;
  }

  for (let k1 = 1; k1 <= 9; k1++) {
    for (let k2 = 1; k2 <= 9; k2++) {
      const copied = [...origin];
      const new1 = shuffle(copied, k1);
      const new2 = shuffle(new1, k2);
      if (new2.every((number, index) => number === result[index])) {
        console.log(k1, k2);
        return;
      }
    }
  }
}
