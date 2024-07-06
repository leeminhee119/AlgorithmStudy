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
    const n = +lines[0];
    const arr = lines.slice(1);
    solution(n, arr);
    process.exit();
  });

function solution(n, arr) {
    const testcases = arr.map((line) => line.split(' ').map(Number));
testcases.forEach((testcase) => {
    const T = testcase[0];
    const heights = testcase.slice(1);
    const line = [];
    const totalCnt = heights.reduce((acc, curHeight) => {
        const taller = line.findIndex((height) => curHeight < height);
        const cnt = taller === -1 ? 0 : line.length - taller;
        if (taller === -1) {
            line.push(curHeight);
        } else {
            line.splice(taller, 0, curHeight);
        }
        return acc + cnt;
    }, 0)
    console.log(T, totalCnt);
})
}
