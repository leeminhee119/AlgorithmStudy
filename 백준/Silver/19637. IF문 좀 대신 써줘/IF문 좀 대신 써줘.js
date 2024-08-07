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
  function binarySearch(target, startIdx, endIdx, powerName) {
    if (startIdx > endIdx) return powerName;

    const midIdx = Math.floor((startIdx + endIdx) / 2);

    const newPowerName = titles[midIdx];
    const newPower = standards[midIdx];

    if (target === newPower) return newPowerName;
    if (target < newPower) {
      return binarySearch(target, startIdx, midIdx - 1, newPowerName);
    } else {
      return binarySearch(target, midIdx + 1, endIdx, powerName);
    }
  }
  const [N, M] = lines[0].split(" ").map(Number);
  const titles = [];
  const standards = [];
  for (let i = 0; i < N; i++) {
    const [curTitle, curStandard] = lines[1 + i].split(" ");
    if (standards[standards.length - 1] !== +curStandard) {
      standards.push(+curStandard);
      titles.push(curTitle);
    }
  }

  const cntStandards = standards.length;
  const powers = lines.slice(1 + N).map(Number);
  const limits = [];
  powers.forEach((power) => {
    const limit = binarySearch(
      power,
      0,
      cntStandards - 1,
      titles[cntStandards - 1]
    );
    limits.push(limit);
  });
  console.log(limits.join("\n"));
}
