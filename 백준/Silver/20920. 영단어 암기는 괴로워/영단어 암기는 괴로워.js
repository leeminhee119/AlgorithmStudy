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
  const [N, M] = lines[0].split(" ").map(Number);
  const words = lines.slice(1).filter((word) => word.length >= M);
  words.sort();
  words.sort((a, b) => b.length - a.length);
  const cntWords = words.reduce((hash, word) => {
    if (hash[word]) {
      hash[word]++;
    } else {
      hash[word] = 1;
    }
    return hash;
  }, {});
  words.sort((a, b) => cntWords[b] - cntWords[a]);

  console.log([...new Set(words)].join("\n"));
}
