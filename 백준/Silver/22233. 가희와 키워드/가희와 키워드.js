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
  const keywords = lines.slice(1, N + 1);
  const posts = lines.slice(N + 1).map((line) => line.split(","));

  const keywordsMap = new Map();
  keywords.forEach((keyword) => {
    keywordsMap.set(keyword, true);
  });

  let countRemaining = N;
  const counts = [];
  posts.forEach((usedKeywords) => {
    usedKeywords.forEach((keyword) => {
      if (keywordsMap.get(keyword)) {
        countRemaining--;
        keywordsMap.set(keyword, false);
      }
    });
    counts.push(countRemaining);
  });
  console.log(counts.join("\n"));
}
