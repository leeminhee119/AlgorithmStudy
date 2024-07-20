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
  // 최대한 모두 충족시키면서
  // 최소한의 예산 사용
  const N = +lines[0];
  const budgets = lines[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const M = +lines[2];

  function getTotalBudget(limit) {
    let cntOverRegions = 0;
    return [
      budgets.reduce((acc, cur) => {
        if (cur > limit) {
          cntOverRegions++;
          return acc + limit;
        }
        return acc + cur;
      }),
      cntOverRegions,
    ];
  }
  // 각 예산을 기준으로 햇을 때, 전체 예산을 벗어나지 않는 선에서 가장 큰 예산.
  let budgetPerRegion;
  for (let i = 0; i < budgets.length; i++) {
    const [totalBudget] = getTotalBudget(budgets[i]);
    if (totalBudget > M) {
      break;
    }
    budgetPerRegion = budgets[i];
  }

  if (!budgetPerRegion) {
    console.log(Math.floor(M / N));
    return;
  }

  // 485 - (110 + 120 * 3) = 15
  const [totalBudget, cntOverRegions] = getTotalBudget(budgetPerRegion);
  const leftBudget = M - totalBudget;

  console.log(
    cntOverRegions === 0
      ? budgetPerRegion
      : Math.floor(leftBudget / cntOverRegions) + budgetPerRegion
  );
}
