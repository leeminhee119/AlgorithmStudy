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
  const [N, M] = input[0].split(" ").map(Number);
  const numbers = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const sequences = [];
  function backtrack(seq) {
    if (seq.length === M) {
      const str = seq.join(" ");
      if (!sequences.includes(str)) {
        sequences.push(str);
      }
      return;
    }

    for (let i = 0; i < numbers.length; i++) {
      if (seq[seq.length - 1] > numbers[i]) {
        continue;
      }
      seq.push(numbers[i]);
      backtrack(seq);
      seq.pop();
    }
  }

  backtrack([]);
  console.log(sequences.join("\n"));
}
