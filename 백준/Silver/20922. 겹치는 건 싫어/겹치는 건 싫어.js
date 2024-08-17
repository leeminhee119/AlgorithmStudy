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
  const [N, K] = lines[0].split(" ").map(Number);
  const numbers = lines[1].split(" ").map(Number);

  // 연속 부분 수열
  // 단, 같은 원소가 K개 이하

  // 오른쪽 포인터를 조건 만족하는 한 계속 이동
  // 조건 불충족 시 충족할 때까지 왼쪽 포인터 이동 후,
  // 다시 오른쪽 포인터를 조건 만족하는 한 계속 이동하며 최대 길이 갱신
  // 투 포인터

  const cntMap = numbers.reduce((acc, cur) => {
    acc[cur] = 0;
    return acc;
  }, new Array());

  let start = 0;
  let end = 0;
  let maxLength = 0;
  while (end < N) {
    if (cntMap[numbers[end]] < K) {
      cntMap[numbers[end]]++;
      end++;
    } else {
      cntMap[numbers[start]]--;
      start++;
    }
    maxLength = Math.max(maxLength, end - start);
  }
  console.log(maxLength);
}
