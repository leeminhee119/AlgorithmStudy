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
      sequences.push([...seq]);
      return;
    }
    for (let i = 0; i < numbers.length; i++) {
      const cur = numbers[i];
      if (seq.includes(cur)) {
        continue;
      }
      seq.push(cur);
      backtrack(seq);
      seq.pop();
    }
    return;
  }

  backtrack([]);
  console.log(sequences.map((seq) => seq.join(" ")).join("\n"));
}
