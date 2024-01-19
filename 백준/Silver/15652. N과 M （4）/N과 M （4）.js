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
  const sequences = [];
  function backtrack(seq) {
    if (seq.length === M) {
      sequences.push([...seq]);
      return;
    }
    for (let i = 1; i <= N; i++) {
      if (seq[seq.length - 1] > i) {
        continue;
      }
      seq.push(i);
      backtrack(seq);
      seq.pop();
    }
  }
  backtrack([]);
  console.log(sequences.map((seq) => seq.join(" ")).join("\n"));
}
