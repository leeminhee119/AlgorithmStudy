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
  function backtrack(seq, visited) {
    if (seq.length === M) {
      const str = seq.join(" ");
      if (!sequences.includes(str)) {
        sequences.push(str);
      }
      return;
    }
    for (let i = 0; i < numbers.length; i++) {
      if (visited.includes(i)) {
        continue;
      }
      seq.push(numbers[i]);
      visited.push(i);
      backtrack(seq, visited);
      seq.pop();
      visited.pop();
    }
    return;
  }
  backtrack([], []);
  console.log(sequences.join("\n"));
}
