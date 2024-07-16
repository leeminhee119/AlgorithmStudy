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
  const N = +lines[0];
  const distances = lines[1].split(" ").map(BigInt);
  const prices = lines[2].split(" ").map(BigInt);

  // 1km당 1리터가 필요
  // 최소 distance만큼의 기름이 필요

  function getMinCost(curIdx, curCost) {
    let nextIdx = curIdx + 1n;
    let nextDistance = distances[curIdx];
    // (더 싸거나 같은 주유소 이전까지의 거리), (현재 남아있는 기름)을 비교하여 다음 목적지 구하기
    while (nextIdx < N - 1 && prices[nextIdx] > prices[curIdx]) {
      nextDistance += distances[nextIdx++];
    }

    // 더 싼 주유소가 앞에 없다면 남은 거리까지 부족한 만큼 전부 충전
    if (nextIdx >= N - 1) {
      return curCost + nextDistance * prices[curIdx];
    }

    // 더 싼 주유소로 '바로' 이동, 계속 비교
    return getMinCost(nextIdx, curCost + nextDistance * prices[curIdx]);
  }

  console.log(getMinCost(0n, 0n).toString());
}
