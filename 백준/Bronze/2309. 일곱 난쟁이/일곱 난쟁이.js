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
  const heights = lines.map(Number);

  const getCombinations = (arr, r) => {
    const results = [];
    if (r === 1) {
      return arr.map((el) => [el]);
    }
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combs = getCombinations(rest, r - 1);
      const attached = combs.map((el) => [fixed, ...el]);
      results.push(...attached);
    });
    return results;
  };

  const totalHeight = heights.reduce((acc, cur) => acc + cur, 0);
  const combs = getCombinations(heights, 2);
  const nonDwarfIdxs = [];
  for (let i = 0; i < combs.length; i++) {
    const comb = combs[i];
    if (comb[0] + comb[1] === totalHeight - 100) {
      const idx0 = heights.indexOf(comb[0]);
      const idx1 = heights.indexOf(comb[1]);
      nonDwarfIdxs.push(idx0);
      nonDwarfIdxs.push(idx1);
      break;
    }
  }

  heights
    .filter((_, i) => !nonDwarfIdxs.includes(i))
    .sort((a, b) => a - b)
    .forEach((height) => {
      console.log(height);
    });
}
