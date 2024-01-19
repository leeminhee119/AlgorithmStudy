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
  const sequences = new Array();
  function dfs(sequence) {
    if (sequence.length === M) {
      sequences.push([...sequence]);
      return;
    }
    for (let i = 1; i <= N; i++) {
      if (!sequence.includes(i)) {
        sequence.push(i);
        dfs(sequence);
        sequence.pop();
      }
    }
  }
  dfs([]);
  console.log(sequences.map((seq) => seq.join(" ")).join("\n"));
}
