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
  // 5차 - 에르디 노바: 행동 불가, 재사용 대기 100초, 90초 면역
  // 6차 - 오리진 스킬: 절대 행동 불가, 재사용 대기 360초, 90초 면역
  const [N, M] = lines[0].split(" ").map(Number);
  const erdiTimes = lines[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const originTimes = lines[2]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let curErdiTime = erdiTimes[0];
  const cntErdi = erdiTimes.reduce((acc, time) => {
    if (time - curErdiTime < 100) {
      return acc;
    }
    curErdiTime = time;
    return acc + 1;
  }, 1);

  let curOriginTime = originTimes[0];
  const cntOrigin = originTimes.reduce((acc, time) => {
    if (time - curOriginTime < 360) {
      return acc;
    }
    curOriginTime = time;
    return acc + 1;
  }, 1);

  console.log(cntErdi, cntOrigin);
}
